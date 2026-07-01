# Dusty's Motorcycle Service & Repair — Paid Social Strategy

**Purpose:** Define a practical Meta/Instagram/Facebook paid social plan for Dusty's that supports the text-first lead engine without wasting money on broad cold audiences.

**Paid social verdict:** Start with retargeting and engagement audiences only. Do not launch cold prospecting until organic creative, tracking, lead response, and review proof are working.

---

## Strategic Role of Paid Social

Paid social should not replace Google Search for high-intent repair demand. Search captures people already looking for a mechanic. Paid social should:

1. bring back website and guide visitors,
2. reinforce trust after someone sees Dusty's organically,
3. promote ride-ready and used-bike buyer education,
4. convert social engagers into text-first leads,
5. amplify real shop proof.

Core ad promise:

> Text a photo. Get a straight answer. No phantom repairs. Quote before we wrench.

---

## Launch Preconditions

Do not launch paid social until:

- [ ] Meta Pixel installed and verified.
- [ ] GA4/GTM events verified.
- [ ] Real form endpoint replaces `YOUR_FORM_ID` or SMS is explicitly used as the only paid-social conversion.
- [ ] Instagram/Facebook profiles updated with current NAP and website.
- [ ] 10+ real shop photos/videos available.
- [ ] Google Business Profile and review workflow are active.
- [ ] Lead response process is reliable.

---

## Funnel Architecture

### Phase 1 — Retargeting Only

**Audience:** warm users who already showed intent.

Audiences:

- website visitors 30 days,
- guide visitors 90 days,
- pricing guide visitors 90 days,
- referral page visitors 90 days,
- Instagram/Facebook engagers 365 days,
- video viewers 50%+ if enough volume exists.

Objective:

- traffic or leads depending on tracking readiness,
- optimize to SMS/call/form events only after sufficient event volume.

Budget:

- $5–$15/day to start.

---

### Phase 2 — Local Engagement Expansion

Launch only after retargeting produces qualified leads.

Audience:

- Orange County riders,
- motorcycle interests,
- Harley-Davidson / sportbike / dirt bike / ATV interests,
- lookalike audiences from website visitors or customer list if enough volume exists.

Budget:

- $10–$25/day test.

---

### Phase 3 — Partner / Event Campaigns

Use for:

- riding club events,
- gear shop partnerships,
- seasonal ride-ready checks,
- used-bike buyer education.

---

## Campaign Structure

### Campaign 1 — Meta Retargeting: Text a Photo

**Objective:** traffic or leads.  
**Audience:** site visitors 30 days + IG/FB engagers 365 days.  
**Exclusions:** recent converters / active jobs if available.  
**Creative:** real shop photo or phone/bike issue.  
**CTA:** Send Message / Learn More / Text Dusty.

Copy:

```text
Still not sure what’s wrong with the bike?
Text Dusty a photo with the year/make/model and what changed.
No phantom repairs. No upsells. Quote before we wrench.
```

---

### Campaign 2 — Meta Retargeting: Used-Bike Buyers

**Objective:** traffic to pre-purchase guide or lead.  
**Audience:** pre-purchase guide visitors, pricing guide visitors, social engagers.  
**Creative:** VIN/tire/fork seal/cold-start checklist visual.

Copy:

```text
Buying a used bike?
Don’t inherit someone else’s problem.
Text Dusty the listing and photos before you hand over cash.
```

---

### Campaign 3 — Meta Retargeting: Ride-Ready

**Objective:** traffic to ride-ready checklist / SMS lead.  
**Audience:** guide visitors, site visitors, social engagers.  
**Creative:** tire/chain/brake close-up, canyon-ready visual.

Copy:

```text
Heading toward Santiago Canyon?
Check tires, brakes, chain, fluids, lights, and throttle before you ride.
If something feels off, text Dusty a photo.
```

---

### Campaign 4 — Instagram Engagement Boost Test

**Objective:** engagement / video views.  
**Audience:** local motorcycle interests, tight geo.  
**Creative:** best organic Reel from the Instagram Curator plan.

Use only to identify which creative earns attention before running conversion campaigns.

---

## Creative Testing Matrix

| Concept | Format | Hook | CTA | Success Signal |
|---|---|---|---|---|
| Text a Photo | Reel/static | “Weird noise before the ride?” | Text Dusty | SMS clicks |
| Used Bike Red Flags | Carousel/Reel | “Buying used? Check this first.” | Open checklist | guide clicks / SMS |
| Ride-Ready | Carousel/Reel | “Before Santiago Canyon…” | Open checklist | saves / guide clicks |
| No-Upsell Promise | Static/video | “Quote before we wrench.” | Learn more | CTR / SMS |
| Real Shop Proof | Reel | “Real bike. Real diagnosis.” | Text a photo | thumb-stop / SMS |

---

## Platform-Specific Creative Rules

### Instagram / Facebook Feed

- Use real shop image or short shop video.
- Strong first line.
- Avoid too much text on image.
- CTA visible in first two lines.

### Reels

- Hook in first 1–2 seconds.
- Use overlay text.
- Keep under 20 seconds for initial tests.
- Show real parts/bikes, not talking-head only.

### Stories

- Use vertical 9:16.
- Add “Text Dusty” CTA.
- Use polls for awareness content.
- Keep safety caveats clear.

---

## Audience Exclusions

Exclude when possible:

- existing active jobs,
- recent leads already contacted,
- employees/family if they skew engagement,
- low-quality engagers if obvious,
- people outside service area.

---

## Measurement Plan

### Primary events

- `mobile_cta_bar_click`
- `hero_text_photo_click`
- `contact_sms_click`
- `contact_phone_call_click`
- `form_submit` after endpoint live

### Social-specific events

- guide clicks from UTMs,
- `prototype_text_builder_sms_click`,
- `referral_sms_share_click`,
- message starts if using Meta messaging objective.

### UTMs

```text
utm_source=meta
utm_medium=paid_social|retargeting
utm_campaign=text_photo_retargeting|used_bike_retargeting|ride_ready_retargeting
utm_content=creative_angle
utm_term=audience
```

---

## Budget Testing Plan

### First 30 days after readiness

| Campaign | Budget | Goal |
|---|---:|---|
| Text a Photo Retargeting | $150–$300 | convert warm visitors |
| Used-Bike Retargeting | $100–$200 | inspection leads |
| Ride-Ready Retargeting | $100–$200 | maintenance leads |
| Engagement Boost Test | $50–$100 | creative learning |

Total: $400–$800 test.

Do not scale until lead quality is confirmed manually.

---

## Kill Criteria

Pause or change if:

- frequency exceeds 5 in 7 days for retargeting,
- CTR is low and comments show confusion,
- leads do not include bike/issue context,
- cost per qualified lead exceeds threshold,
- Dusty cannot respond quickly,
- comments turn negative because ad feels misleading,
- creative fatigue appears.

