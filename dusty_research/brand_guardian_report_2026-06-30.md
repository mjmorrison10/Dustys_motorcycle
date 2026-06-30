# Brand Guardian Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Brand Guardian from Agency Agents app corpus (`design-brand-guardian.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Audit brand foundation, messaging consistency, visual identity system, and implementation consistency after the SEO and Persona Walkthrough passes.

---

## Executive Summary

Dusty’s brand already has the strongest ingredient most local shops lack: a believable, ownable identity. The brand is not “generic motorcycle repair.” It is:

> **The no-BS, veteran-owned neighborhood motorcycle mechanic at the Orange Traffic Circle.**

The previous site work established strong conversion and SEO positioning. The Brand Guardian pass focused on protecting that identity from fragmentation by tightening the visual/token system, header lockup, message consistency, and structured brand description.

---

## Brand Foundation

### Purpose
Help Orange County riders get back on the road safely without dealership runaround, hidden-cost anxiety, or phone-tag frustration.

### Vision
Become the trusted local mechanic riders think of first before canyon rides, used-bike purchases, weekend service, and “something sounds wrong” moments.

### Mission
Provide honest motorcycle service and repair for riders in and around Orange, CA — with direct text-first communication, clear estimates, and no phantom repairs.

### Brand Values

1. **Honesty** — diagnose first, quote clearly, no phantom repairs.
2. **Craft** — real wrenching by an owner-operated shop, not corporate service theater.
3. **Local Loyalty** — rooted near the Orange Traffic Circle and Santiago Canyon riding culture.
4. **Directness** — plain language, text-first access, no inflated promises.
5. **Respect** — riders should understand what is happening to their bike before paying for it.

### Brand Personality

- **Straight-talking:** clear, plain, slightly gruff, never corporate.
- **Protective:** wants riders safe and not taken advantage of.
- **Capable:** comfortable with Harleys, sportbikes, dirt bikes, ATVs, adventure bikes, and vintage machines.
- **Local:** Orange, Chapman Ave, Orange Traffic Circle, Santiago Canyon.
- **Veteran-owned:** disciplined, honest, service-minded.

### Brand Promise

> **No phone tag. No phantom repairs. No upsells. Text a photo, get a straight answer, approve before we wrench.**

---

## Positioning Statement

For Orange County riders who need trustworthy motorcycle service without dealership prices or shop runaround, Dusty’s Motorcycle Service & Repair is the veteran-owned, owner-operated motorcycle mechanic near the Orange Traffic Circle that gives straight answers, honest estimates, and real repairs for all kinds of bikes.

---

## Messaging Architecture

### Brand Tagline
**No-BS Moto Repair**

### Primary Website Promise
**Text a photo for a quote. Get a straight answer. Approve before we wrench.**

### Core Messages

1. **Honest local mechanic:** Veteran-owned motorcycle repair at the Orange Traffic Circle.
2. **Text-first access:** Start with a photo instead of playing phone tag.
3. **No phantom repairs:** If Dusty cannot find the problem, he will tell you straight.
4. **All bikes welcome:** Harleys, sportbikes, adventure bikes, dirt bikes, ATVs, and vintage machines.
5. **Quote before work:** No wrenching starts until the rider understands the plan.

### Preferred Phrases

Use:
- “Text a photo”
- “Get a straight answer”
- “Approve before we wrench”
- “No phantom repairs”
- “No upsells”
- “Veteran-owned”
- “Orange Traffic Circle”
- “Santiago Canyon”
- “All makes, all eras”

Avoid:
- Corporate phrases like “premier solutions,” “full-service excellence,” “customer-centric experience.”
- Vague CTA language like “learn more” when the desired action is to text/call/form.
- Overpromising exact response times unless SMS auto-reply and staffing can support it.

---

## Visual Identity System

### Color System

The existing black/white/orange shop aesthetic is brand-appropriate and should be protected.

| Role | Token | Value | Usage |
|---|---|---:|---|
| Primary action/accent | `--brand-primary` / `--orange` | `#f26522` | CTAs, highlights, local energy |
| Primary dark | `--brand-primary-dark` / `--orange-dark` | `#d94f1e` | CTA hover |
| Ink | `--brand-ink` / `--black` | `#0a0a0a` | page background |
| Surface | `--brand-surface` / `--near-black` | `#111111` | section backgrounds |
| Panel | `--brand-panel` / `--charcoal` | `#1a1a1a` | cards |
| Steel | `--brand-steel` / `--metal` | `#c0c0c0` | metal/shop accent |
| Paper | `--brand-paper` / `--white` | `#ffffff` | text and reverse CTAs |

### Typography

- **Headline font:** Oswald — uppercase, compressed, garage/signage feel.
- **Body font:** Roboto — readable, practical, non-decorative.
- **Rule:** Keep headlines short, direct, and scannable. Body copy should sound like a mechanic explaining the job, not a marketing team.

### Logo System

The circular badge logo remains the primary mark. The header now uses a stronger lockup:

- Logo badge
- “Dusty’s” text mark
- “No-BS Moto Repair” tagline

This improves brand recognition when the small circular logo alone is hard to read.

---

## Changes Applied

### `index.html`

- Added Brand Guardian CSS token aliases:
  - `--brand-primary`
  - `--brand-primary-dark`
  - `--brand-ink`
  - `--brand-surface`
  - `--brand-panel`
  - `--brand-steel`
  - `--brand-muted`
  - `--brand-paper`
  - `--brand-font-headline`
  - `--brand-font-body`
- Updated body/headline font usage to reference brand font tokens.
- Added header lockup text beside the badge logo:
  - `Dusty’s`
  - `No-BS Moto Repair`
- Updated meta and Open Graph descriptions to align with the text-photo CTA.
- Updated contact headline from “Text or Book Online” to “Text a Photo or Send the Form.”
- Added schema slogan:
  - “No phone tag. No phantom repairs. No upsells.”
- Updated schema business description to align with no-BS, veteran-owned, neighborhood mechanic positioning.

---

## Brand Protection Rules

1. **Single core promise:** Do not drift away from “text a photo, get a straight answer, approve before we wrench.”
2. **Tone guardrail:** Plainspoken beats polished. If copy sounds like it came from a dealership, rewrite it.
3. **Visual guardrail:** Black/white/orange with real shop photography. Avoid stock motorcycle glamour shots.
4. **CTA guardrail:** Primary CTA should stay text/photo-first until analytics proves another path converts better.
5. **Claims guardrail:** Keep warranty, 30-minute response, hours, and veteran-owned claims accurate across all listings.
6. **NAP guardrail:** All public profiles must use the same name, address, phone, and hours.

---

## Remaining Brand Tasks

1. Get high-resolution transparent PNG/SVG logo.
2. Confirm whether “No-BS Moto Repair” is acceptable for Dusty’s comfort and audience. If too edgy, fallback: “Honest Moto Repair.”
3. Create a small brand asset folder with:
   - logo PNG/SVG
   - favicon source
   - social avatar
   - social cover image
   - print-ready business card lockup
4. Standardize social bios using the new promise:
   - “Veteran-owned motorcycle repair in Orange, CA. Text a photo, get a straight answer. No phantom repairs. No upsells.”
5. Check trademark/business-name protection for Dusty’s Motorcycle Service & Repair and Dusty’s Moto.

---

## Brand Guardian Verdict

The brand is now more cohesive across strategy, copy, design tokens, CTA language, and schema. Dusty’s should protect the combination of:

- veteran-owned trust,
- no-BS directness,
- Orange Traffic Circle locality,
- all-bike capability,
- text-first repair intake.

That is the differentiating brand system. Keep every future page, post, and directory listing aligned to it.
