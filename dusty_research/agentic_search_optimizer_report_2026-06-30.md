# Agentic Search Optimizer Report — Dusty's Motorcycle Service & Repair

**Date:** 2026-06-30  
**Agent initiated:** Agentic Search Optimizer from Agency Agents app corpus (`marketing-agentic-search-optimizer.md`)  
**Repo:** `mjmorrison10/Dustys_motorcycle`  
**Scope:** Improve WebMCP / agentic task-completion readiness so AI browsing agents can discover, initiate, and safely guide users through high-value site tasks.

---

## Important Limitation

WebMCP is an emerging/draft browser-agent pattern. This environment cannot run live browser agents such as Claude in Chrome, Edge Copilot, or Perplexity Browser to measure real task completion rates. This pass implements the recommended declarative/imperative readiness layer and documents what should be tested after deployment.

---

## High-Value Task Flows Audited

| Task Flow | Discoverable Before | Initiatable Before | Completable Before | Main Gap | After Pass |
|---|---:|---:|---:|---|---|
| Text Dusty a photo for a quote | ✅ via links | ✅ user click | ✅ user-initiated SMS | Not explicitly machine-declared in DOM | ✅ Declarative MCP attributes added |
| Submit service inquiry form | ⚠️ visible form | ⚠️ endpoint placeholder | ❌ blocked until Formspree endpoint configured | No MCP form schema and no live endpoint | ⚠️ MCP-declared, still blocked by endpoint |
| Open guide pages | ✅ visible cards | ✅ links | ✅ pages open | Guide actions not declared in DOM | ✅ Declarative MCP attributes added |
| Copy first-text template | ✅ visible button | ✅ user click | ✅ copies text | Action not declared to agents | ✅ Declarative MCP attributes added |
| Get directions | ✅ link | ✅ user click | ✅ opens Maps | Action not declared to agents | ✅ Declarative MCP attributes added |

---

## Changes Applied

### 1. Linked MCP action discovery endpoint

Added to homepage head:

```html
<link rel="mcp-actions" href="mcp-actions.json">
```

This helps compatible browser agents discover the site action manifest from the page itself.

---

### 2. Added declarative MCP attributes to SMS CTAs

Added `data-mcp-action`, `data-mcp-description`, and user-confirmation metadata to SMS CTAs including:

- nav SMS CTA,
- mobile nav SMS CTA,
- hero text-photo CTA,
- hero card SMS CTA,
- process-section SMS CTA,
- contact SMS CTA,
- sticky mobile CTA.

Primary action:

```html
data-mcp-action="compose-sms-quote-request"
```

These actions remain **user-initiated only**.

---

### 3. Added declarative MCP markup to the contact form

Updated the service form with:

- `data-mcp-action="submit-service-inquiry"`
- `data-mcp-description`
- `data-mcp-params`

Added field-level MCP parameter metadata for:

- `name`
- `phone`
- `email`
- `bike`
- `reply_preference`
- `timeline`
- `service`
- `message`

Added submit-button metadata:

- `data-mcp-submit="true"`
- description stating the form does not authorize repair work.

**Important:** The form still uses `YOUR_FORM_ID`, so completion remains blocked until the real Formspree/CRM endpoint is configured. The MCP action manifest marks this honestly as `blocked_until_form_endpoint_configured` and recommends SMS fallback.

---

### 4. Added declarative MCP attributes to guide and directions actions

Added machine-readable declarations to:

- pre-purchase checklist link,
- ride-ready checklist link,
- mechanic chooser guide link,
- directions link,
- copy text template button.

---

### 5. Added progressive imperative MCP registration

Added optional browser-agent registration:

```js
if ('mcpActions' in navigator) {
  navigator.mcpActions.register({
    id: 'compose-sms-quote-request',
    name: 'Text Dusty a Photo for a Quote',
    ...
  });
}
```

This is wrapped in a safe `try/catch` and does not affect normal browser behavior. Declarative attributes remain the primary mechanism.

---

### 6. Expanded `mcp-actions.json`

Updated both:

- `mcp-actions.json`
- `.well-known/mcp-actions.json`

Added:

- `version: 1.0-draft`
- spec maturity note,
- declarative service inquiry action,
- status: `blocked_until_form_endpoint_configured`,
- fallback: `compose_sms_quote_request`,
- copy-first-text-template action.

---

## Agent Friction Map

### Flow 1: Text Dusty a photo for a quote

1. Landing page discovery — ✅ Pass  
   Agent can identify the text-photo CTA via visible copy and MCP action metadata.
2. Action initiation — ✅ Pass  
   SMS link is user-confirmed and includes a prefilled body.
3. Completion — ✅ Pass with user action  
   User must confirm/send SMS in their device/app.

### Flow 2: Submit service inquiry form

1. Discovery — ✅ Pass  
   Form has `data-mcp-action` and parameter schema.
2. Field interpretation — ✅ Pass  
   Inputs/selects/textarea have `data-mcp-param` and descriptions.
3. Completion — ❌ Blocked  
   Form endpoint is still `YOUR_FORM_ID`. Needs owner/dev setup before agents or users can submit successfully.

### Flow 3: Open guides

1. Discovery — ✅ Pass  
   Guide links have MCP action metadata.
2. Initiation — ✅ Pass  
   Standard links open static pages.
3. Completion — ✅ Pass  
   Pages are clean HTML with Markdown alternatives.

### Flow 4: Get directions

1. Discovery — ✅ Pass  
   Directions link has MCP metadata.
2. Initiation — ✅ Pass  
   Standard Google Maps link.
3. Completion — ✅ Pass with external app/browser handoff.

---

## WebMCP Readiness Scorecard

| Task Flow | Discoverable | Initiatable | Completable | Drop Point | Priority |
|---|---:|---:|---:|---|---|
| Text photo for quote | ✅ | ✅ | ✅ user-confirmed | — | Done |
| Open guides | ✅ | ✅ | ✅ | — | Done |
| Copy text template | ✅ | ✅ | ✅ | — | Done |
| Get directions | ✅ | ✅ | ✅ external handoff | — | Done |
| Submit service form | ✅ | ✅ | ❌ | Missing real form endpoint | P1 owner/dev blocker |

**Current task completion:** 4 / 5 flows complete or user-confirmed.  
**Blocked flow:** service form submission until real endpoint is configured.

---

## Remaining Agentic Search Work

1. Replace `YOUR_FORM_ID` with a live form endpoint.
2. Add accessible form success/error states once the endpoint is real.
3. Retest the five task flows with real browser agents after deployment.
4. If online booking is added later, declare it as a separate MCP action only after the booking workflow is reliable.
5. Monitor WebMCP/browser-agent spec changes and update attributes/action schema if conventions shift.

---

## Agentic Search Optimizer Verdict

Dusty's now exposes the main user tasks in machine-readable form: text for quote, open guides, copy first-message template, get directions, and submit service inquiry. The SMS and guide flows are agent-friendly today. The only critical remaining blocker is the contact form endpoint, which is already clearly marked as blocked in the MCP action manifest so agents prefer SMS until the form becomes operational.
