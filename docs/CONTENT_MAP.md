# Content Map

Audit date: 2026-08-23

## Source-of-truth Status

- KNOWN: Present in Canva text, external video metadata, or local source media.
- INFERRED: Reasonable relationship from visual inspection, filename, Canva placement, or matching style.
- UNKNOWN: Needs client confirmation before production copy, credits, or final route decisions.

## Proposed Top-level Navigation

| Route | Label | Status | Notes |
|---|---|---|---|
| `/` | HOME | KNOWN | Repeated in Canva header. Likely first viewport uses the Leigh Salvage animated/static logo and a media-first composition. |
| `/work` | WORK | KNOWN | Repeated in Canva header and explicitly represented as the main hub. |
| `/contact` | CONTACT | KNOWN | Repeated in Canva header. Canva contains placeholder bio/photo copy plus `leigh.salvage@gmail.com`. |

Do not add more top-level navigation unless the client requests it.

## Proposed Work Hierarchy

| Page / route | Status | Purpose | Likely children |
|---|---|---|---|
| `/work` | KNOWN | Work overview with six tiles visible in Canva: Music Videos, Big Feelings, Hand Drawn Animation, Social Impact, Explainers, Trailer Work. | Category/project entry points. |
| `/work/music-videos` | KNOWN | Category page for YouTube music videos. Canva lists Maxi Millz, CNCO, The Kid LAROI, The Cribs. | `maxi-millz`, `cnco`, `the-kid-laroi`, `the-cribs`; Sila Lua is INFERRED from hand-drawn section/local filename. |
| `/work/trailer-work` | KNOWN | Trailer category page. Canva lists "TRAILER SHOWREEL". | Film Trailers / Trailer Reel; Isle of Dogs placement is ambiguous. |
| `/work/explainers` | KNOWN | Explainer category page. Canva lists TRAILD, Detector Inspector, Marketbase, Orikan. | Four explainer entries; CEI Global may belong under Social Impact instead. |
| `/work/hand-drawn-animation` | KNOWN | Animation category page. Canva says "HAND DRAWN ANIMATION (SHOWREEL ON LOOP)" and lists several works. | Showreel, The Metamorphic Rainbow, Isle of Dogs reel, Cacophony, Pixie Song, Sila Lua, Daydream. |
| `/work/big-feelings` | KNOWN | Big Feelings case study. Canva explicitly says "case study" and lists episode, character designs, background art, storyboarding, and description. | Rich case-study sections. |
| `/work/social-impact` | INFERRED | Category/page implied by the Work grid tile. | CEI Global and possibly EP05 The Leak. Needs confirmation. |

## Candidate Public Projects

### Trailer / Film Work

| Proposed title | Proposed slug | Status | Category | Local assets | External video | Likely thumbnail / hero | Enough for page? | Unresolved metadata | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| Trailer Showreel | `trailer-showreel` | KNOWN from Canva label; Vimeo title verified as `Leigh Salvage Trailer Reel` | Trailer Work | `_Paulo/Trailers.png` | Vimeo `https://vimeo.com/902615675`, 58s | `_Paulo/Trailers.png`; external Vimeo thumbnail also available | Yes, media-led page | Exact public title: client label says Film Trailers, Vimeo says Leigh Salvage Trailer Reel, Canva says Trailer Showreel. | High |
| Isle of Dogs | `isle-of-dogs` | KNOWN external link; Canva lists "isle of dogs reel" under Hand Drawn Animation | Film / Trailer Work or Hand Drawn Animation | No local still found specifically named Isle of Dogs; appears in showreel frames | Vimeo `https://vimeo.com/297728814`, 47s | Vimeo thumbnail or generated poster from external embed | Yes, media-only page | Final category placement and role/credit details. | Medium |

### Music Videos

| Proposed title | Proposed slug | Status | Category | Local assets | External video | Likely thumbnail / hero | Enough for page? | Unresolved metadata | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| CNCO - Beso | `cnco-beso` | KNOWN external title | Music Videos | `_Paulo/cnco0.png` | YouTube `https://www.youtube.com/watch?v=otDkCBw7f-w` | `_Paulo/cnco0.png` or YouTube thumbnail | Yes, media-only page | Leigh's role, date, credit wording, whether Sony mark is acceptable in still. | High |
| The Kid LAROI - STAY | `the-kid-laroi-stay` | KNOWN external title | Music Videos | `_Paulo/Music Videos.png` may be related, but not confirmed | YouTube `https://youtu.be/gwkq_ubkzEY?si=dKgAalZT039K_8te` | YouTube thumbnail unless `_Paulo/Music Videos.png` is confirmed | Yes, media-only page | Confirm relation of `_Paulo/Music Videos.png`, role, credits. | Medium |
| Maxi Millz - Young and Stupid | `maxi-millz-young-and-stupid` | KNOWN external title | Music Videos | No specific local still found | YouTube `https://youtu.be/0yau_f0PKR8?si=LUqq5gyZ-3Us2Z4d` | YouTube thumbnail | Yes, media-only page | Role, credits, whether a custom thumbnail exists. | Medium |
| The Cribs - Running Into You | `the-cribs-running-into-you` | KNOWN external title; Canva lists The Cribs under Music Videos | Music Videos, possibly Hand Drawn Animation | `_Paulo/The Cribs.png` | YouTube `https://www.youtube.com/watch?v=m_eAE8sSRho` | `_Paulo/The Cribs.png` | Yes, media-only page | Confirm category emphasis: music video vs hand-drawn animation. | High |
| Sila Lua - Iris (Sumluv Remix) | `sila-lua-iris-sumluv-remix` | INFERRED from local filename and YouTube ID verified | Music Videos or Hand Drawn Animation | `Y2Mate.is - Sila Lua - Iris...mp4` | Inferred YouTube `https://www.youtube.com/watch?v=PWRUr9AIxH4` | Generated poster or YouTube thumbnail | Yes, but hosting route needs confirmation | Permission to use local downloaded MP4; final category; role/credits. | Medium |

### Explainers

| Proposed title | Proposed slug | Status | Category | Local assets | External video | Likely thumbnail / hero | Enough for page? | Unresolved metadata | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| TRAILD Explainer | `traild-explainer` | KNOWN from Canva and external link | Explainers | `_Paulo/explainers.png` may be category-level, not specific | YouTube `https://www.youtube.com/watch?v=qeCEhIiACbg` | YouTube thumbnail or category still | Yes, media-only page | Role, exact title casing, whether to use YouTube thumbnail. | High |
| Detector Inspector - Access Issues | `detector-inspector-access-issues` | KNOWN from Canva and local video | Explainers | `Detector Inspector_Access Issues_v7.mp4` | None supplied | Poster frame from local video | Yes | Client/role/date/description. | High |
| Marketbase+ | `marketbase-plus` | KNOWN from Canva and local video | Explainers | `Marketbase+_v4.mp4` | None supplied | Poster frame from local video | Yes | Exact stylization: `Marketbase+`, `Marketbase`, or `Marketbase+_v4`. | High |
| Orikan Explainer | `orikan-explainer` | KNOWN from Canva and external link | Explainers | No local still found | Vimeo `https://vimeo.com/1130463450`, 168s | Vimeo thumbnail | Yes, media-only page | Exact public title: client label says Orikan explainer, Vimeo says `ORIKAN _ End-To-End Solutions_v7_2`. | High |
| CEI Global Explainer | `cei-global-explainer` | INFERRED from local file; not listed in Canva Explainers text | Social Impact or Explainers | `CEI_Global_Explainer_Story2.mp4`, `_Paulo/Social Impact.png` | None supplied | `_Paulo/Social Impact.png` or generated poster | Yes | Whether this belongs to Social Impact or Explainers; role/client/date. | Medium |

### Hand Drawn Animation

| Proposed title | Proposed slug | Status | Category | Local assets | External video | Likely thumbnail / hero | Enough for page? | Unresolved metadata | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| Hand Drawn Animation Showreel | `hand-drawn-animation-showreel` | KNOWN from Canva | Hand Drawn Animation | `Hand drawn Anim Showreel.mp4`, `_Paulo/Hand drawn animation.png` | None supplied | `_Paulo/Hand drawn animation.png` | Yes; could be category hero rather than project detail | Whether showreel is a playable category hero, standalone project, or both. | High |
| The Metamorphic Rainbow | `the-metamorphic-rainbow` | KNOWN from local transfer name and local video; Canva likely says "Metamorphisis animation" | Hand Drawn Animation | `The_Metamorphic_Rainbow.mp4` | None supplied | Generated poster from video | Yes | Confirm whether Canva's "Metamorphisis animation" means this work, and final title spelling. | Medium |
| Cacophony | `cacophony` | KNOWN from local video and thumbnail | Hand Drawn Animation | `Cacophony.mp4`, `_Paulo/cacophony.png` | None supplied | `_Paulo/cacophony.png` | Yes | Role/date/description. | High |
| Pixie Melody | `pixie-melody` | INFERRED from local filename and Canva "pixie song" | Hand Drawn Animation | `Pixie_Melody_Animation_V7.mov` | None supplied | Generated poster from video | Yes after web derivative | Final public title: Pixie Melody vs Pixie Song. | Medium |
| Daydream | `daydream` | KNOWN local video and Canva label | Hand Drawn Animation | `daydream.mp4` | None supplied | Generated poster from video | Yes, short media-led page | Role/date/description. | High |

### Social Impact / Education Animation

| Proposed title | Proposed slug | Status | Category | Local assets | External video | Likely thumbnail / hero | Enough for page? | Unresolved metadata | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| Social Impact | `social-impact` | KNOWN as Work-grid category label | Social Impact | `_Paulo/Social Impact.png`; likely `CEI_Global_Explainer_Story2.mp4`; possibly `EP05_The_Leak_v4.mp4` | None supplied | `_Paulo/Social Impact.png` | Category page yes; project set uncertain | Which projects belong here; whether to use category page only or project details. | Medium |
| Episode 05 - The Leak | `episode-05-the-leak` | INFERRED from filename | Social Impact / Education Animation | `EP05_The_Leak_v4.mp4` | None supplied | Generated poster | Yes after confirmation | Exact project title, client, whether public. | Low |

### Big Feelings

| Proposed title | Proposed slug | Status | Category | Local assets | External video | Likely thumbnail / hero | Enough for page? | Unresolved metadata | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| Big Feelings | `big-feelings` | KNOWN from Canva and local folder | Animation / Case Study | `_Paulo/Big Feelings.png`; Big Feelings episode MP4; `BG_1.png`; `BG_2.png`; `BG_3.png`; `bounce.webp`; `spark.webp`; `character designs.avif`; `face.avif`; `hands.avif`; badge screenshot; `Characters.zip` | None supplied | `_Paulo/Big Feelings.png` or episode poster | Yes, strongest case-study candidate | Client, description, outcomes, approved process assets, whether to extract `Characters.zip`, exact episode title/casing. | High |

## Known Canva Content Order

1. HOME / header logo area.
2. WORK page with showreel block.
3. Work overview with six tiles: Music Videos, Big Feelings, Hand Drawn Animation, Social Impact, Explainers, Trailer Work.
4. Music Videos category with Maxi Millz, CNCO, The Kid LAROI, The Cribs.
5. Trailer Work page with Trailer Showreel.
6. Explainers page with TRAILD, Detector Inspector, Marketbase, Orikan.
7. Hand Drawn Animation page with showreel loop and listed works.
8. Big Feelings case study with episode, character designs, background art, storyboarding, and project description placeholder.
9. Contact page with photo placeholder, bio placeholder, and `leigh.salvage@gmail.com`.

## Important Discrepancies

- The user grouped Isle of Dogs under Film / Trailers, but the Canva text places "isle of dogs reel" under Hand Drawn Animation.
- Canva's "Metamorphisis animation" appears likely to map to `The_Metamorphic_Rainbow.mp4`, but that title relationship is not confirmed.
- `Music Videos.png` is a broad music-video still, but its specific project relationship is unclear.
- The Canva "Social Impact" tile is present, but no dedicated Social Impact page text is visible beyond the tile; CEI Global and EP05 The Leak are likely candidates but not confirmed.
- Canva contains placeholder copy for the contact/about page and Big Feelings description, so production copy is still missing.
