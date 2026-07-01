# Performance Benchmarker Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Performance Benchmarker from Agency Agents app corpus (`testing-performance-benchmarker.md`)  
**Scope:** Static-site performance baseline, file-size budgets, local smoke timings, and performance risk assessment.

---

## Important Limitation

This environment does not include Lighthouse/Chrome/Playwright, so real Core Web Vitals were not measured. Local server `curl` timings are useful only as smoke checks, not user-performance proof. Final performance approval requires deployed Lighthouse and real-device/browser testing.

---

## Files Added

### Performance budget

Created:

```text
performance_assets/dustys_performance_budget.md
```

### Measurement CSV

Created:

```text
performance_assets/dustys_performance_measurements_2026-06-30.csv
```

---

## Static Performance Baseline

| Asset | Size | Gzip |
|---|---:|---:|
| `index.html` | 92,856 B | 21,612 B |
| Largest guide page | 10,785 B | 4,015 B |
| `sw.js` | 2,052 B | 773 B |
| `manifest.webmanifest` | 599 B | 307 B |
| `images/hero_bg.webp` | 188,446 B | already compressed |
| Selected local core assets | 578,586 B | mixed |

---

## Local Server Smoke Timings

Local `python3 -m http.server` checks returned 200 for tested assets.

| Path | Status | TTFB | Total | Size |
|---|---:|---:|---:|---:|
| `/` | 200 | ~0.0038s | ~0.0040s | 92,856 B |
| `/guides/pre-purchase-motorcycle-inspection-checklist.html` | 200 | ~0.0012s | ~0.0013s | 10,140 B |
| `/guides/refer-a-rider.html` | 200 | ~0.0008s | ~0.0008s | 7,299 B |
| `/images/hero_bg.webp` | 200 | ~0.0008s | ~0.0010s | 188,446 B |
| `/sw.js` | 200 | ~0.0008s | ~0.0008s | 2,052 B |

Again: these are local smoke timings, not internet user timings.

---

## What Is Working

1. **No-build static architecture is performance-friendly.** There is no framework bundle, hydration cost, or package dependency overhead.
2. **Homepage compresses well.** `index.html` is ~93 KB raw and ~22 KB gzip.
3. **Guide pages are lightweight.** Public guide HTML pages are roughly 7–11 KB raw and ~3–4 KB gzip.
4. **Images were already converted to WebP.** The hero WebP is ~188 KB, below the 250 KB budget.
5. **Service worker exists.** Repeat visits can benefit from cached static assets.

---

## Performance Risks

### Risk 1 — Real Core Web Vitals unproven

No Lighthouse or field data exists yet. LCP/INP/CLS cannot be certified.

### Risk 2 — Third-party scripts can erase gains

GA4/GTM, Meta Pixel, maps, chat widgets, or ad tags could materially affect load performance. Add only what is needed and retest.

### Risk 3 — Google Maps iframe may affect lower-page performance

The map is lazy-loaded, which is good, but should remain below the fold.

### Risk 4 — More images could bloat pages

Future real-shop photos should be compressed to WebP/AVIF and lazy-loaded.

---

## Recommendations

### Critical before performance approval

1. Run Lighthouse after deployment.
2. Test mobile performance on a real phone or browser device emulation.
3. Verify CLS after fonts, images, and map load.
4. Retest after GA4/GTM and any pixels are installed.

### High priority

1. Keep hero image under 250 KB.
2. Keep guide pages under 15 KB gzip.
3. Avoid live chat widgets unless proven necessary.
4. Self-host fonts later if Google Fonts becomes a measurable bottleneck.

### Medium priority

1. Add responsive `srcset` if larger real photos are introduced.
2. Keep service worker cache version discipline.
3. Consider extracting shared guide CSS only if guide maintenance becomes hard.

---

## Performance Benchmarker Verdict

Static performance posture is good, but final performance status is **NEEDS FIELD/BROWSER VALIDATION**. The repo is lightweight and likely to perform well, but Lighthouse/Core Web Vitals must be measured after deployment and again after analytics/pixels are added.
