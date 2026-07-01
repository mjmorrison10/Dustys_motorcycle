# Dusty's Motorcycle Service & Repair — Email & CRM Marketing Playbook

**Purpose:** Build a simple lifecycle email/SMS system that turns website/social leads into booked work, reviews, referrals, and repeat service without spamming riders.

**Important:** Dusty's highest-converting channel is likely SMS, not email. Email should support checklists, follow-up, reviews, referrals, and seasonal reminders. Urgent repair conversations should stay text/phone first.

---

## System Recommendation

### Minimum viable stack

- **Lead capture:** website form + SMS CTA.
- **CRM source of truth:** Google Sheets, Airtable, HubSpot Free, or Jobber/Square if adopted.
- **Email platform:** MailerLite, Brevo, or Mailchimp.
- **Automation:** native ESP automation first; Zapier/Make/n8n later if needed.
- **Review link:** Google review URL once GBP is verified.

### Do not launch email until

- SPF/DKIM/DMARC are configured for the sending domain.
- Consent source is recorded.
- Unsubscribe link is present.
- Physical mailing address is included if required by ESP/CAN-SPAM.
- Form endpoint is live and tested.

---

## CRM / ESP Attribute Map

| Field | ESP Attribute | Type | Example Values | Notes |
|---|---|---|---|---|
| First name | FIRSTNAME | text | Mike | Optional but useful |
| Email | EMAIL | email | rider@email.com | Validate at capture |
| Phone | PHONE | phone | 714-555-1234 | Primary reply channel |
| Bike | BIKE | text | 2018 Honda CBR500R | Key personalization field |
| Service interest | SERVICE_INTEREST | category | maintenance, repair, tires, inspection, rebuild, other | From form/select |
| Lead source | LEAD_SOURCE | category | website, instagram, facebook, google, referral, reddit, linkedin | Ask or infer |
| Lifecycle stage | LIFECYCLE_STAGE | category | new_lead, active_job, completed_customer, review_requested, referral_candidate, inactive | Prevents wrong emails |
| Consent source | CONSENT_SOURCE | text | website_form, checklist_optin, manual_import | Required for audit |
| Consent date | CONSENT_DATE | date | 2026-06-30 | Required for audit |
| Last service date | LAST_SERVICE_DATE | date | 2026-07-15 | Enables service reminders |
| Review requested | REVIEW_REQUESTED | boolean | true/false | Avoid duplicate requests |
| Referral asked | REFERRAL_ASKED | boolean | true/false | Avoid over-asking |

---

## Segments

### Segment 1 — New Website Leads

**Definition:**

- `LIFECYCLE_STAGE = new_lead`
- `LEAD_SOURCE in website, guide, social`
- not unsubscribed
- not hard bounced

**Goal:** get first reply / booked visit.

---

### Segment 2 — Guide Download / Checklist Leads

**Definition:**

- `SERVICE_INTEREST in inspection, ride_ready, checklist`
- `LIFECYCLE_STAGE = new_lead`
- not booked yet

**Goal:** convert guide value into inspection or ride-ready service.

---

### Segment 3 — Completed Customers

**Definition:**

- `LIFECYCLE_STAGE = completed_customer`
- `LAST_SERVICE_DATE exists`
- not unsubscribed

**Goal:** review, referral, repeat service.

---

### Segment 4 — Inactive Customers

**Definition:**

- completed customer
- `LAST_SERVICE_DATE > 180 days ago`
- no recent job
- not unsubscribed

**Goal:** seasonal check or reactivation.

---

## Lifecycle Sequences

## Sequence A — New Lead Follow-Up

**Trigger:** website form submission or checklist opt-in.  
**Channel:** email only if consented; SMS remains primary for urgent repair.  
**Goal:** get the rider to reply/text/book.

| # | Timing | Subject | Content Focus | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Immediate | Got your bike note — here’s what helps Dusty reply fast | what to send: bike, issue, photo/video | Text Dusty | replies/books/unsub |
| 2 | Day 2 | Before you approve motorcycle repair work | quote-before-wrenching / no surprise work | Ask a question | books/unsub |
| 3 | Day 5 | Not sure if it’s safe to ride? | brakes/tires/steering/oil leak safety caveat | Text a photo | books/unsub |

---

## Sequence B — Pre-Purchase Inspection Nurture

**Trigger:** pre-purchase checklist view/opt-in or service interest = inspection.

| # | Timing | Subject | Content Focus | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Immediate | Used bike checklist: don’t inherit someone else’s problem | checklist link + cold-start rule | Open checklist | books/unsub |
| 2 | Day 2 | The 5 used-bike red flags I’d never ignore | VIN/title, fork seals, tire date, chain, cold start | Text listing/photos | books/unsub |
| 3 | Day 6 | Buying this weekend? Get it looked at first | inspection value vs hidden repair cost | Text Dusty | books/unsub |

---

## Sequence C — Post-Service Review Request

**Trigger:** job marked complete.  
**Delay:** 2–7 days after pickup, after personal handoff.  
**Goal:** Google review.

| # | Timing | Subject | Content Focus | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Day 2 | How’d the bike feel after pickup? | thank-you + review ask | Leave Google review | review left/unsub |
| 2 | Day 7 | Quick favor if Dusty treated you right | local rider trust + review link | Leave review | review left/unsub |

**Important:** Do not ask for a review if there is an unresolved complaint.

---

## Sequence D — Referral Ask

**Trigger:** completed customer with positive review or positive feedback.  
**Delay:** 30–60 days after service.

| # | Timing | Subject | Content Focus | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Day 30–60 | Know a rider who needs an honest mechanic? | referral ask, no pressure | Forward Dusty’s info | unsub |
| 2 | Day 75 | Save this before someone asks you for a shop | phone/address/checklists | Forward / save | unsub |

---

## Sequence E — Seasonal Ride-Ready Reminder

**Trigger:** quarterly or before riding season / weekend campaign.

Segments:

- completed customers,
- inactive customers,
- guide leads who consented.

Content:

- tires,
- brakes,
- chain,
- fluids,
- lights,
- throttle/clutch.

CTA:

```text
Text Dusty if something looks off.
```

---

## Email Copy Templates

### New lead email 1

**Subject A:** Got your bike note — here’s what helps Dusty reply fast  
**Subject B:** Best first text to send Dusty

```text
Hey {{FIRSTNAME|there}},

If you need help with the bike, the fastest first message is simple:

- year / make / model
- what changed
- one photo or short video
- whether it still rides

Example:

“2018 CBR500R. Chain noise started after the last ride. It gets louder when rolling. I’ll send a short video. Safe to ride or bring it in?”

You don’t need perfect mechanic words. Useful context is enough.

Text Dusty: 714-787-9453

No phantom repairs. No upsells. Quote before we wrench.
```

---

### Pre-purchase nurture email

**Subject A:** Don’t buy someone else’s motorcycle problem  
**Subject B:** Used bike checklist before you hand over cash

```text
Hey {{FIRSTNAME|there}},

Buying a used bike?

Before you hand over cash, check:

- VIN/title match
- cold start
- tire date codes
- fork seals
- chain and sprockets
- brakes
- leaks
- signs of crash damage

If the seller won’t let you inspect it cold or have a mechanic look at it, that’s a red flag.

Use the checklist here:
https://dustysmoto.com/guides/pre-purchase-motorcycle-inspection-checklist.html

Want Dusty to look at it before you buy? Text the listing and photos: 714-787-9453
```

---

### Review request email

**Subject A:** Quick favor if Dusty treated you right  
**Subject B:** How’d the bike feel after pickup?

```text
Hey {{FIRSTNAME|there}},

Hope the bike is feeling right after the work.

If Dusty treated you fairly, would you mind leaving a quick Google review?

It helps local riders find an honest shop and avoid dealership runaround.

Review link: {{GOOGLE_REVIEW_LINK}}

Appreciate you,
Dusty’s Motorcycle Service & Repair
```

---

### Referral email

**Subject A:** Know a rider who needs an honest mechanic?  
**Subject B:** Save Dusty’s number before someone asks

```text
Hey {{FIRSTNAME|there}},

If you know a rider in Orange County who needs a straight answer, send them Dusty’s number.

Best first text:

“Year / make / model + what happened + one photo or short video.”

Dusty’s Motorcycle Service & Repair
130 S Lemon St, Orange, CA
714-787-9453

No phantom repairs. No upsells. Quote before we wrench.
```

---

## Deliverability Checklist

Before first campaign:

- [ ] Sending domain chosen.
- [ ] SPF configured.
- [ ] DKIM configured.
- [ ] DMARC configured, at least `p=none` with reporting.
- [ ] Reply-to inbox monitored.
- [ ] Unsubscribe link enabled.
- [ ] Physical mailing address configured in ESP.
- [ ] Hard bounces automatically suppressed.
- [ ] Imported contacts have consent source/date.
- [ ] Test email sent to Gmail, Apple Mail, Outlook.

---

## Metrics

Do not optimize based only on opens.

Track:

- CTR,
- CTOR,
- replies,
- SMS clicks,
- guide clicks,
- review clicks,
- booked jobs,
- unsubscribes,
- complaint rate,
- hard bounce rate.

Targets for Dusty’s small local list:

| Metric | Target |
|---|---:|
| CTR | 3–8% |
| CTOR | 10–20% |
| Unsubscribe rate | < 0.5% |
| Complaint rate | < 0.10% |
| Hard bounce rate | < 1% |
| Review click rate | 8–20% |
| Referral reply/forward signal | 2–5% |

