---
name: session-preflight
description: Run a lightweight session-start compliance check for repository operating rules and reduce repetitive confirmations. Use when starting a new coding session in a repo with AGENTS.md-like workflow rules, or when the user asks to avoid repeating the same startup checks while still keeping rule adherence visible.
---

# Session Preflight

Run a once-per-session startup check and keep later confirmations minimal.

## Workflow

1. Classify task type as `DEV` or `ANALYSIS`.
2. Read `AGENTS.md` once at session start and extract only active constraints. Do not restate repository rules beyond a compact summary:
   - Required execution order
   - Required validation commands
   - Risky-action confirmation rules
   - Any repo-specific sequencing (for example `Issue -> Plan -> Dev`)
3. Publish a compact preflight block:
   - `Type`
   - `Goal`
   - `Scope`
   - `Done criteria`
4. Store an internal session memo as `preflight_completed=true`.
5. For later tasks in the same session, avoid full restatement and report:
   - `Preflight: unchanged` when rules are unchanged
   - `Preflight: updated` with only changed rules when files/instructions changed

## Reporting Format

Use this short format for first run:

```text
Type: DEV|ANALYSIS
Goal: ...
Scope: ...
Done criteria: ...
Preflight: completed (AGENTS.md checked once this session)
```

Use this short format for subsequent runs:

```text
Preflight: unchanged (reuse session baseline)
Type: DEV|ANALYSIS
Goal: ...
Scope: ...
Done criteria: ...
```

## Guardrails

- Do not skip mandatory validation/build steps for `DEV` tasks.
- Do not claim checks that were not actually run.
- Re-run full preflight immediately when:
  - user asks to re-check rules,
  - `AGENTS.md` changed,
  - workflow instructions conflict.
