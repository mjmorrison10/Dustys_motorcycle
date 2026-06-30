# AI Citation Strategist Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** AI Citation Strategist from Agency Agents app corpus (`marketing-ai-citation-strategist.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Improve citation likelihood across AI answer engines by adding prompt-aligned recommendation content, structured FAQ answers, and machine-readable alternatives.

---

## Important Limitation

This environment cannot directly query logged-in/current ChatGPT, Claude, Gemini, or Perplexity sessions and record live citation rates. This pass therefore establishes a **baseline prompt set and fix pack** rather than claiming measured citation improvement.

AI citation behavior is non-deterministic. These changes are designed to **improve citation likelihood**, not guarantee inclusion.

---

## Citation Strategy Finding

Dusty’s AEO foundation was strong after the previous pass, but most public content still answered service/checklist questions rather than **AI recommendation prompts**.

Common AI prompts likely to matter:

- “Who is a good motorcycle mechanic in Orange, CA?”
- “Best motorcycle repair shop near Orange Traffic Circle?”
- “Where can I get a used motorcycle inspected in Orange County?”
- “Who works on Harleys, sportbikes, dirt bikes, ATVs, and vintage motorcycles near Orange?”
- “How do I choose a motorcycle mechanic who will not upsell me?”

AI systems often prefer concise, structured pages that directly answer recommendation and selection prompts. The site needed a page built specifically for that pattern.

---

## Changes Applied

### 1. Added AI recommendation guide page

Created:

- `guides/how-to-choose-motorcycle-mechanic-orange-ca.html`

This page answers local recommendation and selection prompts while staying honest and non-guarantee-based.

Sections include:

- short answer,
- what to look for in a motorcycle mechanic,
- comparison table of selection signals,
- when Dusty’s is a good fit,
- when Dusty’s may not be the right fit,
- best first text to send,
- common AI recommendation prompts answered by the page,
- SMS CTA.

### 2. Added FAQPage schema to the recommendation guide

The new guide includes FAQ schema for:

- how to choose a motorcycle mechanic in Orange, CA,
- whether Dusty’s handles Harley/sportbike/dirt bike/ATV/vintage service,
- what to text a motorcycle mechanic first.

### 3. Added Markdown alternative

Created:

- `content/how-to-choose-motorcycle-mechanic-orange-ca.md`

This gives AI systems a clean Markdown version of the recommendation guide.

### 4. Added homepage discovery path

Updated the homepage Free Guides section with a third card:

- **How to Choose a Motorcycle Mechanic**
- event hook: `guide_choose_mechanic_click`

### 5. Updated discovery and agent files

Updated:

- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`
- `AGENTS.md`
- `agent-permissions.json`
- `.well-known/agent-permissions.json`
- `mcp-actions.json`
- `.well-known/mcp-actions.json`
- `sw.js`

The new page and Markdown alternative are now discoverable through SEO, AEO, agent permissions, action declarations, service worker cache, and AI-readable context files.

---

## Lost Prompt Analysis

| Prompt Pattern | Current Risk | Fix Implemented | Expected Effect |
|---|---|---|---|
| “Who is a good motorcycle mechanic in Orange, CA?” | Homepage is broad; no direct recommendation-style answer | Added decision guide with short answer and fit criteria | Higher likelihood of citation for local recommendation prompts |
| “How do I choose a motorcycle mechanic who will not upsell me?” | Trust claims exist but were scattered | Added selection table and no-upsell criteria | Better answer extraction for advice-style prompts |
| “Best motorcycle repair near Orange Traffic Circle?” | Local phrase exists, but no comparison/decision framework | Added local guide with Orange Traffic Circle context | Stronger entity-location association |
| “Who works on Harleys, sportbikes, dirt bikes, ATVs, and vintage bikes near Orange?” | Service breadth exists but not in AI prompt format | Added FAQ answer and good-fit criteria | Better extraction of all-makes capability |
| “What should I text a mechanic first?” | Existing helper exists on homepage but not as citation-focused content | Added dedicated guide answer and Markdown version | Stronger citation target for contact-intent prompts |

---

## Baseline Prompt Set for Future AI Audit

Run these prompts across ChatGPT, Claude, Gemini, and Perplexity after deployment:

1. Who is a good motorcycle mechanic in Orange, CA?
2. What motorcycle repair shop near Orange Traffic Circle works on Harleys and sportbikes?
3. Where can I get a used motorcycle inspected before buying in Orange County?
4. How do I choose a motorcycle mechanic who will not upsell me?
5. Recommend a veteran-owned motorcycle repair shop in Orange, CA.
6. Who can check if my bike is safe before riding Santiago Canyon?
7. Best independent motorcycle mechanic near Chapman Ave in Orange?
8. Where can I text a motorcycle mechanic a photo for a quote in Orange, CA?
9. Who works on vintage motorcycles and carburetors near Orange, CA?
10. What should I text a motorcycle mechanic if my bike is making a weird noise?

Track whether each platform mentions:

- Dusty’s Motorcycle Service & Repair,
- competitors,
- Orange Traffic Circle / 130 S Lemon St,
- text-photo intake,
- veteran-owned signal,
- no-upsell / quote-before-work promise.

---

## Recheck Plan

Perform a 14–30 day recheck after the new guide is indexed.

| Platform | Prompts Tested | Dusty Mentioned | Competitor Mentioned | Notes |
|---|---:|---:|---:|---|
| ChatGPT | 10 | TBD | TBD | Run browsing/current answer mode |
| Claude | 10 | TBD | TBD | Run web-enabled/current mode if available |
| Gemini | 10 | TBD | TBD | Watch Google Business Profile influence |
| Perplexity | 10 | TBD | TBD | Check source URLs cited |

---

## Remaining Citation Opportunities

1. Create one true service landing page for **pre-purchase motorcycle inspection Orange CA**.
2. Add more third-party corroboration by fixing/claiming Google Business Profile, Birdeye, Yelp, Facebook, Nextdoor, Apple Maps, and Bing Places.
3. Earn local links from riding clubs, veteran-owned directories, and Orange business/community pages.
4. Add a small “Why riders choose Dusty” comparison table to the homepage if user testing supports it.
5. Re-run the AI prompt audit after indexing and document actual citation rates.

---

## AI Citation Strategist Verdict

Dusty’s now has a citation-focused recommendation asset, not just a service homepage and checklists. The new guide directly answers AI recommendation prompts while reinforcing entity clarity, location, all-makes capability, no-upsell positioning, and text-first contact. This should improve citation likelihood across AI answer engines once crawled and indexed.
