# Design Analysis

Audit date: 2026-08-23

Primary design reference:

`https://www.canva.com/design/DAHQNV__H38/xlzrKbopiQJ6fXT0Y4mUdA/edit`

## Canva Access Notes

- Canva identifies the design as a single `whiteboard` titled `HOME WORK CONTACT`.
- The connector exposed one whole-whiteboard thumbnail, extracted rich text, and element/fill positions.
- The whole-board thumbnail is low resolution. Exact font family, exact color values, and fine alignment cannot be claimed with certainty.
- A draft Canva inspection transaction was opened only to inspect element structure and then cancelled. No Canva edits were saved.
- Canva asset metadata for the two repeated image asset IDs was permission-denied, so the repeated logo/background assets could not be independently inspected through Canva. The local `leigh.mov` visually appears to match the repeated "Leigh Salvage" logo treatment.

## Navigation

### Visually confirmed

- Top-level navigation is `HOME   WORK   CONTACT`.
- This nav repeats across every designed screen.
- There are no additional top-level navigation labels visible.
- A recurring Leigh Salvage logo/wordmark appears at the left of the header region in the Canva structure.
- The layout uses a dark/black site background with a consistent header band.

### Inferred

- Header should likely be persistent across routes.
- Desktop header likely uses logo at left and nav links centered or right-of-center.
- Mobile should keep the same three links, either as a compact inline row or a simple menu if spacing breaks below 375px.
- Active states are not visible in the Canva export. Use a subtle state such as opacity, underline, or text color shift only after visual direction is confirmed.

## Typography

### Visually confirmed

- Navigation and category labels are uppercase.
- Text is minimal and functional: mostly nav, page/category labels, project titles, email, and placeholders.
- Project/category labels are large relative to media blocks.
- The Leigh Salvage mark is custom, hand-drawn, high-contrast white lettering on black.

### Inferred

- Site typography should avoid generic portfolio styling. It should be stark, simple, and media-led.
- Likely use a clean sans-serif for navigation/project labels unless the client confirms a Canva font.
- Body copy should be restrained, because Canva uses very little explanatory copy.
- Letter spacing should remain modest. Do not over-track every all-caps label.

### Unknown

- Exact Canva font family.
- Exact font weights.
- Whether the custom Leigh Salvage wordmark should be animated everywhere, animated only on the homepage, or static in the header.

## Layout

### Confirmed from Canva element positions

- Main desktop frames are approximately 1118x625, a 16:9 web-screen composition.
- Pages are stacked vertically in the Canva whiteboard.
- The Work overview uses a 3-column by 2-row grid of category tiles.
- Category/detail lists use centered 16:9 media blocks, approximately 368x195 in the Canva coordinate system.
- Big Feelings has a larger case-study layout: one main video area, a short description block, then two-column supporting media blocks for character designs/background art/storyboarding.
- Contact uses a large dark full-screen panel, a central image placeholder, short bio placeholder, email, and the repeated header.

### Inferred implementation layout

- Treat each major route as a full-width dark page with constrained inner content.
- Use generous vertical spacing and simple grid rhythm rather than card-heavy decorative UI.
- Work overview should be image/media tiles with category labels, likely no extra descriptive copy unless client supplies it.
- Category pages should emphasize one media item per row or a sparse grid depending on available thumbnails.
- Big Feelings can break the standard pattern with richer art-directed sections.

## Color

### Observed / approximate

- Dominant site background: black or near-black.
- Primary foreground text: white/off-white.
- Canva media placeholders and blocks: muted lavender/purple.
- Local media contributes high-saturation accents: teal, cyan, magenta, green, orange, blue, and pastel illustration palettes.

### Unknown

- Exact hex values from Canva.
- Whether lavender placeholders are intended as final design color or just blockout placeholders.

### Recommendation

- Start with a restrained black/white/lavender base matching the Canva structure.
- Let project imagery provide most color.
- Avoid gradients, generic rounded cards, glass effects, and decorative visual systems that are absent from Canva.

## Media Treatment

### Confirmed

- Most media blocks are 16:9.
- Work/category pages are media-first.
- Canva explicitly calls for a hand-drawn animation showreel "ON LOOP".
- Big Feelings is called out as a case study with multiple supporting media types.

### Inferred

- Use responsive poster images for all videos.
- Do not load multiple iframe players immediately.
- Use deferred YouTube/Vimeo embeds behind poster/play UI.
- Use local videos only where optimized derivatives exist.
- `leigh.mov` likely becomes an animated or static logo asset after conversion.

## Motion

### Confirmed

- "HAND DRAWN ANIMATION (SHOWREEL ON LOOP)" implies at least one looping video treatment.
- `leigh.mov` is an animated logo source.

### Inferred

- Hover states should be understated: slight opacity, image scale, or reveal of a play indicator.
- Page transitions are not necessary unless later visual QA suggests they support the design.
- Scroll reveals should be minimal and optional.
- Autoplay should be reserved for decorative/showreel contexts and must be muted, playsinline, looped, and reduced for `prefers-reduced-motion`.

## Responsive Behaviour

### Mobile, 320-480px

- Header must remain simple: logo plus HOME/WORK/CONTACT, or a minimal menu if inline links become cramped.
- Work overview should collapse from 3 columns to 1 column.
- Category pages should use a single-column media list.
- Big Feelings supporting sections should stack, with careful cropping for wide backgrounds like `BG_2.png`.

### Large mobile, 481-767px

- Single-column layouts remain likely, but media can breathe with larger margins.
- Navigation may stay inline if tested.

### Tablet, 768-1023px

- Work overview can move to 2 columns.
- Big Feelings can use alternating media/text sections before moving to full 2-column support grids.

### Desktop, 1024-1439px

- Match the Canva 16:9 screen proportions closely.
- Work overview should use 3 columns by 2 rows.
- Category pages can use centered media blocks with strong vertical rhythm.

### Large desktop, 1440px+

- Preserve readable max widths and avoid stretching media blocks beyond intended proportions.
- Consider larger poster sizes, but keep whitespace intentional.

## Design Risks

- The Canva preview resolution is not sufficient for pixel-perfect font/color extraction.
- Some Canva blocks are clearly placeholders rather than final art.
- Several local assets are category/project stills, but exact routing cannot be proven without client confirmation.
- Contact/about copy in Canva is placeholder text and should not be shipped as production content.

## Stage 4 Live-Site Reference Check

The current `leighsalvage.com` site was inspected during Stage 4 as a secondary reference. It supports, but does not replace, the Canva design analysis.

### Confirmed from live site

- The homepage uses a full-screen animated background, and the local `backgroundVideo.mp4` is byte-identical to the live homepage MP4.
- The Leigh Salvage wordmark appears as an animated brand asset, matching the role of local `leigh.mov`.
- The top-level navigation remains `HOME`, `WORK`, and `CONTACT`.
- The visual language remains sparse, dark, media-led, and uppercase.

### Differences from Canva/source audit

- The live Work IA is smaller than the Canva/source audit: it emphasizes Big Feelings, Maxi Millz, Metamorphosis, TRAILD, Orikan, and Trailer Work.
- Canva and local assets support a broader category grid: Music Videos, Big Feelings, Hand Drawn Animation, Social Impact, Explainers, and Trailer Work.
- Stage 4 keeps the broader Canva/source-based IA and uses the live site only to validate the homepage background and logo behavior.

### Implemented in Stage 4

- Homepage: full-viewport background video, animated wordmark, poster fallback, reduced-motion fallback.
- Header: real wordmark asset replaces the temporary text logo.
- Motion: restrained CSS entrance/hover motion only, disabled or simplified for reduced-motion users.
