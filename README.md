# Leigh Portfolio

Media-first creative portfolio for Leigh Salvage, built with Next.js App Router and TypeScript.

This repository is currently at Stage 5: the visual site, homepage background, animated wordmark, selected local video derivatives, deferred external embeds, responsive routes, metadata, reduced-motion fallbacks, and launch-readiness documentation are implemented. The site is ready for client review, but final launch still depends on media/content approvals documented in `docs/LAUNCH_CHECKLIST.md` and `docs/CLIENT_REVIEW.md`.

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
  CLIENT_REVIEW.md
  CONTENT_MAP.md
  DESIGN_ANALYSIS.md
  IMPLEMENTATION_PLAN.md
  LAUNCH_CHECKLIST.md
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

Stage 4/5 adds intentional production media derivatives:

- `public/media/branding/logo.gif`
- `public/media/branding/logo-static.png`
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
- The Hand Drawn Animation and Trailer Work categories play their showreels inline on request. Social Impact uses two controlled local players.
- `components/branding/BrandLogo.tsx` uses the approved GIF wordmark with a static PNG reduced-motion fallback derived from the GIF.

Do not serve large source videos directly from `source-assets/`.

## Routes

- `/`
- `/work`
- `/contact`
- `/work/category/[slug]`
- `/work/[slug]`

The current pages implement the Stage 5 client-review site. Later work should focus on client content/media approvals, deployment-specific redirects, and any final host-specific launch configuration rather than rebuilding the architecture.

## Production Notes

- Recommended deployment target: Vercel or another standard Next.js-capable host.
- Build command: `npm run build`.
- Runtime/start command: `npm run start` after building, or the host's standard Next.js runtime.
- No environment variables are currently required.
- Confirm public hosting rights before final production launch of local project-video derivatives.
- Use lazy video loading and poster images for performance.
- Avoid loading multiple third-party video players on index pages.
- Preserve the `HOME / WORK / CONTACT` top-level navigation unless the client changes direction.
- Do not deploy until the user explicitly asks for a deployment stage.
- The client feedback pass adds CEI and The Leak derivatives and organizes Big Feelings into case-study sections, including approved storyboard images from the live site. Review status and the pending Kid LAROI thumbnail are recorded in `docs/CLIENT_REVIEW.md`.
- Before switching `leighsalvage.com`, confirm DNS/hosting ownership and configure redirects listed in `docs/LAUNCH_CHECKLIST.md`.
