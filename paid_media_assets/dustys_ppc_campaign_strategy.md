# Dusty's Motorcycle Service & Repair — PPC Campaign Strategy

**Purpose:** Provide a launch-ready Google/Microsoft search campaign architecture for Dusty once paid media readiness blockers are fixed.

**Important:** This is a campaign strategy, not permission to launch. Do not spend until tracking, form endpoint, Google Business Profile, and lead handling are ready.

---

## PPC Strategic Position

Dusty's should use PPC to capture high-intent local demand, not to create broad awareness.

Primary paid search promise:

> Text a photo. Get a straight answer. Quote before we wrench.

Paid search should send riders to the existing text-first landing page and guide pages, not to generic ad pages.

---

## Launch Preconditions

- [ ] GA4/GTM installed.
- [ ] SMS, call, form, direction, guide, referral events verified.
- [ ] Form endpoint live.
- [ ] Google Business Profile verified.
- [ ] Location asset connected to Google Ads.
- [ ] Call asset connected.
- [ ] Lead source logging active.
- [ ] Cost-per-qualified-lead target approved by Dusty.

---

## Account Architecture

### Campaign naming convention

```text
[PLATFORM]_[TYPE]_[INTENT]_[GEO]_[MATCH]_[YYYYMM]
```

Examples:

```text
GOOG_SEARCH_REPAIR_ORANGE_PHRASE_EXACT_202607
GOOG_SEARCH_PREPURCHASE_OC_PHRASE_EXACT_202607
MSFT_SEARCH_REPAIR_ORANGE_PHRASE_EXACT_202607
META_RETARGET_GUIDEVISITORS_OC_202607
```

---

## Campaign 1 — High-Intent Motorcycle Repair

**Campaign:** `GOOG_SEARCH_REPAIR_ORANGE_PHRASE_EXACT_202607`  
**Goal:** qualified text/call leads.  
**Landing page:** homepage.  
**Geo:** Orange, CA + tight radius around nearby service area.  
**Schedule:** match shop response capacity.

### Ad groups

1. motorcycle repair orange ca
2. motorcycle mechanic orange ca
3. motorcycle service orange ca
4. motorcycle repair near me
5. orange traffic circle mechanic

### Match type strategy

Start with:

- exact,
- phrase.

Avoid broad match until:

- conversion tracking is stable,
- at least 30 meaningful conversions exist,
- search term quality is proven.

### Example keywords

```text
[motorcycle repair orange ca]
"motorcycle repair orange ca"
[motorcycle mechanic orange ca]
"motorcycle mechanic orange ca"
[motorcycle service orange ca]
"motorcycle service orange ca"
[motorcycle repair near me]
"motorcycle mechanic near me"
"motorcycle mechanic near orange circle"
```

---

## Campaign 2 — Pre-Purchase Motorcycle Inspection

**Campaign:** `GOOG_SEARCH_PREPURCHASE_OC_PHRASE_EXACT_202607`  
**Goal:** inspection leads from used-bike buyers.  
**Landing page:** pre-purchase checklist or future service page.

### Ad groups

1. pre purchase motorcycle inspection
2. used motorcycle inspection
3. marketplace motorcycle inspection
4. motorcycle inspection before buying

### Example keywords

```text
[pre purchase motorcycle inspection orange ca]
"pre purchase motorcycle inspection orange county"
[used motorcycle inspection orange ca]
"inspect used motorcycle before buying"
"motorcycle mechanic marketplace bike inspection"
```

### Angle

Used-bike buyers are trying to avoid a costly mistake. Lead with buyer protection, not repair.

---

## Campaign 3 — Service-Specific Search Test

**Campaign:** `GOOG_SEARCH_QUICKSERVICE_ORANGE_PHRASE_EXACT_202607`  
**Goal:** capture known-service demand.

### Ad groups

1. tire change
2. brake service
3. chain service
4. oil service

### Example keywords

```text
[motorcycle tire change orange ca]
"motorcycle tire mount balance orange ca"
[motorcycle brake service orange ca]
"motorcycle chain adjustment orange ca"
"motorcycle oil change orange ca"
```

### Caution

Do not overbuild this campaign until Dusty confirms which quick services he wants more of and what capacity/pricing looks like.

---

## Campaign 4 — Brand Defense

**Campaign:** `GOOG_SEARCH_BRAND_DUSTYS_EXACT_202607`  
**Goal:** protect branded searches if competitors or directories intercept demand.

### Keywords

```text
[dusty's motorcycle service]
[dustys motorcycle orange]
[dustys motorcycle repair]
[dusty's motorcycle service and repair]
```

### Budget

Very small. Only launch if branded search volume exists or competitors/directories take the top paid position.

---

## Budget Allocation — 30-Day Test

Only after readiness blockers are fixed.

| Campaign | Budget Share | Example $1,000 Test |
|---|---:|---:|
| High-Intent Repair | 55% | $550 |
| Pre-Purchase Inspection | 25% | $250 |
| Quick Service | 15% | $150 |
| Brand Defense | 5% | $50 |

If starting with only $500, skip Quick Service and Brand Defense unless there is obvious demand.

---

## Bidding Strategy

### Phase 1 — Learning / low data

Use:

- Manual CPC or Maximize Clicks with CPC cap,
- tight geo,
- exact/phrase only,
- aggressive search-term review.

Do **not** use tCPA immediately unless meaningful conversion volume exists.

### Phase 2 — Conversion data exists

After 20–30 qualified primary conversions:

- test Maximize Conversions,
- evaluate cost per qualified lead,
- consider tCPA only when lead quality and volume are stable.

### Phase 3 — Scale

Only scale if:

- qualified lead cost is acceptable,
- booked-job rate is known,
- Dusty can respond quickly,
- search terms remain clean.

---

## Conversion Hierarchy

### Primary conversions

- `contact_sms_click`
- `hero_text_photo_click`
- `mobile_cta_bar_click`
- `contact_phone_call_click`
- `form_submit` after endpoint live

### Secondary conversions

- `get_directions_click`
- `copy_text_template_click`
- `prototype_text_builder_sms_click`
- guide clicks
- referral shares

### Offline conversions to import later

- qualified_lead
- appointment_scheduled
- job_completed
- revenue_amount

---

## Negative Keyword Architecture

### Universal negatives

```text
free
jobs
career
salary
school
course
class
manual
pdf
parts only
for sale
bicycle
car
auto
scooter rental
warranty claim
```

### Campaign-specific negatives

For repair campaign, exclude if needed:

```text
inspection checklist
buying guide
license test
motorcycle dealer
new motorcycle
```

For inspection campaign, exclude if needed:

```text
home inspection
car inspection
smog
vin check only
```

---

## RSA Copy Bank

### Headlines

```text
Motorcycle Repair Orange CA
Text a Photo for a Quote
Veteran-Owned Moto Shop
No Phantom Repairs
Quote Before We Wrench
Near Orange Traffic Circle
Harleys, Sportbikes, Dirt Bikes
Used Bike Inspections
Honest Motorcycle Mechanic
No Phone Tag
All Makes & Eras
Text Dusty Today
```

### Descriptions

```text
Text year/make/model, issue, and a photo. Dusty gives a straight answer before wrenching.
```

```text
Veteran-owned motorcycle repair in Orange, CA. No upsells. No phone tag. All makes and eras.
```

```text
Need tires, brakes, chain work, diagnostics, or inspection? Quote before we wrench.
```

```text
Buying used? Text the listing and photos before you inherit someone else's problem.
```

---

## Asset / Extension Plan

Use:

- location asset,
- call asset,
- sitelinks,
- callouts,
- structured snippets.

### Sitelinks

- Services
- Pricing Guide
- Pre-Purchase Checklist
- Ride-Ready Checklist
- Contact Dusty

### Callouts

- Veteran-Owned
- No Phantom Repairs
- Quote Before We Wrench
- Text a Photo
- All Makes & Eras

### Structured snippets

Services:

```text
Diagnostics, Tires, Brakes, Chain, Inspections, Maintenance, Vintage, Dirt Bikes
```

---

## Microsoft Ads Plan

Launch only after Google proves keyword quality.

Approach:

- import Google campaigns manually,
- review match types and negatives after import,
- smaller budget,
- monitor search partners carefully.

---

## Optimization Cadence

### First 14 days

- search terms every 48 hours,
- add negatives quickly,
- check mobile click-to-call/SMS behavior,
- check geo report,
- verify lead quality manually.

### Weekly

- cost per SMS/call/form,
- search term quality,
- lead source and booked jobs,
- campaign budget pacing,
- ad copy performance,
- landing page behavior.

### Kill / pause conditions

Pause if:

- tracking breaks,
- form breaks,
- lead response cannot keep up,
- search terms are low intent,
- no qualified leads after meaningful spend,
- CPCs exceed owner-approved economics.
