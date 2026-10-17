# QA report — 2026-10-17

## Run and passed

| Check | Result |
|---|---|
| `node tools/build-de.mjs --check` | `/de/` matches its sources |
| `node tools/build-feed.mjs --check` | feed up to date |
| `node tools/check-facts.mjs` (new, also in CI) | facts consistent across 40 files |
| `node tools/check-links.mjs` | 895 internal references in 40 pages resolve |
| No Google Fonts / ad references | clean |
| `hreflang` pairs on `/` and `/de/` | present on both |
| Browser, 390 px, `/` | no horizontal scroll (scrollWidth 390) |
| Browser, 1440 px, `/de/` | German H1, title and lead render; operator view shows the "English only" note |
| Browser, `/de/executive/projects.html` | German H1, featured block, filters "Alle · 22 … Spiele · 6", count "22 Projekte" |
| Browser, `/executive/projects.html` | games filter shows 6 |

## Not run

These were asked for in the brief and were **not** done in this pass, so none of them counts as passed:

- Playwright screenshot sets at 390 and 1440 px for every page (only spot checks above).
- Axe and Lighthouse (not installed locally).
- html5validator (runs in CI on push, not locally).
- Contact form submission, keyboard-only walkthrough, real iOS Safari / Android Chrome.
- External link check (stores, releases, DOIs).

## Deliberately not changed

| Item | Why |
|---|---|
| €40M+, +15 %, +€600K, 16 specialists, 25/350 | Owner-stated figures; wording improved, numbers kept until confirmed (`UNVERIFIED_CLAIMS.md` U01–U04) |
| B.A. First Class, President's List dates | Owner-stated; no document in the repo |
| KDU wording beyond the role title | Relationship unconfirmed (U06); no new claim either way |
| Privacy page and provider identification | Legal decision (L01–L04) |
| One-pager PDF content | Needs a new English recruiting PDF, not a text edit |
| Paper titles, abstracts, venues | Citations; not translated or reworded |
| Operator home copy in general | English-only by design; only claims and the weekly promise were fixed |
| Research short profiles (`showcase/research/`) | Already cautious, per the audit; only versions synced |
| Ringjahr / LancetLinen landing pages | Outside the main portfolio audit |
