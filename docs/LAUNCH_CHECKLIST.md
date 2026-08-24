# Launch Checklist

Stage 5 audit date: 2026-08-24

Status language:

- READY: verified in this Stage 5 pass.
- NEEDS CLIENT APPROVAL: requires Leigh/client confirmation before production launch.
- NEEDS TECHNICAL FIX: engineering issue that must be fixed before launch readiness.
- OPTIONAL POST-LAUNCH: useful improvement that does not block client review or launch.

## READY

- Source masters remain private in `source-assets/`, are ignored by git, and are not referenced from browser code.
- No `source-assets/` path, zip archive, raw client archive, `.next/`, or `node_modules/` content is present under `public/`.
- Top-level navigation remains `HOME / WORK / CONTACT`.
- The Canva-led visual system is preserved: dark background, media-first routes, sparse copy, animated wordmark, category grid, Big Feelings case study, and restrained motion.
- Contact page avoids Canva placeholder bio/photo text and currently displays only the verified email address.
- Site metadata now includes production title templates, factual descriptions, canonical paths, Open Graph basics, robots, sitemap, and a real Leigh Salvage favicon.
- Unknown project/category routes use the custom 404 page and return 404.
- External YouTube/Vimeo embeds remain poster-first and create iframes only after visitor action.
- External embed click activation was verified for all 9 external-video projects.
- External embed keyboard activation was verified with Enter on Vimeo and Space on YouTube.
- Reduced-motion mode was verified: the homepage background video and animated logo are hidden, while static poster/logo fallbacks remain.
- Responsive QA passed across 139 route/viewport checks at 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1728 px, plus mobile/tablet landscape checks. No horizontal overflow or navigation clipping remained after the mobile nav fix.
- Local production media paths, MIME types, dimensions, codecs, and file sizes were checked.
- Development artifact scan found no user-visible TODO/lorem/debug copy or absolute local source paths in public app code.
- `npm run typecheck` passed on 2026-08-24.
- `npm run build` passed on 2026-08-24.
- Production-server smoke test passed on 2026-08-24 for home, work, contact, all six category routes, representative project routes, invalid routes, robots, sitemap, and favicon.

## NEEDS CLIENT APPROVAL

- Local hosted project-video approval is unknown for every project video currently served from `public/media/video/projects/`. This is the main hard launch blocker.
- Big Feelings public copy, client, role, credits, outcomes, and process-asset approval remain unresolved.
- Final biography, contact wording, social links, portrait/photo, project credits, roles, dates, and descriptions remain unresolved.
- Category placement still needs confirmation for `Isle of Dogs`, `Sila Lua - Iris (Sumluv Remix)`, `CEI Global Explainer`, and `Episode 05 - The Leak`.
- Final public title needs confirmation for `Trailer Showreel` / `Film Trailers` / `Leigh Salvage Trailer Reel`.
- Final public title spelling needs confirmation for `The Metamorphic Rainbow` / Canva `Metamorphisis`.
- Public use of third-party/platform marks visible in stills, especially CNCO/Sony, needs approval.
- Redirect mapping should be approved before launch because the new route structure differs from some current public URLs.

## NEEDS TECHNICAL FIX

- None currently known after Stage 5 QA.

## OPTIONAL POST-LAUNCH

- Add an approved Open Graph/social preview image.
- Add analytics only if Leigh wants tracking and chooses a privacy posture.
- Add social profile links to Contact after Leigh confirms the preferred public profiles.
- Add richer project descriptions/credits after client approval.
- Add a contact form only if Leigh wants form handling and approves a backend/provider.

## Local Hosted Video Approval Matrix

These files would be publicly reachable after deployment because they are under `public/media/`.

| Project / Use | Public path | Current approval status | Launch status |
|---|---|---|---|
| Animated wordmark | `/media/branding/leigh-logo.webm` | Inferred approved from supplied `leigh.mov` and current live-site identity | READY for client review |
| Homepage background | `/media/video/home-background-1080.mp4` | Inferred approved from current live site matching asset | READY for client review |
| Homepage background mobile | `/media/video/home-background-720.mp4` | Inferred approved from current live site matching asset | READY for client review |
| Big Feelings | `/media/video/projects/big-feelings-episode-05-a-storms-brewing.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |
| Cacophony | `/media/video/projects/cacophony.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |
| Daydream | `/media/video/projects/daydream.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |
| Detector Inspector | `/media/video/projects/detector-inspector-access-issues.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |
| Hand Drawn Animation Showreel | `/media/video/projects/hand-drawn-animation-showreel.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |
| Marketbase+ | `/media/video/projects/marketbase-plus.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |
| The Metamorphic Rainbow | `/media/video/projects/the-metamorphic-rainbow.mp4` | Approval unknown | NEEDS CLIENT APPROVAL |

## Production Media Size

- Total `public/media/`: 75 MB.
- `public/media/video/`: 73 MB.
- `public/media/branding/`: 764 KB.
- `public/media/images/`: 1.3 MB.
- `public/media/posters/`: 424 KB.
- Largest production video: Big Feelings derivative, 17.0 MB.
- Largest homepage video: `home-background-1080.mp4`, 12.0 MB.
- Animated logo derivative: `leigh-logo.webm`, 674 KB.
- Largest production image/poster: `cacophony.webp`, 153 KB.

Largest video files:

| File | Size | Codec / dimensions | Notes |
|---|---:|---|---|
| `/media/video/projects/big-feelings-episode-05-a-storms-brewing.mp4` | 17.0 MB | H.264, 1280x720 | Public-hosting approval unknown. |
| `/media/video/projects/cacophony.mp4` | 15.2 MB | H.264, 1280x720 | Public-hosting approval unknown. |
| `/media/video/home-background-1080.mp4` | 12.0 MB | H.264, 1920x1080 | Homepage only; poster fallback present. |
| `/media/video/projects/hand-drawn-animation-showreel.mp4` | 7.9 MB | H.264, 1280x720 | Public-hosting approval unknown. |
| `/media/video/projects/marketbase-plus.mp4` | 7.0 MB | H.264, 1280x720 | Public-hosting approval unknown. |

## External Video QA

Verified poster-first activation for:

- Vimeo: Trailer Showreel, Isle of Dogs, Orikan Explainer.
- YouTube: CNCO - Beso, The Kid LAROI - STAY, Maxi Millz - Young and Stupid, The Cribs - Running Into You, TRAILD Explainer, Sila Lua - Iris (Sumluv Remix).

All checked projects had 0 iframes before activation and exactly 1 iframe after activation, with the expected Vimeo or `youtube-nocookie.com` embed URL.

## Accessibility QA

- Primary navigation, project links, category links, contact email, and media play controls are keyboard reachable.
- Focus treatment is visible through the global `:focus-visible` rule.
- External-video poster buttons have accessible names.
- Native local-video controls are used for project videos.
- Reduced-motion fallbacks were verified in Chrome emulation.
- No contact form is present, so there is no unimplemented form behavior.

## Deployment Preparation

- Recommended deployment target: Vercel or another standard Next.js-capable host.
- Install command: `npm install`.
- Build command: `npm run build`.
- Runtime/start command: `npm run start` after build, or the host's Next.js runtime.
- Environment variables: none currently required.
- Do not deploy over `https://www.leighsalvage.com/` until Leigh approves content/media and the domain switch is explicitly requested.
- Before launch, confirm registrar, DNS provider, current host, new deployment host, `www` handling, apex/root handling, HTTPS, and redirect support.
- Rollback strategy: keep the current live site untouched until the redesigned site is approved; if switching DNS later, retain the previous host/configuration long enough to roll back.

## Existing Public URL Notes

Current `leighsalvage.com` routes checked read-only:

| Existing path | Current status | New-site equivalent / note |
|---|---:|---|
| `/` | 200 | `/` |
| `/work` | 200 | `/work` |
| `/contact` | 200 | `/contact` |
| `/big-feelings` | 200 | New route is `/work/big-feelings`; redirect recommended at launch. |
| `/maxi-millz` | 200 | New route is `/work/maxi-millz-young-and-stupid`; redirect recommended at launch. |
| `/metamorphisis` | 200 | New route likely `/work/the-metamorphic-rainbow`; confirm title before redirect. |
| `/traild` | 200 | New route is `/work/traild-explainer`; redirect recommended at launch. |
| `/orikan` | 200 | New route is `/work/orikan-explainer`; redirect recommended at launch. |
| `/trailers` | 200 | New route is `/work/trailer-showreel`; redirect recommended at launch. |
| `/music-videos` | 404 | No existing public route found. |
| `/hand-drawn-animation` | 404 | No existing public route found. |
| `/explainers` | 404 | No existing public route found. |

## Hard Launch Blockers

1. Confirm or remove every locally hosted project video with unknown public-hosting approval.
2. Approve final public content decisions that affect accuracy: project titles, category placement, Big Feelings copy/credits, and contact/social details.
3. Configure production redirects for existing public URLs once the deployment platform is selected.
