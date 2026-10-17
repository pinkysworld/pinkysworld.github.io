#!/usr/bin/env node
// Guards the recurring facts listed in docs/editorial/CONTENT_FACTS.md. Each rule either
// forbids a stale value or pins every occurrence of a fact to one value, so
// a page edited by hand cannot drift from the rest of the site.
//
//   node tools/check-facts.mjs

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const roots = ['index.html', 'research.html', 'privacy.html', 'executive', 'showcase', 'de', 'papers'];

function walk(p, out = []) {
  const full = join(root, p);
  if (statSync(full).isDirectory()) {
    for (const f of readdirSync(full)) walk(join(p, f), out);
  } else if (/\.(html|js)$/.test(p)) out.push(p);
  return out;
}
const files = roots.flatMap((r) => walk(r));

// Stale values that must not come back.
const forbidden = [
  [/GPA\s*3[.,]96/i, 'GPA is 3.91'],
  [/currently enrolled/i, 'B.Sc. is completed'],
  [/(?:completed|abgeschlossen)[^.<]{0,20}(?:October|Oktober) 2026/i, 'B.Sc. completed August 2026'],
  [/[1-68]×\s*President/i, 'President’s List count is 7'],
  [/\b(?:six|sechs) President/i, 'President’s List count is 7'],
  [/fourteen (?:hardened )?research|\b14 research tracks/i, 'SkeinDB has 20 research tracks'],
  [/v?0\.3\.(?:2\d|3\d)\b(?![\d])/, 'SkeinDB release is v0.3.40'],
  [/v?1\.0\.30\b/, 'Wardex release is v1.1.0'],
  [/splunk/i, 'no unsupported competitor comparison'],
  [/\b17\s?B\b|17<span class="unit">b/, 'no unverified NexusFS proof size'],
  [/\beBPF\b(?! is not implemented)/i, 'Wardex does not implement eBPF'],
  [/active deployments/i, 'no unverified deployment claim'],
  [/teaching database engine that also runs production/i, 'no production claim for SkeinDB'],
  [/(?:Updated|shipping) weekly/i, 'no weekly-update promise'],
  [/Twenty projects, all public|Zwanzig Projekte, alle öffentlich/i, 'projects: 20 public + 2 in development'],
];

// Facts whose every occurrence must carry the same number.
const pinned = [
  [/(\d+)×\s*President/gi, '7'],
  [/GPA\s*(?:of\s*)?(3[.,]\d\d)/gi, ['3.91', '3,91']],
  [/data-project-filter="all"[^>]*>All · (\d+)/g, '22'],
  [/'All · (2\d)': 'Alle · (\d+)'/g, '22'],
  [/Games · (\d+)|Spiele · (\d+)/g, '6'],
  [/data-pfilter="all">all<span class="ct">(\d+)/g, '22'],
  [/data-pfilter="game">games<span class="ct">(\d+)/g, '6'],
];

const problems = [];
for (const f of files) {
  const text = readFileSync(join(root, f), 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    for (const [re, why] of forbidden) {
      if (re.test(line)) problems.push(`${f}:${i + 1}  ${why}  — ${line.trim().slice(0, 110)}`);
    }
    for (const [re, want] of pinned) {
      for (const m of line.matchAll(re)) {
        const got = m.slice(1).find((x) => x !== undefined);
        const ok = Array.isArray(want) ? want.includes(got) : got === want;
        if (!ok) problems.push(`${f}:${i + 1}  expected ${want}, found ${got}  — ${m[0]}`);
      }
    }
  });
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} fact check(s) failed. See docs/editorial/CONTENT_FACTS.md.`);
  process.exit(1);
}
console.log(`facts consistent across ${files.length} files`);
