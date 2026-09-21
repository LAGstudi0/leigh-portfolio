# Implementation Plan

## Client Feedback Implementation - 2026-09-21

The route architecture and dependencies are unchanged. Current behavior supersedes the historical stage notes below:

- Header branding uses `logo.gif` only, with the existing static GIF-derived reduced-motion fallback and no center homepage logo.
- Category/project pages share a 62rem media width; thumbnail grids use two equal columns at 700px and above. The main Work category-tile layout is preserved.
- `ProjectMedia` reuses existing media primitives. Hand Drawn Animation and Trailer Work play inline on their category pages; Social Impact has two equal local players. No category showreel autoplays.
- `LocalVideo` adds an accessible poster Play control while retaining native playback controls, inline playback and no preload.
- `CaseStudy` renders structured Big Feelings clients/copy and grouped storyboarding, background, and character artwork. Published storyboard images were explicitly approved for local derivation.
- Only the two previously missing Social Impact video derivatives and two approved storyboard image derivatives were generated in this pass.

Audit date: 2026-08-23

This plan is for the next phase only. No full site implementation has begun.

## Recommended Stack

- Next.js with App Router.
- TypeScript.
- Plain CSS with global design tokens plus CSS Modules or scoped component CSS.
- No animation dependency at the start. Use CSS transitions and small React/Web API helpers first.
- Avoid Tailwind unless the implementation clearly benefits from it after architecture begins.
- Avoid GSAP unless later visual requirements require timeline-heavy or scroll-driven animation.

## Proposed Directory Structure

```text
leigh-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── category/
│   │       └── [slug]/
│   │           └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   ├── media/
│   ├── navigation/
│   ├── project/
│   └── ui/
├── content/
│   ├── projects.ts
│   └── categories.ts
├── public/
│   └── media/
│       ├── images/
│       ├── posters/
│       └── video/
├── source-assets/
├── docs/
└── README.md
```

Route names can be simplified during Stage 2. Keep top-level navigation to HOME / WORK / CONTACT.

## Content Model

Use structured content rather than hardcoding project data into page components.

```ts
type MediaAsset = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
};

type ExternalVideo = {
  platform: "youtube" | "vimeo";
  url: string;
  title: string;
  thumbnail?: string;
  durationSeconds?: number;
};

type Project = {
  slug: string;
  title: string;
  status: "known" | "inferred" | "needs-confirmation";
  categorySlug: string;
  thumbnail?: MediaAsset;
  hero?: MediaAsset;
  localVideo?: MediaAsset;
  externalVideo?: ExternalVideo;
  gallery?: MediaAsset[];
  featured?: boolean;
  caseStudy?: boolean;
  notes?: string[];
};
```

Do not populate fields for year, client, role, agency, director, production company, or description until verified.

## Media Pipeline

### Originals

- Keep `source-assets/` untouched.
- Do not publish archives, `.DS_Store` files, or unoptimized production exports.
- Do not reference absolute local filesystem paths in browser code.

### Public derivatives

Create web-ready derivatives later under:

```text
public/media/images/
public/media/posters/
public/media/video/
```

Recommended future video derivative targets:

- H.264 MP4, yuv420p.
- 1080p for detail project pages where quality matters.
- Lower-resolution/lower-bitrate variant for decorative loops or category previews.
- Poster frame for every local video.
- `preload="none"` or `metadata` depending on route and UX.

Required derivative candidates:

- `Pixie_Melody_Animation_V7.mov`
- `BIG FEELINGS - Episode 05 - A Storm's Brewing_v7.mp4`
- `EP05_The_Leak_v4.mp4`
- `CEI_Global_Explainer_Story2.mp4`
- `Hand drawn Anim Showreel.mp4`
- `leigh.mov`

### External video handling

- Use a poster/play component first.
- Create the iframe only after user interaction or when a detail page clearly calls for it.
- Use responsive containers with fixed aspect ratio to prevent layout shift.
- Prefer privacy-conscious embed URLs where practical.
- Do not load all YouTube/Vimeo players on the Work index.

## Stage 2 Architecture Tasks

1. Scaffold Next.js + TypeScript if approved.
2. Add app routes for `/`, `/work`, `/contact`, and dynamic work/project pages.
3. Add the structured content files with only verified/inferred fields.
4. Add base HTML metadata and Open Graph basics.
5. Add global CSS tokens for black background, white text, lavender media placeholders, spacing, and typography scale.
6. Add reusable media components for local video, external video, poster image, and responsive aspect-ratio boxes.
7. Add `.gitignore` rules for `.next`, `node_modules`, system files, and any generated media folders if needed.

## Stage 3 Design Foundation

- Reproduce the Canva baseline: black full-page canvases, repeated header, sparse uppercase labels, strong 16:9 media rhythm.
- Use the Leigh Salvage wordmark as a derived public asset after conversion from `leigh.mov` or a static frame.
- Keep imagery as the main source of color.
- Do not introduce generic rounded card systems, gradients, glass effects, or marketing hero patterns.

## Stage 4-8 Content Build Recommendations

- Home: media-first intro with logo/header and likely showreel treatment.
- Work index: six-tile category overview matching Canva.
- Music Videos: external YouTube entries with deferred embeds.
- Trailer Work: Vimeo trailer reel; resolve Isle of Dogs placement.
- Explainers: TRAILD, Detector Inspector, Marketbase+, Orikan; potentially CEI after confirmation.
- Hand Drawn Animation: looping showreel plus projects listed in Canva.
- Big Feelings: richer case-study page with episode, character/process assets, backgrounds, and description once copy is supplied.

## Stage 4 Implementation Notes

- Homepage background delivery is now implemented with `public/media/video/home-background-1080.mp4`, `public/media/video/home-background-720.mp4`, and `public/media/posters/home-background.webp`.
- Animated branding is now implemented with `public/media/branding/leigh-logo.webm` plus `public/media/branding/leigh-logo-static.png` fallback.
- The header and homepage use the derived wordmark; the homepage header overlays the video while inner pages keep the sticky dark header.
- Local project video derivatives are integrated only on detail/category routes. The Work index remains still-image based for performance.
- Narrative/local project videos use native controls and `preload="none"` through `LocalVideo`.
- External YouTube/Vimeo embeds are still deferred through poster-first `ExternalVideo`.
- The Hand Drawn Animation category lead uses a muted looping showreel preview and falls back to still imagery for reduced-motion users.
- Stage 4 did not add final project copy, credits, dates, contact biography, social links, or analytics.
- Stage 4 did not deploy the site.

## Performance Plan

- Use `next/image` or static image elements with explicit dimensions/aspect-ratio.
- Avoid loading hidden videos.
- Avoid loading multiple iframes on index pages.
- Use poster images as the primary Work index payload.
- Consider route-level splitting and simple client components only where interaction is needed.
- Compress PNG artwork into WebP/AVIF derivatives while preserving original source files.
- Keep the homepage video isolated to `/`; do not include it in shared layout or content data.
- Keep large local videos behind user intent on project pages, not the Work index.

## Accessibility Plan

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Clear `h1` per route.
- Keyboard-accessible nav and video play buttons.
- Visible focus styles against black background.
- Meaningful alt text only where the image meaning is known; empty alt for decorative media.
- Respect `prefers-reduced-motion` for loops/reveals.
- Use native video controls for narrative videos.

## QA Plan

For each major implementation stage:

- Run the dev server.
- Check representative routes visually.
- Check console output.
- Run typecheck/build once scripts exist.
- Test responsive widths: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1728.
- Validate no original source media was modified.

## Decisions Needed Before Build

- Confirm project/category relationships in `CONTENT_MAP.md`.
- Confirm which local videos may be publicly hosted.
- Confirm whether Canva placeholder copy should be replaced and by what text.
- Confirm exact logo treatment and font direction.
- Confirm whether Big Feelings archive contents can be extracted/used.
