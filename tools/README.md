# tools/

The site is hand-written static HTML served straight from the repository by
GitHub Pages. There is no framework and no build step for the English pages —
what is in the repo is what ships. These scripts generate the few things that
would otherwise be copied by hand, and CI fails if their output is stale.

| Script | What it does | When to run |
| --- | --- | --- |
| `build-de.mjs` | Writes the German pages under `de/` by applying the dictionary in `executive/i18n.js` to the English sources. | After editing any English page listed in its `PAGES`, or any German string. |
| `build-feed.mjs` | Writes `feed.xml` (Atom) from the `citation_*` metadata in `papers/*.html`, dated from the `<lastmod>` in `sitemap.xml`. | After adding a paper page or bumping its `lastmod`. |
| `build-fonts.sh` | Downloads JetBrains Mono and Inter from their upstream releases and subsets them into `assets/fonts/`. | Only when the character set or font version changes. |
| `check-links.mjs` | Verifies every internal `href`/`src` resolves to a real file. | Any time; CI runs it on every push. |
| `list-glyphs.py` | Lists non-ASCII characters used on the site, for the subset list in `build-fonts.sh`. | Before regenerating fonts. |

```bash
node tools/build-de.mjs        # regenerate de/
node tools/build-feed.mjs      # regenerate feed.xml
node tools/check-links.mjs     # verify internal links
```

Both generators take `--check`, which verifies the committed output matches the
sources and exits non-zero otherwise. That is what CI runs.

## Language

German is a build artifact, not a runtime feature. Each language has its own
URL (`/executive/profile.html` ↔ `/de/executive/profile.html`), the pair is
declared with `hreflang` in both directions, and the EN/DE control is two links
rather than a JavaScript toggle — so search engines can index the German text
and a visitor can share a German URL.

`executive/i18n.js` no longer translates anything in the browser. It is kept as
the dictionary (build input) plus a small `window.EX_I18N` export that
`executive.js` consults for the handful of strings it generates at runtime.

## Headers and CSP

GitHub Pages cannot send custom response headers, so the Content-Security-Policy
is delivered as a `<meta http-equiv>` in each page. That covers source
restrictions, but three things are only possible as real headers:

- `frame-ancestors` (clickjacking) — `X-Frame-Options` is likewise header-only
- `Strict-Transport-Security` — Fastly already sends one for `*.github.io`
- `X-Content-Type-Options: nosniff`

Getting those means putting a proxy in front of the domain (Cloudflare's free
tier with a Transform Rule, or moving to Cloudflare Pages, where a `_headers`
file works — the repo had one that GitHub Pages silently ignored).

## Fonts

JetBrains Mono and Inter are self-hosted from `assets/fonts/`, not loaded from
Google. Both are variable fonts covering the full weight axis, which is what
lets the CSS use intermediate weights like 550 and 650. Nothing on the site may
reference `fonts.googleapis.com` or `fonts.gstatic.com`; CI greps for that.
