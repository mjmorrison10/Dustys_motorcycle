# SEO Specialist Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** SEO Specialist from Agency Agents app corpus (`marketing-seo-specialist.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Read existing research folder, audit current single-page site, implement immediate SEO fixes that do not require owner credentials or third-party account access.

---

## Executive Summary

Dusty's site already had a strong conversion-oriented foundation: clear local positioning, prominent text/phone CTAs, LocalBusiness schema, reviews, FAQs, and a mobile sticky CTA. The fastest SEO wins were technical and on-page improvements:

1. Make the primary local keyword more visible in the hero content.
2. Add FAQPage structured data for existing visible FAQs.
3. Add richer LocalBusiness entity data and service catalog schema.
4. Improve image performance with WebP assets and preload the hero image.
5. Add `llms.txt` for AI-search/AEO readiness.
6. Prepare CTA tracking hooks for GA4/GTM once analytics credentials exist.
7. Refresh sitemap metadata and point crawlers/agents to AI-readable context.

These changes support rankings for queries like **motorcycle repair Orange CA**, **motorcycle service Orange CA**, **motorcycle mechanic near Orange Traffic Circle**, **Harley repair Orange CA**, and **pre-purchase motorcycle inspection Orange CA** without bloating the landing page or changing the current conversion strategy.

---

## SEO Agent Findings

### Cannibalization Audit

- Current site architecture: one public URL (`https://dustysmoto.com/`).
- Cannibalization risk: low / none right now because one page owns all broad local intent.
- Future risk: when service-specific pages are added, the homepage should keep ownership of broad head terms like `motorcycle repair Orange CA`, while service pages should own long-tail service terms.

### Technical SEO

| Area | Before | Action Taken | Status |
|---|---|---|---|
| Primary keyword in hero | Emotional H1 but no exact local service phrase nearby | Added visible hero SEO intro: “Honest Motorcycle Repair & Service in Orange, CA” | ✅ Improved |
| FAQ structured data | Visible FAQ existed; no FAQPage schema | Added FAQPage JSON-LD matching visible FAQ content | ✅ Done |
| LocalBusiness schema depth | Basic MotorcycleRepair schema | Expanded to `@graph` with MotorcycleRepair, WebSite, BreadcrumbList, FAQPage, service catalog, area served | ✅ Done |
| Image speed | JPG images only; hero JPG 322 KB | Added WebP versions; hero WebP is 188 KB; site references WebP for visible images | ✅ Improved |
| Hero image priority | No preload | Added `rel="preload"` for `images/hero_bg.webp` | ✅ Done |
| AI-search readiness | No `llms.txt` | Added root `llms.txt` with business identity, services, topics, and citation summary | ✅ Done |
| Sitemap freshness | `lastmod` was 2026-06-19; monthly frequency | Updated to 2026-06-30 and weekly frequency | ✅ Done |
| Conversion measurement | CTAs not analytics-ready | Added `data-event` hooks and dataLayer/gtag-compatible event pushes | ✅ Prepared |

---

## Files Changed

### Site files

- `index.html`
  - Added local keyword-rich hero block.
  - Preloaded WebP hero image.
  - Switched visible JPG assets to WebP versions.
  - Added richer JSON-LD graph with FAQPage and service catalog.
  - Added CTA event tracking hooks for future GA4/GTM.
- `robots.txt`
  - Added `llms.txt` discovery comment.
- `sitemap.xml`
  - Updated lastmod and change frequency.
- `llms.txt`
  - New AI-search/agent-readable business profile.

### New image assets

- `images/hero_bg.webp`
- `images/yelp_1.webp`
- `images/yelp_2.webp`
- `images/yelp_3.webp`
- `images/yelp_4.webp`
- `images/yelp_5.webp`
- `images/yelp_6.webp`
- `images/yelp_7.webp`
- `images/yelp_8.webp`

---

## Validation Performed

- Parsed JSON-LD successfully with Python `json.loads`.
- Confirmed one H1 remains on the page.
- Confirmed local image references exist.
- Confirmed new SEO elements exist in `index.html`.
- Confirmed current git working tree includes only expected SEO files before commit.

---

## Remaining SEO Tasks Requiring Owner or Platform Access

1. **Google Business Profile:** verify/claim, set exact NAP, hours, messaging, photos, Q&A.
2. **Google Search Console:** add property, submit sitemap, monitor indexing and queries.
3. **GA4/GTM:** install measurement ID and map these event names:
   - `hero_text_or_book_click`
   - `hero_phone_call_click`
   - `hero_sms_click`
   - `contact_sms_click`
   - `contact_phone_call_click`
   - `get_directions_click`
   - `mobile_cta_bar_click`
   - `form_submit`
4. **Listings cleanup:** correct Facebook, Nextdoor, Birdeye, Apple Maps, Bing Places to the canonical NAP.
5. **Reviews:** claim Birdeye profile and start review-request flow.
6. **Content expansion:** build service pages only after query ownership is mapped:
   - `/pre-purchase-motorcycle-inspection-orange-ca/`
   - `/vintage-motorcycle-repair-orange-ca/`
   - `/harley-repair-orange-ca/`
   - `/sportbike-service-orange-ca/`
   - `/dirt-bike-repair-orange-ca/`
   - `/motorcycle-tire-change-orange-ca/`

---

## Recommendation

The site is now stronger for local organic search and AI-search discovery. The next highest-impact SEO move is **not more code** — it is **local entity cleanup**: Google Business Profile, Birdeye, Facebook/Nextdoor address consistency, and review velocity. After that, build service-specific pages one at a time, with each page mapped to a distinct keyword cluster so the homepage does not get cannibalized.
