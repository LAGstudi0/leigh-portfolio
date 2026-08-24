# Open Questions

Audit date: 2026-08-23

## Highest Priority

1. Can you provide or approve final contact/about copy? Canva currently contains placeholder text: `hello im leigh blah blah`.
2. Can you provide the intended contact portrait/photo? Canva shows `photo of me` as a placeholder.
3. What is the exact preferred public name for the portfolio owner/brand: `Leigh Salvage`, another display name, or both?
4. Which project credits should be shown, if any: role, year, client, studio, director, production company, agency, collaborators?
5. Which local videos are approved for public hosting, especially the file whose name indicates a YouTube download: `Y2Mate.is - Sila Lua - Iris...mp4`?

## Canva / Design Fidelity

1. Can the client provide a higher-resolution export or page-by-page export of the Canva whiteboard?
2. Are the lavender boxes in Canva final visual treatments or placeholders for media?
3. What are the exact font choices in Canva, if they are important to match?
4. Should `leigh.mov` be used as an animated logo, converted into a static logo, or both?
5. Are there intended hover states or transitions not visible in the static Canva reference?

## Content Organization

1. Should `Isle of Dogs` live under Trailer Work / Film Work, or under Hand Drawn Animation as the Canva text suggests?
2. Does Canva's `Metamorphisis animation` label refer to `The_Metamorphic_Rainbow.mp4`? If yes, what is the final title spelling?
3. Should `Sila Lua - Iris (Sumluv Remix)` be under Music Videos, Hand Drawn Animation, or both?
4. Should `Social Impact` be a standalone category page, a project page, or only a Work-grid tile?
5. Does `CEI_Global_Explainer_Story2.mp4` belong under Social Impact or Explainers?
6. Does `EP05_The_Leak_v4.mp4` belong under Social Impact, Animation, or another category?
7. Is `Hand drawn Anim Showreel.mp4` a category hero, a standalone project, or both?
8. Should all externally hosted music videos receive individual project pages, or should Music Videos be a single category page with lazy embeds?

## Asset Permissions / Use

1. Are all `_Paulo/*.png` files approved as final public thumbnails?
2. Are Big Feelings process assets approved for public display: pose sheets, facial expressions, hand poses, badges, background art, and storyboarding assets?
3. May `Characters.zip` be extracted for selecting additional Big Feelings artwork, or should it remain untouched?
4. Should any client logos, platform marks, or visible marks in screenshots be hidden/cropped, such as Sony in `cnco0.png`?
5. Are the Vimeo and YouTube thumbnail images approved for use as posters, or should posters be generated only from local/client-supplied assets?

## Copy / Metadata

1. What short description should accompany Big Feelings? Canva asks for a "short description about project and client and outcomes".
2. Should project pages contain text descriptions at all, or remain primarily media-only?
3. What SEO description should be used for the site?
4. Are dates/years important in the Work index?
5. Is the public email exactly `leigh.salvage@gmail.com`?

## Technical / Deployment

1. Where will this be deployed: Vercel, Netlify, another host, or static export?
2. Are large local videos acceptable on the hosting platform after optimization, or should the site rely primarily on Vimeo/YouTube embeds?
3. Should optimized media derivatives be committed to git or generated outside the repo during deployment?
4. Is there a target maximum page weight for the homepage or Work index?
5. Is there a preferred analytics, contact form, or email-only contact approach?

## Stage 3 Implementation Decisions

- The public Work hub now follows the six Canva categories: Music Videos, Big Feelings, Hand Drawn Animation, Social Impact, Explainers, and Trailer Work.
- The Big Feelings Work tile links directly to `/work/big-feelings` because Canva treats it as a case study. The fallback `/work/category/big-feelings` route remains available and lists the same project.
- `Isle of Dogs` remains under Hand Drawn Animation for now because the Canva text places "isle of dogs reel" in that section. The client-facing category question remains unresolved.
- `Sila Lua - Iris (Sumluv Remix)` remains under Hand Drawn Animation for now because Canva lists "sila lua" in the hand-drawn section. The music-video/category overlap remains unresolved.
- `CEI Global Explainer` and `Episode 05 - The Leak` remain under Social Impact as the least destructive grouping until the client confirms placement.
- Stage 3 uses lightweight image/poster derivatives under `public/media/images/` and `public/media/posters/`. No large local video sources were copied into `public/`, and no full video transcoding was performed.
- Contact omits Canva placeholder bio/photo content and shows only the verified email address.

## Stage 4 Implementation Decisions

- `backgroundVideo.mp4` is now treated as a homepage/brand background asset, not as a public portfolio project. It has dedicated 1080p and 720p derivatives under `public/media/video/`.
- `leigh.mov` is now used as the source for the animated Leigh Salvage wordmark. The browser-facing files are `public/media/branding/leigh-logo.webm` and `public/media/branding/leigh-logo-static.png`.
- The homepage now uses a full-viewport muted looping background video with a poster fallback and reduced-motion fallback.
- The Hand Drawn Animation category lead uses the optimized showreel as a muted looping preview. Project detail pages use native controls and `preload="none"`.
- External YouTube/Vimeo work remains poster-first; iframes are created only after the visitor activates Play.
- Local derivatives were created and integrated for Big Feelings, Cacophony, Daydream, Detector Inspector, Hand Drawn Animation Showreel, Marketbase+, and The Metamorphic Rainbow.
- Local derivatives were intentionally not created for CEI, EP05 The Leak, Pixie Melody, or the downloaded Sila Lua MP4 until placement/public-use questions are resolved.

## Current Live Site Reference Notes

The current `leighsalvage.com` site was inspected during Stage 4 as a secondary reference only. Canva remains the primary design source.

- The live homepage uses the same `backgroundVideo.mp4` file now present in local source assets.
- The live homepage uses an animated Leigh Salvage wordmark matching the `leigh.mov` animation concept.
- The live site confirms `HOME / WORK / CONTACT`, the email `leigh.salvage@gmail.com`, and social links for Vimeo, Instagram, and LinkedIn.
- The live site exposes a smaller Work IA: Big Feelings, Maxi Millz, Metamorphosis, TRAILD, Orikan, and Trailer Work. This differs from the fuller Canva/source-asset map.
- The live Big Feelings page contains useful copy/client/role details, but those details should be client-reviewed before merging into the portfolio content model because Stage 1 treated project metadata as unresolved.

## Remaining After Stage 4

1. Confirm whether the live-site Big Feelings copy and client/role details are approved for reuse.
2. Confirm whether selected local project video derivatives may be publicly hosted in production.
3. Confirm whether CEI, EP05 The Leak, Pixie Melody, and local Sila Lua media should receive hosted video derivatives.
4. Confirm whether the header logo should animate on all pages or only on the homepage.
5. Confirm whether social profile links from the current live site should be added to Contact.

## Stage 5 Implementation Decisions

- Stage 5 fixed the mobile navigation so `HOME / WORK / CONTACT` remains visible at 320 px and above.
- Stage 5 added explicit keyboard activation for deferred external-video posters so Enter and Space both load the intended player.
- Stage 5 added production metadata, favicon, robots, sitemap, and custom 404 handling.
- Stage 5 verified reduced-motion fallback behavior for the homepage background video and animated logo.
- Stage 5 did not resolve client approval questions. The concise client-facing review list now lives in `docs/CLIENT_REVIEW.md`.
