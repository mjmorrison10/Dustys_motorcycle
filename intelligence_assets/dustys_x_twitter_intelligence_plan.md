# Dusty's Motorcycle Service & Repair — X/Twitter Intelligence Plan

**Purpose:** Turn X/Twitter noise into useful market, audience, content, and reputation intelligence for Dusty's.

**Scope:** Public posts only. Do not scrape private data, expose personal information, or engage in harassment. Preserve links, timestamps, queries, and sample limits when reporting findings.

---

## Business Questions

1. Are Orange County riders asking for motorcycle repair recommendations on X?
2. What recurring motorcycle repair questions appear around safety, used-bike buying, and canyon riding?
3. Which local accounts, clubs, shops, and creators shape motorcycle conversation in Orange County?
4. Are people mentioning Dusty's, competitors, or reputation risks?
5. What content themes should Dusty's turn into posts, Reels, guides, or ads?

---

## Monitoring Themes

| Theme | What to Learn | Owner |
|---|---|---|
| Brand health | Mentions of Dusty's, sentiment, complaints, praise | Dusty / manager |
| Local mechanic demand | People asking for shops near Orange/OC | Twitter Engager |
| Used-bike buyer pain | Marketplace bike questions, inspection anxiety | Content / Sales |
| Ride-ready safety | Santiago Canyon / weekend ride prep concerns | Social / Video |
| Competitor mentions | Which shops get recommended and why | Strategy |
| Reputation risk | Negative spikes, misinformation, unresolved complaints | Owner |

---

## Query Matrix

| Theme | Query | Exclusions | Priority | Cadence |
|---|---|---|---|---|
| Brand exact | `"Dusty's Motorcycle" OR "Dustys Motorcycle" OR "Dusty's Moto"` | jobs, hiring if noisy | High | weekly, daily if active |
| Local repair demand | `("motorcycle mechanic" OR "motorcycle repair") ("Orange CA" OR "Orange County" OR "OC")` | bicycle, car, auto | High | weekly |
| Orange Circle | `("motorcycle" OR "bike") ("Orange Circle" OR "Orange Traffic Circle")` | bicycle | Medium | weekly |
| Santiago Canyon | `"Santiago Canyon" motorcycle OR rider OR bike` | bicycle if noisy | Medium | weekly / weekends |
| Used-bike inspection | `("used motorcycle" OR "Marketplace bike") (inspection OR mechanic OR "red flag")` | car, bicycle | Medium | weekly |
| Harley repair | `"Harley repair" ("Orange" OR "Orange County" OR "OC")` | dealership-only noise | Medium | weekly |
| Sportbike service | `("sportbike" OR "CBR" OR "GSXR" OR "R6") (repair OR mechanic OR service) ("Orange County" OR "OC")` | racing-only noise | Low | monthly |
| Competitor mentions | `"Motorcycle Tire Center" OR "CycleDoctor" OR "Pedro's Motorcycle Repair" OR "Gustin Motorsports"` | irrelevant duplicates | Medium | monthly |
| Reputation risk | `("Dusty's" OR "Dustys") (ripoff OR scam OR complaint OR bad OR issue)` | non-moto Dusty's | High | weekly |

---

## Account Watchlist Categories

Create a private spreadsheet with:

- local riding clubs,
- Orange County motorcycle creators,
- gear shops,
- veteran-owned business groups,
- local journalists/community accounts,
- competitor shops,
- satisfied customer accounts who publicly engage,
- accounts to ignore because they are spam/bots.

Do not publish private handles in the repo unless accounts are public business entities and relevant.

---

## Signal Classification

| Signal | Definition | Action |
|---|---|---|
| Low noise | one-off mention, no spread | monitor only |
| Support issue | customer asks/complains about service | route to owner privately |
| Content opportunity | repeated question or confusion | add to content backlog |
| Lead opportunity | local rider asks for mechanic help | reply helpfully with disclosure |
| Reputation risk | negative claim gains replies/reposts | escalate with evidence |
| Competitor insight | competitor recommended with reason | log positioning gap |
| Trend | repeated topic across accounts/time | create post/video/guide |

---

## Evidence Log Fields

Use a spreadsheet or CSV with:

- date collected,
- post URL,
- author handle,
- public/business/personal category,
- timestamp UTC,
- query used,
- theme,
- sentiment,
- risk level,
- summary,
- recommended action,
- owner,
- status.

---

## Alert Thresholds

### Brand risk

Escalate if:

- 3+ negative mentions in 24 hours,
- one negative post gets meaningful local traction,
- a customer posts identifiable unresolved complaint,
- false claim about safety/pricing/hours/address appears.

### Lead opportunity

Act if:

- local user asks for motorcycle mechanic recommendation,
- user asks about used-bike inspection near OC,
- rider mentions unsafe symptom before riding.

### Content opportunity

Log if:

- same question appears 3+ times in a month,
- high-reply thread shows confusion about repair pricing, inspections, or safety,
- local ride topic trends before weekends.

---

## Weekly Review Template

Every Friday, answer:

1. What did riders ask about this week?
2. Any Dusty's mentions?
3. Any competitor recommendations worth noting?
4. Any local lead opportunities?
5. Any risk or complaint signals?
6. What content should we make next week?
7. Which queries were noisy and need exclusions?

