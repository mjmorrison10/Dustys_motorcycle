# Dusty's Motorcycle Service & Repair — Launch Execution Plan

**Purpose:** Convert the current strategy/docs into realistic execution work with owners, dependencies, and acceptance criteria.

**Project status:** Site and operating assets are built. Launch/scaling is blocked by operational setup, owner approvals, and external-platform work.

---

## Launch Goal

Get Dusty's digital lead engine to a measurable, supportable launch state where:

- the website captures SMS/call/form leads reliably,
- analytics show which channels produce qualified leads,
- public listings use correct NAP/hours,
- post-service review/referral workflows are active,
- paid media remains gated until tracking and response capacity are proven.

---

## P0 Launch Tasks — Must Complete First

### Task 1 — Connect real form endpoint

**Owner:** Web/dev + Dusty  
**Dependency:** Dusty chooses Formspree, Netlify Forms, CRM, or other endpoint.

**Acceptance criteria:**

- `YOUR_FORM_ID` removed from `index.html`.
- Test submission succeeds.
- Failed submission has a clear user-facing error path.
- `form_submit` event fires only on real submission attempt.
- Lead notification reaches Dusty/admin.

---

### Task 2 — Install GA4/GTM

**Owner:** Web/dev  
**Dependency:** Measurement ID / GTM container.

**Acceptance criteria:**

- GA4/GTM installed once, not duplicated.
- Primary events visible in DebugView:
  - `hero_text_photo_click`
  - `mobile_cta_bar_click`
  - `contact_sms_click`
  - `contact_phone_call_click`
  - `form_submit`
  - `get_directions_click`
  - `prototype_text_builder_sms_click`
- Micro-events remain available for analysis.

---

### Task 3 — Confirm and standardize NAP/hours

**Owner:** Dusty/admin  
**Dependency:** owner confirmation.

**Acceptance criteria:**

- Canonical NAP confirmed:
  - Dusty's Motorcycle Service & Repair
  - 130 S Lemon St, Orange, CA 92866
  - (714) 787-9453
- Hours confirmed.
- Website/schema/llms/content docs updated if hours differ.

---

### Task 4 — Clean up priority listings

**Owner:** Dusty/admin  
**Dependency:** platform access.

**Acceptance criteria:**

- Google Business Profile verified/updated.
- Yelp hours/address checked.
- Facebook address updated.
- Nextdoor old address corrected.
- Birdeye claimed or claim process started.
- Apple Maps and Bing Places updated.

---

### Task 5 — Configure SMS auto-reply / response workflow

**Owner:** Dusty  
**Dependency:** phone provider/tool.

**Acceptance criteria:**

- Auto-reply active during shop hours or after missed calls.
- Reply tells riders to send year/make/model + issue + photo/video.
- No promise exceeds actual response capacity.
- Escalation path exists for safety/post-service concerns.

---

### Task 6 — Start weekly lead log

**Owner:** Dusty/admin  
**Dependency:** none; can start manual.

**Acceptance criteria:**

- `analytics_assets/dustys_lead_log_template.csv` copied into live working sheet/tool.
- 80%+ of leads have source captured.
- Weekly 20-minute review completed for 4 consecutive weeks.

---

## P1 Tasks — Start After P0 Is Stable

1. Build pre-purchase inspection service page.
2. Convert guide HTML pages into designed PDFs if Dusty approves.
3. Add real shop photos / before-after gallery.
4. Start review request workflow.
5. Run deployed Lighthouse/axe/AT QA.
6. Run small Google Search test only if paid-media gates pass.

---

## Not In Scope Yet

- Broad cold Meta ads.
- Full booking engine.
- Public fixed price menu.
- Paid media scaling.
- AI-generated fake repair/customer proof.

---

## Weekly Project Meeting Agenda

Timebox: 20 minutes.

1. What P0 blocker moved this week?
2. What lead/source data came in?
3. Any safety/customer escalation?
4. Any owner decision needed?
5. What is the single next task before the next meeting?

