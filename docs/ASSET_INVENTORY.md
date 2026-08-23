# Asset Inventory

Audit date: 2026-08-23

Source root:

`source-assets/wetransfer_the_metamorphic_rainbow-mp4_2026-07-26_0615/`

## Method

- Recursively listed the full `source-assets/` tree.
- Used `file`, `du`, `sips`, and `ffprobe` for local metadata.
- Generated temporary video contact sheets and AVIF previews under `/private/tmp` for visual inspection only.
- Inspected zip manifests with `unzip -l` without extracting or modifying archives.
- Originals were not renamed, moved, recompressed, deleted, or overwritten.

## Project Root

The repository currently contains only `.DS_Store`, `source-assets/`, and the audit `docs/` directory created for this stage. No Next.js app or production media directory exists yet.

## Non-production / Archive Files

| File | Size | Type | Inventory note | Production treatment |
|---|---:|---|---|---|
| `source-assets/.DS_Store` | 12 KB | macOS metadata | Not a content asset. | Exclude from git/production. |
| `source-assets/wetransfer_the_metamorphic_rainbow-mp4_2026-07-26_0615/.DS_Store` | 12 KB | macOS metadata | Not a content asset. | Exclude from git/production. |
| `source-assets/wetransfer_the_metamorphic_rainbow-mp4_2026-07-26_0615/_Paulo/.DS_Store` | 8 KB | macOS metadata | Not a content asset. | Exclude from git/production. |
| `source-assets/wetransfer_the_metamorphic_rainbow-mp4_2026-07-26_0615/_Paulo/BIG FEELINGS/.DS_Store` | 8 KB | macOS metadata | Not a content asset. | Exclude from git/production. |
| `source-assets/wetransfer_the_metamorphic_rainbow-mp4_2026-07-26_0615/_Paulo.zip` | 533 MB | zip archive | Duplicate delivery bundle for the extracted `_Paulo/` directory. Contains the same visible `_Paulo` images, Big Feelings assets, and `__MACOSX` sidecar files. | Keep as source archive only; do not publish. |
| `source-assets/wetransfer_the_metamorphic_rainbow-mp4_2026-07-26_0615/_Paulo/BIG FEELINGS/Characters.zip` | 4.8 MB | zip archive | Contains additional Big Feelings PNG assets: `BIG FEELINGS - Characters.png`, `Big_Feelings_Assets-01.png` through `-06.png`, `BigFeeling_Logo.png`, plus `__MACOSX` sidecars. Inspected listing only; not extracted. | Keep unpublished until client confirms these are approved for site use. If used later, extract to a separate temporary or derivative workflow and optimize selected PNGs. |

## Local Video Assets

| File | Size | Duration | Dimensions / ratio | Codec / audio | Visual inspection | Likely project | Likely category | Likely purpose | Direct web suitability | Recommended production treatment |
|---|---:|---:|---|---|---|---|---|---|---|---|
| `CEI_Global_Explainer_Story2.mp4` | 295.36 MB | 171.04s | 1920x1080, 16:9 | H.264 Main, 25fps, yuv420p; AAC stereo | Finished illustrated social-impact / implementation-science explainer with characters, diagrams, and meeting scenes. | CEI Global / Social Impact | Social Impact or Explainers | Project video; possible category media | Browser-compatible codec, but too large for eager loading. | Create poster. Create optimized H.264 derivative around 1080p or lower with lower bitrate. Lazy load on project page only. |
| `Cacophony.mp4` | 63.19 MB | 215.12s | 1920x1080, 16:9 | H.264 High, 25fps, yuv420p; AAC stereo | Finished hand-drawn narrative animation with conductor / music-room imagery. | Cacophony | Hand Drawn Animation | Project video | Browser-compatible; still long and should not preload. | Use poster from `cacophony.png` or generated frame. Lazy video with controls. Consider compressed derivative if public hosting. |
| `Detector Inspector_Access Issues_v7.mp4` | 30.26 MB | 59.32s | 1920x1080, 16:9 | H.264 Main, 25fps, yuv420p; AAC stereo | Finished product explainer for "Access Wizard" / access issues with UI scenes on purple background. | Detector Inspector | Explainers | Project video | Browser-compatible, reasonable source size but should still be deferred. | Create poster. Serve only on demand or project detail. Optional lighter derivative. |
| `EP05_The_Leak_v4.mp4` | 357.84 MB | 196.88s | 1920x1080, 16:9 | H.264 Main, 25fps, yuv420p; AAC stereo | Finished school/social-safety animated episode about a leaked/help-seeking scenario. | Unknown exact title; filename suggests "Episode 05 - The Leak" | Social Impact, possibly education animation | Project video | Browser-compatible codec but too large for direct delivery. | Confirm project/client/title. Create poster and optimized derivative before publishing. |
| `Hand drawn Anim Showreel.mp4` | 134.75 MB | 66.80s | 1920x1080, 16:9 | H.264 Main, 29.97fps, yuv420p; AAC stereo | Mixed hand-drawn animation showreel with live action, animation overlays, title cards, trailer-like shots, and music-video imagery. | Hand Drawn Animation Showreel | Hand Drawn Animation | Category hero / showreel | Browser-compatible but large for looping/eager autoplay. | If used as loop, make muted low-bitrate derivative and poster. Respect `prefers-reduced-motion`. |
| `Marketbase+_v4.mp4` | 36.23 MB | 141.60s | 1920x1080, 16:9 | H.264 Main, 25fps, yuv420p; AAC stereo | Finished SaaS/product explainer with blue branded background, geometric accents, and product UI. | Marketbase+ | Explainers | Project video | Browser-compatible; too long for homepage preload. | Create poster. Lazy load with controls. Optional smaller derivative. |
| `Pixie_Melody_Animation_V7.mov` | 1204.18 MB | 201.08s | 1920x1080, 16:9 | ProRes Standard, 12fps, yuv422p10le; PCM stereo | Final-looking lyric/animation piece with pastel abstract backgrounds and character imagery. Canva label says "pixie song". | Pixie Melody / Pixie Song | Hand Drawn Animation | Project video | Not suitable for direct web delivery: huge ProRes `.mov`. | Required: H.264 MP4 derivative plus poster. Do not publish original. |
| `The_Metamorphic_Rainbow.mp4` | 19.68 MB | 33.34s | 1920x1080, 16:9 | H.264 High, 24fps, yuv420p; AAC stereo | Short abstract animation with rainbow, eye, and figure imagery. | The Metamorphic Rainbow | Hand Drawn Animation | Project video or supporting work | Browser-compatible and moderate size. | Create poster. Consider a lighter muted loop derivative if used decoratively. |
| `Y2Mate.is - Sila Lua - Iris (Sumluv Remix) (Visualizer)-PWRUr9AIxH4-1080p-1658810051663.mp4` | 32.04 MB | 234.01s | 1920x1080, 16:9 | H.264 High, 24fps, yuv420p; AAC stereo | Finished animated music visualizer with magenta background and stylized figure/hand animation. Filename indicates a YouTube download. | Sila Lua - Iris (Sumluv Remix) | Music Videos or Hand Drawn Animation | Project video / external reference | Browser-compatible, but rights/approval for local hosting are unclear. | Prefer external YouTube embed if approved. Confirm whether local file may be hosted. Create poster if local route is approved. |
| `_Paulo/BIG FEELINGS/BIG FEELINGS - Episode 05 - A Storm's Brewing_v7.mp4` | 509.63 MB | 284.33s | 1920x1080, 16:9 | H.264 Main, 24fps, yuv420p; AAC stereo | Finished Big Feelings episode with anthropomorphic school-object characters, "Over to Zip" badge, park/school backgrounds, and audio. | Big Feelings | Animation / Case Study | Hero video / project video | Browser-compatible codec but far too large for direct delivery. | Required: poster plus optimized project-video derivative. Consider shorter looping preview for case-study hero. |
| `daydream.mp4` | 12.54 MB | 39.94s | 1920x1080, 16:9 | H.264 High, 25fps, yuv420p; AAC stereo | Short hand-drawn / abstract forest animation with face, eyes, hands, and layered organic textures. | Daydream | Hand Drawn Animation | Project video or supporting work | Browser-compatible and small enough for careful direct use, but still should be lazy. | Create poster. Possible direct controlled video; avoid homepage preload. |
| `leigh.mov` | 55.20 MB | 3.52s | 1920x1080, 16:9 | ProRes 4444, 25fps, yuva444p12le; no audio | Short animated "Leigh Salvage" wordmark/logo on transparent/alpha video. Looks like the repeated Canva header/logo asset. | Leigh Salvage brand asset | Site identity | Animated logo / intro / header asset | Not suitable for direct web delivery: ProRes with alpha. | Required: web derivative if animated logo is used. Also export a static transparent PNG/SVG-like raster fallback. |

## Local Still Assets

| File | Size | Dimensions / ratio | Format / alpha | Visual inspection | Likely project | Likely category | Likely purpose | Direct web suitability | Recommended production treatment |
|---|---:|---|---|---|---|---|---|---|---|
| `_Paulo/Trailers.png` | 2499.7 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Spider-Verse trailer frame with on-screen foreign-language trailer text. | Trailer Work / Film Trailers | Trailer Work | Category/project thumbnail | Usable, but PNG is heavier than needed. | Convert/copy optimized WebP/AVIF derivative; preserve original. |
| `_Paulo/Big Feelings.png` | 1213.1 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Big Feelings episode still in playground with object characters. | Big Feelings | Animation / Case Study | Thumbnail / hero poster | Usable, but should be optimized. | Derive WebP/AVIF poster and maybe separate responsive crops. |
| `_Paulo/cacophony.png` | 2090.2 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Cacophony animation still in hallway/stairwell. | Cacophony | Hand Drawn Animation | Thumbnail / poster | Usable, but PNG is heavy. | Derive compressed poster. |
| `_Paulo/cnco0.png` | 1824.3 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | CNCO music-video still with Sony mark, dark stage, teal outline effect. | CNCO | Music Videos | Project thumbnail / poster | Usable, but should be optimized. | Derive poster WebP/AVIF. Confirm whether Sony mark is acceptable in thumbnail. |
| `_Paulo/explainers.png` | 750.9 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Abstract explainer graphic with chart/waves/check icons. | Explainers category, possibly TRAILD/analytics-style client | Explainers | Category thumbnail | Usable, but optimize. | Derive WebP/AVIF; use as category tile if no better project-specific poster. |
| `_Paulo/Hand drawn animation.png` | 1640.1 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Hand-drawn still of segmented arm/hand on green textured background. | Hand Drawn Animation | Hand Drawn Animation | Category thumbnail / showreel poster | Usable, but optimize. | Derive poster WebP/AVIF. |
| `_Paulo/Music Videos.png` | 1591.8 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Live-action diner/music-video still with illustrated character overlay and subtitle. | Music Videos category; possibly The Kid LAROI or another mixed-media video | Music Videos | Category thumbnail | Usable, but relationship is ambiguous. | Derive poster WebP/AVIF. Confirm project association. |
| `_Paulo/Social Impact.png` | 2823.2 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Illustrated "Implementation science" frame with evidence/work/simple messages and people. | CEI Global or Social Impact explainer | Social Impact | Category/project thumbnail | Usable, but large PNG. | Derive poster WebP/AVIF. Confirm project association. |
| `_Paulo/The Cribs.png` | 895.1 KB | 1920x1080, 16:9 | PNG RGBA; alpha present | Hand-drawn MTV-style title/character screen labeled Ryan/Ross/Gary. | The Cribs | Music Videos / Hand Drawn Animation | Project thumbnail / poster | Usable, optimize lightly. | Derive WebP/AVIF. |
| `_Paulo/BIG FEELINGS/BG_1.png` | 1057.3 KB | 7998x4552, about 1.76:1 | PNG RGB; no alpha | Large classroom background with desks, wall map, science poster, rainbow poster. | Big Feelings | Animation / Case Study | Background art / supporting media | Browser-compatible but very large dimensions; do not use raw at full size. | Generate responsive derivatives/crops; use `sizes` carefully. |
| `_Paulo/BIG FEELINGS/BG_2.png` | 388.3 KB | 3572x1263, about 2.83:1 | PNG RGB; no alpha | Wide playground panorama. | Big Feelings | Animation / Case Study | Wide background art / possible full-bleed band | Browser-compatible but needs art direction. | Generate responsive panorama variants; avoid awkward mobile crop. |
| `_Paulo/BIG FEELINGS/BG_3.png` | 933.5 KB | 6400x4355, about 1.47:1 | PNG RGB; no alpha | School exterior labeled "Golden Vibes Primary School". | Big Feelings | Animation / Case Study | Background art / supporting media | Browser-compatible but huge dimensions. | Generate responsive derivatives/crops. Do not invent a different school/client name. |
| `_Paulo/BIG FEELINGS/Screenshot 2025-07-09 at 5.10.48 pm.png` | 1551.4 KB | 3576x2454, about 1.46:1 | PNG RGBA; alpha present | Big Feelings badge/sticker designs: Over to Zip, Say Hey to Bounce, And Buddy, Look There's Kumo, Meet Sparx, Big Feelings. | Big Feelings | Animation / Case Study | Character/design process image | Usable, but likely should be cropped or optimized. | Derive WebP/AVIF and decide whether to show full sheet or detail crops. |
| `_Paulo/BIG FEELINGS/bounce.webp` | 73.0 KB | 1024x826, about 1.24:1 | WebP; no alpha | Basketball character pose/expression sheet. Static WebP. | Big Feelings | Animation / Case Study | Character design process | Good direct browser format. | Can use as-is if dimensions fit, but consider generating responsive public copy. |
| `_Paulo/BIG FEELINGS/spark.webp` | 43.9 KB | 1024x578, 16:9-ish | WebP VP8; no alpha | Pencil character pose/expression sheet. Static WebP. | Big Feelings | Animation / Case Study | Character design process | Good direct browser format. | Can use as-is if approved; copy/derive into `public/media` later. |
| `_Paulo/BIG FEELINGS/character designs.avif` | 23.1 KB | 1024x635, about 1.61:1 | AVIF, AV1 color stream plus gray stream | Legs/feet pose or walk-cycle sheet, not a full character lineup. | Big Feelings | Animation / Case Study | Process asset | Modern browsers mostly support AVIF; compatibility fallback may be needed. | Use AVIF plus fallback WebP/PNG if broad browser support is required. |
| `_Paulo/BIG FEELINGS/face.avif` | 25.0 KB | 1024x640, 1.60:1 | AVIF, AV1 color stream plus gray stream | Facial expression, eyes, and mouth library. | Big Feelings | Animation / Case Study | Process asset | Modern browser support; fallback may be needed. | Use AVIF with fallback, or generate WebP derivative. |
| `_Paulo/BIG FEELINGS/hands.avif` | 34.4 KB | 1024x549, about 1.87:1 | AVIF, AV1 color stream plus gray stream | Hand pose library. | Big Feelings | Animation / Case Study | Process asset | Modern browser support; fallback may be needed. | Use AVIF with fallback, or generate WebP derivative. |

## External Video References Verified

| Client label | URL | Verified title | Platform metadata |
|---|---|---|---|
| Film Trailers | `https://vimeo.com/902615675` | `Leigh Salvage Trailer Reel` | Vimeo, 58s, uploaded 2024-01-13, author `leigh salvage` |
| Isle of Dogs | `https://vimeo.com/297728814` | `Isle of Dogs work` | Vimeo, 47s, uploaded 2018-10-29, author `leigh salvage` |
| CNCO | `https://www.youtube.com/watch?v=otDkCBw7f-w` | `CNCO - Beso (An Immersive 360 Reality Audio Experience)` | YouTube oEmbed; author `CNCO` |
| The Kid LAROI | `https://youtu.be/gwkq_ubkzEY?si=dKgAalZT039K_8te` | `The Kid LAROI - STAY (A Performance Video I Made With My Fans)` | YouTube oEmbed; author `The Kid LAROI.` |
| Maxi Millz | `https://youtu.be/0yau_f0PKR8?si=LUqq5gyZ-3Us2Z4d` | `Maxi Millz - Young and Stupid (Official Music Video)` | YouTube oEmbed; author `Maxi Millz` |
| The Cribs | `https://www.youtube.com/watch?v=m_eAE8sSRho` | `The Cribs -  Running Into You` | YouTube oEmbed; author `The Cribs` |
| TRAILD explainer | `https://www.youtube.com/watch?v=qeCEhIiACbg` | `TRAILD's Fast Smart Secure Accounts Payable` | YouTube oEmbed; author `Traild` |
| Orikan explainer | `https://vimeo.com/1130463450` | `ORIKAN _ End-To-End Solutions_v7_2` | Vimeo, 168s, uploaded 2025-10-25, author `leigh salvage` |
| Sila Lua - Iris | inferred from local filename: `https://www.youtube.com/watch?v=PWRUr9AIxH4` | `Sila Lua - Iris (Sumluv Remix) (Visualizer)` | YouTube oEmbed; author `Sila Lua` |

## Duplicate / Near-duplicate Observations

- `_Paulo.zip` duplicates the extracted `_Paulo/` directory contents and should be preserved as original source material, not shipped.
- `Characters.zip` overlaps thematically with the visible Big Feelings pose/badge assets, but it contains additional unpublished PNGs. It should not be exposed until the client approves extraction/use.
- `Big Feelings.png` and the Big Feelings episode video share the same character/world style and can support one case study.
- `Social Impact.png` visually matches the CEI Global explainer more closely than the generic "Social Impact" category label.
- `Hand drawn animation.png`, `daydream.mp4`, `The_Metamorphic_Rainbow.mp4`, `Pixie_Melody_Animation_V7.mov`, `Cacophony.mp4`, and the Isle of Dogs Vimeo link all align with the Canva "HAND DRAWN ANIMATION" section.
- `leigh.mov` likely corresponds to the repeated Canva header/logo asset, but the Canva asset itself could not be inspected due Canva asset permission denial.

## Main Optimization Requirements

- Required video derivatives: Big Feelings episode, Pixie Melody, EP05 The Leak, CEI Global, Hand Drawn Animation Showreel, and `leigh.mov`.
- Strongly recommended video derivatives: Cacophony, Marketbase+, Detector Inspector, Sila Lua if locally hosted.
- Poster frames required for every local video.
- Still image derivatives recommended for every PNG used in production, especially the large Big Feelings backgrounds and all `_Paulo` 1920x1080 PNGs.
- AVIF assets are efficient but need browser fallback planning depending on target compatibility.
