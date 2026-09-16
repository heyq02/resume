# Type Safety

> Type safety patterns in this project.

## Overview

TypeScript with `verbatimModuleSyntax`. Resume data is a typed JSON module, not a runtime schema library.

## Type Organization

- Shared resume contract: `src/types.ts`
- Assign the JSON import once: `const data: Resume = resume`
- Component props are slices of that contract (`HeroProps`, `Experience[]`)

## Scenario: Resume JSON → UI

### 1. Scope / Trigger

Content changes must not require hunting string copies in components. The JSON file is the only payload.

### 2. Signatures

```ts
export type Resume = {
  name: string;
  title: string;
  email: string;
  github: string;
  blog: string;
  summary: string;
  skills: SkillGroups;
  experiences: Experience[];
  projects: Project[];
  education: Education;
};
```

`src/data.json` must be assignable to `Resume`.

### 3. Contracts

Required public fields: `name`, `title`, `email`, `github`, `blog`, `summary`.
Forbidden keys: `phone`, `salary`, `mobile`, and invented scale metrics (DAU/GMV/ms).

### 4. Validation & Error Matrix

| Condition | Result |
| --- | --- |
| JSON missing a `Resume` field | `tsc` / assignment error |
| UI hardcodes copy instead of props | Drift vs `data.json`; tests fail when JSON changes |
| Phone/salary present | Product violation; `does not show phone, salary` test fails |

### 5. Good / Base / Bad

- Good: `const data: Resume = resume` then `<Hero name={data.name} />`
- Base: empty arrays are allowed only where the type is `string[]` (certificates, bullets)
- Bad: `as Resume` to silence extra keys, or duplicating bullets in JSX

### 6. Tests Required

- Render `App` and assert `resume.name`, employers, education, mailto/github/blog hrefs
- Assert JSON string has no `phone` / `salary` / `mobile`

### 7. Wrong vs Correct

#### Wrong

```tsx
<h1>贺永琪</h1>
```

#### Correct

```tsx
const data: Resume = resume;
<h1>{data.name}</h1>
```

## Forbidden Patterns

- `any` on resume data
- Type assertions to hide JSON/shape mismatch
- Dynamic Tailwind tokens (`bg-${color}`) — also a bundler issue
