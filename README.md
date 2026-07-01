# Dusty's Motorcycle Service & Repair — Digital Lead Engine

> Static, no-build website and operating system for Dusty's Motorcycle Service & Repair in Orange, CA. The site is designed to convert local riders into text-first leads: **text a photo, get a straight answer, approve before we wrench.**

## What this repo contains

This repository is more than a landing page. It now contains the public website plus strategy, growth, customer support, analytics, paid media, social, AEO, and operational playbooks created through specialist agent passes.

## Quick start

Run the site locally from the repo root:

```bash
python3 -m http.server 8080
```

Open:

```text
http://127.0.0.1:8080/
```

No build step is required. The site is plain HTML/CSS/JS.

## Primary public files

| Path | Purpose |
|---|---|
| `index.html` | Main homepage / lead-capture site |
| `sitemap.xml` | Search sitemap including guide pages |
| `robots.txt` | Search + AI crawler access policy |
| `llms.txt` | Concise AI-readable site summary |
| `llms-full.txt` | Expanded AI-readable site context |
| `manifest.webmanifest` | PWA metadata |
| `sw.js` | Service worker static cache |
| `AGENTS.md` | Public agent guidance |
| `agent-permissions.json` | Agent permission declaration |
| `mcp-actions.json` | Agentic action declaration |

## Public guide pages

| Page | Purpose |
|---|---|
| `guides/pre-purchase-motorcycle-inspection-checklist.html` | Used-bike buyer checklist |
| `guides/santiago-canyon-ride-ready-checklist.html` | Ride-ready safety checklist |
| `guides/how-to-choose-motorcycle-mechanic-orange-ca.html` | AI/search-friendly mechanic selection guide |
| `guides/motorcycle-repair-pricing-orange-ca.html` | Pricing transparency guide |
| `guides/refer-a-rider.html` | Referral share page |

Markdown alternatives live in `content/` for AI/search/agent parsing.

## Key conversion paths

Primary conversion actions:

- `hero_text_photo_click`
- `mobile_cta_bar_click`
- `contact_sms_click`
- `contact_phone_call_click`
- `form_submit`
- `prototype_text_builder_sms_click`
- `get_directions_click`

Important: `form_submit` is not production-ready until `YOUR_FORM_ID` is replaced with a real endpoint.

## Main blocking items before scaling

1. Replace `YOUR_FORM_ID` with a real Formspree / Netlify / CRM endpoint.
2. Install and verify GA4/GTM.
3. Confirm address and hours with Dusty.
4. Update Google Business Profile, Yelp, Facebook, Nextdoor, Birdeye, Apple Maps, and Bing Places.
5. Set up SMS auto-reply / lead response workflow.
6. Approve warranty, pricing, and guide PDF language.
7. Run Lighthouse / accessibility QA after deployment.

## Documentation map

| Path | Purpose |
|---|---|
| `docs/DEVELOPER_HANDOFF.md` | Developer setup, validation, and architecture notes |
| `docs/MAINTENANCE_GUIDE.md` | How to safely update the site and operating assets |
| `docs/ASSET_INVENTORY.md` | Directory map and content ownership |
| `dusty_research/executive_summary_2026-06-30.md` | Executive-level project summary |
| `dusty_research/master-refactoring-dossier.md` | Full strategy dossier |
| `IMPLEMENTATION_TRACKER.md` | Root task/status tracker |
| `dusty_research/implementation_tracker.md` | Research-folder tracker copy |

## Directory overview

| Directory | Contents |
|---|---|
| `images/` | Site images, WebP assets, PWA icons |
| `guides/` | Public HTML guide pages |
| `content/` | Markdown alternatives for guides/business context |
| `dusty_research/` | Agent reports, dossier, research notes, trackers |
| `analytics_assets/` | Measurement plan, event taxonomy, lead log, weekly report template |
| `customer_service_assets/` | Support scripts, FAQ responses, escalation log |
| `customer_success_assets/` | Review/referral workflow and customer tracker |
| `email_assets/` | Email lifecycle strategy and sequence specs |
| `growth_assets/` | Growth experiment backlog and dashboard spec |
| `intelligence_assets/` | X/Twitter monitoring queries and evidence log templates |
| `paid_media_assets/` | Paid search/social strategy, copy, negative keywords, campaign CSVs |
| `pricing_assets/` | Pricing strategy and owner worksheet |
| `product_assets/` | Roadmap, launch-readiness PRD, backlog |
| `sales_assets/` | Sales engineering, coaching, objection handling |
| `social_assets/` | Social, Instagram, Reddit, LinkedIn, X/Twitter playbooks |
| `support_assets/` | Support responder macros and interaction templates |
| `video_assets/` | Video optimization, scripts, editing workflow |
| `visual_assets/` | Image prompt and photo direction library |

## Validation commands

Run before committing major changes:

```bash
python3 - <<'PY'
from pathlib import Path
import json, re, xml.etree.ElementTree as ET
s = Path('index.html').read_text()
for block in re.findall(r'<script type="application/ld\+json">\s*(.*?)\s*</script>', s, re.S):
    json.loads(block)
ET.parse('sitemap.xml')
for f in ['agent-permissions.json', 'mcp-actions.json', 'manifest.webmanifest']:
    json.loads(Path(f).read_text())
print('Core JSON-LD, sitemap, and JSON files are valid')
PY
```

Check the main script syntax:

```bash
python3 - <<'PY'
from pathlib import Path
import re
s = Path('index.html').read_text()
Path('/tmp/dusty-main.js').write_text(re.findall(r'<script>(.*?)</script>', s, re.S)[-1])
PY
node --check /tmp/dusty-main.js
```

## Deployment notes

The repo is designed for any static host. After deployment:

- verify `/`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/mcp-actions.json`, and guide pages return `200`;
- test SMS links on iOS and Android;
- test phone and directions links;
- verify service worker cache after version bumps;
- submit sitemap in Google Search Console and Bing Webmaster Tools.

## Business contact

Dusty's Motorcycle Service & Repair  
130 S Lemon St, Orange, CA 92866  
Phone/text: (714) 787-9453
