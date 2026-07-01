# Pricing Analyst Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Pricing Analyst from Agency Agents app corpus (`specialized-pricing-analyst.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Create a margin-protecting pricing framework, public pricing-transparency content, owner pricing worksheets, and discovery updates without inventing unapproved service prices.

---

## Executive Summary

Dusty should not compete as the cheapest motorcycle mechanic in Orange County. The defensible pricing position is:

> **Fair independent-shop pricing with honest diagnosis, no phantom repairs, quote-before-wrenching, and owner-operated trust.**

Because confirmed labor rates, diagnostic minimums, parts policy, and common service prices are not yet available, this pass **does not publish made-up prices**. Instead, it adds pricing transparency content and internal pricing tools so Dusty can approve real numbers later.

---

## Changes Applied

### 1. Added public pricing guide

Created:

```text
guides/motorcycle-repair-pricing-orange-ca.html
```

The guide explains:

- what affects motorcycle repair cost,
- why final quotes require bike context/diagnosis,
- quick service vs. diagnostic work vs. inspection vs. custom/rebuild work,
- how to text Dusty for a more accurate estimate,
- what Dusty will not do: phantom repairs, surprise wrenching, vague final quotes.

Added FAQPage schema for pricing-intent queries.

---

### 2. Added Markdown alternative

Created:

```text
content/motorcycle-repair-pricing-orange-ca.md
```

This gives AI/search agents a clean AI-readable version of the pricing guide.

---

### 3. Added pricing strategy assets

Created:

```text
pricing_assets/dustys_pricing_strategy_playbook.md
pricing_assets/dustys_pricing_worksheet.md
```

The playbook covers:

- pricing position,
- pricing principles,
- service packaging framework,
- diagnostic fee sensitivity model,
- discount policy,
- metrics to track,
- public pricing language.

The worksheet captures owner-approved pricing inputs for:

- labor rate,
- diagnostic minimum,
- rush premium,
- common service candidates,
- package ideas,
- quote tracking.

---

### 4. Updated homepage Free Guides section

Added a fourth card:

```text
Motorcycle Repair Pricing Guide
```

With event hook:

```text
guide_pricing_click
```

---

### 5. Updated discovery and agent files

Updated:

- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`
- `agent-permissions.json`
- `.well-known/agent-permissions.json`
- `mcp-actions.json`
- `.well-known/mcp-actions.json`
- `sw.js`

Service worker cache bumped:

```text
dustys-moto-v6 → dustys-moto-v7
```

---

## Pricing Strategy

### Recommended public position

Use:

```text
We quote before we wrench. Final price depends on the bike, parts, labor time, and what we find during diagnosis. Text year/make/model, issue, and a photo for the fastest next step.
```

Avoid:

```text
Cheapest motorcycle repair in Orange County.
```

Avoid:

```text
We can quote any repair by text.
```

---

## Sensitivity Analysis

Because actual Dusty-approved numbers are not available yet, the model uses relative scenarios around a future approved diagnostic base price.

| Diagnostic Price | Lead-to-Job Conversion Assumption | Effective Jobs per 20 Leads | Revenue from Diagnostics | Risk |
|---:|---:|---:|---:|---|
| Base -20% | Higher conversion, lower value capture | 13 | Lower | Attracts price shoppers |
| Base -10% | Slightly higher conversion | 12 | Medium-low | Some margin leakage |
| Base | Balanced | 11 | Balanced | Recommended starting test |
| Base +10% | Slightly lower conversion | 10 | Higher per job | May filter weak leads |
| Base +20% | Lower conversion, stronger value signal | 8–9 | Higher if accepted | Could suppress first-time leads |

Key metric to track:

```text
diagnostic_leads → diagnostic_approved → repair_approved → final_ticket → repeat_customer
```

---

## Owner Inputs Needed

Before publishing actual price ranges, Dusty needs to confirm:

1. Standard labor rate.
2. Diagnostic minimum.
3. Whether quick-service menu prices should be public.
4. Parts markup / parts-sourcing policy.
5. Rush / same-day premium.
6. Pre-purchase inspection package scope.
7. Ride-ready safety check scope.
8. Discount/referral policy.

---

## Validation Performed

- New pricing guide page serves locally.
- Markdown pricing guide created.
- Homepage JSON-LD still parses successfully.
- Pricing guide FAQ schema parses successfully.
- Sitemap XML parses successfully.
- Agent permission/action JSON files parse successfully.
- Service worker cache includes pricing guide and Markdown alternative.

---

## Pricing Analyst Verdict

Dusty’s pricing advantage should be transparent process, not bargain positioning. The site now has a safe public pricing guide that answers pricing-intent search/AI prompts without inventing numbers, plus internal pricing tools to help Dusty approve a real service menu later.
