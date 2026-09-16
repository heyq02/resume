# Quality Guidelines

> Code quality standards for frontend development.

## Overview

Biome (`pnpm run check`) formats and lints. Rstest covers `src/` with a 90% floor. Rsbuild builds the static SPA.

## Forbidden Patterns

- Invented resume metrics not in `src/data.json`
- Publishing phone or 期望薪资
- Starter copy (`Rsbuild with React`)
- Emoji as icons
- `outline-none` without a visible `:focus-visible` replacement
- Putting identity (`Hero`) outside `<main id="main">` so the skip link jumps past name/contacts

## Required Patterns

- Skip link `href="#main"` stays **outside** `<main>`; `<main id="main" tabIndex={-1}>` contains Hero and all sections
- Document language via `src/index.html` (`lang="zh-CN"`). Rsbuild 2 has no `html.lang`
- GitHub Pages asset prefix: `base: '/resume/'` in `rsbuild.config.ts`
- Disable React Compiler during `test` / `test:watch` (`npm_lifecycle_event`). Compiler memo branches stay unhit in single-pass tests and tank coverage
- Coverage: Istanbul, include `src/**/*.ts(x)`, exclude `src/index.tsx` (bootstrap) and `src/types.ts` (types only), thresholds 90 on statements/functions/branches/lines
- Biome ignores `.agents` and `.trellis` because `check --write` would rewrite skill fixtures

## Testing Requirements

```ts
// rstest.config.ts
coverage: {
  enabled: true,
  provider: 'istanbul',
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: ['src/index.tsx', 'src/types.ts'],
  thresholds: { statements: 90, functions: 90, branches: 90, lines: 90 },
}
```

Install `@rstest/coverage-istanbul` at the same version as `@rstest/core`.
`tests/rstest.setup.ts` must `afterEach(cleanup)`.
Tests import `data.json` and assert landmarks plus public copy.

## Common Mistakes

### Skip link skips the hero

**Symptom**: `#main` starts at skills; name/email never receive skip focus.

**Cause**: `Hero` rendered above `<main>`.

**Fix**: Render `Hero` inside `<main id="main">`. Keep the skip `<a>` as a sibling before `main`.

### Coverage collapses on App.tsx

**Symptom**: Branches/functions on `App` far below 90% with tests that clearly render it.

**Cause**: React Compiler left on during `pnpm run test`.

**Fix**: Gate `pluginReact({ reactCompiler })` off when `npm_lifecycle_event` is `test` or `test:watch`.

## Code Review Checklist

- [ ] Copy comes from `data.json`
- [ ] No phone/salary
- [ ] Skip + main landmark contract
- [ ] `pnpm run check`, `pnpm run test` (coverage ≥90%), `pnpm run build`
