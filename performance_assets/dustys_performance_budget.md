# Dusty's Motorcycle Service & Repair — Performance Budget

**Purpose:** Define practical performance limits for the static site before adding more features, images, scripts, or third-party tags.

**Status:** Static budget is currently reasonable. Real Core Web Vitals are not proven until deployed browser testing is performed.

---

## Page Weight Budgets

| Asset Type | Budget | Current Notes |
|---|---:|---|
| Homepage HTML uncompressed | < 125 KB | currently ~93 KB |
| Homepage HTML gzip | < 30 KB | currently ~22 KB |
| Hero image | < 250 KB | currently ~188 KB WebP |
| Individual guide HTML gzip | < 10 KB | current guide pages ~3–4 KB gzip |
| Service worker | < 10 KB | currently ~2 KB |
| Total critical local shell | < 750 KB | current selected core assets ~579 KB |

---

## Core Web Vitals Targets

These require real browser/Lighthouse/RUM data after deployment.

| Metric | Target |
|---|---:|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| TTFB | < 800ms |
| Lighthouse Performance | 90+ after deployment |

---

## Third-Party Budget

Third-party code can damage performance quickly. Treat each as a decision.

| Third Party | Status | Budget / Rule |
|---|---|---|
| Google Fonts | currently used | keep to current families/weights or self-host later |
| Google Maps iframe | currently used | lazy-loaded; do not move above fold |
| GA4/GTM | needed | install only required tags/events |
| Meta Pixel | later | only after retargeting readiness |
| Live chat widgets | avoid for now | can slow page; SMS is primary channel |

---

## Image Rules

- Prefer WebP/AVIF for site images.
- Keep new photos under 250 KB each where possible.
- Use `loading="lazy"` for below-the-fold images.
- Use descriptive alt text.
- Do not add stock/AI images that create trust risk.

---

## JavaScript Rules

- Keep no-build static architecture unless there is a real need.
- Avoid large third-party widgets.
- Keep inline JS syntax-valid with `node --check`.
- Use passive listeners and requestAnimationFrame for scroll work.
- Re-test after adding analytics or pixels.

---

## Release Gate

Before saying a change is performance-safe:

- [ ] file size impact reviewed,
- [ ] local smoke test passes,
- [ ] JS syntax valid,
- [ ] no missing asset references,
- [ ] Lighthouse run after deployment if user-facing layout/scripts changed,
- [ ] service worker cache version bumped if cached files changed.
