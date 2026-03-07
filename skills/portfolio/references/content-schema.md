# Content Schema

Use this file before changing exported data structures in `src/data/portfolioData.js` or `src/data/portfolioText.js`.

## Core exports

`src/data/portfolioData.js` currently exports:

- `PROFILE`
- `NAV_ITEMS`
- `SCAN_HIERARCHY`
- `SUMMARY_QUICK_MODEL`
- `METRICS`
- `HIGHLIGHTS`
- `STACK`
- `EXPERIENCE`
- `EDUCATION`
- `TRAINING`
- `AWARDS`
- `CERTIFICATIONS`
- `PROJECT_CATEGORY`
- `PROJECT_TRACK`
- `PROJECTS`

`src/data/portfolioText.js` exports:

- `TEXT`

## Bilingual field rules

- Scalar text fields use `field` and `fieldEn`.
- List text fields use `field` and `fieldEn` with matching array shape.
- Keep the Korean and English values aligned in meaning, ordering, and count.
- Do not add a new Korean-only field unless the UI is intentionally language-specific.

## `PROFILE`

Use for top-level identity and direct contact information.

- Name fields: `name`, `nameEn`
- Role/domain/tagline/intro fields use `field` and `fieldEn`
- Direct contact fields such as `email` and `github` are shared, not bilingual

## Timeline collections

The timeline-style arrays are:

- `EXPERIENCE`
- `EDUCATION`
- `TRAINING`
- `AWARDS`
- `CERTIFICATIONS`

Each item follows this shape:

- `period`, `periodEn`
- `organization`, `organizationEn`
- `title`, `titleEn`
- `bullets`, `bulletsEn`

`usePortfolioHomeModel.js` localizes these collections through `localizeTimelineItems`.

## `STACK`

Each stack group uses:

- `title`, `titleEn`
- `icon`
- `proficiency`
- `items`

`items` is currently shared across languages unless the list itself needs translation.

## `PROJECTS`

Each project is expected to support:

- `category`
- `track`
- `isFeatured`
- `name`, `nameEn`
- `period`, `periodEn`
- `kind`, `kindEn`
- `scope`, `scopeEn`
- `tech`, `techEn`
- `contributions`, `contributionsEn`
- `metrics`
- `isPending`

Metric items use:

- `label`, `labelEn`
- `value`, `valueEn`

Current category and track constants:

- `PROJECT_CATEGORY.WORK`
- `PROJECT_CATEGORY.TEAM`
- `PROJECT_TRACK.SCM`
- `PROJECT_TRACK.QA`
- `PROJECT_TRACK.TEAM`

If you add new project-facing fields, update:

1. the project object in `src/data/portfolioData.js`
2. localization or derived mapping in `usePortfolioHomeModel.js`
3. the consuming section or card UI

## `TEXT`

`TEXT` is keyed by language (`ko`, `en`) and contains:

- section headings and subtitles
- CTA labels
- aria labels
- status and feedback strings
- nested objects such as `projectCard` and `timelineTitles`

When adding UI copy, prefer extending `TEXT` over hardcoding strings inside components.

## Guardrails
- Preserve existing export names unless the task explicitly requires a controlled refactor.
- Keep array item ordering intentional; UI uses current order as presentation order.
- If a new field is derived, derive it in `usePortfolioHomeModel.js` instead of mutating raw data at render sites.
