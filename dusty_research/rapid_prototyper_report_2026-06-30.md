# Rapid Prototyper Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Rapid Prototyper from Agency Agents app corpus (`engineering-rapid-prototyper.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Build a functional low-risk prototype that tests whether riders are more likely to text Dusty when the site helps them compose the first message.

---

## Prototype Hypothesis

**Primary assumption:** Riders may understand “text a photo,” but still hesitate because they do not know exactly what to write.

**Prototype:** A lightweight “Build Your First Text to Dusty” tool that turns three small inputs into a ready-to-send SMS.

**Success signal:** Users interact with the builder, click the generated SMS CTA, copy the generated text, or leave positive helper feedback.

---

## MVP Features Built

### 1. First-text builder prototype

Added a functional prototype inside the “How to Get Help Fast” section.

Inputs:

- Bike year / make / model
- Rideability state
- What happened / issue description

Output:

- Live generated message in the existing text-template card
- Dynamic SMS link to Dusty with the generated message URL-encoded

Example generated message:

```text
Hi Dusty — I need help with my bike. It’s a 2018 Honda CBR500R. The issue is chain noise and brake squeal. I’ll send a photo/video next. not sure if it is safe to ride. Should I ride it, or bring it in?
```

---

### 2. Prototype feedback collection

Added a small feedback prompt:

```text
Was this text builder helpful?
```

Buttons:

- Yes
- Not yet

Feedback is:

- pushed to `dataLayer`,
- sent through the existing analytics helper,
- stored lightly in `localStorage` as `dustys_text_builder_feedback`,
- acknowledged with an accessible status message.

---

### 3. Analytics events

Added events:

- `prototype_text_builder_update`
- `prototype_text_builder_sms_click`
- `prototype_text_builder_helpful_yes`
- `prototype_text_builder_helpful_no`
- `prototype_text_builder_feedback`

These support rapid validation once GA4/GTM is connected.

---

### 4. Agent/action metadata

Updated `mcp-actions.json` and `.well-known/mcp-actions.json` with:

- `use_text_builder_prototype`

This declares the prototype as a client-side helper action for agentic task flows.

---

### 5. Service worker cache bump

Updated service worker cache:

```text
 dustys-moto-v4 → dustys-moto-v5
```

This ensures repeat visitors receive the prototype update.

---

## Files Changed

- `index.html`
- `mcp-actions.json`
- `.well-known/mcp-actions.json`
- `sw.js`

---

## Validation Performed

- `mcp-actions.json` parses successfully.
- `.well-known/mcp-actions.json` parses successfully.
- Homepage JSON-LD still parses successfully.
- Sitemap XML still parses successfully.
- Main homepage JavaScript passes `node --check`.
- Homepage serves locally.
- `mcp-actions.json` serves locally.
- Confirmed prototype elements/events exist:
  - `textBuilderPrototype`
  - `prototype_text_builder_sms_click`
  - `prototype_text_builder_update`
  - `data-prototype-feedback`
  - `use_text_builder_prototype`

---

## Validation Plan

### 7-day prototype test

Once analytics is connected, track:

| Metric | Signal |
|---|---|
| `prototype_text_builder_update` | Users are trying to compose a message |
| `prototype_text_builder_sms_click` | Builder directly assists conversion |
| `copy_text_template_click` | Users prefer copy/paste over SMS link |
| `prototype_text_builder_feedback` | Qualitative helper usefulness |
| `mobile_cta_bar_click` vs builder SMS | Whether static CTA or builder converts better |

### Success thresholds

- 10%+ of users reaching “How to Get Help Fast” interact with the builder.
- 20%+ of builder users click SMS or copy text.
- Positive feedback is greater than negative feedback.

---

## Rapid Prototyper Verdict

This prototype tests a very specific conversion hypothesis with minimal risk and no backend dependency. It gives riders a practical tool, gives Dusty a better first message, and gives the site measurable events to decide whether the helper should become a permanent feature.
