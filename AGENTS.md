# AGENTS.md

Agent-facing working notes for this repository. Human-facing product docs live in `README.md`. Visual tokens and Brutalism rules live in `DESIGN.md`. Layer-scoped coding contracts live in `.trellis/spec/`.

## Project Overview

Static single-page resume for 贺永琪. Chinese copy; English technical tokens stay English. No backend, no CMS, no client store, no network layer.

| Layer | Role |
| --- | --- |
| `src/data.json` | Sole resume content source |
| `src/types.ts` | TypeScript contract for that JSON (`Resume`) |
| `src/App.tsx` | Skip link + compose sections from typed slices |
| `src/components/` | Presentational sections (`Hero`, skills, experience, projects, education) |
| `src/App.css` | Tailwind v4 `@theme` tokens and Brutalism base |
| `rsbuild.config.ts` | Rsbuild + React + Tailwind; `output.assetPrefix` is `/resume/` |
| GitHub Actions | Build `dist/` on `master` and publish to GitHub Pages |

Stack: React 19, TypeScript (ESM `"type": "module"`), Rsbuild 2 / Rspack, Tailwind CSS v4, Biome 2, Rstest + Istanbul + Testing Library + happy-dom.

Live site: https://heyq02.github.io/resume/

This is a **single package**. Root `pnpm-workspace.yaml` only pins the npm registry (`https://registry.npmmirror.com/`). Do not treat the repo as a monorepo.

Page assembly order in `src/App.tsx`:

```
Hero → SkillGroups → ExperienceList → ProjectList → Education
```

## Runtime (hard constraint)

Develop and run this repo **only** with the **local nvm Node.js 24.20.0** install. Do not use any other Node version or isolated environment.

Pinned version: **v24.20.0**

CI uses Node **24** (major) via `.github/workflows/github-pages.yml`. Local work must still be **24.20.0**. Always pass the patch version explicitly (`nvm use 24.20.0`). Do not rely on a major-only Node selector.

Before any install, lint, typecheck, or app scripts:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"
nvm use 24.20.0
```

Confirm both of these before continuing:

```bash
node -v          # must print v24.20.0
which node       # must be $HOME/.nvm/versions/node/v24.20.0/bin/node
```

If `node -v` is not `v24.20.0`, **stop**. Do not fall back.

`nvm use 24.20.0` in the **current shell** is required and does not need extra confirmation. Do **not** change nvm’s default alias, install another Node, or edit shell rc files to make 24 global.

### Do not use

- Homebrew Node (`/opt/homebrew/bin/node`, may be newer than 24)
- Other nvm versions on this machine (anything except `v24.20.0`)
- Docker, Dev Containers, Nix, asdf, fnm, volta, n, or cloud/CI sandboxes for local work
- `npm`, `yarn`, or `bun` for dependency install (`packageManager` is pnpm)
- A pnpm version other than **11.23.0**
- Introducing a second runtime or changing the pinned Node without an explicit user request

## Package manager (hard constraint)

Use **pnpm 11.23.0** only. Source of truth is root `package.json`:

- `"packageManager": "pnpm@11.23.0"`
- `"devEngines.packageManager": { "name": "pnpm", "version": "11.23.0", "onFail": "download" }`

After `nvm use 24.20.0`, confirm:

```bash
pnpm -v          # must print 11.23.0
```

If `pnpm -v` is not `11.23.0`, **stop**. Do not fall back to another pnpm, npm, yarn, or bun. Do not change `packageManager` / `devEngines` without an explicit user request.

Corepack (or `devEngines` `onFail: "download"`) may fetch this exact pnpm when missing; do not install a different global pnpm to “make it work”.

## High-risk operations (ask first)

**Stop and get an explicit yes from the user** before any operation that changes the machine outside this repository. Do not proceed on implied consent, “it would help”, or because a skill/docs suggested it.

Requires confirmation:

- **Global package installs** — `npm i -g`, `pnpm add -g`, `yarn global`, `bun add -g`, `brew install` / `brew upgrade`, OS package managers, editor/CLI plugins installed for all projects
- **Global or extra-repo deletes** — anything outside the checkout: `~/.nvm`, Homebrew prefixes, `/usr/local`, `/opt/homebrew`, other clones, shell history, credentials, nvm versions, `rm -rf` on home or system paths
- **Global environment switches** — `nvm alias default`, `nvm install`, `nvm uninstall`, changing default Node, editing `~/.zshrc` / `~/.bashrc` / `~/.zprofile`, mutating `PATH` persistently, Docker/context switches, logging into cloud CLIs
- **Destructive git/machine actions** — `git push --force`, hard reset of shared branches, rewriting git config, skipping hooks
- **Secrets and identity** — writing credentials, SSH keys, tokens, or changing git `user.*`

How to ask: state the exact command, what it changes (path + scope), why you think it is needed, and a repo-local alternative if one exists (`pnpm add -D`, `pnpm exec`, `pnpm dlx`). Wait for a clear yes. If the user says no or does not answer, skip it and continue with in-repo tools only.

Prefer in-repo, session-local work: `pnpm install` / `pnpm add -D` in the right workspace, `pnpm exec`, `pnpm dlx`, and `nvm use 24.20.0` in this shell.

## Setup Commands

Use **pnpm 11.23.0** and Node 24.20.0 only. Install from the **repo root**.

```bash
export NVM_DIR="$HOME/.nvm"
. "/opt/homebrew/opt/nvm/nvm.sh"
nvm use 24.20.0
pnpm -v          # must print 11.23.0
pnpm install
```

Do not run `npm install`, `yarn`, or `bun install`.

Default Homebrew `node` on PATH may be **not** 24. Always activate nvm 24.20.0 in the same shell as pnpm.

Add a dependency with `pnpm add <pkg>` or `pnpm add -D <pkg>` from the repo root. Never introduce a second package manager lockfile.

## Development Workflow

Always activate Node 24.20.0 in the same shell first (see Runtime).

- Start the Rsbuild dev server (default http://localhost:3000, HMR on): `pnpm run dev`
- Production build to `dist/`: `pnpm run build`
- Serve the production build locally: `pnpm run preview`
- Lint + format with write-back: `pnpm run check`
- Format only: `pnpm run format`

There is no `typecheck` script. `tsconfig.json` is `noEmit` for the bundler. `pnpm exec tsc --noEmit` is **not** a CI gate: it currently fails on Testing Library matcher types (`toBeInTheDocument`, etc.) because those are attached at runtime in `tests/rstest.setup.ts`. Use `pnpm run test` for the real quality gate.

`src/index.html` is the HTML template (`lang="zh-CN"`). Rsbuild 2 has no `html.lang` config — do not try to set language in `rsbuild.config.ts`.

React Compiler is on for `dev` / `build` / `preview`, and **off** for `test` / `test:watch` via `process.env.npm_lifecycle_event` in `rsbuild.config.ts`. Do not enable it during tests; compiler memo branches stay unhit in single-pass tests and collapse Istanbul coverage.

## Testing Instructions

Tests live in `tests/`. Setup is `tests/rstest.setup.ts` (jest-dom matchers + `afterEach(cleanup)`). UI tests are in `tests/index.test.tsx`.

```bash
pnpm run test        # Rstest once, coverage enabled, 90% thresholds
pnpm run test:watch  # watch mode
pnpm run test -t "<test name>"   # run one test by name
```

Coverage (`rstest.config.ts`):

- Provider: Istanbul (`@rstest/coverage-istanbul` must stay at the same version as `@rstest/core`)
- Include: `src/**/*.ts`, `src/**/*.tsx`
- Exclude: `src/index.tsx` (bootstrap), `src/types.ts` (types only)
- Thresholds: statements / functions / branches / lines **≥ 90%**
- Reporter: `text`

Required test patterns:

- Import `src/data.json` and assert public copy / landmarks from that object — do not duplicate resume strings in tests
- Skip link `href="#main"` stays **outside** `<main>`; Hero (name, contacts, summary) stays **inside** `<main id="main">`
- mailto has no `target`; GitHub/blog use `target="_blank"` and `rel="noopener noreferrer"`
- Empty collections render no hollow chrome (`SkillGroups` / lists / certificates)
- JSON and rendered text must not include phone, `期望薪资`, `phone` / `salary` / `mobile`, or invented metrics (`DAU`, `GMV`)
- Starter copy (`Rsbuild with React`) must stay gone

Add or update tests for UI you change. Keep `@rstest/coverage-istanbul` version-locked to `@rstest/core`.

## Code Style

- Language: TypeScript + React function components. Named exports for section components (`export function Hero`). Default export only for `App`.
- `"verbatimModuleSyntax": true` — type-only imports use `import type`.
- Biome (`biome.json`): recommended lint, space indent, **single quotes**, `organizeImports` on. Tailwind directives enabled for CSS.
- `pnpm run check` is `biome check --write` (it mutates files). Biome ignores `.agents` and `.trellis` so skill fixtures are not rewritten.
- File layout: PascalCase component files matching the export (`Hero.tsx` → `Hero`).
- Content: edit `src/data.json` and keep it assignable to `Resume` in `src/types.ts`. Map JSON once in `App.tsx` (`const data: Resume = resume`) and pass typed slices. Do not hardcode bullets or identity strings in JSX. Do not `as Resume` to hide extra keys.
- Dates: `YYYY.MM` or `YYYY`; `end` may be `至今`.
- Tokens: colors, fonts, radius (all `0`), and `shadow-brutal` live in `src/App.css` `@theme`. Components use semantic classes (`bg-accent`, `border-border`, `shadow-brutal`). No raw hex in components. No dynamic class tokens (`bg-${color}`).
- Accessibility: skip link, `<main id="main" tabIndex={-1}>`, visible `:focus-visible` (do not use `outline-none` without a replacement), `prefers-reduced-motion` respected in `App.css`.
- Copy language: Chinese UI chrome (`跳到正文`, section titles); English for tech tokens. Skill chips may use `translate="no"` on Latin tokens.
- Public contacts only: email, GitHub, blog. Never add phone or salary to `data.json` or the UI.
- No emoji as icons. No gray type, glass, navy SaaS chrome, or rounded corners.
- Shared list markup lives in `BulletList`; do not copy a third `<ul>` pattern.
- Empty arrays are allowed where the type is `string[]`; omit the section chrome instead of rendering empty headings.
- Keep `src/index.tsx` thin (`createRoot` + `StrictMode` only).

Read `.trellis/spec/frontend/` before changing structure, types, or quality gates (`directory-structure.md`, `type-safety.md`, `quality-guidelines.md`).

## Build and Deployment

```bash
pnpm run build     # writes static files to dist/
pnpm run preview   # local preview of dist/
```

GitHub Pages is a project site at `/resume/`. `rsbuild.config.ts` sets:

```ts
output: {
  assetPrefix: '/resume/',
}
```

If the repo name changes, update `assetPrefix` to `/<repo>/` (or `/` for a user/org root site). Do not confuse this with Vite `base`; this project uses Rsbuild `output.assetPrefix`.

CI: `.github/workflows/github-pages.yml`

- Triggers: push to `master`, plus `workflow_dispatch`
- Node 24, global `pnpm@11.23.0`, `pnpm i`, `pnpm run build`
- Uploads `./dist` and deploys with `actions/deploy-pages`
- Permissions: `contents: read`, `pages: write`, `id-token: write`
- Concurrency group `pages` does **not** cancel in-progress runs

Output directory `dist/` is gitignored. Do not commit build artifacts or `coverage/`.

There are no app environment variables and no secrets in this SPA. Public URLs in `data.json` are intentional.

## Pull Request Guidelines

- Title: short description of the user-visible or agent-facing change (example: `Document agent workflow in AGENTS.md`)
- Before commit, from repo root with Node 24.20.0 / pnpm 11.23.0:

```bash
pnpm run check
pnpm run test
pnpm run build
```

- Do not commit `.env`, credentials, or generated `dist/` / `coverage/`
- Do not skip git hooks
- Prefer updating `data.json` + tests together when copy changes
- Pages deploy only runs on `master`; a PR does not publish the live site

## Debugging and Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Wrong Node / pnpm | Homebrew Node or another nvm version on PATH | `nvm use 24.20.0` then `pnpm -v` must be `11.23.0` |
| Assets 404 on Pages | `assetPrefix` not `/resume/` | Keep `output.assetPrefix: '/resume/'` |
| Skip link jumps past name/email | `Hero` rendered outside `<main>` | Keep skip `<a>` before `<main>`; put `Hero` inside it |
| Coverage on `App` collapses | React Compiler left on during tests | Gate `reactCompiler` off when `npm_lifecycle_event` is `test` or `test:watch` |
| `pnpm run check` rewrites skill files | Biome includes drifted | Keep `!**/.agents` and `!**/.trellis` in `biome.json` `files.includes` |
| `tsc --noEmit` matcher errors | jest-dom types not on Rstest `expect` | Ignore for gating; matchers are registered in `tests/rstest.setup.ts`. Do not add a fake `typecheck` script unless those types are wired |
| JSON / UI drift | Copy duplicated in JSX | Drive UI from `data.json`; tests import that JSON |
| Type error after editing JSON | Shape no longer matches `Resume` | Update `src/types.ts` or the JSON; do not assert with `as Resume` |

HTML title is set in `rsbuild.config.ts` (`html.title`). Favicon is `public/favicon.png`.

## Additional Notes

- Do not invent resume metrics. Only render what `src/data.json` contains.
- `DESIGN.md` is the visual contract (black / white / signal yellow, Space Grotesk + JetBrains Mono 700, 4px borders, 6px offset shadow, zero radius). Follow it when changing UI.
- Rsbuild / Rspack / Rstest docs for agents: https://rsbuild.rs/llms.txt , https://rspack.rs/llms.txt , https://rstest.rs/llms.txt
- Project skills under `.agents/skills/` (Rsbuild, Rstest, Tailwind, resume optimizer, web guidelines) are optional helpers; they do not override the runtime/pnpm constraints above.

<!-- TRELLIS:START -->
# Trellis Instructions

These instructions are for AI assistants working in this project.

This project is managed by Trellis. The working knowledge you need lives under `.trellis/`:

- `.trellis/workflow.md` — development phases, when to create tasks, skill routing
- `.trellis/spec/` — package- and layer-scoped coding guidelines (read before writing code in a given layer)
- `.trellis/workspace/` — per-developer journals and session traces
- `.trellis/tasks/` — active and archived tasks (PRDs, research, jsonl context)

If a Trellis command is available on your platform (e.g. `/trellis:finish-work`, `/trellis:continue`), prefer it over manual steps. Not every platform exposes every command.

If you're using Codex or another agent-capable tool, additional project-scoped helpers may live in:
- `.agents/skills/` — reusable Trellis skills
- `.codex/agents/` — optional custom subagents

Managed by Trellis. Edits outside this block are preserved; edits inside may be overwritten by a future `trellis update`.

<!-- TRELLIS:END -->
