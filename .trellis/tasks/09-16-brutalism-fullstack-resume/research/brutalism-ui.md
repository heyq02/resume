# Brutalism UI decisions

`--design-system` matched style=Brutalism but returned a navy SaaS palette and Cinzel/Josefin (real-estate). Those tokens are rejected. Use the Brutalism style catalog instead.

## Style (verified: styles.csv `brutalism`)

- Raw, stark, high contrast, visible borders, asymmetric, anti-design
- Effects: no smooth transitions (or 0s), radius 0, font-weight 700+, visible grid, large blocks
- Primary colors from catalog: black `#000000`, white `#FFFFFF`, yellow `#FFFF00`, optional red `#FF0000` / blue `#0000FF` for stamps only
- Light page (resume readability) with black ink; dark variant optional via `.dark` token overrides, same geometry

## Color tokens (override)

Map Tailwind `@theme` semantics onto the brutalist palette, not the navy demo:

- `--color-background`: `#FFFF00` or `#FFFFFF` (prefer white canvas + yellow stamps)
- `--color-foreground`: `#000000`
- `--color-primary`: `#000000`
- `--color-primary-foreground`: `#FFFF00`
- `--color-accent`: `#FFFF00`
- `--color-accent-foreground`: `#000000`
- `--color-border`: `#000000`
- `--color-card`: `#FFFFFF`
- `--color-ring`: `#000000`

Borders 3–4px solid black. Hard offset shadow `6px 6px 0 #000`. No blur.

## Typography (verified: Neo Brutalism Mobile / Space Grotesk)

- Display + body: Space Grotesk 700 (headings oversized, body 16–18px, line-height 1.5)
- Labels/dates/skills: JetBrains Mono uppercase tracking
- Do not use Cinzel / Josefin / Playfair

## Layout

- Single-page resume, not a product-demo video landing
- Order: skip link → identity hero → skills → experience → projects → education
- Asymmetric hero: oversized name, thick rule, stamp-like role label
- Section headers as black bars / yellow ticks, numbered like a spec sheet
- Mobile-first; no horizontal scroll at 375px

## UX (verified searches)

- Skip to main content
- Visible focus ring ≥2px, 3:1 against adjacent, never `outline-none` without replacement
- Semantic `header` / `nav` / `main` / `section` / lists; links are `<a>`, not clickable divs
- `cursor-pointer` on clickable controls
- `prefers-reduced-motion: reduce` → no motion (Brutalism already prefers instant)
- Contrast 4.5:1 for body text (black on white / black on yellow)

## Anti-patterns

- Glassmorphism, gradient hero (current `App.css`), navy SaaS cards, emoji icons
- Skill bars, photos, tables that break ATS-like structure
- Dynamic Tailwind class concatenation (`bg-${x}`)
