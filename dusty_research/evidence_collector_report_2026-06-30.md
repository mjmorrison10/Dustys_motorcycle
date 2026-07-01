# Evidence Collector Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Evidence Collector from Agency Agents app corpus (`testing-evidence-collector.md`)  
**Default QA stance:** FAILED / NEEDS WORK until visual evidence exists  
**Scope:** Evidence collection and QA proof audit for the static website and public guide pages.

---

## Verdict

**Status: NEEDS WORK.**

The static source checks are clean, but the required visual evidence was not available. This agent cannot approve production readiness without screenshots, interaction captures, browser test results, and manual assistive technology evidence.

The site may be structurally sound, but **structural checks are not the same as visual QA**.

---

## Reality Check Commands Executed

```bash
./qa-playwright-capture.sh http://localhost:8080 public/qa-screenshots
ls -la *.html guides/*.html
grep -R "luxury\|premium\|glass\|morphism" . --include="*.html" --include="*.css" --include="*.blade.php" --include="*.md"
cat public/qa-screenshots/test-results.json
python3 static validation checks
python3 -m http.server 8080
local fetch checks for homepage, guide pages, llms.txt, mcp-actions.json
```

---

## What Happened

### Screenshot capture failed

**Evidence:**

```text
/bin/bash: line 4: ./qa-playwright-capture.sh: No such file or directory
PLAYWRIGHT_CAPTURE_UNAVAILABLE
NO_PLAYWRIGHT_TEST_RESULTS_JSON
```

**Impact:** No visual proof exists for responsive layout, mobile menu, FAQ accordion, form behavior, text builder, referral copy flow, or guide-page rendering.

---

## Static Evidence Collected

### HTML inventory

- `index.html` exists.
- 5 guide pages exist:
  - `guides/how-to-choose-motorcycle-mechanic-orange-ca.html`
  - `guides/motorcycle-repair-pricing-orange-ca.html`
  - `guides/pre-purchase-motorcycle-inspection-checklist.html`
  - `guides/refer-a-rider.html`
  - `guides/santiago-canyon-ride-ready-checklist.html`

### Static validation results

- Missing local asset references: 0.
- H1 count: 1 per checked HTML page.
- Image tags missing `alt`: 0 in checked HTML pages.
- Iframes missing `title`: 0.
- `target="_blank"` links missing `rel`: 0.
- JSON-LD parse errors: 0.
- Sitemap XML parse errors: 0.
- Agent/MCP/manifest JSON parse errors: 0.

### Local server smoke test

Local server returned `200` for:

- `/`
- `/guides/refer-a-rider.html`
- `/guides/motorcycle-repair-pricing-orange-ca.html`
- `/llms.txt`
- `/mcp-actions.json`

---

## Issues Found

### Issue 1 — No screenshot evidence

**Priority:** Critical  
**Evidence:** `qa-playwright-capture.sh` missing and no `public/qa-screenshots/test-results.json`.  
**Impact:** Cannot verify visual layout, responsive behavior, or interactive states.

### Issue 2 — No browser interaction evidence

**Priority:** Critical  
**Evidence:** no before/after screenshots for mobile menu, FAQ, form, text builder, or referral copy.  
**Impact:** Interactive functionality is claimed by source code but not visually proven.

### Issue 3 — No assistive technology evidence

**Priority:** Critical  
**Evidence:** no VoiceOver/NVDA/JAWS transcript or notes.  
**Impact:** Accessibility cannot be certified.

### Issue 4 — Form conversion remains unproven

**Priority:** Critical  
**Evidence:** project still documents `YOUR_FORM_ID` as blocker.  
**Impact:** Form flow cannot be considered production-ready.

### Issue 5 — Production-host evidence missing

**Priority:** High  
**Evidence:** local server checks pass, but no deployed URL checks were collected.  
**Impact:** GitHub/static-host deployment behavior, MIME types, service worker, and public AEO files need external verification.

---

## What Looks Good From Static Evidence

- Static file structure is coherent.
- HTML pages and guide pages exist.
- Local server can serve key pages.
- JSON-LD, sitemap, manifest, agent, and MCP JSON parse successfully.
- Basic source-level accessibility checks pass for headings, image alts, iframe title, and external-link rels.

---

## Honest Quality Assessment

| Category | Rating | Reason |
|---|---|---|
| Static source quality | B+ | clean structural checks |
| Visual evidence quality | F | screenshots unavailable |
| Interaction proof | F | no browser captures |
| Accessibility proof | D | source checks only; no AT evidence |
| Production readiness | NEEDS WORK | critical evidence and operational blockers remain |

---

## Required Next Steps

1. Add a working Playwright/Puppeteer screenshot script or run browser QA externally.
2. Capture desktop/tablet/mobile screenshots.
3. Capture before/after interaction screenshots for menu, FAQ, form, text builder, referral copy, and guide navigation.
4. Run Lighthouse and axe after deployment.
5. Perform VoiceOver/NVDA keyboard and screen reader testing.
6. Connect the real form endpoint and capture form success/error evidence.
7. Verify deployed URLs return `200` publicly.

---

## Evidence Collector Final Assessment

Static checks are encouraging, but approval requires visual proof. The correct status remains **NEEDS WORK** until screenshot evidence, interaction evidence, deployed-site evidence, and assistive-technology evidence are collected.
