# Dusty's Motorcycle Service & Repair — Analytics Measurement Plan

**Purpose:** Define what to track, where it comes from, how to report it, and what decisions each metric supports.

**North Star Metric:** qualified leads per month that include year/make/model + issue/service need + source + photo/video or clear description.

---

## Measurement Priorities

1. **Lead intent:** SMS clicks, phone clicks, form submits, directions clicks.
2. **Lead quality:** bike info present, issue clear, source known, photo/video included.
3. **Channel performance:** organic search, Google Business Profile, social, paid search, paid social, referrals, Yelp, walk-ins.
4. **Conversion quality:** qualified lead → appointment/drop-off → completed job → review/referral.
5. **Content value:** guide clicks, pricing guide clicks, referral shares, text-builder usage.

---

## Data Sources

| Source | Data | Owner | Status |
|---|---|---|---|
| GA4 | sessions, traffic source, events, landing pages | Web/dev | Not installed |
| GTM | event triggers / tag management | Web/dev | Not installed |
| Website form | form submissions | Web/dev | Blocked by `YOUR_FORM_ID` |
| SMS/call logs | actual inquiries | Dusty | Manual / phone provider |
| Google Business Profile | calls, directions, website clicks | Dusty | Needs verification/cleanup |
| Lead log | lead source + qualification + outcome | Dusty/admin | Template needed |
| Review platforms | review count/rating/velocity | Dusty/admin | Manual initially |
| Paid platforms | spend, clicks, conversions | Ads manager | Not launched |

---

## Event Taxonomy

### Primary lead events

| Event | Type | Business Meaning | Primary? |
|---|---|---|---|
| `hero_text_photo_click` | SMS intent | Hero SMS lead intent | Yes |
| `mobile_cta_bar_click` | SMS intent | Sticky mobile CTA lead intent | Yes |
| `contact_sms_click` | SMS intent | Contact-section SMS lead intent | Yes |
| `contact_phone_call_click` | call intent | Phone lead intent | Yes |
| `form_submit` | form lead | Form lead, only valid after endpoint live | Yes |
| `get_directions_click` | local intent | Possible walk-in/local intent | Yes |

### High-intent micro-conversions

| Event | Meaning |
|---|---|
| `copy_text_template_click` | User is preparing a first text |
| `prototype_text_builder_update` | User interacted with text builder |
| `prototype_text_builder_sms_click` | Text builder assisted SMS intent |
| `guide_pricing_click` | Pricing anxiety / estimate research |
| `guide_pre_purchase_click` | Used-bike inspection interest |
| `guide_ride_ready_click` | Maintenance / safety interest |
| `guide_choose_mechanic_click` | Comparison / trust research |
| `referral_sms_share_click` | Referral loop share intent |
| `referral_copy_success` | Referral message copied |
| `footer_referral_click` | Referral page discovery |

---

## GA4 Recommended Conversions

Mark these as conversions once tracking is installed:

- `hero_text_photo_click`
- `mobile_cta_bar_click`
- `contact_sms_click`
- `contact_phone_call_click`
- `form_submit`
- `prototype_text_builder_sms_click`
- `referral_sms_share_click`

Do not mark every guide click as a conversion. Use guide clicks as micro-conversions.

---

## Lead Quality Scoring

Score each lead 0–10.

| Field | Points |
|---|---:|
| year/make/model included | 2 |
| issue/service need clear | 2 |
| photo/video included | 2 |
| timeline/urgency known | 1 |
| source known | 1 |
| local / serviceable area | 1 |
| phone/text reachable | 1 |

Lead quality tiers:

- 8–10: high quality
- 5–7: workable
- 0–4: incomplete / needs follow-up

---

## Weekly Dashboard

### Top row

- website sessions,
- qualified leads,
- booked jobs,
- completed jobs,
- reviews received,
- average response time.

### Acquisition

- leads by source,
- sessions by source/medium,
- top landing pages,
- GBP calls/directions/site clicks,
- paid spend if active.

### Conversion

- SMS clicks,
- phone clicks,
- form submits,
- directions clicks,
- text-builder SMS clicks,
- guide-to-SMS behavior.

### Quality

- average lead quality score,
- % leads with bike info,
- % leads with photo/video,
- % leads with known source,
- no-show rate,
- quote approval rate.

### Retention

- review requests sent,
- reviews received,
- referral shares,
- returning customers,
- seasonal reminders sent.

---

## Weekly Decision Questions

1. Which source produced the most qualified leads?
2. Which source produced low-quality or incomplete leads?
3. Which CTA generated the best lead quality?
4. Are users using the text builder or skipping it?
5. Which guide produced real conversations?
6. Did any leads go unanswered or stale?
7. What should we test next week?

---

## Reporting Cadence

| Report | Frequency | Owner | Audience |
|---|---|---|---|
| Lead log review | weekly | Dusty/admin | internal |
| Marketing dashboard | weekly | web/marketing | Dusty |
| Review velocity | weekly | Dusty/admin | Dusty |
| Paid media report | weekly when active | ads manager | Dusty |
| Quarterly strategy review | quarterly | team | Dusty |

---

## Data Quality Checks

Weekly:

- [ ] Events are still firing.
- [ ] No duplicate conversions.
- [ ] Paid UTMs are present if ads are active.
- [ ] Lead source is captured for 80%+ of leads.
- [ ] Form endpoint works.
- [ ] Phone/SMS links work on mobile.
- [ ] Hard bounces/unsubscribes handled if email is active.

