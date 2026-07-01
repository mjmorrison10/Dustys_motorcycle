# Dusty's Motorcycle Service & Repair — Accessibility Audit Checklist

**Standard:** WCAG 2.2 AA  
**Scope:** Homepage, guide pages, contact form, navigation, CTAs, maps, and generated operating assets.

---

## Automated / Static Checks

- [ ] Homepage has exactly one H1.
- [ ] JSON-LD parses.
- [ ] Sitemap parses.
- [ ] Main JavaScript passes syntax check.
- [ ] All iframes have accessible titles.
- [ ] External links with `target="_blank"` include `rel="noopener noreferrer"`.
- [ ] Form controls have visible labels.
- [ ] Required fields are visible and understandable.
- [ ] Color contrast meets WCAG AA for normal text.
- [ ] Images have useful alt text or are decorative.
- [ ] No focusable elements are hidden with `aria-hidden="true"`.

---

## Keyboard Testing

Test without a mouse:

- [ ] Skip link appears on focus and moves to main content.
- [ ] Header navigation can be tabbed in logical order.
- [ ] Mobile menu button opens/closes with keyboard.
- [ ] Escape closes mobile menu.
- [ ] All CTA links are reachable.
- [ ] FAQ buttons are reachable and toggle with Enter/Space.
- [ ] Form fields are reachable in visual order.
- [ ] Submit button is reachable.
- [ ] Referral/text-builder buttons are reachable.
- [ ] No keyboard trap exists.
- [ ] Focus indicator is visible on all interactive elements.

---

## Screen Reader Testing

Test with VoiceOver, NVDA, or JAWS:

- [ ] Page title announces correctly.
- [ ] Landmark navigation exposes header/nav/main/footer.
- [ ] Heading structure is understandable.
- [ ] Hero CTA names are clear.
- [ ] FAQ buttons announce expanded/collapsed state.
- [ ] Copy-template status is announced via live region.
- [ ] Contact form purpose is announced.
- [ ] Form labels and required fields are announced.
- [ ] Map iframe title is announced usefully.
- [ ] Social links announce destination.

---

## Visual / Cognitive Testing

- [ ] 200% zoom has no horizontal scrolling on mobile-width layouts.
- [ ] 400% zoom preserves content access.
- [ ] Reduced motion setting disables non-essential animation.
- [ ] Orange bar text remains readable.
- [ ] CTA labels are specific, not vague.
- [ ] Pricing and safety language does not imply false certainty.
- [ ] Error/success states are understandable after form endpoint is connected.

---

## Current Known Accessibility Follow-Ups

1. Run axe/Lighthouse in a real browser after deployment.
2. Test VoiceOver on iOS Safari for SMS links and mobile menu.
3. Test NVDA + Firefox/Chrome on Windows if possible.
4. Add accessible form success/error states when the real endpoint is connected.
5. Recheck guide pages if shared CSS is extracted later.
