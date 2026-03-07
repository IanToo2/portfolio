---
name: "portfolio"
description: "Use when working on the portfolio-site repository for content edits, section updates, UI changes, and required validation."
---

# Portfolio Skill

## When to use
- User asks to update portfolio content, bilingual copy, profile info, projects, experience, stack, or contact details.
- User asks to add, remove, reorder, or retune sections in the portfolio site.
- User asks to adjust portfolio UI while preserving the repository's current structure and validation rules.

## Primary files
- `src/data/portfolioData.js`
- `src/data/portfolioText.js`
- `src/App.tsx`
- `src/features/portfolio/components/**`
- `src/components/**`
- `src/styles/*.css`
- `AGENTS.md`

## Workflow
1. Classify the request first.
   - Content-first change: prefer editing `src/data/portfolioData.js` or `src/data/portfolioText.js`.
   - Structure/UI change: edit section components or `src/App.tsx` only as much as needed.
2. Keep diffs minimal.
   - Do not rewrite whole files.
   - Preserve import/export shape and existing data structures unless the task requires a controlled schema change.
3. Keep bilingual content aligned.
   - When updating Korean copy, check the matching English field.
   - Keep names, dates, metrics, company names, and certification details consistent across languages.
4. Preserve the site's scanning flow.
   - Summary -> Highlights -> Projects -> Stack -> Experience -> Contact remains the default flow unless the user asks for a reordering.
   - Favor concise, scannable copy over long prose.
5. Follow `AGENTS.md` for repository-wide workflow and validation rules.

## Copy rules
- Prefer concrete role, domain, contribution, and outcome statements over vague self-description.
- Do not invent metrics or impact numbers.
- Keep bullet points short enough to scan in cards and timeline layouts.
- If copy length grows, verify the layout still holds on the existing UI.

## UI and structure rules
- Follow the repository's established visual language unless the user asks for a redesign.
- If a change can be handled in data, avoid adding component logic.
- If a new section is added, wire navigation, section id usage, and active-section behavior consistently.
- Preserve accessibility behaviors already present in navigation, buttons, and skip links.
- Portfolio feature work should prefer `src/features/portfolio/components/*` before touching shared `src/components/*`.

## Repo rules
- Treat `AGENTS.md` as the SSOT for repository-wide rules.
- Keep this skill focused on portfolio-specific editing guidance only.

## Validation
For DEV work, run the commands required by `AGENTS.md`:

- `npm run validate`
- `npm run build`

If a dev server is already running, also verify `http://localhost:5173` responds.

## Done criteria
- Requested portfolio change is implemented in the smallest reasonable diff.
- Korean and English content remain aligned where relevant.
- validate and build pass.
