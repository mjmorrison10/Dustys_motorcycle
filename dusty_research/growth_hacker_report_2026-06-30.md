# Growth Hacker Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Growth Hacker from Agency Agents app corpus (`marketing-growth-hacker.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Build a practical growth experimentation system, define the North Star metric, add a referral-share loop, and create measurement assets for Dusty’s local lead engine.

---

## Executive Summary

Dusty does not need “growth hacks” that create low-quality leads. Dusty needs a repeatable local growth loop:

```text
Useful content → trust → text-first lead → good service → review/referral → more local discovery
```

The recommended North Star metric is:

> **Qualified text/form leads per month that include year/make/model + issue + photo/video.**

---

## Files Added

### Referral share page

Created:

```text
guides/refer-a-rider.html
```

This page gives happy customers a simple message to copy or send by SMS when they know another rider who needs a straight-answer mechanic.

### Markdown alternative

Created:

```text
content/refer-a-rider.md
```

### Growth experiment backlog

Created:

```text
growth_assets/dustys_growth_experiment_backlog.md
```

Includes:

- ICE scoring framework,
- P0 measurement setup,
- P1 conversion experiments,
- P2 acquisition experiments,
- P3 retention/referral experiments,
- 4-week recommended sprint.

### Growth dashboard spec

Created:

```text
growth_assets/dustys_growth_dashboard_spec.md
```

Includes:

- North Star metric,
- weekly metrics,
- lead source values,
- weekly review questions.

---

## Growth Changes Applied

### 1. Referral loop prototype

Added a public referral page that lets users:

- copy referral text,
- send Dusty’s info by SMS,
- understand there is no formal referral discount approved yet.

Events:

- `referral_sms_share_click`
- `referral_copy_click`
- `referral_copy_success`

### 2. Discovery updates

Updated:

- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`
- `agent-permissions.json`
- `.well-known/agent-permissions.json`
- `mcp-actions.json`
- `.well-known/mcp-actions.json`
- `sw.js`

Service worker cache bumped to the next version.

---

## Top Experiments

### P0 — Measurement setup

1. GA4/GTM event tracking.
2. Lead source field/process.
3. Weekly lead log.

### P1 — Conversion

1. First-text builder.
2. Referral share page.
3. Strongest review near hero.
4. Pricing guide CTA.

### P2 — Acquisition

1. Google Business Profile weekly posts.
2. Instagram “Text a Photo” reels.
3. Used-bike checklist in local groups.
4. Gear shop referral cards.

### P3 — Retention / Referral

1. Post-service review SMS.
2. Save Dusty’s number card.
3. Seasonal ride-ready reminder.

---

## Growth Hacker Verdict

The best growth system for Dusty is not paid ads first. It is instrumentation, referral sharing, review velocity, GBP/social consistency, and practical guide content that turns rider uncertainty into text-first leads. The referral page and experiment backlog create a lightweight system for testing what actually drives qualified jobs.
