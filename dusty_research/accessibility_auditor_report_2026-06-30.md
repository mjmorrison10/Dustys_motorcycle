# Accessibility Auditor Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Accessibility Auditor from Agency Agents app corpus (`testing-accessibility-auditor.md`)  
**Standard:** WCAG 2.2 AA  
**Scope:** Static source audit of homepage and key interaction patterns.

---

## Important Testing Limitation

This environment supports source/static checks and local page serving, but it does not provide real screen reader sessions such as VoiceOver, NVDA, or JAWS. This report therefore documents source-level fixes and a required manual AT checklist. A final accessibility sign-off still requires real browser + assistive technology testing.

---

## Summary

The site already had several strong accessibility foundations from prior UX work:

- skip link,
- main landmark,
- visible focus styles,
- reduced-motion support,
- semantic form labels,
- FAQ `aria-expanded` state management,
- mobile menu `aria-expanded` state management,
- live region for copy feedback.

The Accessibility Auditor pass fixed additional source-level issues and created a repeatable audit checklist.

---

## Issues Found and Fixed

### Issue 1 — Insufficient contrast in orange trust bar

**WCAG Criterion:** 1.4.3 Contrast Minimum  
**Severity:** Serious  
**Location:** `.trust-bar-item h4` and `.trust-bar-item p`

**Problem:** White text on Dusty’s orange background is below 4.5:1 for normal-size text. The smaller trust-bar labels were at risk for low-vision users.

**Fix applied:** Changed trust-bar text to black / near-black on orange.

**Result:** Contrast is materially improved while preserving the orange brand bar.

---

### Issue 2 — Map iframe missing title

**WCAG Criterion:** 4.1.2 Name, Role, Value  
**Severity:** Moderate  
**Location:** Google Maps iframe

**Problem:** The embedded map did not have a descriptive `title`, so screen reader users would not know what the frame contained.

**Fix applied:** Added:

```html
title="Map to Dusty's Motorcycle Service and Repair in Orange, California"
```

---

### Issue 3 — External links opened in new tab without rel protection

**WCAG / Best Practice:** Predictable navigation + security best practice  
**Severity:** Minor  
**Location:** Footer social links

**Problem:** Social links used `target="_blank"` without `rel="noopener noreferrer"`.

**Fix applied:** Added `rel="noopener noreferrer"` to external social links.

---

### Issue 4 — Contact form needed stronger form-level description

**WCAG Criterion:** 3.3.2 Labels or Instructions  
**Severity:** Moderate  
**Location:** Contact form

**Problem:** The form had labels, but the important reassurance “No work starts from this form” was not programmatically associated with the form.

**Fix applied:** Added `aria-describedby="serviceFormHelp"` to the form and `id="serviceFormHelp"` to the explanatory note.

---

## Validation Performed

- Homepage JSON-LD parses successfully.
- Sitemap XML parses successfully.
- Main inline JavaScript passes `node --check`.
- Homepage serves locally.
- Guide page serves locally.
- Confirmed exactly one H1 on homepage.
- Confirmed no `target="_blank"` links without `rel`.
- Confirmed no iframe without `title`.
- Confirmed contact form has `aria-describedby="serviceFormHelp"`.

---

## Files Added / Updated

### Added

```text
accessibility_assets/dustys_accessibility_audit_checklist.md
```

### Updated

```text
index.html
```

---

## Remaining Required Manual Tests

Before claiming WCAG conformance, test:

1. Keyboard-only navigation through homepage and guide pages.
2. VoiceOver on iOS Safari for mobile menu, FAQ, CTAs, SMS links, and form.
3. NVDA or JAWS on Windows for form and FAQ behavior.
4. 200% and 400% zoom on mobile and desktop layouts.
5. High contrast / forced colors mode.
6. Form success and error states after the real endpoint is connected.

---

## Accessibility Auditor Verdict

The site has a solid accessibility foundation and this pass fixed several source-level barriers. However, final accessibility approval should wait until real assistive technology testing is completed, especially for mobile navigation, SMS links, form behavior, and dynamic status messages.
