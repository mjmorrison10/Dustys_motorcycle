# Content Creator Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Content Creator from Agency Agents app corpus (`marketing-content-creator.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Turn placeholder lead magnets into real rider-facing content, strengthen content-driven lead capture, and document the next content plan.

---

## Executive Summary

Dusty’s site had two strong lead-magnet concepts, but they were still placeholders:

1. Pre-Purchase Inspection Checklist
2. Santiago Canyon Ride-Ready Checklist

The Content Creator pass turned both into real, printable, standalone HTML guides that can rank, be shared, be printed to PDF, and drive text-first leads back to Dusty.

This supports three goals at once:

- **SEO:** new indexable long-tail content around used-bike inspections and Santiago Canyon ride prep.
- **Lead generation:** useful content earns trust before asking for a text/call.
- **Brand:** practical, no-BS rider education that sounds like Dusty’s shop, not a generic blog.

---

## Content Strategy

### Content Pillars

1. **Ride-ready safety**  
   Pre-ride checks, tires, brakes, chain, fluids, controls, warning signs.

2. **Used-bike buyer protection**  
   Pre-purchase inspections, title/VIN checks, seller red flags, test-ride checks.

3. **No-BS mechanic education**  
   What noises mean, when not to ride, what needs immediate diagnosis, what can wait.

4. **Local Orange / Santiago Canyon relevance**  
   Content tied to Orange Traffic Circle, Chapman Ave, Santiago Canyon, weekend riders.

5. **Trust and anti-upsell proof**  
   Honest diagnosis, quote-before-wrenching, no phantom repairs, real shop stories.

---

## Changes Applied

### 1. Created real guide pages

#### `guides/pre-purchase-motorcycle-inspection-checklist.html`

A standalone, printable used-bike buyer checklist covering:

- title/VIN and seller checks,
- crash/frame red flags,
- leaks and fluids,
- tires/brakes/chain wear items,
- cold start and idle,
- test ride checks,
- questions to ask before buying,
- CTA to text Dusty about a pre-purchase inspection.

#### `guides/santiago-canyon-ride-ready-checklist.html`

A standalone, printable pre-ride safety checklist covering:

- 60-second driveway check,
- tires and wheels,
- brakes/chain/controls,
- fluids and heat,
- what to pack,
- warning signs before a canyon ride,
- CTA to text Dusty for a ride-ready check.

Both guides are:

- mobile responsive,
- print-friendly,
- brand-aligned with black/orange/white styling,
- no external dependencies,
- built with direct SMS CTAs,
- suitable for saving as PDF using browser print.

---

### 2. Updated homepage lead magnet section

The homepage now links to the real guides instead of only saying “Text me the checklist.”

Updated links:

- `guides/pre-purchase-motorcycle-inspection-checklist.html`
- `guides/santiago-canyon-ride-ready-checklist.html`

Added analytics hooks:

- `guide_pre_purchase_click`
- `guide_ride_ready_click`

---

### 3. Updated discoverability

Updated:

- `sitemap.xml` — added both guide URLs.
- `llms.txt` — added both guide URLs as free rider guides.

---

## 90-Day Content Calendar

### Month 1 — Trust + Safety

1. **Blog/GBP Post:** 5 Things to Check Before Riding Santiago Canyon  
   CTA: Text Dusty if anything feels off.

2. **Instagram Reel:** Chain slack check in 20 seconds  
   CTA: “Not sure? Text a photo.”

3. **GBP Post:** Used bike buyer red flags  
   CTA: Book a pre-purchase inspection.

4. **Facebook Post:** Why “quote before we wrench” matters  
   CTA: No phantom repairs.

### Month 2 — Service Education

5. **Blog/GBP Post:** Motorcycle tire warning signs Orange riders should not ignore.
6. **Instagram Reel:** What a worn sprocket looks like.
7. **GBP Post:** Brake fluid: why color matters.
8. **Facebook Post:** Dusty’s no-upsell promise explained.

### Month 3 — Local + Seasonal

9. **Blog/GBP Post:** Adventure bike maintenance before a SoCal weekend ride.
10. **Instagram Reel:** Before/after chain and brake service.
11. **GBP Post:** Pre-purchase inspections for Facebook Marketplace bikes.
12. **Facebook Post:** Why Orange riders choose an independent mechanic over a dealership.

---

## Social Caption Templates

### Instagram / Facebook — Pre-Purchase Inspection

> Buying a used bike from Marketplace or Craigslist? Don’t inherit somebody else’s problem. Check the title, VIN, frame, cold start, tires, brakes, leaks, and test ride before you hand over cash.  
>  
> Not sure what you’re looking at? Text Dusty the listing and a few photos. No-BS answer before you buy.  
>  
> Orange, CA • Veteran-owned • All makes, all eras

### Instagram / Facebook — Ride-Ready Checklist

> Heading toward Santiago Canyon this weekend? Take 60 seconds before you roll out: tires, brakes, chain, fluids, lights, throttle, clutch.  
>  
> If something feels off, don’t “see if it clears up.” Text a photo or short video to Dusty and get a straight answer.  
>  
> No phone tag. No phantom repairs. No upsells.

### Google Business Profile Post — Checklist CTA

> Free checklist for Orange riders: check your tires, brakes, chain, fluids, and controls before a Santiago Canyon ride. If anything looks wrong, text Dusty a photo before you ride.

---

## Measurement Plan

Track these events once GA4/GTM is connected:

- `guide_pre_purchase_click`
- `guide_ride_ready_click`
- `guide_sms_click`
- `copy_text_template_click`
- `process_sms_click`
- `mobile_cta_bar_click`
- `form_submit`

Content success metrics:

| Metric | 90-Day Target |
|---|---:|
| Guide page visits | 50–150 total |
| Guide-to-SMS clicks | 5–15% |
| Homepage guide clicks | 5–10% of engaged visitors |
| GBP post clicks/calls | Baseline + monthly lift |
| Pre-purchase inspection leads | 2–5/month |

---

## Remaining Content Work

1. Turn the HTML guides into designed PDFs if Dusty wants gated downloadable assets.
2. Add real shop photos/video stills to guide pages if Dusty provides more media.
3. Create the first service-specific SEO page: `pre-purchase-motorcycle-inspection-orange-ca`.
4. Publish the 90-day calendar as GBP/social posts.
5. Create short repair-video scripts from Dusty’s existing Instagram footage.

---

## Content Creator Verdict

Dusty’s content should not sound like marketing fluff. It should help riders avoid bad decisions, unsafe rides, and dishonest repairs. The new guide pages do exactly that: they provide practical value, reinforce Dusty’s no-BS brand, and create natural paths back to a text-first lead.
