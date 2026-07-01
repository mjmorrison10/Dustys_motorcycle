# Dusty's Motorcycle Service & Repair — Email Sequence Specs

This file converts the email playbook into implementation-ready sequence specs.

---

## Sequence A — New Lead Follow-Up

### Trigger

- Website form submitted OR checklist opt-in captured.
- Contact has email consent.

### Segment

- `LIFECYCLE_STAGE = new_lead`
- `CONSENT_SOURCE exists`
- Exclude unsubscribed, bounced, active job, completed customer.

### Emails

| # | Timing | Subject A | Subject B | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Immediate | Got your bike note — here’s what helps Dusty reply fast | Best first text to send Dusty | Text Dusty | replied/booked/unsub |
| 2 | Day 2 | Before you approve motorcycle repair work | Quote before we wrench | Ask a question | booked/unsub |
| 3 | Day 5 | Not sure if it’s safe to ride? | Don’t guess on brakes, tires, steering, or leaks | Text a photo | booked/unsub |

### Exit Conditions

- Contact replies or books.
- Stage changes to active_job.
- Unsubscribe.
- Hard bounce.
- Spam complaint.
- No engagement after 30 days → suppress from lead nurture, keep for quarterly newsletter only if consent allows.

---

## Sequence B — Pre-Purchase Inspection Nurture

### Trigger

- Visits/checklist opt-in for pre-purchase guide.
- Service interest = inspection.

### Segment

- `SERVICE_INTEREST = inspection OR checklist_pre_purchase`
- `LIFECYCLE_STAGE = new_lead`
- not active job / not completed customer.

### Emails

| # | Timing | Subject A | Subject B | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Immediate | Don’t buy someone else’s motorcycle problem | Used bike checklist before you hand over cash | Open checklist | booked/unsub |
| 2 | Day 2 | The 5 used-bike red flags I’d never ignore | Before you buy that Marketplace bike | Text listing/photos | booked/unsub |
| 3 | Day 6 | Buying this weekend? Get it looked at first | A pre-purchase inspection is cheaper than a surprise repair | Text Dusty | booked/unsub |

---

## Sequence C — Post-Service Review Request

### Trigger

- Job marked complete.
- No unresolved complaint.

### Segment

- `LIFECYCLE_STAGE = completed_customer`
- `LAST_SERVICE_DATE within last 2–7 days`
- `REVIEW_REQUESTED = false`

### Emails

| # | Timing | Subject A | Subject B | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Day 2 | How’d the bike feel after pickup? | Quick favor if Dusty treated you right | Leave Google review | review clicked/unsub |
| 2 | Day 7 | Local riders trust real reviews | Mind leaving a quick review? | Leave Google review | review clicked/unsub |

### Notes

- Best practice: Dusty asks personally first, then email follows.
- Do not send to unhappy/unresolved customers.

---

## Sequence D — Referral Ask

### Trigger

- Customer completed service and either left review or gave positive feedback.
- 30–60 days after service.

### Segment

- `LIFECYCLE_STAGE = completed_customer`
- `REVIEW_SENTIMENT = positive OR REVIEW_CLICKED = true`
- `REFERRAL_ASKED = false`

### Emails

| # | Timing | Subject A | Subject B | CTA | Exit If |
|---|---|---|---|---|---|
| 1 | Day 30–60 | Know a rider who needs an honest mechanic? | Send this to a rider who hates dealership runaround | Forward Dusty’s info | unsub |
| 2 | Day 75 | Save Dusty’s number before someone asks | A straight-answer mechanic in Orange, CA | Save/forward | unsub |

---

## Sequence E — Seasonal Ride-Ready Reminder

### Trigger

- Quarterly send OR weekend ride campaign.

### Segment

- Completed customers and consented guide leads.
- Exclude active jobs, unsubscribed, hard bounced.

### Email

**Subject A:** Before the next canyon ride  
**Subject B:** Tires, brakes, chain, fluids — quick check

CTA:

- Open ride-ready checklist.
- Text Dusty if something feels off.

---

## Required ESP Setup

- Lists:
  - All Consented Contacts
  - New Leads
  - Guide Leads
  - Completed Customers
  - Review Candidates
  - Referral Candidates
  - Inactive Customers

- Suppression lists:
  - Unsubscribed
  - Hard Bounce
  - Complaint
  - Do Not Contact
  - Unresolved Complaint

- Required merge tags:
  - `{{FIRSTNAME}}`
  - `{{BIKE}}`
  - `{{SERVICE_INTEREST}}`
  - `{{GOOGLE_REVIEW_LINK}}`

