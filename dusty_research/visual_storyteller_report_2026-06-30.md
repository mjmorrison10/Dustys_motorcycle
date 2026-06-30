# Visual Storyteller Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Visual Storyteller from Agency Agents app corpus (`design-visual-storyteller.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Strengthen the website’s visual narrative so visitors emotionally understand the Dusty journey: problem, straight answer, resolution.

---

## Story Strategy

The site already had strong tactical conversion elements: text-first CTA, guides, guarantees, reviews, and AEO infrastructure. What it needed was a clearer **visual narrative arc** that helps riders feel the journey quickly.

### Core story arc

1. **Setup — Something feels off**  
   The rider notices a noise, leak, wobble, brake issue, chain issue, or used-bike red flag.

2. **Conflict — Get a straight answer**  
   The rider does not want dealership runaround, phone tag, or hidden costs. They text Dusty a photo and get a practical next step.

3. **Resolution — Ride out confident**  
   The bike is inspected, diagnosed, and repaired with approval before work begins. The rider gets back to the road.

---

## Changes Applied

### 1. Added visual story section

Added a new homepage section:

```text
The Rider Story — From Weird Noise to Canyon-Ready
```

Section ID:

```html
id="visual-story"
```

The section uses three image-driven story cards:

1. **Something Feels Off**
2. **Get a Straight Answer**
3. **Ride Out Confident**

Each card includes:

- real shop/rider imagery,
- story-step number,
- label for narrative phase,
- concise emotional copy,
- accessible alt text,
- lazy-loaded WebP images.

---

### 2. Added visual storytelling components

Added CSS components:

- `.story-strip`
- `.story-card`
- `.story-card__overlay`
- `.story-card__label`
- `.story-caption`

These create a reusable visual narrative pattern for future service pages or campaigns.

---

### 3. Added art direction guardrail

Added a visual direction caption:

> Keep using real shop photos, real bikes, and real rider moments. The story should feel like Orange County garage truth — not dealership stock photography.

This protects the brand from drifting into generic motorcycle imagery.

---

### 4. Service worker cache bump

Updated service worker cache:

```text
 dustys-moto-v5 → dustys-moto-v6
```

This ensures repeat visitors receive the new visual story section.

---

## Cross-Platform Story Adaptation

### Instagram Reel / Story

**Frame 1:** “Something feels off before the ride?”  
Visual: tire/chain/brake close-up.

**Frame 2:** “Text Dusty a photo. No perfect mechanic words needed.”  
Visual: shop interior / bike on lift.

**Frame 3:** “Approve before we wrench. Ride out confident.”  
Visual: rider/bike back on the road.

CTA: “Text Dusty — Orange, CA.”

### Google Business Profile Post

> Weird noise before a canyon ride? Text Dusty a photo with the year/make/model and what changed. We’ll tell you if it sounds like quick service, diagnosis, or a shop visit. No phantom repairs. No upsells.

### Website Visual Rule

Use real photos first:

- shop interiors,
- hands-on work,
- tires/brakes/chains,
- bikes on lifts,
- Orange/Santiago Canyon ride context.

Avoid:

- generic dealership stock photos,
- overly polished model shoots,
- AI-looking motorcycle glamour shots.

---

## Validation Performed

- Homepage JSON-LD still parses successfully.
- Sitemap XML still parses successfully.
- Main homepage JavaScript passes `node --check`.
- Homepage serves locally.
- `sw.js` serves locally.
- Confirmed new visual story elements:
  - `id="visual-story"`
  - `.story-strip`
  - `.story-card`
  - `dustys-moto-v6`

---

## Remaining Visual Storytelling Opportunities

1. Add 5–10 more real shop photos from Dusty.
2. Create before/after gallery once more repair photos are available.
3. Turn the three-card story into a 3-slide Instagram carousel.
4. Create short captions for existing Instagram repair videos.
5. Add a “bike of the week” visual story template for Google Business Profile and social posts.

---

## Visual Storyteller Verdict

The site now has a stronger emotional visual arc. It no longer only tells riders “text Dusty”; it shows the journey from anxiety to confidence. The visual direction stays authentic to the shop: real bikes, real garage, real rider problems, and no dealership polish.
