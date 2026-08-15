#!/usr/bin/env node
/* Verify that every internal link and asset reference resolves to a real file.
 *
 * The site mixes relative paths, root-absolute paths and a generated /de/ tree,
 * which is exactly the situation where a link quietly rots. External links are
 * not touched here — those are reported (but not enforced) by lychee in CI.
 *
 *   node tools/check-links.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(join(dirname(fileURLToPath(import.meta.url)), '..'));
const SKIP_DIRS = new Set(['.git', 'node_modules', 'output', '.claude']);
const EXTERNAL = /^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') && entry.name !== '.well-known') continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const broken = [];
let checked = 0;

for (const file of walk(ROOT)) {
  const src = readFileSync(file, 'utf8');
  const pageDir = dirname(file);

  for (const [, attr, url] of src.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (EXTERNAL.test(url)) continue;
    if (url.includes('${')) continue;                 // JS template literal, not a link
    const path = url.split(/[?#]/)[0];
    if (!path) continue;
    checked++;

    let target = path.startsWith('/')
      ? join(ROOT, path)
      : resolve(pageDir, path);
    if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');

    if (!existsSync(decodeURIComponent(target))) {
      broken.push({
        page: relative(ROOT, file),
        attr,
        url,
        resolved: relative(ROOT, target),
      });
    }
  }
}

console.log(`${checked} internal references checked in ${walk(ROOT).length} pages`);

if (broken.length) {
  console.error(`\n${broken.length} broken:`);
  for (const b of broken) {
    console.error(`  ${b.page}  ${b.attr}="${b.url}"  ->  ${b.resolved}`);
  }
  process.exit(1);
}
console.log('all internal links resolve');
