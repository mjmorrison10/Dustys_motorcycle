# Paid Media Auditor Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Paid Media Auditor from Agency Agents app corpus (`paid-media-auditor.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Audit paid media readiness, identify blockers before ad spend, create pre-launch checklist, campaign blueprint, tracking requirements, and kill criteria.

---

## Executive Summary

Dusty should **not scale paid media yet**.

The website and offer are strong, but paid ads should wait until measurement and lead handling are operational. The biggest paid-media risks are:

1. GA4/GTM tracking is not live.
2. The contact form still uses `YOUR_FORM_ID`.
3. Google Business Profile / local listings still need cleanup.
4. Lead source tracking is not yet operational.
5. Review request workflow is not yet active.

Paid traffic before these are fixed could create unmeasured or mishandled leads.

---

## Files Added

### Paid media audit readiness

Created:

```text
paid_media_assets/dustys_paid_media_audit_readiness.md
```

Includes:

- paid media readiness verdict,
- funnel audit,
- required conversion events,
- Google Ads readiness checklist,
- starter keywords,
- negative keyword list,
- Meta Ads readiness checklist,
- landing page QA checklist,
- UTM convention,
- 30-day test budget recommendation,
- kill criteria.

### Campaign blueprint

Created:

```text
paid_media_assets/dustys_paid_media_campaign_blueprint.md
```

Includes outlines for:

1. Google Search — Motorcycle Repair Orange CA
2. Google Search — Pre-Purchase Inspection
3. Meta Retargeting — Guide Visitors
4. Meta Retargeting — Used-Bike Buyers

---

## Paid Media Readiness Scorecard

| Area | Status | Severity | Notes |
|---|---|---|---|
| Offer | Ready | Low | “Text a photo, get a straight answer” is strong |
| Landing page | Mostly ready | Medium | Needs browser QA and form endpoint |
| Tracking | Not ready | Critical | GA4/GTM not installed/tested |
| Form conversion | Blocked | Critical | `YOUR_FORM_ID` still placeholder |
| SMS CTA | Ready | Low | Strong channel, needs event verification |
| GBP / local entity | Needs cleanup | High | Paid local search performs better with clean entity signals |
| Lead response process | Assets ready | Medium | Needs operational execution |
| Review velocity | Needs workflow | Medium | Important for paid conversion trust |

---

## Required Before Spend

- Install GA4/GTM.
- Verify event tracking in DebugView.
- Replace `YOUR_FORM_ID` with real endpoint.
- Verify phone/SMS/directions clicks on mobile.
- Claim/update Google Business Profile.
- Fix NAP inconsistencies.
- Start weekly lead source log.
- Define cost-per-qualified-lead threshold with Dusty.

---

## First Paid Channels After Readiness

### 1. Google Search

Best first channel because intent is highest.

Primary campaign:

```text
motorcycle repair orange ca
motorcycle mechanic orange ca
motorcycle service orange ca
```

### 2. Google Search — Pre-Purchase Inspection

Good niche campaign because it is high-trust and buyer-protection oriented.

### 3. Meta Retargeting

Use for retargeting only at first. Do not start with cold Meta prospecting.

---

## Paid Media Auditor Verdict

Dusty has the right offer and landing page direction, but paid media should stay paused until measurement and lead handling are fixed. Once ready, start with tight Google Search campaigns and small Meta retargeting. Optimize for booked jobs and qualified text leads — not clicks.
