# Developer Handoff — Dusty's Motorcycle Service & Repair

## Architecture

This is a static site: no build step, no package manager, no framework.

Core runtime files:

- `index.html`
- `sw.js`
- `manifest.webmanifest`
- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- `llms-full.txt`

Public guide pages live in `guides/`. Markdown alternatives live in `content/`.

## Local development

```bash
python3 -m http.server 8080
```

Open:

```text
http://127.0.0.1:8080/
```

## Critical implementation notes

### Form endpoint

The contact form still uses:

```text
YOUR_FORM_ID
```

Replace this before launch with a real Formspree, Netlify, CRM, or custom endpoint. Until then, SMS is the reliable conversion path.

### Analytics

The site already pushes events to `window.dataLayer` and calls `gtag()` if available. Install GA4/GTM and map the events in `analytics_assets/dustys_event_taxonomy.csv`.

### Service worker

`sw.js` caches the static shell and important guide/AEO files. Bump `CACHE_NAME` whenever cached assets change.

Current cache version at time of this doc should be checked in `sw.js`.

### AI / agent discovery

Keep these files current when public content changes:

- `llms.txt`
- `llms-full.txt`
- `AGENTS.md`
- `agent-permissions.json`
- `.well-known/agent-permissions.json`
- `mcp-actions.json`
- `.well-known/mcp-actions.json`

### No fake proof

Do not add AI-generated images that imply fake customers, fake repairs, fake testimonials, or fake before/after work.

## Validation checklist

Before pushing:

- [ ] Homepage loads locally.
- [ ] Guide pages load locally.
- [ ] JSON-LD parses.
- [ ] Sitemap XML parses.
- [ ] Manifest JSON parses.
- [ ] Agent/action JSON parses.
- [ ] Main inline JS passes `node --check`.
- [ ] No broken local image references.
- [ ] Service worker cache version bumped if needed.

## Common edits

### Add a new guide page

1. Add HTML file in `guides/`.
2. Add Markdown version in `content/`.
3. Add URL to `sitemap.xml`.
4. Add references to `llms.txt` and `llms-full.txt`.
5. Add action/permission references if agents should use it.
6. Add to `sw.js` cache if it should be available offline/repeat visits.
7. Validate locally.

### Add a new tracked CTA

1. Add `data-event="event_name"` to the element.
2. Add it to `analytics_assets/dustys_event_taxonomy.csv`.
3. Decide whether it is a GA4 conversion or micro-conversion.
4. Test it in GTM/GA4 after deployment.

### Change NAP or hours

Update all relevant places:

- homepage visible copy,
- JSON-LD schema,
- `llms.txt`,
- `llms-full.txt`,
- `content/dustys-motorcycle-service.md`,
- guide pages if mentioned,
- social/email/customer-service templates if needed.
