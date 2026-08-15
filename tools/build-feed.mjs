#!/usr/bin/env node
/* Generate /feed.xml (Atom 1.0) from the paper pages in papers/.
 *
 * Every entry is built from the citation_* metadata already in each page, so
 * the feed cannot describe a paper differently from the page it points at.
 *
 *   node tools/build-feed.mjs           write feed.xml
 *   node tools/build-feed.mjs --check   fail if feed.xml is stale (used by CI)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const SITE = 'https://minh.systems';

const esc = s => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const decode = s => s
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

const pick = (src, re) => {
  const m = src.match(re);
  return m ? decode(m[1]) : null;
};

/* When the page last changed — a real date, unlike the year-only citation
   metadata, and the honest answer to "what is new in this feed". */
function lastModified(relPath) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relPath],
      { cwd: ROOT, encoding: 'utf8' }).trim();
    if (out) return new Date(out).toISOString();
  } catch { /* not a git checkout — fall through */ }
  return new Date(0).toISOString();
}

const entries = readdirSync(join(ROOT, 'papers'))
  .filter(f => f.endsWith('.html'))
  .map(file => {
    const rel = `papers/${file}`;
    const src = readFileSync(join(ROOT, rel), 'utf8');
    const title = pick(src, /<meta name="citation_title" content="([^"]*)"/);
    if (!title) return null;
    return {
      url: `${SITE}/${rel}`,
      title,
      year: pick(src, /<meta name="citation_publication_date" content="([^"]*)"/) || '',
      venue: pick(src, /<meta name="citation_journal_title" content="([^"]*)"/) || '',
      doi: pick(src, /<meta name="citation_doi" content="([^"]*)"/) || '',
      summary: pick(src, /<meta name="description" content="([^"]*)"/) || '',
      updated: lastModified(rel),
    };
  })
  .filter(Boolean)
  .sort((a, b) => (b.year || '').localeCompare(a.year || '') || a.title.localeCompare(b.title));

const updated = entries.reduce((a, e) => (e.updated > a ? e.updated : a), new Date(0).toISOString());

const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>minh.systems — research</title>
  <subtitle>Papers and preprints by Michél Nguyen: database systems, cybersecurity, systems security, and adjacent work.</subtitle>
  <link href="${SITE}/feed.xml" rel="self" type="application/atom+xml"/>
  <link href="${SITE}/research.html" rel="alternate" type="text/html"/>
  <id>${SITE}/</id>
  <updated>${updated}</updated>
  <author>
    <name>Michél Nguyen</name>
    <uri>${SITE}/</uri>
  </author>
  <rights>© 2026 Michél Nguyen</rights>
${entries.map(e => `  <entry>
    <title>${esc(e.title)}</title>
    <link href="${e.url}" rel="alternate" type="text/html"/>
    <id>${e.url}</id>
    <updated>${e.updated}</updated>
    <summary>${esc(e.summary)}</summary>
${e.venue ? `    <category term="${esc(e.venue)}"/>\n` : ''}${e.year ? `    <category term="${esc(e.year)}"/>\n` : ''}${e.doi ? `    <link href="https://doi.org/${esc(e.doi)}" rel="related" type="text/html"/>\n` : ''}  </entry>`).join('\n')}
</feed>
`;

const target = join(ROOT, 'feed.xml');
if (CHECK) {
  const current = existsSync(target) ? readFileSync(target, 'utf8') : null;
  if (current !== xml) {
    console.error('stale: feed.xml — run: node tools/build-feed.mjs');
    process.exit(1);
  }
  console.log('feed.xml is up to date');
} else {
  writeFileSync(target, xml);
  console.log(`feed.xml: ${entries.length} entries`);
}
