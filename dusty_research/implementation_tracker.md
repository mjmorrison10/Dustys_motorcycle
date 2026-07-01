# Dusty's Motorcycle Website — Implementation Tracker

**Purpose**: A living action list organized by owner and priority. Updated as we progress through each agent.

**Last updated**: 2026-06-30
**Current phase**: SEO, Persona Walkthrough, Brand Guardian, UX Architecture, UX Research, Content Creator, UI Designer, Frontend Developer, AEO Foundations, AI Citation, Agentic Search, Senior Developer, Rapid Prototyper, Visual Storyteller, Image Prompt Engineer, Social Media Strategist, Instagram Curator, Reddit Community Builder, LinkedIn Content Creator, Email Marketing Strategist, Pricing Analyst, Sales Engineer, and Sales Coach passes complete. Next: Accessibility QA / service pages / form endpoint.

---

## Legend

| Status | Meaning |
|--------|---------|
| ☐ Not started | Action pending |
| 🔄 In progress | Started but not complete |
| ✅ Done | Complete |
| ⏸ Blocked | Waiting on another task or decision |
| ❌ Deprioritized | Explicitly not doing now |

---

## 🧠 Hivemind / Web Dev Team (Me)

### NEED TO DO (Critical / Blocking Launch)

| # | Task | Status | Notes | Agent Source |
|---|------|--------|-------|--------------|
| 1 | Build and deploy the lead-capture website | ✅ Done | Single-page site pushed to GitHub at `mjmorrison10/Dustys_motorcycle` | Business Strategist, Offer & Lead Gen |
| 2 | Implement "Text or Book Online" primary CTA | ✅ Done | Hero, header, mobile nav, mobile sticky bar all updated | Offer & Lead Gen |
| 3 | Add lead magnet section (Free Guides) | ✅ Done | Pre-Purchase Inspection + Ride-Ready Checklist placeholders | Offer & Lead Gen |
| 4 | Add 3 guarantees section | ✅ Done | Honest Diagnosis, No Upsell, 30-min text-back | Offer & Lead Gen |
| 5 | Add sticky mobile CTA bar | ✅ Done | Bottom-fixed "Text Dusty — Get a Quote" bar | Dossier Section 8 |
| 6 | Update title/meta/OG tags for local SEO | ✅ Done | "Orange Traffic Circle" now in title, description, keywords | SEO, Dossier |
| 7 | Update schema hours to Mon–Sun 9am–7pm | ✅ Done | LocalBusiness JSON-LD updated | Dossier |
| 8 | Replace `YOUR_FORM_ID` with real form endpoint | ⏸ Blocked | Need Dusty to choose Formspree / Netlify / CRM | Offer & Lead Gen |
| 9 | Add actual PDF lead magnet files | 🔄 In progress | Draft printable HTML guide assets created; PDF design/export still optional after Dusty approval | Offer & Lead Gen, Content Creator |
| 10 | Set up conversion tracking (Google Analytics, event tags) | 🔄 In progress | CTA/dataLayer hooks added; needs GA4/GTM measurement ID | Analytics, SEO |
| 11 | Run technical SEO audit (speed, mobile, accessibility) | ✅ Done | SEO Specialist pass completed; JSON-LD validated; WebP assets added; full Lighthouse still recommended post-deploy | SEO, QA |
| 12 | Implement AEO/llms.txt for AI search visibility | ✅ Done | Added AI-aware robots, `llms.txt`, `llms-full.txt`, Markdown alternatives, agent permissions, action declarations | AEO Foundations |

### SHOULD DO (Important / Post-Launch Optimization)

| # | Task | Status | Notes | Agent Source |
|---|------|--------|-------|--------------|
| 1 | Create service-specific landing pages | ☐ Not started | `/vintage-motorcycle-repair/`, `/pre-purchase-inspection/`, etc. | SEO Specialist |
| 2 | Build blog content for local SEO keywords | ☐ Not started | Target "motorcycle repair Orange CA", "Santiago Canyon mechanic" | SEO Specialist, Content Creator |
| 3 | Add review widgets or embed live Google/Yelp reviews | ☐ Not started | Reduces reliance on static testimonials | UX, CRO |
| 4 | Add before/after photo gallery | ☐ Not started | Use Dusty's Instagram footage | Visual Storyteller |
| 5 | Add online booking calendar integration | ☐ Not started | Calendly, Acuity, Square after form works | Offer & Lead Gen |
| 6 | Create retargeting pixel infrastructure | ☐ Not started | Meta Pixel + Google Ads conversion setup | Paid Media |
| 7 | A/B test hero headline and CTA color/copy | ☐ Not started | Once traffic is sufficient | Growth Hacker |
| 8 | Build referral program landing page | ☐ Not started | $25 off for referrer and referee | Offer & Lead Gen |
| 9 | Add financing/payment plan messaging for large rebuilds | ☐ Not started | Mention if Dusty offers this | Business Strategist |
| 10 | Implement structured FAQPage schema | ✅ Done | Added FAQPage JSON-LD to existing visible FAQs | SEO Specialist |

---

## 👤 Dusty (Business Owner)

### NEEDS TO DO (Critical / Blocking Launch)

| # | Task | Status | Notes | Agent Source |
|---|------|--------|-------|--------------|
| 1 | Confirm exact current address is **130 S Lemon St, Orange, CA 92866** | ⏸ Pending | If this is correct, update all listings | Dossier, Research |
| 2 | Fix address inconsistency on Facebook, Nextdoor, Birdeye | ☐ Not started | Change 975 N Elm St → 130 S Lemon St | Dossier, Research |
| 3 | Confirm operating hours Mon–Sun 9am–7pm across all platforms | ⏸ Pending | Website now says Mon–Sun; Yelp says Mon–Sat | Dossier |
| 4 | Set up auto-reply SMS for (714) 787-9453 | ☐ Not started | Critical for "30-minute text-back" guarantee | Offer & Lead Gen |
| 5 | Choose and connect form endpoint (Formspree / Netlify / CRM) | ☐ Not started | Unblocks website form submission | Offer & Lead Gen |
| 6 | Claim Birdeye profile (86 reviews unclaimed) | ☐ Not started | Biggest missed review opportunity | Business Strategist |
| 7 | Verify/update Google Business Profile | ☐ Not started | Ensure hours, address, phone, photos current | SEO, Dossier |
| 8 | Verify/update Yelp profile | ☐ Not started | Already claimed; confirm hours | SEO, Dossier |
| 9 | Set up a business text line or answering service | ☐ Not started | Solves the core phone-tag problem | Business Strategist |
| 10 | Publish a written warranty policy | ☐ Not started | Website currently states 90-day parts & labor | Dossier, Business Strategist |
| 11 | Confirm pricing for common services for transparent quotes | ☐ Not started | Needed for honest/transparent pricing claims | Business Strategist |
| 12 | Approve lead magnet content and guarantees | ☐ Not started | So we can create actual PDFs | Offer & Lead Gen |
| 13 | Provide high-resolution logo (PNG transparent) | ☐ Not started | Currently using Yelp JPG | Research Notes |
| 14 | Provide 5–10 additional shop photos | ☐ Not started | For richer gallery and social posts | Research Notes |

### SHOULD DO (Growth / Marketing)

| # | Task | Status | Notes | Agent Source |
|---|------|--------|-------|--------------|
| 1 | Set up review-request SMS/email after every service | ☐ Not started | Goal: 8–15 new reviews/month | Offer & Lead Gen |
| 2 | Post 5 Google Business Profile photos/posts with CTAs | ☐ Not started | First 14-day action item | Offer & Lead Gen |
| 3 | Post 3 Instagram repair videos with "Text Dusty" captions | ☐ Not started | First 14-day action item | Offer & Lead Gen |
| 4 | Ask 20 past customers for reviews | ☐ Not started | Warm outreach phase | Offer & Lead Gen |
| 5 | Reactivate Facebook with weekly posts | ☐ Not started | Drive traffic to website | Dossier |
| 6 | Create/refresh Instagram content strategy | ☐ Not started | Use existing repair videos more strategically | Dossier |
| 7 | Hire/train apprentice if lead volume grows | ☐ Not started | Decision gate at 90 days / ≥20 leads/month | Business Strategist |
| 8 | Sponsor or partner with Orange riding clubs | ☐ Not started | Amplifier strategy | Offer & Lead Gen |
| 9 | Leave business cards at local gear shops | ☐ Not started | Low-cost referral channel | Offer & Lead Gen |
| 10 | Consider veteran/military community marketing | ☐ Not started | VA programs, military Facebook groups | Business Strategist |
| 11 | Decide on paid ads budget and timeline | ☐ Not started | Only after organic conversion proven | Business Strategist |
| 12 | Set up referral program ($25 off both sides) | ☐ Not started | Customer amplifier | Offer & Lead Gen |
| 13 | Respond to all existing unanswered reviews | ☐ Not started | Builds trust and engagement | Customer Success |
| 14 | Create seasonal content calendar (winterization, spring prep, etc.) | ☐ Not started | For email/SMS nurture | Email Strategist |

---

## 🤝 Both of Us (Collaborative)

| # | Task | Status | Owner | Agent Source |
|---|------|--------|-------|--------------|
| 1 | Validate website copy with 5 rider customers | ☐ Not started | Both | Offer & Lead Gen |
| 2 | Define exact service list and pricing for quotes | 🔄 In progress | Dusty provides; I format | Business Strategist |
| 3 | Create and approve PDF lead magnets | ☐ Not started | Dusty content; I design | Offer & Lead Gen |
| 4 | Test text-to-quote workflow end-to-end | ☐ Not started | Both | Offer & Lead Gen |
| 5 | Set up conversion tracking dashboard | ☐ Not started | I implement; Dusty reviews | Analytics Reporter |
| 6 | Review competitive positioning and approve final brand message | ✅ Done | Both | Business Strategist |
| 7 | Approve grand-slam offer and guarantees | 🔄 In progress | Dusty approves; I implement | Offer & Lead Gen |

---

## Completed Milestones

- ✅ Initial research compiled (company, competitors, reviews, social audit)
- ✅ GitHub repo created and initial website pushed
- ✅ Master dossier created with Sections 1, 2, 4, 6, 8, 9, 10
- ✅ Business Strategist analysis added to dossier
- ✅ Offer & Lead Gen Strategist analysis added to dossier
- ✅ Website conversion-optimized based on dossier recommendations
- ✅ Updated website pushed to GitHub
- ✅ SEO Specialist implementation pass completed: keyword hero support copy, FAQ schema, richer LocalBusiness graph, WebP assets, llms.txt, sitemap refresh, CTA tracking hooks
- ✅ Persona Walkthrough CRO pass completed: text-photo CTA, prefilled SMS, 3-step help flow, form timing, form reassurance, text-photo FAQ/schema, mobile grid fix
- ✅ Brand Guardian pass completed: brand foundation, CSS brand tokens, header lockup, text-photo meta alignment, schema slogan, brand protection rules
- ✅ UX Architect pass completed: simplified nav, skip link, main landmark, focus states, ARIA menu/FAQ states, active nav, reduced-motion support, spacing/touch tokens
- ✅ UX Researcher pass completed: text-template helper card, copy button with accessible status, `copy_text_template_click` event, reply-preference form field, 5-rider validation plan
- ✅ Content Creator pass completed: two real printable guide pages, homepage guide links, guide analytics events, sitemap/llms updates, 90-day content calendar
- ✅ UI Designer pass completed: reusable icon cards, guide badges, contact action group, card elevation tokens, hover consistency, reduced inline visual styling
- ✅ Frontend Developer pass completed: manifest, service worker, PWA icons, guide-page event tracking, guide prefetch, content-visibility render optimization
- ✅ AEO Foundations Architect pass completed: AI-aware robots, llms-full, Markdown alternatives, agent permissions, action declarations, AGENTS.md, service-worker AEO cache updates
- ✅ AI Citation Strategist pass completed: citation-focused mechanic chooser guide, Markdown alternative, FAQ schema, homepage guide card, prompt audit baseline, AEO discovery/action updates
- ✅ Agentic Search Optimizer pass completed: linked MCP actions, declarative data-mcp attributes for SMS/guides/directions/form, field param metadata, imperative MCP progressive enhancement, action manifest hardening
- ✅ Senior Developer pass completed: hardened JS IIFE, optional-element guards, analytics helper, scroll progress, rAF/passive scroll handling, button transition polish, service-worker cache v4
- ✅ Rapid Prototyper pass completed: first-text builder MVP, dynamic SMS generation, prototype feedback buttons, validation events, MCP helper action, service-worker cache v5
- ✅ Visual Storyteller pass completed: visual rider story section, three image story cards, reusable story components, art-direction guardrail, service-worker cache v6
- ✅ Image Prompt Engineer pass completed: visual prompt/photo-direction library, real-photo shot list, AI prompt templates, negative prompts, platform adaptations, authenticity guardrails
- ✅ Social Media Strategist pass completed: social playbook, 30-day calendar, platform bios, content pillars, caption templates, hashtags, engagement rules, weekly measurement plan
- ✅ Instagram Curator pass completed: Instagram-specific aesthetic, optimized bio, highlight system, 9-post grid launch plan, Reels scripts, carousel templates, Story prompts, hashtag sets, community rules
- ✅ Reddit Community Builder pass completed: Reddit-safe community playbook, disclosure language, 90/10 rule, response bank, subreddit research targets, warm-up plan, reputation monitoring
- ✅ LinkedIn Content Creator pass completed: owner-led LinkedIn playbook, profile headline/About drafts, content pillars, 30-day calendar, post drafts, carousel concept, engagement plan
- ✅ Email Marketing Strategist pass completed: CRM/ESP attribute map, segmentation architecture, five lifecycle sequences, email templates, deliverability checklist, metrics framework
- ✅ Pricing Analyst pass completed: public pricing transparency guide, Markdown alternative, pricing strategy playbook, owner pricing worksheet, pricing FAQ schema, guide card, discovery/action updates
- ✅ Sales Engineer pass completed: technical discovery playbook, triage questions, lead categories, text intake talk tracks, objection battlecards, quote process, sales metrics
- ✅ Sales Coach pass completed: coaching playbook, call/text review scorecard, five behavior focus areas, weekly lead review cadence, role plays, pipeline coaching stages, coaching metrics

---

## Next Agent Recommendation

Run **UX Architect** or **Content Creator** next to:
- tighten mobile layout and accessibility after the CRO changes
- create the first service-specific landing page
- produce the actual PDF/checklist lead magnets
- validate the new text-photo CTA with real riders

---

*This tracker is a living document. It will be updated after each agent runs.*
