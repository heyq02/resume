# Design System: 贺永琪 · Frontend Resume
**Project ID:** Unlinked (no Stitch MCP in this session). Source of truth is the live single-page site `heyq02/resume`, reverse-engineered from `src/App.css` and presentational React sections.

## 1. Visual Theme & Atmosphere

The resume is a **Swiss-Brutalist spec sheet**: International Typographic Style grid and type hierarchy, with Brutalist geometry kept as structure rather than volume. The mood is **stark and quiet**, not a poster shouting from every edge.

The page sits on **Graph-Paper Butter**, a pale yellow drafting canvas scored with a faint dual-scale grid. White content slabs sit on that canvas with black outlines and a hard, unblurred offset shadow. Signal yellow is reserved for stamps, index ticks, skip-link chrome, and hover fill — never as a field of competing blocks.

Hierarchy comes from **weight and measure**, not from inverted bars on every heading. Body copy is regular; titles are extra-bold. Motion is short and decelerating: sections rise on load, the hero rule draws left-to-right, links and chips ease on hover. Corners stay squared-off. No gray type, glass, or navy SaaS chrome.

**Key Characteristics:**
- Visible structure: 4px black borders on cards, 2px on stamps/chips, zero radius, hard 4px offset shadows
- Drafting-paper canvas with a quiet 24px grid plus a 120px module
- Asymmetric hero: stamp-like role chip, contacts stacked as monospace URLs, large but not billboard-scale name
- Section headers as a Swiss title row (yellow index, black Chinese title, tracked English) over a 2px rule
- Short CSS motion with shared easing; honor `prefers-reduced-motion`
- Light, print-like readability: black ink on white cards or yellow stamps only

## 2. Color Palette & Roles

### Primary Foundation
- **Graph-Paper Butter** (#FFFBE6) — Page canvas and theme-color. Warmer and louder than sterile white; the drafting-paper field behind every card. Also used as the focus-ring offset so keyboard focus sits on the same sheet.
- **Gallery White** (#FFFFFF) — Card, chip, and article fill. Lifts content off the yellow grid so body copy stays high-contrast.

### Accent & Interactive
- **Signal Yellow** (#FFFF00) — The only chromatic accent. Used for the role stamp, section index ticks, skip-link chrome, link hover fill, and a small decorative square at the viewport edge. Always paired with black ink, never as long-form body background.
- **Ink Black** (#000000) — Structure and text: page type, borders, hard shadows, the display name, the hero rule, and a slim decorative side block.

### Typography & Text Hierarchy
- **Ink Black** (#000000) — All readable text. No gray hierarchy. Weight and scale do the ranking, not muted color.
- **Ink on Signal Yellow** (#000000 on #FFFF00) — Stamps, index numbers, skip link, and hover highlight. Do not invert whole section titles onto black bars.

### Functional States
- **Focus Ring Ink** (#000000) — A 4px solid outline, offset 2px, on `:focus-visible` only. Never remove the outline without this replacement.
- **Tap Flash** — A 45% Signal Yellow mix as the WebKit tap highlight. Instant, not a fade.
- **Optional stamps only (do not use as UI chrome):** Pure Red (#FF0000) and Pure Blue (#0000FF) may appear as tiny construction stamps, never as backgrounds, body text, or primary buttons.

### Forbidden
Navy, slate, muted gray type, glass overlays, photographic gradients, and any color outside black / white / yellow (plus the two optional stamp primaries).

## 3. Typography Rules

**Display + body family:** Space Grotesk — regular (400) for body, extra-bold (700) for titles  
**Character:** Geometric, slightly boxy, industrial. Swiss measure with a drawing-office face, not a lifestyle brand.

**Label / meta family:** JetBrains Mono, medium (500); extra-bold (700) only on the skip link and yellow stamps  
**Character:** Mechanical, uppercase, wide tracking. Used for dates, roles, skill chips, English ticks, and URLs.

Do not introduce Inter, Cinzel, Josefin, Playfair, or other serif/display faces. Do not add a navy/slate palette.

### Hierarchy & Weights
- **Display Name (H1):** Extra-bold (700), tight tracking, no leading cushion (`leading-none`). ~2.25rem on small screens, scaling to ~3.75rem then ~4.5rem. Balanced wrapping. Still the loudest object, but not a billboard.
- **Section Titles (H2):** A Swiss row, not an inverted bar. Yellow index (mono, ~0.75rem extra-bold), black Chinese title (~1.5rem extra-bold), tracked English tick (mono, ~0.75rem medium, uppercase). A 2px Ink Black rule under the row.
- **Entity Titles (H3):** Extra-bold (700), ~1.25rem, Ink Black on Gallery White. Company, project, and school names. Allow wrapping; never truncate with ellipsis as the default.
- **Meta Labels (H4 / group labels):** JetBrains Mono medium, ~0.75rem, uppercase, wide tracking. Dates use tabular numerals and an en dash (`2024.06–至今`).
- **Body / Summary:** Space Grotesk regular (400) at 1.125rem (18px) desktop, 1rem on small screens, line-height 1.5. Pretty wrapping on long Chinese paragraphs.
- **Skill Chips:** JetBrains Mono medium, ~0.875rem, uppercase, wide tracking, `translate="no"` on Latin tokens.
- **Links:** Same family as surrounding text, 2px underline with 4px offset. On hover, fill with Signal Yellow over ~180ms. No color shift to gray or navy.

### Spacing Principles
- Section titles sit on a 2px rule with ~0.75rem padding below the type
- Body keeps a workmanlike 1.5 line-height — readable, not luxurious
- Related blocks stack with ~2rem (32px) gaps; major sections use ~4rem (64px) bottom margin (`mb-16`)
- Letter-spacing is reserved for mono labels (`tracking-widest`), never for the display name (that stays tight)

## 4. Component Stylings

### Buttons
The live site has almost no filled buttons; the skip link is the canonical “button-like” control.
- **Shape:** Sharp, squared-off edges (0px radius)
- **Primary / Skip chrome:** Signal Yellow (#FFFF00) fill, Ink Black type, 4px Ink Black border, hard 4px offset shadow. Extra-bold mono, uppercase, wide tracking. Compact padding (~0.5rem × 0.75rem)
- **Hover:** ~180ms decelerating fill with Signal Yellow. Darken nothing. Focus still uses the 4px ink ring, not color fade
- **Focus:** 4px Ink Black outline, 2px offset, `:focus-visible` only
- **Skip link behavior:** Visually hidden until keyboard focus, then it slams into the top-left as a yellow stamp. Never leave it parked as a permanent yellow chip in the header

### Cards / Containers
- **Corner Style:** Sharp, squared-off edges (0px)
- **Background:** Gallery White (#FFFFFF)
- **Stroke:** Heavy 4px solid Ink Black on all sides
- **Shadow:** Hard, high-contrast drop — `4px 4px 0 #000000` (`shadow-brutal`). No blur, no opacity fade
- **Internal Padding:** 1.25rem default, 1.5rem from the `sm` breakpoint
- **Rhythm:** Vertical stack, ~2rem between sibling cards
- **Empty states:** Do not render hollow chrome. Hide the whole section or list when the collection is empty

### Stamps & Chips
- **Role stamp (hero):** Signal Yellow fill, 2px Ink Black border, extra-bold mono, uppercase, wide tracking. Sits top-left of the identity card
- **Skill chips:** Gallery White fill, 2px Ink Black border, 2px offset shadow (`shadow-stamp`), medium mono uppercase. Wrap in a flex row with 0.5rem gaps. Hover nudges `-1px` on both axes (~180ms); do not stagger chip entrance
- **Section index tick:** Compact Signal Yellow block with Ink Black numerals (`01`, `02`…), then the Chinese title and English tick — no inverted black bar

### Inputs / Forms
No forms ship on the live page. If Stitch generates one, inherit the same geometry:
- **Stroke:** 4px solid Ink Black
- **Background:** Gallery White
- **Corners:** Sharp, squared-off
- **Focus:** 4px Ink Black outline, 2px offset
- **Labels:** Extra-bold mono, uppercase, sitting outside or as a yellow tick — never placeholder-only
- **No** hairline gray borders, no pill fields, no floating labels

### Links & Navigation
- **Contacts:** Stacked monospace URLs / email, `break-all`, left-aligned on small screens, right-stacked on larger
- **Underline:** 2px, offset 4px, Ink Black
- **Hover:** Signal Yellow background behind the text, ~180ms color transition (`ease-out-quart`)
- **External:** Real `<a>` tags (Cmd-click must work). `rel="noopener noreferrer"` and `target="_blank"` for http(s); mailto stays in-place
- **No** clickable `<div>`s, no ghost buttons, no icon-only social circles

### Lists
- Resume bullets are **not** round discs. Each item is a left Ink Black bar (2px) and 0.75rem indent, regular body text, wrapping with `break-words`
- Vertical gap ~0.5rem between bullets

### Decorative Page Objects (non-interactive)
- A **96×96 Signal Yellow square**, 2px Ink Black border, 2px offset shadow, parked off the top-right viewport edge
- A **56×160 Ink Black rectangle**, 2px border, parked off the bottom-left
- Both are behind content (`z-index: 0`), ignore pointer events, and may clip — they are construction marks, not UI

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 72rem (1152px / `max-w-6xl`) — a readable spec column, not a full-bleed magazine
- **Page order (locked):** skip link → identity hero → skills → experience → projects → education
- **Canvas:** Full-viewport Graph-Paper Butter with a 24px fine grid and a 120px coarse module. Cards sit on top; do not put the grid *inside* the white cards
- **Safe areas:** Respect `env(safe-area-inset-*)` on all four sides; skip link, when revealed, uses `max(1rem, safe-area)` for top/left

### Whitespace Strategy
- **Base unit:** 8px. Component padding is 16px, scaling to 24px
- **Horizontal gutters:** 16px mobile, 24px from `sm`, 40px from `lg`
- **Vertical section gap:** 64px (`mb-16`) — Swiss measure between slabs, not luxury emptiness
- **Hero internals:** 32px between stamp row and name, 4px-tall Ink Black rule (half / two-fifths width) that draws on load, then summary
- **Page padding:** 40px vertical on small screens, 56px from `lg`
- **No** 80–128px luxury section margins

### Alignment & Visual Balance
- **Asymmetric hero:** Role stamp left, contact stack right on `sm+`; stacked on mobile
- **Entity headers:** Title left, tabular date right on `sm+`; stacked on mobile
- **Text alignment:** Left for Chinese body and names. Dates and contacts may right-align on wide screens
- **Reading flow:** Strict top-to-bottom spec sheet. No sidebars, no bento masonry, no photography column
- **Overflow:** No horizontal scroll at 375px. Long tokens wrap (`break-words` / `break-all` on URLs). Flex children that wrap need `min-w-0`

### Responsive Behavior & Touch
- **Mobile-first:** Single column; hero and card internals reflow from stack → split
- **Touch:** `touch-action: manipulation`; 4px borders already create large hit edges on chips and links
- **Motion:** Shared tokens in `@theme` — `--ease-out-quart` (`cubic-bezier(0.16, 1, 0.3, 1)`), enter 380ms (`animate-rise`), rule 520ms (`animate-rule`), hover 180–200ms. Animate the hero and each section once on load (small `translateY` + fade); do not animate every chip or use parallax. Honor `prefers-reduced-motion` by collapsing animation and transition durations. Skip-link appearance stays immediate.
- **Zoom:** Never disable pinch-zoom (`user-scalable=no` is forbidden)

### Accessibility (non-negotiable)
- Semantic `header` / `nav` / `main` / `section` / `article` / lists
- Skip link outside `<main id="main" tabindex="-1">`; identity hero stays **inside** main
- Visible `:focus-visible` ring; no `outline-none` without replacement
- Body contrast is Ink Black on Gallery White or Ink Black on Signal Yellow (both well above 4.5:1)
- Decorative rules and canvas blocks are `aria-hidden` / pointer-events none

## 6. Design System Notes for Stitch Generation

When creating new screens for this project using Stitch, reference these instructions:

### Language to Use
- **Atmosphere:** "Swiss-Brutalist spec sheet on graph-paper butter: quiet grid, black structure, yellow stamps — not a SaaS landing page"
- **Corners:** "Sharp, squared-off edges" (never “rounded-md” or “subtly rounded”)
- **Shadows:** "Hard, high-contrast 4px offset drop with no blur"
- **Borders:** "Heavy 4px solid ink-black strokes"
- **Spacing:** "Measured Swiss padding, not luxury editorial whitespace and not a dense poster"
- **Type:** "Extra-bold Space Grotesk for titles; regular Space Grotesk for body; medium JetBrains Mono for meta; extra-bold mono only on yellow stamps"

### Color References
Always use the descriptive names with hex codes:
- Canvas: "Graph-Paper Butter (#FFFBE6)"
- Cards: "Gallery White (#FFFFFF)"
- Structure / text: "Ink Black (#000000)"
- Stamps / hover / index ticks: "Signal Yellow (#FFFF00)"

### Component Prompts
- "Create an identity card with sharp squared-off edges, a 4px ink-black border, hard 4px offset shadow, a compact Signal Yellow (#FFFF00) role stamp, an extra-bold name, and a 4px ink-black rule that draws from the left"
- "Design a section heading as a Swiss row: a Signal Yellow index, a black Chinese title, a tracked uppercase English tick, and a 2px ink-black rule underneath"
- "Add skill chips as Gallery White rectangles with 2px ink-black borders, 2px offset shadows, and medium uppercase mono labels"
- "Place the page on Graph-Paper Butter (#FFFBE6) with a visible 24px grid and a heavier 120px module; keep card interiors solid Gallery White"

### Incremental Iteration
When refining existing screens:
1. Change one slab at a time (hero, section tick, skill chips, or canvas — not all at once)
2. Name the exact property in design language ("thicken the card stroke to 4px ink-black", not "make it pop")
3. Reject navy palettes, glass, gradients, serif display faces, and any radius above 0px
4. Keep Chinese as body language and English as technical tokens inside mono stamps
)
