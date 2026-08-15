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

/* Entry dates come from the <lastmod> the sitemap already declares for each
   paper. Deriving them from `git log` instead looked appealing but is unstable:
   committing a paper page changes its commit date, so the feed went stale the
   moment it was committed — and any unrelated edit, like adding a footer link,
   would have republished every entry. The sitemap is committed data, so the
   same input always produces the same feed. */
function lastModifiedFromSitemap() {
  const xml = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
  const dates = new Map();
  for (const [, loc, lastmod] of xml.matchAll(
    /<loc>([^<]*\/papers\/[^<]*)<\/loc>\s*<lastmod>([^<]*)<\/lastmod>/g)) {
    dates.set(loc.split('/').pop(), `${lastmod}T00:00:00Z`);
  }
  return dates;
}

const modified = lastModifiedFromSitemap();

const entries = readdirSync(join(ROOT, 'papers'))
  .filter(f => f.endsWith('.html'))
  .sort()
  .map(file => {
    const rel = `papers/${file}`;
    const src = readFileSync(join(ROOT, rel), 'utf8');
    const title = pick(src, /<meta name="citation_title" content="([^"]*)"/);
    if (!title) return null;
    const year = pick(src, /<meta name="citation_publication_date" content="([^"]*)"/) || '';
    return {
      url: `${SITE}/${rel}`,
      title,
      year,
      venue: pick(src, /<meta name="citation_journal_title" content="([^"]*)"/) || '',
      doi: pick(src, /<meta name="citation_doi" content="([^"]*)"/) || '',
      summary: pick(src, /<meta name="description" content="([^"]*)"/) || '',
      // Falls back to the publication year when the sitemap has no entry yet.
      updated: modified.get(file) || `${year || '1970'}-01-01T00:00:00Z`,
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
