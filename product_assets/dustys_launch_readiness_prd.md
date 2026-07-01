# PRD: Dusty's Launch Readiness System

**Status:** Draft  
**Owner:** Web/dev + Dusty  
**Last Updated:** 2026-06-30

---

## 1. Problem Statement

Dusty's now has a strong digital lead engine, but several operational blockers prevent reliable launch/scaling: form endpoint is not connected, GA4/GTM is not installed, local listings need cleanup, SMS auto-reply is not active, and owner claims/pricing need approval.

## 2. Goals & Success Metrics

| Goal | Metric | Baseline | Target | Window |
|---|---|---:|---:|---|
| Enable form conversion | successful test submissions | 0 | 3/3 pass | 7 days |
| Measure conversion | primary GA4 events firing | partial dataLayer only | 100% DebugView verified | 14 days |
| Improve local trust | NAP consistency | inconsistent | 100% priority listings updated | 30 days |
| Improve response | lead acknowledgement | manual/ad hoc | SMS auto-reply active | 14 days |
| Create feedback loop | source-tagged leads | unknown | 80%+ | 30 days |

## 3. Non-Goals

- No broad paid media launch in this phase.
- No public fixed price menu until Dusty approves numbers.
- No online booking engine until the workflow is chosen.
- No fake AI repair proof.

## 4. User Stories

**As a rider**, I want to text or submit my bike issue and know what happens next, so I can avoid phone tag and surprise repairs.

Acceptance criteria:

- [ ] SMS CTA works on mobile.
- [ ] Form endpoint works.
- [ ] Confirmation/success state is clear.
- [ ] No work authorization is implied.

**As Dusty**, I want every lead to include source and bike context, so I can prioritize and respond efficiently.

Acceptance criteria:

- [ ] Lead log has source, bike, issue, timeline, photo/video, status.
- [ ] Weekly review is completed.

## 5. Technical / Operational Requirements

- Replace Formspree placeholder or choose equivalent endpoint.
- Install GA4/GTM measurement ID.
- Verify events in DebugView.
- Confirm official NAP and hours.
- Update GBP, Yelp, Facebook, Nextdoor, Birdeye, Apple Maps, Bing Places.
- Configure SMS auto-reply.
- Approve warranty/pricing language.

## 6. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Leads arrive but Dusty cannot respond | Medium | High | SMS auto-reply + weekly lead review |
| Paid ads launch before tracking | Medium | High | keep paid media gated |
| Inconsistent hours/address hurt trust | High | High | NAP cleanup sprint |
| Public claims are unapproved | Medium | Medium | owner approval checklist |

## 7. Launch Gate

Ready to scale when:

- [ ] form works,
- [ ] GA4/GTM verified,
- [ ] top listings consistent,
- [ ] SMS auto-reply active,
- [ ] weekly lead log operating,
- [ ] warranty/pricing claims approved.
