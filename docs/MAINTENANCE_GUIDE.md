# Maintenance Guide — Dusty's Motorcycle Service & Repair

## Weekly maintenance

- Review lead log and analytics events.
- Confirm SMS/phone links still work on mobile.
- Check form endpoint once it is connected.
- Review new customer questions for FAQ/content updates.
- Add new reviews/testimonials only with accurate source context.

## Monthly maintenance

- Review `sitemap.xml` for newly added pages.
- Review `llms.txt` and `llms-full.txt` for stale content.
- Check `robots.txt` crawler policy.
- Review service worker cache list and version.
- Check Google Search Console / Bing Webmaster Tools for indexing issues.
- Review top guide pages and CTA click paths.

## Quarterly maintenance

- Review public claims: warranty, hours, pricing, address, response-time language.
- Update social/media playbooks with best-performing posts.
- Review paid media readiness blockers.
- Re-run accessibility and Lighthouse QA.
- Refresh executive summary if major operational milestones are completed.

## Content governance

### Safe to publish without owner approval

- general rider education,
- checklists that do not promise specific pricing or warranty terms,
- no-BS diagnostic process language already approved in site strategy.

### Requires Dusty approval

- prices,
- warranty terms,
- hours changes,
- address changes,
- discounts/referral incentives,
- claims about exact response times,
- customer names/faces/plates/bikes if identifiable.

## Documentation update rules

When a major change ships:

1. Update `IMPLEMENTATION_TRACKER.md`.
2. Update `dusty_research/research_notes.md` if the change affects strategy or operations.
3. Update `dusty_research/master-refactoring-dossier.md` for major agent/pass changes.
4. Add a report in `dusty_research/` if an agency-agent pass produced deliverables.
5. Update this guide if the workflow changes.

## Known blockers

As of 2026-06-30:

- Form endpoint is not connected.
- GA4/GTM is not installed.
- GBP/Birdeye/NAP cleanup requires owner/admin access.
- SMS auto-reply requires phone provider setup.
- Pricing/warranty language needs final owner approval.
- Additional real shop photos are needed for richer gallery/social proof.
