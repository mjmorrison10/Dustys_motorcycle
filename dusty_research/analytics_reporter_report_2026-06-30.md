# Analytics Reporter Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Analytics Reporter from Agency Agents app corpus (`support-analytics-reporter.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Create measurement plan, event taxonomy, lead log template, weekly reporting template, and data-quality framework for Dusty’s marketing engine.

---

## Executive Summary

Dusty’s site now has many conversion paths, guide assets, social plans, paid media plans, and referral loops. The biggest analytics need is not more dashboards — it is a simple measurement system that answers:

> Which channels produce qualified leads that become booked jobs?

The North Star metric is:

> **Qualified leads per month that include year/make/model + issue/service need + source + photo/video or clear description.**

---

## Files Added

### Measurement plan

Created:

```text
analytics_assets/dustys_analytics_measurement_plan.md
```

Includes:

- measurement priorities,
- data sources,
- event taxonomy,
- GA4 conversion recommendations,
- lead quality scoring,
- weekly dashboard structure,
- reporting cadence,
- data quality checks.

### Event taxonomy CSV

Created:

```text
analytics_assets/dustys_event_taxonomy.csv
```

Includes 18 tracked events with category, primary/secondary status, business meaning, GA4 conversion recommendation, parameters, owner, and status.

### Lead log template

Created:

```text
analytics_assets/dustys_lead_log_template.csv
```

Includes fields for source, channel, bike, service interest, issue, photo/video, lead quality score, quote/booked/completed status, revenue, review status, and notes.

### Weekly report template

Created:

```text
analytics_assets/dustys_weekly_marketing_report_template.md
```

Includes executive summary, scorecard, leads by source, lead quality, CTA/content performance, data quality checks, and decisions needed.

---

## Primary Dashboard Recommendation

Track weekly:

- qualified leads,
- booked jobs,
- completed jobs,
- SMS clicks,
- phone clicks,
- form submits,
- directions clicks,
- lead quality score,
- leads by source,
- reviews requested/received.

---

## Data Quality Requirements

Before paid media or advanced reporting:

- GA4/GTM installed and verified.
- Form endpoint live.
- Lead source captured manually or automatically.
- Phone/SMS links tested on mobile.
- Duplicate conversions checked.
- Weekly lead log used consistently.

---

## Analytics Reporter Verdict

Dusty’s analytics system should stay simple at first: event tracking + lead log + weekly report. The goal is not vanity reporting. The goal is to know which channels generate qualified motorcycle repair leads that become booked jobs and reviews.
