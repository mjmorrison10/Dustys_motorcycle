# Dusty's Motorcycle Service & Repair — Workflow Optimization Report

**Purpose:** Convert Dusty's growing marketing/lead engine into a practical weekly operating system that does not overload the shop.

**Core workflow problem:** The website, guides, social assets, analytics plans, and support scripts are ready, but the business can still lose leads if the daily workflow is unclear.

---

## Optimization Impact Summary

| Workflow | Current State | Optimized Target | Expected Improvement |
|---|---|---|---|
| New lead response | ad hoc text/call handling | triage template + lead log + follow-up | fewer missed/stale leads |
| Form handling | blocked by `YOUR_FORM_ID` | live endpoint + auto-notification + log entry | form becomes usable channel |
| Review requests | inconsistent/manual | 2–7 day check-in workflow | higher review velocity |
| Social posting | inconsistent | batch content from real shop work | lower content burden |
| Analytics review | not operating | weekly 20-minute scorecard | faster channel decisions |
| Owner approvals | scattered | approval checklist | fewer risky public claims |

---

## Current Bottlenecks

### Bottleneck 1 — Lead capture exists, but operational response is not yet systemized

Website CTAs, SMS links, guides, and prototype tools exist. The risk is response delay or incomplete triage.

**Fix:** use the lead intake workflow and weekly lead log.

### Bottleneck 2 — The form is not operational

The form still uses `YOUR_FORM_ID`.

**Fix:** choose endpoint, test success/error states, then make `form_submit` a valid conversion.

### Bottleneck 3 — Too many playbooks can create execution overload

The repo now contains many strategies. Dusty needs a small weekly cadence, not more tasks.

**Fix:** run a weekly operating rhythm with only 5 recurring routines.

### Bottleneck 4 — Reviews/referrals require timing discipline

Asking too early or too often damages trust. Asking consistently after positive outcomes grows local proof.

**Fix:** use post-service check-in → review → referral flow.

---

## Optimized Weekly Operating Rhythm

### Daily — 10 minutes total

1. Check new texts/forms/DMs.
2. Reply with intake macro if needed.
3. Log lead source and bike/issue.
4. Flag safety/post-service issues for Dusty.
5. Capture one real shop photo/video if possible.

### Twice weekly — 15 minutes

1. Post one real repair/education item to Instagram/Facebook.
2. Post one Google Business Profile update.
3. Save content ideas from customer questions.

### Weekly — 20 minutes

1. Review lead log.
2. Review completed jobs for review eligibility.
3. Send review/referral follow-ups.
4. Check top traffic/conversion events.
5. Pick one growth experiment to continue/kill.

### Monthly — 45 minutes

1. Review guide/content performance.
2. Check NAP/listing status.
3. Update social calendar.
4. Review pricing/warranty/claims for accuracy.
5. Decide if paid media readiness blockers are cleared.

---

## Future-State Workflow Map

```text
Visitor / referral / social user
        ↓
SMS, call, form, DM, guide, referral page
        ↓
Lead intake macro collects bike + issue + timeline + source + photo/video
        ↓
Lead categorized:
  quick service / diagnostic / safety / pre-purchase / custom / not fit
        ↓
Next step assigned:
  quote / diagnosis / inspection / do-not-ride / referral / follow-up
        ↓
Job completed
        ↓
2–7 day check-in
        ↓
If positive: review ask
        ↓
If review/repeat trust: referral ask
        ↓
Weekly dashboard updates channel + quality + booked-job metrics
```

---

## Automation Opportunities

| Automation | Effort | Impact | Tool Options | Notes |
|---|---|---|---|---|
| Form → lead log | Medium | High | Formspree/Zapier/Make/n8n | after endpoint chosen |
| SMS auto-reply | Low/Medium | High | phone provider, Google Voice alternative, business SMS tool | critical for phone-tag issue |
| Review request reminder | Low | High | CRM, Google Sheet reminder, SMS/email tool | only after positive handoff |
| Weekly report template | Low | Medium | Google Sheets + manual update | start manual first |
| Social post batching | Low | Medium | Meta Business Suite | schedule 2x/week |
| Lead source capture | Low | High | form field + manual prompt | ask “How did you find us?” |

---

## Standard Operating Procedures Needed First

1. `SOP-01`: New Lead Intake.
2. `SOP-02`: Safety Concern Escalation.
3. `SOP-03`: Post-Service Review Request.
4. `SOP-04`: Weekly Lead/Marketing Review.
5. `SOP-05`: Publishing / Claims Approval.

These are included as separate SOP files in `workflow_assets/`.

---

## Implementation Roadmap

### Phase 1 — Quick Wins, 7 days

- Connect form endpoint.
- Start lead log.
- Use intake macro for every new inquiry.
- Start 2–7 day review check-ins.
- Schedule 2 GBP/social posts.

### Phase 2 — Process Discipline, 30 days

- Run weekly lead review 4 times.
- Source-tag 80%+ of leads.
- Review-request 80%+ of eligible completed jobs.
- Track text-builder and guide engagement.
- Decide if paid search readiness is met.

### Phase 3 — Automation, 60–90 days

- Automate form → lead log.
- Automate review reminders with safeguards.
- Connect GA4/GTM dashboard.
- Consider CRM or shop-management tool if lead volume grows.

---

## Workflow Optimizer Verdict

Dusty does not need more strategy before execution. Dusty needs a small operating cadence that protects response time, review velocity, and lead quality. Start manual, measure weekly, then automate only the workflows that prove repetitive and valuable.
