---
name: "portfolio"
description: "Use when developing or extending the portfolio-site repository, including content edits, bilingual updates, section changes, component work, data-model extensions, and required validation."
---

# Portfolio Skill

## When to use
- User asks to update portfolio content, bilingual copy, profile info, projects, experience, stack, or contact details.
- User asks to add, remove, reorder, or redesign sections in the portfolio site.
- User asks to extend the site's structure, such as new data fields, filters, cards, section-level behaviors, or PDF-related UI.
- User asks to keep portfolio changes aligned with the repository's validation rules and current architecture.

## First pass
1. Read `AGENTS.md` and follow repository-wide rules without redefining them here.
2. Classify the request:
   - Content update
   - UI or layout update
   - Structural extension
   - Validation or debugging
3. Choose the smallest change path in this order:
   - `src/data/*`
   - `src/features/portfolio/usePortfolioHomeModel.js`
   - `src/features/portfolio/components/*`
   - `src/components/*`
   - `src/App.tsx`
   - `src/styles/*`

## Architecture map
- Data source:
  - `src/data/portfolioData.js`
  - `src/data/portfolioText.js`
- View-model:
  - `src/features/portfolio/usePortfolioHomeModel.js`
- Page composition:
  - `src/App.tsx`
- Portfolio sections:
  - `src/features/portfolio/components/*`
- Shared UI:
  - `src/components/*`
- Export behavior:
  - `src/hooks/usePortfolioPdfExport.js`

## Working rules
- Prefer data changes before component logic changes.
- Preserve bilingual parity for all user-facing copy.
- Keep names, dates, metrics, company names, and certification details aligned across languages.
- Preserve import/export shape and current object conventions unless the task is a controlled schema change.
- If adding a new field, wire it through data -> model -> UI in that order.
- If adding a new section, update section id, navigation, active-section behavior, and layout entry together.
- Keep the default scan flow intact unless the user asks to change it.
- Favor concise, scannable copy and do not invent metrics or impact numbers.

## Change playbooks
- Content-only change:
  - Edit `src/data/portfolioData.js` or `src/data/portfolioText.js` first.
- New project attribute:
  - Add the data field, localize it, map it in `usePortfolioHomeModel.js`, then render it in the target card or section.
- New section:
  - Add the section component, register it in `src/App.tsx`, connect navigation and anchors, then style minimally.
- Shared UI refactor:
  - Touch `src/components/*` only when reuse is real across multiple sections.
- PDF-related UI change:
  - Check `src/hooks/usePortfolioPdfExport.js` impact and keep export affordances working.

## References
- Read `references/repo-map.md` to decide where a change belongs.
- Read `references/content-schema.md` before changing exported data shapes or bilingual field pairs.
- Read `references/extension-playbook.md` when adding sections, project views, or structural UI.

## Validation
For DEV work, run the commands required by `AGENTS.md`:
- `npm run validate`
- `npm run build`

If a dev server is already running, also verify `http://localhost:5173` responds.

## Done criteria
- Requested portfolio change is implemented in the smallest reasonable diff.
- Data, model, and UI stay aligned.
- Korean and English content remain aligned where relevant.
- validate and build pass.
