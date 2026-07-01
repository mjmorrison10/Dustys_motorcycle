# Email Marketing Strategist Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Email Marketing Strategist from Agency Agents app corpus (`marketing-email-strategist.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Create CRM/email lifecycle strategy, segmentation architecture, sequence specs, deliverability checklist, and email templates for Dusty's.

---

## Executive Summary

Dusty’s primary conversion channel should remain SMS, especially for urgent repair questions. Email should support the broader lifecycle:

- checklist delivery,
- lead follow-up,
- pre-purchase inspection nurture,
- review requests,
- referrals,
- seasonal ride-ready reminders,
- inactive customer reactivation.

The email strategy is not “send newsletters.” It is lifecycle-based follow-up using clean consent and clear segments.

---

## Files Added

### Email playbook

Created:

```text
email_assets/dustys_email_marketing_playbook.md
```

Includes:

- recommended minimum viable stack,
- CRM/ESP attribute map,
- segments,
- lifecycle sequences,
- email copy templates,
- deliverability checklist,
- metrics and benchmarks.

### Sequence specs

Created:

```text
email_assets/dustys_email_sequence_specs.md
```

Includes implementation-ready specs for:

1. New Lead Follow-Up
2. Pre-Purchase Inspection Nurture
3. Post-Service Review Request
4. Referral Ask
5. Seasonal Ride-Ready Reminder

---

## Segmentation Architecture

Primary segments:

1. New Website Leads
2. Guide Download / Checklist Leads
3. Completed Customers
4. Inactive Customers

Suppression segments:

- unsubscribed,
- hard bounce,
- complaint,
- do not contact,
- unresolved complaint.

---

## Recommended Lifecycle Sequences

### New Lead Follow-Up

Goal: get the rider to text/reply/book.

### Pre-Purchase Inspection Nurture

Goal: convert guide interest into inspection lead.

### Post-Service Review Request

Goal: drive Google reviews after successful service.

### Referral Ask

Goal: turn satisfied customers into referrals.

### Seasonal Ride-Ready Reminder

Goal: bring riders back before canyon rides and seasonal maintenance.

---

## Deliverability Requirements

Before launch:

- SPF configured.
- DKIM configured.
- DMARC configured.
- Unsubscribe enabled.
- Reply inbox monitored.
- Physical address configured in ESP.
- Consent source/date recorded.
- Hard bounces suppressed.
- Test emails sent to Gmail, Apple Mail, and Outlook.

---

## Metrics

Open rates are directional only due to Apple Mail Privacy Protection. Optimize for:

- CTR,
- CTOR,
- replies,
- SMS clicks,
- guide clicks,
- review clicks,
- booked jobs,
- unsubscribes,
- complaints,
- bounces.

---

## Email Marketing Strategist Verdict

Email should support Dusty’s text-first business model, not replace it. The new CRM fields, lifecycle segments, and sequence specs give Dusty a practical email system that can start small and grow into a reliable review, referral, and repeat-service engine.
