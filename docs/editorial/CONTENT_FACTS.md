# Content facts

The recurring numbers and status lines on minh.systems, with where each one comes from.
`node tools/check-facts.mjs` (also run in CI) fails if a page drifts from these values.

Status: **verified** = checked against a primary source on the date given ·
**owner** = stated by Michél, no document in the repo · **open** = see `UNVERIFIED_CLAIMS.md` in this folder.

## Academic

| Fact | Value | Source | Status |
|---|---|---|---|
| B.Sc. Computer Science | completed August 2026, University of the People | Michél, 2026-10-16 | owner |
| GPA | 3.91 / 4.0 | Michél | owner |
| Honours | summa cum laude | Michél | owner |
| President's List | 7× — Nov 2024, Jan 2025, Sep 2025, Nov 2025, Jan 2026, Mar 2026, Aug 2026 | Michél, 2026-10-16 | owner |
| A.S. Computer Science | High Honors, University of the People | earlier site copy | owner |
| B.A. Business Administration | First Class, University of Hertfordshire | earlier site copy | open (year) |
| MPhil | research preparation, not enrolled | site copy | open (KDU relationship) |
| Certifications | 13 certifications + 1 course completion (Edureka AWS course) | list on `executive/academic.html` | owner |

## Portfolio

| Fact | Value | Source | Status |
|---|---|---|---|
| Projects | 22 total = 20 public + 2 in development (Germ Theory, Kontor) | project tables on `index.html` / `executive/projects.html` | verified 2026-10-17 |
| Games | 6 (4 released or announced, 2 in development) | same | verified 2026-10-17 |
| Publications | 12 = 4 journal articles + 8 preprints | `papers/`, ORCID | verified via `data-paper-total` |

## Research systems

| Fact | Value | Source | Status |
|---|---|---|---|
| SkeinDB release | v0.3.40 (2026-09-24) | GitHub release `pinkysworld/SkeinDB` | verified 2026-10-17 |
| SkeinDB tracks | 20 (R01–R18, R20 hardened; R19 prototype) | `docs/TRUE_STATUS_MATRIX.md` | verified 2026-10-17 |
| SkeinDB benchmarks | CAS replication wire bytes only (CR05, CR09, two-node CAS) | `eval/reports/` in the SkeinDB repo | verified 2026-10-17 |
| SkeinDB compatibility | MySQL broad, PostgreSQL partial — never "100 %" | `TRUE_STATUS_MATRIX.md` | verified |
| Wardex release | v1.1.0 (2026-09-27) | GitHub release `pinkysworld/Wardex`, `docs/STATUS.md` | verified 2026-10-17 |
| Wardex telemetry | 23 kernel event kinds; ETW, EndpointSecurity, netlink/fanotify; **no eBPF** | `docs/STATUS.md` | verified 2026-10-17 |
| Wardex benchmarks | none published | — | open |
| NexusFS | v0.1.0, prototype, milestones M0–M8 complete | `Cargo.toml`, README | verified 2026-10-17 |
| NexusFS benchmarks | none published | — | open |

## Professional results (owner-stated, no document in repo)

| Fact | Value | Role |
|---|---|---|
| Contract value won | €40M+ | Lead Deal Architect, Getronics Germany |
| Portfolio profitability | +15 % | Account & Service Delivery Manager, NSC Global |
| Additional monthly billing | +€600K; £3M monthly account base | NSC Global |
| Team led | 16 specialists, DE/AT/CH | Manager GIS D-A-CH |
| Infrastructure | 25 servers / 350 clients, four countries | ALTEC Solartechnik |
| Experience | 15+ years in IT | CV |

## Removed because they had no evidence

17-byte NexusFS proof size · "vs Splunk −82 %" · Wardex 68 ms / F1 0.94 / 1.8 % CPU / ε=2.0 tiles ·
SkeinDB 88 ms cold start / 27 MB / 42k tpmC / 2.4 ms p99 · "active deployments" · "runs production" ·
"updated weekly" / "shipping weekly". The forbidden-pattern list in `tools/check-facts.mjs` keeps them out.
