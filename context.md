# Finance Recruiting Tracker — `context.md`

> Working spec for a **finance recruiting tracker** with AI‑assisted networking and email automation. Audience: undergrads and early‑career candidates (IB/PE/AM/consulting), but optimized for IB.

---

## 1) One‑liner

A **recruiting CRM** for finance candidates: track contacts & threads, generate personalized outreach, and (optionally) auto‑send follow‑ups from the user’s mailbox.

## 2) Goals

- Help users run **systematic networking** (consistent outreach, timely follow‑ups).
- Improve **reply rates** with tailored, professional emails.
- Provide **daily next steps** so users always know what to do.

## 3) Non‑goals (for MVP)

- No interview question bank/practice engine.
- No resume editing suite.
- No general job board scraping.

## 4) Target Users & JTBD

- **Undergrads/early‑career** recruiting for IB/PE/AM/ER/CorpFin.
- JTBD: “I need an organized way to outreach to alumni/bankers, remember follow‑ups, and send high‑quality emails quickly.”

## 5) Product Pillars (MVP scope)

1. **Contact CRM** (people/firms/stage/timeline).
2. **AI Email Composer** (cold, follow‑up, thank‑you, referral ask; tone presets; variables).
3. **Auto‑Send Engine (opt‑in)** with guardrails + Outbox/Audit.
4. **Reminders & Nudges** (AI “Next Steps”).

## 6) UX Principles

- **Safety first**: default to draft + review; block first‑contact auto‑send.
- **Minimal friction**: keyboard shortcuts, templates, variables panel.
- **Visible state**: statuses, timers, rule previews, undo window.
- **Professional tone**: concise, respectful, zero spam vibes.

## 7) Information Architecture (Web)

- `/` Dashboard — KPIs, Next Steps, Rule activity.
- `/contacts` — table (filters/sorts, bulk actions).
- `/contacts/[id]` — profile + timeline (events, notes, quick compose).
- `/compose` — AI composer (modal/page).
- `/outbox` — Drafts/Scheduled/Sent; undo, logs.
- `/rules` — follow‑up builder (When → Wait → Then Send; stop conditions).
- `/settings` — integrations, templates, safety, billing, data export.

## 8) Core Entities (DB sketch)

- **contacts**: id, first_name, last_name, email, firm, role, school, class_year, tags\[], notes, created_at, updated_at
- **threads**: id, contact_id, stage(enum: intro_sent/waiting_reply/conversation/referral_requested/closed), last_activity_at, source(enum: gmail/outlook), provider_thread_id
- **messages**: id, thread_id, direction(enum: outgoing/incoming), subject, body_html, sent_at, status(enum: draft/scheduled/sent/failed), created_by(enum: user/ai), provider_msg_id
- **rules**: id, name, is_enabled, trigger_type, trigger_params(json), wait_days, window_start, window_end, action_template_id, action_mode(enum: draft/send), stop_conditions(json)
- **templates**: id, name, intent, subject_tpl, body_tpl, tone, variables\[]
- **audit_logs**: id, user_id, action, entity_type, entity_id, payload(json), created_at

## 9) Providers & Permissions

**Gmail** (Google APIs): prefer `gmail.send`. Optional `gmail.readonly` for reply detection/threading. OAuth verification needed.
**Outlook/Microsoft Graph**: `Mail.Send` (+ optional read). Publisher verification.
**Policy**: store tokens encrypted; per‑user revoke; log all sends.

## 10) Guardrails & Compliance

- Default **review‑before‑send**.
- **No first‑contact auto‑send** unless domain allowlisted by the user.
- Per‑day rate limit (e.g., 40 sends/day) and per‑domain cap.
- Lint for spammy phrasing + sensitive content; warn and require confirm.
- Pause rules on bounce/OOO or when reply detected.
- Full **audit trail** for each outbound email.

## 11) AI Components

- **Prompts (system style)**: professional, concise, respectful, with variables.
- **Intents**: cold intro (alumni/non‑alumni), thank‑you, no‑reply follow‑up, referral request, scheduling.
- **Tone presets**: Formal, Warm Alumni, Concise, Custom (few‑shot examples stored per user).
- **Variable set**: `{{first_name}}`, `{{firm}}`, `{{role}}`, `{{school}}`, `{{class_year}}`, `{{coverage_group}}`, `{{mutual_connection}}`, `{{topic}}`.

**Base generation prompt (template)**

```
You are an assistant writing recruiting outreach emails for finance roles.
Write a concise, professional email (<140 words) with the intent: {{intent}}.
Tone: {{tone}}. Include context: {{context}}.
Variables: {{vars_json}}.
Avoid fluff, avoid aggressive asks, propose 10–15 min chat windows.
Return JSON with fields: subject, body.
```

## 12) Follow‑up Rules (DSL sketch)

```json
{
  "name": "No reply → follow‑up (5bd)",
  "when": { "type": "no_reply", "after_business_days": 5 },
  "wait": {
    "days": 1,
    "window": { "start": "08:30", "end": "10:30", "tz": "America/New_York" }
  },
  "then": { "template_id": "followup_concise", "mode": "send" },
  "stop_if": ["reply_received", "meeting_scheduled"]
}
```

## 13) API Surface (Next.js /app routes)

- `POST /api/contacts` (create/import), `GET /api/contacts`, `PATCH /api/contacts/:id`
- `POST /api/compose` → returns draft `{subject, body}`
- `POST /api/outbox/send` → send now via provider
- `POST /api/outbox/schedule` → queue with run_at
- `GET /api/outbox?status=draft|scheduled|sent`
- `POST /api/rules` `PATCH /api/rules/:id` `POST /api/rules/preview`
- `POST /api/webhooks/gmail` / `outlook` (optional) or polling job

## 14) Background Jobs

- **Rule runner**: scan candidates, generate email, create draft/send.
- **Reply detector**: check threads (read scope or user-forwarded webhook) to update stage.
- **Rate limiter**: enforce quotas; defer sends.

## 15) Telemetry & KPIs

- D1/D7 retention; time to first send (<10m after onboarding).
- Reply rate; follow‑up conversion; # contacts added.
- Rule‑generated sends vs manual.

## 16) Seed Templates

- **Cold Intro (Alumni)**

  - Subj: `Quick intro from a fellow {{school}} alum`
  - Body: brief intro, ask for 10–15 min, flexible windows.

- **No‑Reply Follow‑up**

  - Subj: `Following up on my note`
  - Body: polite bump, value line, short ask.

- **Post‑Chat Thank‑you**

  - Subj: `Thanks for your time, {{first_name}}`
  - Body: appreciation, key insight, keep‑in‑touch line.

- **Referral Ask**

  - Subj: `Would you be open to referring me for {{role}}?`
  - Body: brief case + link to resume/handshake.

## 17) Acceptance Criteria (MVP)

- Create/import contacts; filter/sort; view timeline events.
- Compose generates 3 variations in <2s; user can edit and save as draft.
- Send from user’s mailbox (Gmail/Outlook) with `send`‑only scope.
- Rules can schedule follow‑ups; **auto‑pause on reply**.
- Outbox shows Draft/Scheduled/Sent; 30s undo window for scheduled.
- Audit logs record every outbound with prompt + final text.

## 18) Tech Stack (suggested)

- **Frontend**: Next.js (App Router), TypeScript, Tailwind, shadcn/ui, Zustand.
- **Backend**: Next API routes; Job runner (Inngest/Upstash Q/Vercel Cron).
- **DB**: Postgres (Supabase), RLS, Drizzle/Prisma.
- **Auth**: Clerk (user), OAuth for Google/Microsoft.
- **LLM**: Claude/GPT for email generation (JSON mode).

## 19) ENV & Secrets (sample)

```
NEXT_PUBLIC_APP_URL=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MSFT_CLIENT_ID=
MSFT_CLIENT_SECRET=
EMAIL_ENCRYPTION_KEY=
LLM_API_KEY=
```

## 20) Milestones

- **M0**: Contacts + Composer (manual send only).
- **M1**: OAuth send; Outbox/Audit.
- **M2**: Rules + Reply detection; safety rails.
- **M3**: Billing + usage limits; exports.

## 21) Nice‑to‑Have (post‑MVP)

- School/firm enrichment; CSV cleaners; LinkedIn URL detection.
- Calendar integration for scheduling links.
- Team/club workspaces.

## 22) Open Questions

- Which reply‑detection method first: polling vs webhook (Gmail push/Graph subscriptions)?
- Per‑user deliverability guardrails (throttling curves by account age)?
- Should “first‑contact auto‑send” ever be allowed?

---

### Quick Copy Blocks (for UI)

- Empty Dashboard: “No threads yet. Add contacts and send your first intro.”
- Undo Toast: “Scheduled to send in 30s — **Undo** to cancel.”
- Warning: “New domain. Confirm before enabling auto‑send to this recipient.”

---

**Owner:** Chase • **Doc type:** context for Cursor • **Last edited:** <9/4/2025>

