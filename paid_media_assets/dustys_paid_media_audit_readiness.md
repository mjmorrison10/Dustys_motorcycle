# Dusty's Motorcycle Service & Repair — Paid Media Audit & Launch Readiness

**Purpose:** Prevent wasted ad spend before Dusty runs Google, Microsoft, Meta, or local paid campaigns.

**Current recommendation:** Do **not** scale paid ads yet. Fix measurement, form endpoint, Google Business Profile, review velocity, and lead response process first.

---

## Executive Paid Media Verdict

Dusty's has strong positioning and conversion copy, but paid media should wait until these are true:

- [ ] GA4/GTM installed and tested.
- [ ] SMS/call/form/directions/guide events tracked.
- [ ] Real form endpoint replaces `YOUR_FORM_ID`.
- [ ] Google Business Profile verified and accurate.
- [ ] NAP is consistent across Google, Yelp, Facebook, Nextdoor, Birdeye, Apple Maps, Bing Places.
- [ ] Review request workflow is active.
- [ ] Lead response process is reliable during shop hours.
- [ ] Weekly lead source log exists.

Until then, paid traffic may create leads Dusty cannot measure or respond to consistently.

---

## Paid Media Funnel Audit

| Funnel Layer | Status | Risk | Fix Before Spend |
|---|---|---|---|
| Offer | Strong | Low | Keep “Text a photo, get a straight answer” |
| Landing page | Strong | Medium | Test mobile speed + connect form endpoint |
| Tracking | Not live | Critical | Install GA4/GTM and conversion events |
| Lead capture | SMS strong / form blocked | Critical | Replace `YOUR_FORM_ID` |
| Local entity | Needs cleanup | High | GBP/Birdeye/NAP cleanup |
| Reviews | Strong but underleveraged | Medium | Start post-service review workflow |
| Follow-up | Process assets exist | Medium | Use Sales Coach playbook weekly |

---

## Required Conversion Events

### Primary conversions

| Event | Type | Notes |
|---|---|---|
| `hero_text_photo_click` | lead intent | primary hero SMS CTA |
| `mobile_cta_bar_click` | lead intent | sticky mobile CTA |
| `contact_sms_click` | lead intent | contact section SMS |
| `contact_phone_call_click` | lead intent | phone call click |
| `form_submit` | lead | only meaningful after form endpoint live |
| `get_directions_click` | local intent | high local action signal |

### Secondary / micro conversions

| Event | Type | Notes |
|---|---|---|
| `copy_text_template_click` | high intent | user preparing message |
| `prototype_text_builder_sms_click` | high intent | text-builder conversion |
| `guide_pre_purchase_click` | content intent | inspection lead interest |
| `guide_ride_ready_click` | content intent | maintenance/safety interest |
| `guide_choose_mechanic_click` | education intent | comparison/recommendation path |
| `guide_pricing_click` | price intent | quote anxiety path |
| `referral_sms_share_click` | referral | word-of-mouth loop |
| `referral_copy_success` | referral | share behavior |

---

## Google Ads Readiness Checklist

### Account structure

- [ ] Separate campaigns by intent:
  - Motorcycle Repair Orange CA
  - Pre-Purchase Inspection
  - Tires / Brakes / Chain
  - Harley / Sportbike / Dirt Bike if volume supports
  - Brand campaign if competitors bid on Dusty
- [ ] Exact/phrase match first; broad only after conversion data exists.
- [ ] Tight geo radius around Orange / nearby OC cities.
- [ ] Call assets and location assets attached.
- [ ] Ad schedule matches response availability.
- [ ] Campaign naming convention documented.

### Keywords to test first

- motorcycle repair orange ca
- motorcycle mechanic orange ca
- motorcycle service orange ca
- motorcycle repair near me
- motorcycle mechanic near orange circle
- harley repair orange ca
- sportbike service orange ca
- motorcycle tire change orange ca
- pre purchase motorcycle inspection orange ca
- dirt bike repair orange ca
- atv repair orange ca

### Negative keywords starter list

- free
- jobs
- salary
- school
- classes
- course
- manual
- pdf
- parts only
- for sale
- cheap parts
- bicycle
- car
- auto
- scooter rental
- dealership warranty

### Ad copy angle

**Headline themes:**

- Motorcycle Repair in Orange, CA
- Text a Photo for a Quote
- No Phantom Repairs
- Veteran-Owned Moto Shop
- Quote Before We Wrench
- Near Orange Traffic Circle
- Used Bike Inspections

**Description themes:**

- Harleys, sportbikes, dirt bikes, ATVs, vintage bikes.
- Text year/make/model + issue + photo.
- Honest diagnosis. No upsells. No phone tag.
- 130 S Lemon St, Orange, CA.

---

## Meta Ads Readiness Checklist

**Recommendation:** Meta should start with retargeting only, not cold prospecting.

Do not launch Meta until:

- [ ] Meta Pixel installed.
- [ ] Conversion API considered or deferred intentionally.
- [ ] Website traffic audience active.
- [ ] Instagram/Facebook profiles updated.
- [ ] 10+ real shop photos/reels exist.
- [ ] Retargeting creative uses real shop proof.

### Retargeting audiences

- website visitors 30 days,
- guide page visitors 90 days,
- Instagram/Facebook engagers 365 days,
- video viewers 50%+ if reels are used.

### Creative themes

- “Text a photo. Get a straight answer.”
- Used-bike inspection before you buy.
- Ride-ready before Santiago Canyon.
- No phantom repairs / quote before wrenching.

---

## Landing Page QA Before Paid Launch

- [ ] Mobile load speed acceptable.
- [ ] Sticky mobile CTA visible.
- [ ] SMS links work on iOS/Android.
- [ ] Phone links work.
- [ ] Form endpoint works.
- [ ] Form success/error states are clear.
- [ ] Thank-you/confirmation tracking works.
- [ ] Directions link works.
- [ ] UTM parameters preserve through landing page.
- [ ] No console errors.
- [ ] Event tracking verified in GA4 DebugView.

---

## UTM Convention

Use this format:

```text
utm_source=google|meta|microsoft
utm_medium=cpc|paid_social|retargeting
utm_campaign=service_location_intent
utm_content=creative_angle
utm_term=keyword_or_audience
```

Examples:

```text
?utm_source=google&utm_medium=cpc&utm_campaign=motorcycle_repair_orange&utm_content=text_photo_quote&utm_term=motorcycle_mechanic_orange_ca
```

```text
?utm_source=meta&utm_medium=retargeting&utm_campaign=ride_ready_checklist&utm_content=real_shop_reel&utm_term=site_visitors_30d
```

---

## 30-Day Test Budget Recommendation

Only after readiness blockers are fixed.

| Channel | Budget | Goal |
|---|---:|---|
| Google Search | $500–$1,000 | capture high-intent repair demand |
| Meta Retargeting | $100–$300 | bring back guide/site visitors |
| Microsoft Ads | $100–$250 | optional low-cost search test |

Do not scale until:

- conversion tracking is accurate,
- lead response is reliable,
- cost per qualified lead is known,
- booked-job rate is known.

---

## Paid Media Kill Criteria

Pause or fix if:

- tracking is broken,
- form endpoint is broken,
- cost per qualified lead exceeds owner-approved threshold,
- lead response time is too slow,
- search terms show irrelevant traffic,
- ads drive calls/texts outside response capacity,
- no booked jobs after meaningful click volume.

