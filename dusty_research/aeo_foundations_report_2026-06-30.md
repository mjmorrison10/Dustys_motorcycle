# AEO Foundations Architect Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** AEO Foundations Architect from Agency Agents app corpus (`marketing-aeo-foundations.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Build AI Engine Optimization foundation infrastructure: crawler access policy, discovery files, Markdown alternatives, token-budgeted context, and agent task/capability declarations.

---

## Executive Summary

Dusty's already had a root `llms.txt`, semantic HTML, FAQ schema, and guide pages. The AEO foundation gap was that AI crawlers and agents did not yet have a complete discovery/capability layer:

- no AI-specific crawler policy in `robots.txt`,
- no `llms-full.txt`,
- no Markdown alternatives for key pages/guides,
- no agent permission file,
- no action declaration file,
- no repo-level `AGENTS.md` guidance,
- service worker cache did not include new AI-readable files.

This pass added the missing foundation layer so AI crawlers, citation engines, and browsing agents can more reliably discover, parse, cite, and act on public site content.

---

## AEO Foundations Scorecard

| Layer | Check | Before | After |
|---|---|---:|---:|
| Discovery | AI-aware `robots.txt` | ⚠️ Generic only | ✅ Added AI crawler policy |
| Discovery | `llms.txt` | ✅ Present | ✅ Expanded |
| Discovery | `llms-full.txt` | ❌ Missing | ✅ Added |
| Discovery | `AGENTS.md` | ❌ Missing | ✅ Added |
| Discovery | `agent-permissions.json` | ❌ Missing | ✅ Added root + `.well-known` |
| Discovery | `mcp-actions.json` | ❌ Missing | ✅ Added root + `.well-known` |
| Parsability | Clean HTML pages | ✅ Present | ✅ Preserved |
| Parsability | Markdown alternatives | ❌ Missing | ✅ Added 3 Markdown files |
| Parsability | Token-budgeted AI context | ⚠️ Partial | ✅ Added concise and full context files |
| Capability | User-initiated SMS action declared | ❌ Missing | ✅ Added |
| Capability | Contact/directions/guide actions declared | ❌ Missing | ✅ Added |
| Maintenance | Service worker includes AEO assets | ❌ Missing | ✅ Cache bumped to v2 |

**Foundation score after pass:** 12 / 12 for currently applicable static-site checks.

---

## Changes Applied

### 1. AI-aware `robots.txt`

Updated `robots.txt` with explicit crawler policy.

Allowed public discovery/citation crawlers:

- `GPTBot`
- `ChatGPT-User`
- `ClaudeBot`
- `Claude-User`
- `PerplexityBot`
- `Perplexity-User`
- `Google-Extended`
- `Applebot`
- `Applebot-Extended`
- `CCBot`

Blocked:

- `Bytespider`

Also added discovery references for:

- `llms.txt`
- `llms-full.txt`
- `agent-permissions.json`
- `mcp-actions.json`

---

### 2. Added `llms-full.txt`

Created a fuller AI-readable context file covering:

- business entity,
- address and phone,
- service area,
- brand position,
- customer intent keywords,
- service list,
- contact flow,
- public URLs,
- Markdown alternatives,
- citation guidance,
- maintenance note.

---

### 3. Expanded `llms.txt`

Added sections for:

- full AI context,
- agent permissions,
- action declarations,
- Markdown alternatives.

---

### 4. Added Markdown alternatives

Created machine-readable Markdown content under `content/`:

- `content/dustys-motorcycle-service.md`
- `content/pre-purchase-motorcycle-inspection-checklist.md`
- `content/santiago-canyon-ride-ready-checklist.md`

Added `<link rel="alternate" type="text/markdown">` tags to the homepage and guide pages.

---

### 5. Added agent permissions

Created:

- `agent-permissions.json`
- `.well-known/agent-permissions.json`

This declares what AI agents may and may not do with the site:

Allowed:

- read public content,
- summarize public content,
- cite public content,
- follow public links,
- help users compose a first text.

Restricted:

- no form submission without user action,
- no SMS/call initiation without explicit user action,
- no appointment confirmation,
- no final repair price quoting,
- no payment/purchase actions.

---

### 6. Added action declarations

Created:

- `mcp-actions.json`
- `.well-known/mcp-actions.json`

Declared actions:

- compose SMS quote request,
- open contact section,
- open pre-purchase checklist,
- open ride-ready checklist.

These are conservative, user-confirmed actions only.

---

### 7. Added `AGENTS.md`

Created repo/root agent guidance describing:

- public business facts,
- important URLs,
- allowed agent behavior,
- disallowed assumptions,
- recommended first text template.

---

### 8. Updated service worker cache

Updated `sw.js`:

- cache version bumped to `dustys-moto-v2`,
- added AI-readable files and Markdown alternatives to static cache.

---

## Validation Performed

- `agent-permissions.json` parses as valid JSON.
- `.well-known/agent-permissions.json` parses as valid JSON.
- `mcp-actions.json` parses as valid JSON.
- `.well-known/mcp-actions.json` parses as valid JSON.
- `manifest.webmanifest` still parses as valid JSON.
- Homepage JSON-LD still parses successfully.
- Sitemap XML still parses successfully.
- Local server returned 200 for:
  - `/llms-full.txt`
  - `/agent-permissions.json`
  - `/.well-known/agent-permissions.json`
  - `/mcp-actions.json`
  - `/content/dustys-motorcycle-service.md`
  - `/robots.txt`
  - `/sw.js`

---

## Token Budget Notes

The new AI-readable files are intentionally concise:

| File | Approx. role | Status |
|---|---|---|
| `llms.txt` | quick summary / discovery | ✅ within practical budget |
| `llms-full.txt` | full site context | ✅ concise enough for ingestion |
| `content/dustys-motorcycle-service.md` | business summary | ✅ concise |
| `content/pre-purchase-motorcycle-inspection-checklist.md` | guide Markdown | ✅ focused |
| `content/santiago-canyon-ride-ready-checklist.md` | guide Markdown | ✅ focused |

---

## Remaining AEO Work

1. After deployment, fetch these URLs externally to verify they are live and not blocked by hosting/CDN rules.
2. Check server logs for AI crawler requests and status codes.
3. Ask ChatGPT/Claude/Perplexity current browsing modes what they can find about Dusty's and compare answer quality over time.
4. Review `llms.txt`, `llms-full.txt`, and action files quarterly or whenever address/hours/services change.
5. If true booking is added later, update `mcp-actions.json` with a dedicated appointment action only after the workflow is reliable.

---

## AEO Foundations Architect Verdict

Dusty's now has a strong static-site AEO foundation: AI crawler policy, concise and full LLM context, Markdown alternatives, permission/capability declarations, repo-level agent instructions, and service-worker caching for AI-readable assets. This creates a solid base for later AI Citation Strategist and Agentic Search Optimizer passes.
