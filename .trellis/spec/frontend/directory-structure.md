# Directory Structure

> How frontend code is organized in this project.

## Overview

This is a single-page resume SPA. Resume copy lives in bundled JSON. UI is presentational React. There is no client store and no network layer.

## Directory Layout

```
src/
├── data.json          # Sole resume content source
├── types.ts           # Resume JSON contract
├── App.tsx            # Skip link + compose sections from typed JSON
├── App.css            # Tailwind v4 @theme tokens + brutalist base
├── index.tsx          # createRoot bootstrap (keep thin)
├── index.html         # Document lang (Rsbuild 2 has no html.lang)
├── env.d.ts
└── components/        # Presentational sections, one concern each
    ├── Hero.tsx
    ├── SkillGroups.tsx
    ├── ExperienceList.tsx
    ├── ProjectList.tsx
    ├── Education.tsx
    ├── BulletList.tsx
    ├── ExternalLink.tsx
    └── SectionHeading.tsx
tests/
├── rstest.setup.ts
└── index.test.tsx
```

## Module Organization

- Map `data.json` once in `App.tsx` (`const data: Resume = resume`).
- Pass typed slices as props. Do not re-parse JSON inside sections.
- Put shared list chrome in `BulletList`, not a third copy of `<ul>` markup.
- Tokens only in `src/App.css` `@theme`. Components use semantic classes (`bg-accent`, `border-border`, `shadow-brutal`).

## Naming Conventions

- Components: PascalCase files matching the export (`Hero.tsx` → `export function Hero`).
- Dates in data: `YYYY.MM` or `YYYY`, `end` may be `至今`.
- Tests assert public text from `data.json`, not duplicated string literals.

## Examples

- `src/App.tsx` — composition root
- `src/types.ts` — contract
- `tests/index.test.tsx` — data-driven UI tests
