# Dusty's Motorcycle Service & Repair — Evidence Collection Matrix

**Evidence status:** PARTIAL  
**Production approval status:** FAILED / NEEDS WORK  
**Reason:** Static checks pass, but required visual screenshot evidence could not be generated in this environment.

---

## Evidence Collected

| Evidence Type | Status | Result |
|---|---|---|
| HTML file inventory | ✅ Collected | `index.html` + 5 guide pages present |
| Local server smoke test | ✅ Collected | homepage, guide pages, `llms.txt`, `mcp-actions.json` returned 200 |
| Static accessibility scan | ✅ Collected | H1/alt/iframe/rel checks passed |
| JSON-LD validation | ✅ Collected | parse errors: 0 |
| Sitemap XML validation | ✅ Collected | parse errors: 0 |
| Agent/MCP/manifest JSON validation | ✅ Collected | parse errors: 0 |
| Inline JS syntax | ✅ Previously/locally validated | no syntax failures found in prior checks |
| Playwright screenshots | ❌ Not collected | `qa-playwright-capture.sh` missing; Playwright unavailable |
| `test-results.json` | ❌ Not collected | no screenshot test results file exists |
| Real screen reader evidence | ❌ Not collected | requires manual VoiceOver/NVDA/JAWS |
| Mobile visual evidence | ❌ Not collected | requires browser screenshots |

---

## Evidence Gaps

1. No desktop/tablet/mobile screenshots.
2. No before/after interaction screenshots for menu, FAQ, form, text builder, referral copy, or guide links.
3. No automated browser test JSON.
4. No real assistive technology transcript.
5. No production-host verification after GitHub push.

---

## Required Evidence Before Approval

- `responsive-desktop.png`
- `responsive-tablet.png`
- `responsive-mobile.png`
- `mobile-menu-before.png` / `mobile-menu-after.png`
- `faq-before.png` / `faq-after.png`
- `form-empty.png` / `form-filled.png` / `form-submit-state.png`
- `text-builder-empty.png` / `text-builder-filled.png`
- `referral-copy-before.png` / `referral-copy-after.png`
- `test-results.json`
- VoiceOver or NVDA screen reader notes
- Lighthouse/axe results after deployment

