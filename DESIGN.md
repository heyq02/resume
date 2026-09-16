# Design System: 贺永琪 · Frontend Resume
**Project ID:** Unlinked (no Stitch MCP in this session). Source of truth is the live single-page site `heyq02/resume`, reverse-engineered from `src/App.css` and presentational React sections.

## 1. Visual Theme & Atmosphere

The resume is a **raw, high-contrast Neo-Brutalist spec sheet** — closer to a printed construction drawing than a SaaS landing page. The mood is **stark, loud, and unapologetically structural**. Every surface announces its edge. Nothing is softened.

The page sits on **Graph-Paper Butter**, a pale yellow drafting canvas scored with a visible dual-scale grid. White content slabs slam onto that canvas with thick black outlines and a hard, unblurred offset shadow. Signal-yellow stamps and a giant black side bar peek in from the margins like construction tape and ink blocks.

The atmosphere is **dense and utilitarian**, not airy. Hierarchy is shouted with scale (oversized name), ink bars, and numbered section ticks — never with gray type, glass, or gradients. Motion is instant. Corners are squared-off. The design should feel like a portfolio that refuses to be pretty in a conventional way, while remaining fully readable as a Chinese-language résumé with English technical tokens.

**Key Characteristics:**
- Visible structure: 4px black borders, zero radius, hard 6px offset shadows
- Drafting-paper canvas with a fine 24px grid plus a heavier 120px module
- Asymmetric hero: stamp-like role chip, contacts stacked as monospace URLs, oversized name
- Section headers as three-part spec ticks (yellow index, black Chinese title, outlined English)
- Instant interactions; no blur, no glass, no navy SaaS chrome, no emoji icons
- Light, print-like readability: black ink on white cards or yellow stamps only

## 2. Color Palette & Roles

### Primary Foundation
- **Graph-Paper Butter** (#FFFBE6) — Page canvas and theme-color. Warmer and louder than sterile white; the drafting-paper field behind every card. Also used as the focus-ring offset so keyboard focus sits on the same sheet.
- **Gallery White** (#FFFFFF) — Card, chip, and article fill. Lifts content off the yellow grid so body copy stays high-contrast.

### Accent & Interactive
- **Signal Yellow** (#FFFF00) — The only chromatic shout. Used for role stamps, section index ticks, skip-link chrome, link hover fill, and the large decorative square at the viewport edge. Always paired with black ink, never as long-form body background.
- **Ink Black** (#000000) — Primary actions and structure: page text, 4px borders, hard shadows, the oversized name, the thick hero rule, black section-title bars, and the tall decorative side block.

### Typography & Text Hierarchy
- **Ink Black** (#000000) — All readable text. No gray hierarchy. Weight and scale do the ranking, not muted color.
- **Signal Yellow on Ink** (#FFFF00 on #000000) — Inverted bars: Chinese section titles sit on black with yellow type (`primary` fill, `primary-foreground` type).
- **Ink on Signal Yellow** (#000000 on #FFFF00) — Stamps, index numbers, skip link, and hover highlight.

### Functional States
- **Focus Ring Ink** (#000000) — A 4px solid outline, offset 2px, on `:focus-visible` only. Never remove the outline without this replacement.
- **Tap Flash** — A 45% Signal Yellow mix as the WebKit tap highlight. Instant, not a fade.
- **Optional stamps only (do not use as UI chrome):** Pure Red (#FF0000) and Pure Blue (#0000FF) may appear as tiny construction stamps, never as backgrounds, body text, or primary buttons.

### Forbidden
Navy, slate, muted gray type, glass overlays, photographic gradients, and any color outside black / white / yellow (plus the two optional stamp primaries).

## 3. Typography Rules

**Display + body family:** Space Grotesk, extra-bold (700)  
**Character:** Geometric, slightly boxy, industrial. Feels like a title block on a drawing, not a lifestyle brand.

**Label / meta family:** JetBrains Mono, extra-bold (700)  
**Character:** Mechanical, uppercase, wide tracking. Used for dates, roles, skill chips, English ticks, URLs, and the skip link.

Do not introduce Cinzel, Josefin, Playfair, or other serif/display faces.

### Hierarchy & Weights
- **Display Name (H1):** Extra-bold (700), tight tracking, no leading cushion (`leading-none`). 3rem on small screens, scaling to ~4.5rem then ~6rem. Balanced wrapping. This is the loudest object on the page.
- **Section Titles (H2):** A compound bar, not a single line of type. Yellow index (mono, ~0.875rem), black Chinese title (~1.125rem extra-bold, Signal Yellow type), outlined English tick (mono, ~0.75rem, uppercase, wide tracking).
- **Entity Titles (H3):** Extra-bold (700), ~1.25rem, Ink Black on Gallery White. Company, project, and school names. Allow wrapping; never truncate with ellipsis as the default.
- **Meta Labels (H4 / group labels):** JetBrains Mono, extra-bold, ~0.75rem, uppercase, wide tracking. Dates use tabular numerals and an en dash (`2024.06–至今`).
- **Body / Summary:** Space Grotesk extra-bold (700) at 1.125rem (18px) desktop, 1rem on small screens, line-height 1.5. Pretty wrapping on long Chinese paragraphs. This is still bold — the page does not have a “regular” weight.
- **Skill Chips:** JetBrains Mono extra-bold, ~0.875rem, uppercase, wide tracking, `translate="no"` on Latin tokens.
- **Links:** Same family as surrounding text, 2px underline with 4px offset. On hover, fill with Signal Yellow. No color shift to gray or navy.

### Spacing Principles
- Headers sit flush against their bars; no airy editorial leading
- Body keeps a workmanlike 1.5 line-height — readable, not luxurious
- Related blocks stack with ~1.5rem (24px) gaps; major sections use ~2.5rem (40px) bottom margin (`mb-10`)
- Letter-spacing is reserved for mono labels (`tracking-widest` / `0.2em` on the role stamp), never for the display name (that stays tight)

## 4. Component Stylings

### Buttons
The live site has almost no filled buttons; the skip link is the canonical “button-like” control.
- **Shape:** Sharp, squared-off edges (0px radius)
- **Primary / Skip chrome:** Signal Yellow (#FFFF00) fill, Ink Black type, 4px Ink Black border, hard 6px offset shadow. Extra-bold mono, uppercase, wide tracking. Compact padding (~0.5rem × 0.75rem)
- **Hover:** Instant. Darken nothing; if a control needs hover, flood the interior with Signal Yellow or keep the yellow fill and let the 4px focus ring appear
- **Focus:** 4px Ink Black outline, 2px offset, `:focus-visible` only
- **Skip link behavior:** Visually hidden until keyboard focus, then it slams into the top-left as a yellow stamp. Never leave it parked as a permanent yellow chip in the header

### Cards / Containers
- **Corner Style:** Sharp, squared-off edges (0px)
- **Background:** Gallery White (#FFFFFF)
- **Stroke:** Heavy 4px solid Ink Black on all sides
- **Shadow:** Hard, high-contrast drop — `6px 6px 0 #000000`. No blur, no opacity fade
- **Internal Padding:** Tight-industrial, 1rem default, 1.5rem from the `sm` breakpoint
- **Rhythm:** Vertical stack, ~1.5rem between sibling cards
- **Empty states:** Do not render hollow chrome. Hide the whole section or list when the collection is empty

### Stamps & Chips
- **Role stamp (hero):** Signal Yellow fill, 4px Ink Black border, extra-bold mono, uppercase, `0.2em` tracking. Sits top-left of the identity card
- **Skill chips:** Gallery White fill, 4px Ink Black border, hard offset shadow, extra-bold mono uppercase. Wrap in a flex row with 0.5rem gaps
- **Section index tick:** Signal Yellow block with Ink Black numerals (`01`, `02`…) butted against the black title bar — no gap, no radius

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
- **Hover:** Instant Signal Yellow background behind the text
- **External:** Real `<a>` tags (Cmd-click must work). `rel="noopener noreferrer"` and `target="_blank"` for http(s); mailto stays in-place
- **No** clickable `<div>`s, no ghost buttons, no icon-only social circles

### Lists
- Resume bullets are **not** round discs. Each item is a left Ink Black bar (4px) and 0.75rem indent, extra-bold body text, wrapping with `break-words`
- Vertical gap ~0.5rem between bullets

### Decorative Page Objects (non-interactive)
- A **200×200 Signal Yellow square**, 4px Ink Black border, hard offset shadow, parked off the top-right viewport edge
- A **112×280 Ink Black rectangle**, 4px border, parked off the bottom-left
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
- **Vertical section gap:** 40px (`mb-10`) — enough to separate slabs, not editorial emptiness
- **Hero internals:** 24px between stamp row, name, 8px-tall Ink Black rule (two-thirds / half width), then summary
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
- **Motion:** Instant. Honor `prefers-reduced-motion` by collapsing animation and transition durations
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
- **Atmosphere:** "Raw Neo-Brutalist spec sheet on graph-paper butter, not a SaaS landing page"
- **Corners:** "Sharp, squared-off edges" (never “rounded-md” or “subtly rounded”)
- **Shadows:** "Hard, high-contrast 6px offset drop with no blur"
- **Borders:** "Heavy 4px solid ink-black strokes"
- **Spacing:** "Tight industrial padding, not generous editorial whitespace"
- **Type:** "Extra-bold Space Grotesk for display and body; extra-bold JetBrains Mono stamps for meta"

### Color References
Always use the descriptive names with hex codes:
- Canvas: "Graph-Paper Butter (#FFFBE6)"
- Cards: "Gallery White (#FFFFFF)"
- Structure / text: "Ink Black (#000000)"
- Stamps / hover / index ticks: "Signal Yellow (#FFFF00)"

### Component Prompts
- "Create an identity card with sharp squared-off edges, a 4px ink-black border, hard 6px offset shadow, a Signal Yellow (#FFFF00) role stamp, an oversized extra-bold name, and a thick ink-black rule under the name"
- "Design a section heading as three butted blocks: a Signal Yellow index, an Ink Black bar with Signal Yellow Chinese type, and an outlined uppercase English tick"
- "Add skill chips as Gallery White rectangles with 4px ink-black borders, hard offset shadows, and extra-bold uppercase mono labels"
- "Place the page on Graph-Paper Butter (#FFFBE6) with a visible 24px grid and a heavier 120px module; keep card interiors solid Gallery White"

### Incremental Iteration
When refining existing screens:
1. Change one slab at a time (hero, section tick, skill chips, or canvas — not all at once)
2. Name the exact property in design language ("thicken the card stroke to 4px ink-black", not "make it pop")
3. Reject navy palettes, glass, gradients, serif display faces, and any radius above 0px
4. Keep Chinese as body language and English as technical tokens inside mono stamps
)
