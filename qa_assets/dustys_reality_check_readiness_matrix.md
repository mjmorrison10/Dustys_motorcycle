# Dusty's Motorcycle Service & Repair — Reality Check Readiness Matrix

**Default status:** NEEDS WORK  
**Reason:** The site has strong static implementation evidence, but production readiness is blocked by operational dependencies that cannot be validated in-repo.

---

## Production Readiness Gates

| Gate | Status | Evidence | Owner |
|---|---|---|---|
| Static homepage serves locally | ✅ Pass | `python3 -m http.server`, `/` returns 200 | Web/dev |
| Guide pages serve locally | ✅ Pass | all `guides/*.html` return 200 in local server checks | Web/dev |
| JSON-LD parses | ✅ Pass | Python `json.loads` over all JSON-LD blocks | Web/dev |
| Sitemap parses | ✅ Pass | Python `xml.etree.ElementTree.parse` | Web/dev |
| Agent/action JSON parses | ✅ Pass | Python `json.loads` for permission/action manifests | Web/dev |
| Local asset references exist | ✅ Pass | static reference scan found 0 missing refs | Web/dev |
| Main JS syntax valid | ✅ Pass | `node --check` on inline scripts | Web/dev |
| Accessibility source fixes | ✅ Partial | H1, iframe title, rel, form description checks pass | Web/dev |
| Real browser visual QA | ⚠️ Not proven | no Chromium/Playwright available in environment | QA |
| Screen reader testing | ⚠️ Not proven | requires VoiceOver/NVDA/JAWS manual testing | QA |
| Form endpoint | ❌ Blocked | `YOUR_FORM_ID` still present | Dusty/web |
| GA4/GTM tracking | ❌ Blocked | dataLayer hooks exist; no measurement ID | Dusty/web |
| GBP/NAP cleanup | ❌ Blocked | owner/admin platform access required | Dusty/admin |
| SMS auto-reply | ❌ Blocked | phone provider setup required | Dusty |
| Warranty/pricing approval | ❌ Blocked | owner decision required | Dusty |
| Paid media launch | ❌ Not ready | explicitly gated by tracking/form/lead response | Dusty/ads |

---

## Required Before “Production Ready” Claim

1. Replace `YOUR_FORM_ID` with a real endpoint and test success/error flows.
2. Install GA4/GTM and verify the primary events in DebugView.
3. Verify official NAP/hours and update external listings.
4. Configure SMS auto-reply or reliable lead response process.
5. Run real browser QA at mobile/tablet/desktop breakpoints.
6. Run keyboard-only and screen reader checks.
7. Run Lighthouse/axe after deployment.
8. Confirm warranty/pricing claims with Dusty.

---

## Reality-Based Certification

**Current status:** NEEDS WORK  
**Static implementation quality:** Good  
**Operational readiness:** Not ready  
**Paid media readiness:** Not ready  
**Final accessibility conformance:** Not proven  
**Recommended next checkpoint:** after form endpoint + GA4/GTM + GBP/NAP + SMS auto-reply are complete.
