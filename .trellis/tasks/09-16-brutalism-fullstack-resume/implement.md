# Implement — Brutalism fullstack resume site

## Checklist

1. Author `src/data.json` + `src/types.ts` from `research/resume-copy.md` (no phone, no salary, no invented metrics).
2. Replace `src/App.css` with Tailwind v4 `@theme` brutalist tokens from `research/brutalism-ui.md`; load Space Grotesk + JetBrains Mono.
3. Build presentational sections; `App.tsx` composes them from typed JSON. Set page title via Rsbuild `html.title` if needed.
4. Replace starter test; add section tests that read public text from data. Enable coverage include `src/**`, thresholds 90, install provider package if required.
5. Run validation. Fix Biome (`quoteStyle: single`, organize imports). Do not commit.

## Validation

```bash
pnpm run check
pnpm run test
pnpm run build
```

`pnpm run test` must print coverage and fail if `src/` statements/functions/branches/lines < 90.

Browser (when implementing): 375 and 1280, keyboard tab through links, confirm skip link and no starter gradient.

## Risky files

- `src/App.css` — replaces global starter styles; easy to leave gradient/Inter.
- `rstest.config.ts` — wrong `include` can count `tests/` or miss `src/`.
- `src/index.tsx` — coverage trap; exclude or add a dedicated bootstrap test.

## Rollback points

After step 3: UI visible without tests. After step 4: coverage gate. If coverage provider install fails, keep UI and document the blocker instead of faking thresholds.

## Ready for start

- [x] `prd.md` converged
- [x] `design.md` + `implement.md`
- [x] research copy + UI notes
- [ ] User review / explicit go-ahead, then `task.py start`
