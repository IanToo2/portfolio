# Repo Map

Use this file to choose the first file to inspect before editing.

## Change routing

| Request type | First file | Then inspect |
| --- | --- | --- |
| Profile, metrics, highlights, experience, stack, projects content | `src/data/portfolioData.js` | `src/features/portfolio/usePortfolioHomeModel.js` |
| UI labels, copy, CTA text, aria text, bilingual strings | `src/data/portfolioText.js` | target section component |
| Section order, page composition, global wiring | `src/App.tsx` | section components, hooks |
| Section-specific layout or card rendering | `src/features/portfolio/components/*` | `src/styles/*.css` |
| Shared card, icon, logo, timeline UI | `src/components/*` | consuming section component |
| Project grouping, localization, summary derivation | `src/features/portfolio/usePortfolioHomeModel.js` | `src/features/portfolio/lib/modelHelpers.js` |
| PDF export behavior or export CTA impact | `src/hooks/usePortfolioPdfExport.js` | contact section, affected layout |

## Editing order
1. Solve the request in data if possible.
2. Update the portfolio view-model if the UI needs derived state or localization mapping.
3. Change section components before shared components.
4. Touch `src/App.tsx` only for composition, navigation, or top-level flow changes.
5. Adjust styles last.

## Current page flow
The default scan flow is:

1. Home overview
2. Projects
3. Capabilities
4. Career
5. Contact

Keep this order unless the user explicitly asks for a different narrative flow.

## Guardrails
- Do not duplicate repository-wide rules from `AGENTS.md`.
- Keep diffs small and preserve import/export shape.
- If a new section is introduced, wire navigation, anchor ids, and active-section behavior together.
