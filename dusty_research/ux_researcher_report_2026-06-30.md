# UX Researcher Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** UX Researcher from Agency Agents app corpus (`design-ux-researcher.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Important limitation:** No live user sessions or analytics exports were available in this environment. This pass uses triangulated evidence from the research folder, review themes, prior Persona Walkthrough findings, and observed site UX. Recommendations are research hypotheses to validate with real riders and analytics.

---

## Research Overview

### Primary Research Questions

1. What could stop a high-intent local rider from texting Dusty after landing on the page?
2. What information does a rider need before starting a repair conversation?
3. Does the page support both urgent “something is wrong” users and planning/research users?
4. What instrumentation should be in place to validate the text-first conversion path?
5. Are there inclusive/accessibility concerns that could block users from completing the contact task?

### Evidence Sources Used

- Existing research notes and competitor/review analysis.
- Persona Walkthrough Specialist findings.
- Brand Guardian positioning pass.
- UX Architect accessibility and navigation pass.
- Website source review.
- Review themes showing phone responsiveness, honesty, and no-upsell anxiety as recurring decision factors.

### Method Used

Mixed-method desk research:

- Heuristic usability review.
- Journey analysis.
- Behavioral friction analysis.
- Accessibility/inclusive design review.
- Research-instrumentation planning.

---

## Key Findings Summary

1. **The biggest user hesitation is not whether Dusty is credible — it is what to send first.**  
   The site now says “Text a photo,” but anxious or non-mechanical riders may still freeze when composing the first message.

2. **The text-first path needs measurable micro-conversions before the final SMS click.**  
   A copyable text template creates a measurable interaction that indicates intent even before users launch SMS.

3. **The form needed to capture communication preference.**  
   Users who choose the form may still prefer text, call, or email. Capturing reply preference improves follow-up quality and later research segmentation.

4. **The mobile experience should reduce typing effort.**  
   Riders are likely on phones, possibly in a garage, parking lot, or shop context. Copyable/prefilled text lowers effort.

5. **Accessibility research risk remains until browser-based testing is run.**  
   The previous UX Architect pass improved semantics and focus states; this pass preserved those improvements and added an `aria-live` status for the copy action.

---

## User Journey Findings

### Journey: “My bike sounds wrong before a ride”

| Step | User Question | Existing Support | Remaining Risk | Action Taken |
|---|---|---|---|---|
| Search | “Is this local and relevant?” | Local SEO and Orange Traffic Circle positioning | Low | No change |
| First scan | “Can I trust this shop?” | Veteran-owned, reviews, no-upsell promise | Low | No change |
| Decision point | “What exactly should I text?” | Prefilled SMS link helps | Medium | Added visible copyable text template |
| Contact | “How will Dusty reply?” | Phone/text/form available | Medium | Added “Best way to reply” form field |
| Follow-up | “Did I authorize work?” | Form reassurance already exists | Low | Preserved |

---

## Changes Applied

### `index.html`

#### 1. Added “What should I text?” helper card

A new helper card was added under the “How to Get Help Fast” section.

It includes:

- A plain-language explanation of what to send.
- A copyable text template:

```text
Hi Dusty — I need help with my bike. It’s a [year/make/model]. The issue is [what happened]. I’ll send a photo/video next. Is it safe to ride, or should I bring it in?
```

- A **Copy Text Template** button.
- An accessible `aria-live="polite"` status message after copy.
- A `copy_text_template_click` event hook for analytics.

#### 2. Added reply preference field to the contact form

New optional form field:

- Text me
- Call me
- Email me

This helps Dusty respond in the channel the rider actually wants and supports future research on lead preferences.

#### 3. Added copy-helper JavaScript

The copy button:

- Uses `navigator.clipboard` when available.
- Falls back to a temporary textarea when clipboard API is unavailable.
- Updates an accessible live region with success/failure feedback.
- Pushes `copy_text_template_click` to `dataLayer`.

---

## Accessibility / Inclusive Design Notes

- The copy status uses `role="status"` and `aria-live="polite"` so screen-reader users receive feedback.
- The helper card benefits users with lower mechanical confidence by giving them exact language to start the conversation.
- The contact form’s reply preference supports users who cannot easily answer calls or who prefer text/email due to work, hearing, or environmental constraints.
- Reduced-motion, focus, landmark, and ARIA foundations from the UX Architect pass remain intact.

---

## Recommended Validation Plan

### 5-Rider Usability Test

Recruit five riders from Dusty’s existing customer base or local riding groups.

**Tasks:**

1. “Your bike makes a weird noise before a weekend ride. Find out how to contact Dusty.”
2. “Figure out what information Dusty wants in the first text.”
3. “Use the form instead of texting and indicate how you want a reply.”
4. “Find whether Dusty works on your type of bike.”
5. “Find proof that Dusty will not upsell you.”

**Metrics:**

- Task completion rate.
- Time to first CTA click.
- Whether users notice the text template.
- Whether users understand that no work starts without approval.
- Confidence rating after first scan and before contact.

### Analytics Events to Track

Existing and new events to connect in GA4/GTM:

- `hero_text_photo_click`
- `hero_form_click`
- `hero_card_sms_click`
- `process_sms_click`
- `copy_text_template_click`
- `contact_sms_click`
- `contact_phone_call_click`
- `mobile_cta_bar_click`
- `form_submit`
- `get_directions_click`

### Success Metrics

| Metric | Target |
|---|---:|
| Text/template interactions | 15–30% of engaged mobile visitors |
| SMS CTA click-through | 8–15% of organic landing page visitors |
| Form completion rate | 3–8% of visitors who reach contact section |
| Contact confidence rating in usability test | 4/5 or better |
| Users who can explain “what happens next” | 80%+ in 5-rider test |

---

## UX Researcher Verdict

The site now better supports the user’s actual first-contact behavior. Riders do not just need a CTA; they need confidence about what to say, what will happen next, and whether they are authorizing work. The new text-template helper and reply-preference field turn those research insights into measurable UX improvements.

The next step is to validate with real riders and analytics rather than continuing to optimize from assumptions.
