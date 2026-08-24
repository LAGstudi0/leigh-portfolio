# Leigh Portfolio

Media-first creative portfolio for Leigh Salvage, built with Next.js App Router and TypeScript.

This repository is currently at Stage 4: the homepage background, animated wordmark, selected local video derivatives, deferred external embeds, and responsive visual routes are implemented. Final media/performance QA, deployment configuration, and unresolved content approvals are still pending.

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
  branding/
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
    branding/
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

Stage 3 committed selected lightweight still-image and poster derivatives in `public/media/images/` and `public/media/posters/`.

Stage 4 adds intentional production media derivatives:

- `public/media/branding/leigh-logo.webm`
- `public/media/branding/leigh-logo-static.png`
- `public/media/posters/home-background.webp`
- `public/media/video/home-background-1080.mp4`
- `public/media/video/home-background-720.mp4`
- selected controlled project videos under `public/media/video/projects/`

Only these selected `public/media/video/` derivatives are unignored for git. Do not copy raw source videos into `public/`.

## Video Strategy

The media components are poster-first and defer expensive playback:

- `components/media/ExternalVideo.tsx` creates YouTube/Vimeo iframes only after user interaction.
- `components/media/LocalVideo.tsx` uses native controls, `playsInline`, and `preload="none"`.
- `components/media/ResponsiveImage.tsx` is ready for optimized public image derivatives.
- `components/media/MediaPlaceholder.tsx` keeps layout stable before derivatives exist.
- The homepage background video is isolated to `/` and uses muted looping MP4 variants with a WebP poster.
- The Hand Drawn Animation category lead can use the optimized showreel as a muted looping preview.
- `components/branding/AnimatedLogo.tsx` uses a transparent WebM wordmark with a static PNG fallback and reduced-motion fallback.

Do not serve large source videos directly from `source-assets/`.

## Routes

- `/`
- `/work`
- `/contact`
- `/work/category/[slug]`
- `/work/[slug]`

The current pages implement the Stage 3/4 visual site. Later stages should focus on final media optimization, route QA, content approvals, and deployment-specific configuration rather than rebuilding the architecture.

## Production Notes

- Confirm deployment target before setting final metadata URLs.
- Confirm public hosting rights before final production launch of local video derivatives.
- Use lazy video loading and poster images for performance.
- Avoid loading multiple third-party video players on index pages.
- Preserve the `HOME / WORK / CONTACT` top-level navigation unless the client changes direction.
- Do not deploy until the user explicitly asks for a deployment stage.
