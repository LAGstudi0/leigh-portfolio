# Leigh Portfolio

Technical foundation for a media-first creative portfolio for Leigh Salvage.

This repository is currently at Stage 3: the primary visual portfolio routes are implemented with selected still-image/poster derivatives, deferred external video embeds, and poster-first local video placeholders. The full video optimization and production QA pass has not started yet.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run TypeScript checks:

```bash
npm run typecheck
```

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  contact/page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  work/category/[slug]/page.tsx
components/
  layout/
  media/
  navigation/
  project/
  ui/
content/
  categories.ts
  projects.ts
  types.ts
docs/
  ASSET_INVENTORY.md
  CONTENT_MAP.md
  DESIGN_ANALYSIS.md
  IMPLEMENTATION_PLAN.md
  OPEN_QUESTIONS.md
public/
  media/
    images/
    posters/
    video/
source-assets/
```

## Content Model

Project and category content lives in `content/`.

- `content/types.ts` defines the content schema.
- `content/categories.ts` defines the six current work categories.
- `content/projects.ts` defines candidate project records from the Stage 1 audit.
- Unknown client metadata remains absent or listed in each project's `unresolved` array.

Do not add dates, roles, clients, credits, descriptions, or outcomes unless they are verified.

## Adding a Project

1. Add or confirm the category in `content/categories.ts`.
2. Add a project object in `content/projects.ts`.
3. Set `status` to `known`, `inferred`, or `needs-confirmation`.
4. Add `externalVideo` for YouTube/Vimeo work, or `localVideo` for approved optimized derivatives.
5. Put unresolved copy, credit, rights, or category questions in `unresolved`.
6. Reference only public derivative paths in `thumbnail`, `hero`, `gallery`, or `localVideo.src`.

## Asset Strategy

Original client assets live in `source-assets/` and are intentionally ignored by git. Do not rename, delete, move, overwrite, recompress, or otherwise modify those originals.

Generated web-ready derivatives should be created later under:

```text
public/media/images/
public/media/posters/
public/media/video/
```

Stage 3 commits selected lightweight still-image and poster derivatives in `public/media/images/` and `public/media/posters/`. `public/media/video/` remains reserved for later optimized video outputs and is ignored by git except for its `.gitkeep`.

## Video Strategy

The media components are poster-first and defer expensive playback:

- `components/media/ExternalVideo.tsx` creates YouTube/Vimeo iframes only after user interaction.
- `components/media/LocalVideo.tsx` uses native controls, `playsInline`, and `preload="none"`.
- `components/media/ResponsiveImage.tsx` is ready for optimized public image derivatives.
- `components/media/MediaPlaceholder.tsx` keeps layout stable before derivatives exist.

Do not serve large source videos directly from `source-assets/`.

## Routes

- `/`
- `/work`
- `/contact`
- `/work/category/[slug]`
- `/work/[slug]`

The current pages are intentionally minimal foundation placeholders. Later stages should apply the Canva-fidelity visual system and richer project layouts.

## Production Notes

- Confirm deployment target before setting final metadata URLs.
- Confirm public hosting rights before publishing local video derivatives.
- Use lazy video loading and poster images for performance.
- Avoid loading multiple third-party video players on index pages.
- Preserve the `HOME / WORK / CONTACT` top-level navigation unless the client changes direction.
