# Extension Playbook

Use this file when the request is larger than a copy edit.

## New content field

Use when a project, profile, or timeline item needs one more display field.

1. Add the raw field in `src/data/portfolioData.js`.
2. Add the English pair when the field is user-facing.
3. Map or localize the field in `src/features/portfolio/usePortfolioHomeModel.js`.
4. Render it in the narrowest possible section or card component.
5. Adjust styles only if the current layout breaks.

## New section

Use when the site needs another top-level block.

1. Create the new section under `src/features/portfolio/components/*`.
2. Register the section in `src/App.tsx`.
3. Add or update section ids and navigation labels where needed.
4. Verify active-section behavior and keyboard navigation still work.
5. Mark the section root with `data-breakpoint="true"` if the block should influence PDF page splitting.

## New project view or grouping

Use when projects need another slice such as status, domain, or highlight mode.

1. Add the minimum new data signal to `PROJECTS`.
2. Derive grouped or filtered collections in `usePortfolioHomeModel.js`.
3. Keep category and track logic centralized in the model layer when possible.
4. Update the target section UI to consume the derived collection.
5. Re-check empty-state copy in `TEXT`.

## Shared UI promotion

Use when a pattern appears in more than one section.

1. Keep section-local markup local until reuse is clear.
2. Move only stable, reusable pieces into `src/components/*`.
3. Preserve current props shape unless the refactor provides a clear simplification.

## PDF-sensitive changes

Use when the request can affect export behavior.

1. Check whether the changed block renders inside `main.container`.
2. Preserve breakpoint-friendly wrappers such as section roots and card selectors.
3. Avoid adding UI that only works interactively if it must appear correctly in exported PDF.
4. Re-check the export button flow in the contact section after structural changes.

## Copy and layout balance

- Prefer shorter bullets over dense paragraphs.
- If card content grows, trim copy before adding more layout complexity.
- Keep bilingual copy aligned before fine-tuning visuals.
