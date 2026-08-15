#!/usr/bin/env node
/* Prerender the German pages under /de/.
 *
 * The German layer used to run in the browser: i18n.js walked the DOM and
 * swapped exact English strings for German ones. That worked for visitors but
 * was invisible to search engines, which only ever saw the English HTML at a
 * single URL. This script applies the same transform at build time, so German
 * gets real URLs, real <title>s, and hreflang pairing.
 *
 * The dictionary in executive/i18n.js stays the single source of truth — it is
 * read from that file, never duplicated here.
 *
 *   node tools/build-de.mjs           write /de/
 *   node tools/build-de.mjs --check   fail if /de/ is stale (used by CI)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');

/* Pages that exist in both languages. Everything else (papers, showcases, the
   research index) is citation-heavy English and is deliberately not mirrored. */
const PAGES = [
  'index.html',
  'executive/profile.html',
  'executive/experience.html',
  'executive/projects.html',
  'executive/academic.html',
  'executive/publications.html',
  'executive/contact.html',
];
const TRANSLATED = new Set(PAGES.map(p => '/' + p));

const SITE = 'https://minh.systems';

/* ------------------------------------------------------- dictionary load */

/* Pull the two object literals out of i18n.js and evaluate them as JS, so the
   parser is V8 rather than a regex approximation of it. */
function loadDictionaries() {
  const src = readFileSync(join(ROOT, 'executive/i18n.js'), 'utf8');
  const grab = name => {
    const start = src.indexOf(`const ${name} = {`);
    if (start === -1) throw new Error(`${name} not found in executive/i18n.js`);
    const open = src.indexOf('{', start);
    let depth = 0, inStr = null, i = open;
    for (; i < src.length; i++) {
      const c = src[i];
      if (inStr) {
        if (c === '\\') i++;
        else if (c === inStr) inStr = null;
        continue;
      }
      if (c === "'" || c === '"' || c === '`') inStr = c;
      else if (c === '{') depth++;
      else if (c === '}' && --depth === 0) break;
    }
    return new Function(`return ${src.slice(open, i + 1)}`)();
  };
  return { DE: grab('DE'), PAGE_META: grab('PAGE_META') };
}

/* ------------------------------------------------------------- entities */

const NAMED = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: '—', ndash: '–', hellip: '…', rsquo: '’',
  lsquo: '‘', ldquo: '“', rdquo: '”', copy: '©',
  middot: '·', times: '×', deg: '°', euro: '€',
  laquo: '«', raquo: '»', shy: '­', reg: '®',
};

const decode = s => s.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (whole, body) => {
  if (body[0] === '#') {
    const code = body[1] === 'x' || body[1] === 'X'
      ? parseInt(body.slice(2), 16)
      : parseInt(body.slice(1), 10);
    return Number.isFinite(code) ? String.fromCodePoint(code) : whole;
  }
  return body in NAMED ? NAMED[body] : whole;
});

const encodeText = s => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/ /g, '&nbsp;');

const encodeAttr = s => encodeText(s).replace(/"/g, '&quot;');

/* ------------------------------------------------------ the HTML walker */

const NEVER_TRANSLATE = new Set(['script', 'style', 'svg']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr']);
const ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

/* Mirrors i18n.js: match on the trimmed text, then substitute inside the
   original run so surrounding whitespace survives untouched. */
function translateRun(raw, dict) {
  const text = decode(raw);
  const key = text.trim();
  if (!key || !(key in dict)) return raw;
  return encodeText(text.replace(key, dict[key]));
}

function translateTag(tag, dict) {
  if (/\sdata-i18n-skip[\s/>=]/.test(tag)) return tag;
  let out = tag;
  for (const attr of ATTRS) {
    out = out.replace(new RegExp(`(\\s${attr}=")([^"]*)(")`, 'i'), (whole, a, value, z) => {
      const hit = dict[decode(value).trim()];
      return hit ? a + encodeAttr(hit) + z : whole;
    });
  }
  return out;
}

function transform(html, dict) {
  let out = '';
  let i = 0;
  let skipDepth = 0;          // inside a subtree that must not be touched
  const stack = [];           // open elements, so we know when skipping ends

  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt === -1) {
      out += skipDepth ? html.slice(i) : translateRun(html.slice(i), dict);
      break;
    }
    const text = html.slice(i, lt);
    out += skipDepth ? text : translateRun(text, dict);

    // Comments, doctype and other bang-constructs pass through verbatim.
    if (html.startsWith('<!--', lt)) {
      const end = html.indexOf('-->', lt);
      const stop = end === -1 ? html.length : end + 3;
      out += html.slice(lt, stop);
      i = stop;
      continue;
    }
    if (html.startsWith('<!', lt)) {
      const end = html.indexOf('>', lt);
      const stop = end === -1 ? html.length : end + 1;
      out += html.slice(lt, stop);
      i = stop;
      continue;
    }

    // Scan to the tag's closing '>', ignoring any inside quoted attributes.
    let j = lt + 1, quote = null;
    for (; j < html.length; j++) {
      const c = html[j];
      if (quote) { if (c === quote) quote = null; continue; }
      if (c === '"' || c === "'") quote = c;
      else if (c === '>') break;
    }
    const tag = html.slice(lt, j + 1);
    i = j + 1;

    const closing = tag[1] === '/';
    const name = (tag.match(/^<\/?\s*([a-zA-Z][a-zA-Z0-9:-]*)/) || [, ''])[1].toLowerCase();

    if (closing) {
      // Unwind to the matching open tag; tolerate unclosed elements.
      for (let k = stack.length - 1; k >= 0; k--) {
        if (stack[k].name === name) {
          if (stack[k].skip) skipDepth--;
          stack.length = k;
          break;
        }
      }
      out += tag;
      continue;
    }

    out += skipDepth ? tag : translateTag(tag, dict);

    const selfClosing = /\/>$/.test(tag) || VOID.has(name);
    if (!selfClosing) {
      const skip = NEVER_TRANSLATE.has(name) || /\sdata-i18n-skip[\s/>=]/.test(tag);
      if (skip) skipDepth++;
      stack.push({ name, skip });
    }
  }
  return out;
}

/* --------------------------------------------------------- URL rewiring */

/* Every relative URL is resolved against the page it came from and emitted as a
   root-absolute path, so /de/ pages can link to English-only sections without a
   /de/ prefix leaking into them. */
function rewriteUrls(html, pagePath) {
  const dir = posix.dirname('/' + pagePath);
  return html.replace(/\b(href|src|action)="([^"]*)"/g, (whole, attr, url) => {
    if (!url || /^(https?:|mailto:|tel:|data:|javascript:|#|\/\/|\/)/i.test(url)) return whole;
    const [pathPart, tail = ''] = url.split(/(?=[?#])/s).length > 1
      ? [url.slice(0, url.search(/[?#]/)), url.slice(url.search(/[?#]/))]
      : [url, ''];
    const abs = posix.normalize(posix.join(dir, pathPart));
    let target = TRANSLATED.has(abs) ? '/de' + abs : abs;
    // Keep the home URL in one shape, matching its canonical.
    if (target === '/de/index.html') target = '/de/';
    return `${attr}="${target}${tail}"`;
  });
}

/* ------------------------------------------------------------ head work */

const enUrl = page => `${SITE}/${page === 'index.html' ? '' : page}`;
const deUrl = page => `${SITE}/de/${page === 'index.html' ? '' : page}`;

function replaceMeta(html, selectorAttr, name, value) {
  const re = new RegExp(`(<meta ${selectorAttr}="${name}" content=")([^"]*)(">)`);
  return re.test(html) ? html.replace(re, (w, a, _old, z) => a + encodeAttr(value) + z) : html;
}

function langLinks(page) {
  return [
    `<link rel="alternate" hreflang="en" href="${enUrl(page)}">`,
    `<link rel="alternate" hreflang="de" href="${deUrl(page)}">`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl(page)}">`,
  ].join('\n');
}

/* The language control is a pair of links, not a JS toggle: the language now
   lives in the URL, which is what hreflang needs and what a visitor can share.
   These stay root-relative so the site also works from a local server. */
const enPath = page => '/' + (page === 'index.html' ? '' : page);
const dePath = page => '/de/' + (page === 'index.html' ? '' : page);

function languageSwitcher(page, current) {
  const mark = lang => (lang === current ? ' aria-current="page"' : '');
  return '<div class="ex-lang" role="group" aria-label="Language / Sprache" data-i18n-skip>'
    + `<a href="${enPath(page)}" hreflang="en"${mark('en')}>EN</a>`
    + `<a href="${dePath(page)}" hreflang="de"${mark('de')}>DE</a>`
    + '</div>';
}

const SWITCHER_RE = /<div class="ex-lang"[^>]*>[\s\S]*?<\/div>/g;

function buildGerman(page, dict, meta) {
  const source = readFileSync(join(ROOT, page), 'utf8');
  let html = transform(source, dict);
  html = rewriteUrls(html, page);

  html = html.replace(/<html lang="en"/, '<html lang="de" data-i18n-prerendered="de"');
  html = html.replace(SWITCHER_RE, () => languageSwitcher(page, 'de'));

  const info = meta[posix.basename(page)];
  if (info) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${encodeText(info.title)}</title>`);
    html = replaceMeta(html, 'name', 'description', info.description);
    html = replaceMeta(html, 'property', 'og:title', info.title);
    html = replaceMeta(html, 'property', 'og:description', info.description);
    html = replaceMeta(html, 'name', 'twitter:title', info.title);
    html = replaceMeta(html, 'name', 'twitter:description', info.description);
  }
  html = replaceMeta(html, 'property', 'og:url', deUrl(page));

  // Point the page's own structured data at its German URL.
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, block =>
    block
      .split(`"${enUrl(page)}"`).join(`"${deUrl(page)}"`)
      .replace(/"inLanguage": "en"/g, '"inLanguage": "de"'));
  // The English page carries its own hreflang set; drop it before writing ours.
  html = html.replace(/\n?[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, '');
  html = html.replace(/<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${deUrl(page)}">\n${langLinks(page)}`);

  return html;
}

/* ------------------------------------------------------------------ run */

const { DE, PAGE_META } = loadDictionaries();
let stale = 0;

for (const page of PAGES) {
  const html = buildGerman(page, DE, PAGE_META);
  const target = join(ROOT, 'de', page);
  const current = existsSync(target) ? readFileSync(target, 'utf8') : null;

  if (CHECK) {
    if (current !== html) {
      console.error(`stale: de/${page}`);
      stale++;
    }
    continue;
  }

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  const translated = html !== readFileSync(join(ROOT, page), 'utf8');
  console.log(`de/${page.padEnd(30)} ${(html.length / 1024).toFixed(0)} KB${translated ? '' : '  (nothing translated?)'}`);
}

if (CHECK) {
  if (stale) {
    console.error(`\n${stale} German page(s) out of date — run: node tools/build-de.mjs`);
    process.exit(1);
  }
  console.log('de/ is up to date');
}
