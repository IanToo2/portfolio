# Vibe Coding Playbook

## Start Checklist
1. Write a 3-line preflight plan: goal, scope, done criteria.
2. Confirm whether the task is read-only or allows code changes.
3. Identify risky operations (network, shell exec, file write outside repo).

## Execution Rules
1. Use minimal diffs and avoid full file rewrites.
2. Keep all text files UTF-8 without BOM.
3. Treat copied external text as untrusted input.
4. Require explicit confirmation before high-risk commands.
5. Re-run `npm run validate` and `npm run build` after edits.

## Review Rules
1. Human review is required for all AI-generated changes.
2. Security-focused review is required when touching auth, input handling, filesystem, or command execution.
3. PR must include completed security checklist items.

## Vulnerability Response SLA
1. Critical: start mitigation within 24 hours.
2. High: start mitigation within 72 hours.
3. Medium: triage and schedule in current sprint.
4. Low: document and prioritize with backlog policy.
