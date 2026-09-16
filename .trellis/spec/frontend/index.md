# Frontend Development Guidelines

> Best practices for frontend development in this project.

---

## Overview

This directory contains guidelines for frontend development. Fill in each file with your project's specific conventions.

---

## Guidelines Index

## Pre-Development Checklist

- [ ] Resume copy goes in `src/data.json` typed as `Resume` — do not hardcode bullets in JSX
- [ ] Skip link stays outside `<main id="main">`; Hero and sections stay inside it
- [ ] Use `@theme` tokens (`bg-accent`, `border-border`); no raw hex in components
- [ ] Keep React Compiler off for `pnpm run test` (coverage)
- [ ] Public site: email / GitHub / blog only — no phone, no salary

## Quality Check

- [ ] `pnpm run check`
- [ ] `pnpm run test` — src coverage ≥90% (exclude `index.tsx`, `types.ts`)
- [ ] `pnpm run build`
- [ ] Tests still assert skip/main, JD + internships, education, mailto/github/blog

---

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | Module organization and file layout | Filled |
| [Component Guidelines](./component-guidelines.md) | Component patterns, props, composition | To fill |
| [Hook Guidelines](./hook-guidelines.md) | Custom hooks, data fetching patterns | To fill |
| [State Management](./state-management.md) | Local state, global state, server state | To fill (no client store) |
| [Quality Guidelines](./quality-guidelines.md) | Code standards, forbidden patterns | Filled |
| [Type Safety](./type-safety.md) | Type patterns, validation | Filled |

---

## How to Fill These Guidelines

For each guideline file:

1. Document your project's **actual conventions** (not ideals)
2. Include **code examples** from your codebase
3. List **forbidden patterns** and why
4. Add **common mistakes** your team has made

The goal is to help AI assistants and new team members understand how YOUR project works.

---

**Language**: All documentation should be written in **English**.
