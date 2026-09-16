# Design — Brutalism fullstack resume site

## Architecture

Single static SPA. Resume data is bundled JSON. UI is presentational React components. No network, no client store.

```
src/data.json  →  typed Resume  →  App sections  →  DOM
```

Boundary: `src/types.ts` (or colocated `resume.ts`) describes `data.json`. Components accept typed slices as props. Do not parse or reshape in every section; map once in `App` or a thin `ResumePage`.

## Data contract

`src/data.json` fields (names may be camelCase):

- `name`, `title`, `email`, `github`, `blog`, `summary`
- `skills`: `{ languages, frameworks, engineering, tools, infra }` string arrays
- `experiences[]`: `{ company, role, start, end, bullets[] }`
- `projects[]`: `{ name, role, start, end, bullets[] }`
- `education`: `{ school, degree, major, start, end, certificates[] }`

Copy source: `research/resume-copy.md`. No extra keys for phone or salary.

## UI structure

| Section | Component | Data |
| --- | --- | --- |
| Skip link | static | — |
| Hero | `Hero` | name, title, contacts, summary |
| Skills | `SkillGroups` | skills |
| Experience | `ExperienceList` | experiences |
| Projects | `ProjectList` | projects |
| Education | `Education` | education |

Directory:

```
src/
  data.json
  types.ts
  App.tsx
  App.css          # @import tailwindcss; @theme tokens; brutalist base
  index.tsx
  components/
    Hero.tsx
    SkillGroups.tsx
    ExperienceList.tsx
    ProjectList.tsx
    Education.tsx
    ExternalLink.tsx
```

Keep components small and list-driven (`key` = company+dates or project name). Reuse one `BulletList` if three sections share the same list chrome.

## Visual system

See `research/brutalism-ui.md`. Tokens live only in `src/App.css` `@theme`. Radius 0. Fonts: Space Grotesk + JetBrains Mono via CSS `@import` or `link` in Rsbuild html (prefer CSS import in `App.css` so tests/bundler see it). Do not keep the starter gradient.

## Rsbuild

Stay on `rsbuild.config.ts` + `pluginReact` + `pluginTailwindcss`. No extra Rspack unless html title/favicon need `html.title`. Set document title to `贺永琪 · 前端开发工程师`. Default entry `src/index.tsx` is enough (no `index.html` in repo today).

## Testing

- Environment: existing happy-dom + Testing Library setup.
- Coverage: `rstest.config.ts` `coverage.enabled`, `include: ['src/**']`, exclude `src/index.tsx` (bootstrap) if it cannot be mounted without `document.getElementById`; otherwise include it with a small entry test.
- Thresholds 90 on statements, functions, branches, lines for `src/**`.
- Install the coverage provider package required by Rstest 0.11 if missing (`istanbul` default or `v8` + matching `@rstest/coverage-*`).
- Tests import `data.json` and assert rendered text (name, JD, internships, education, mailto, github, blog). One a11y smoke: skip link `href="#main"`, main landmark exists.
- Replace `tests/index.test.tsx` starter assertion.

## Trade-offs

- **JSON vs MDX**: JSON matches current file and is easy to type-test. Chosen.
- **Navy design-system output vs Brutalism catalog**: Catalog + Space Grotesk wins; navy/Cinzel is off-style.
- **Dark mode**: Brutalism catalog supports it, but a print-like light page is the default. Optional `.dark` tokens only if cheap; not required for MVP.
- **Coverage on `index.tsx`**: mounting real `createRoot` is brittle; prefer excluding the bootstrap file and covering `App`.

## Rollback

Revert `src/`, `tests/`, `rstest.config.ts`, `package.json` coverage deps. No migrations.
