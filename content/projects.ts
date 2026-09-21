import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "trailer-showreel",
    title: "Trailer Showreel",
    status: "known",
    categorySlug: "trailer-work",
    thumbnail: {
      type: "image",
      src: "/media/images/trailer-work.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    hero: {
      type: "image",
      src: "/media/images/trailer-work.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "vimeo",
      url: "https://vimeo.com/902615675",
      title: "Leigh Salvage Trailer Reel",
      thumbnail: "/media/images/trailer-work.webp",
      durationSeconds: 58
    },
    sourceAssets: [
      {
        label: "_Paulo/Trailers.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm final title: Film Trailers, Trailer Showreel, or Leigh Salvage Trailer Reel.",
      "Confirm credits and role."
    ]
  },
  {
    slug: "isle-of-dogs",
    title: "Isle of Dogs",
    status: "known",
    categorySlug: "hand-drawn-animation",
    thumbnail: {
      type: "image",
      src: "https://i.vimeocdn.com/video/827744774-4cf95fbd7c2fc3faa7bbe7882f2dfae5b1e29c0780a04ecf5d6df6509c4682f9-d_640?region=us",
      alt: "",
      width: 640,
      height: 360,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "vimeo",
      url: "https://vimeo.com/297728814",
      title: "Isle of Dogs work",
      thumbnail:
        "https://i.vimeocdn.com/video/827744774-4cf95fbd7c2fc3faa7bbe7882f2dfae5b1e29c0780a04ecf5d6df6509c4682f9-d_640?region=us",
      durationSeconds: 47
    },
    unresolved: [
      "Confirm category placement: Film / Trailer Work or Hand Drawn Animation.",
      "Confirm credits and role."
    ]
  },
  {
    slug: "cnco-beso",
    title: "CNCO - Beso",
    status: "known",
    categorySlug: "music-videos",
    thumbnail: {
      type: "image",
      src: "/media/images/cnco-beso.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    hero: {
      type: "image",
      src: "/media/images/cnco-beso.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=otDkCBw7f-w",
      title: "CNCO - Beso (An Immersive 360 Reality Audio Experience)",
      thumbnail: "/media/images/cnco-beso.webp"
    },
    sourceAssets: [
      {
        label: "_Paulo/cnco0.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm credits and role.",
      "Confirm whether the Sony mark in the supplied still is acceptable."
    ]
  },
  {
    slug: "the-kid-laroi-stay",
    title: "The Kid LAROI - STAY",
    status: "known",
    categorySlug: "music-videos",
    thumbnail: {
      type: "image",
      src: "/media/images/music-videos.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "youtube",
      url: "https://youtu.be/gwkq_ubkzEY?si=dKgAalZT039K_8te",
      title: "The Kid LAROI - STAY (A Performance Video I Made With My Fans)",
      thumbnail: "/media/images/music-videos.webp"
    },
    sourceAssets: [
      {
        label: "_Paulo/Music Videos.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Kid LAROI thumbnail — replacement asset pending from client",
      "Confirm credits and role."
    ]
  },
  {
    slug: "maxi-millz-young-and-stupid",
    title: "Maxi Millz - Young and Stupid",
    status: "known",
    categorySlug: "music-videos",
    thumbnail: {
      type: "image",
      src: "/media/images/music-videos.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "youtube",
      url: "https://youtu.be/0yau_f0PKR8?si=LUqq5gyZ-3Us2Z4d",
      title: "Maxi Millz - Young and Stupid (Official Music Video)",
      thumbnail: "/media/images/music-videos.webp"
    },
    unresolved: [
      "Confirm credits and role."
    ]
  },
  {
    slug: "the-cribs-running-into-you",
    title: "The Cribs - Running Into You",
    status: "known",
    categorySlug: "music-videos",
    thumbnail: {
      type: "image",
      src: "/media/images/the-cribs-running-into-you.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    hero: {
      type: "image",
      src: "/media/images/the-cribs-running-into-you.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=m_eAE8sSRho",
      title: "The Cribs - Running Into You",
      thumbnail: "/media/images/the-cribs-running-into-you.webp"
    },
    sourceAssets: [
      {
        label: "_Paulo/The Cribs.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm category emphasis: music video, hand-drawn animation, or both.",
      "Confirm credits and role."
    ]
  },
  {
    slug: "traild-explainer",
    title: "TRAILD Explainer",
    status: "known",
    categorySlug: "explainers",
    thumbnail: {
      type: "image",
      src: "/media/images/explainers.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=qeCEhIiACbg",
      title: "TRAILD's Fast Smart Secure Accounts Payable",
      thumbnail: "/media/images/explainers.webp"
    },
    unresolved: [
      "Confirm exact public title casing.",
      "Confirm credits and role."
    ]
  },
  {
    slug: "detector-inspector-access-issues",
    title: "Detector Inspector - Access Issues",
    status: "known",
    categorySlug: "explainers",
    thumbnail: {
      type: "image",
      src: "/media/posters/detector-inspector-access-issues.webp",
      alt: "",
      width: 1600,
      height: 900,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/detector-inspector-access-issues.mp4",
      poster: "/media/posters/detector-inspector-access-issues.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "Detector Inspector_Access Issues_v7.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: ["Confirm client, credits, role, date, and public hosting approval."]
  },
  {
    slug: "marketbase-plus",
    title: "Marketbase+",
    status: "known",
    categorySlug: "explainers",
    thumbnail: {
      type: "image",
      src: "/media/posters/marketbase-plus.webp",
      alt: "",
      width: 1600,
      height: 900,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/marketbase-plus.mp4",
      poster: "/media/posters/marketbase-plus.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "Marketbase+_v4.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm exact title stylization.",
      "Confirm client, credits, role, date, and public hosting approval."
    ]
  },
  {
    slug: "orikan-explainer",
    title: "Orikan Explainer",
    status: "known",
    categorySlug: "explainers",
    thumbnail: {
      type: "image",
      src: "https://i.vimeocdn.com/video/2074160833-e36a542f3872e40527dd91cace3de86c081e2795644282e26616701e7056bc35-d_295x166?region=us",
      alt: "",
      width: 295,
      height: 166,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "vimeo",
      url: "https://vimeo.com/1130463450",
      title: "ORIKAN _ End-To-End Solutions_v7_2",
      thumbnail:
        "https://i.vimeocdn.com/video/2074160833-e36a542f3872e40527dd91cace3de86c081e2795644282e26616701e7056bc35-d_295x166?region=us",
      durationSeconds: 168
    },
    unresolved: [
      "Confirm exact public title.",
      "Confirm credits and role."
    ]
  },
  {
    slug: "cei-global-explainer",
    title: "CEI Global Explainer",
    status: "inferred",
    categorySlug: "social-impact",
    thumbnail: {
      type: "image",
      src: "/media/images/social-impact.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/cei-global-explainer.mp4",
      poster: "/media/images/social-impact.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "CEI_Global_Explainer_Story2.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      },
      {
        label: "_Paulo/Social Impact.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm client, credits, role, and date."
    ]
  },
  {
    slug: "hand-drawn-animation-showreel",
    title: "Hand Drawn Animation Showreel",
    status: "known",
    categorySlug: "hand-drawn-animation",
    featured: true,
    thumbnail: {
      type: "image",
      src: "/media/images/hand-drawn-animation.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/hand-drawn-animation-showreel.mp4",
      poster: "/media/images/hand-drawn-animation.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "Hand drawn Anim Showreel.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      },
      {
        label: "_Paulo/Hand drawn animation.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm credits and role."
    ]
  },
  {
    slug: "the-metamorphic-rainbow",
    title: "The Metamorphic Rainbow",
    status: "inferred",
    categorySlug: "hand-drawn-animation",
    thumbnail: {
      type: "image",
      src: "/media/posters/the-metamorphic-rainbow.webp",
      alt: "",
      width: 1600,
      height: 900,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/the-metamorphic-rainbow.mp4",
      poster: "/media/posters/the-metamorphic-rainbow.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "The_Metamorphic_Rainbow.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm whether Canva's Metamorphisis animation label refers to this file.",
      "Confirm final public title spelling."
    ]
  },
  {
    slug: "cacophony",
    title: "Cacophony",
    status: "known",
    categorySlug: "hand-drawn-animation",
    thumbnail: {
      type: "image",
      src: "/media/images/cacophony.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    hero: {
      type: "image",
      src: "/media/images/cacophony.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/cacophony.mp4",
      poster: "/media/images/cacophony.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "Cacophony.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      },
      {
        label: "_Paulo/cacophony.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: ["Confirm credits, role, date, and public hosting approval."]
  },
  {
    slug: "pixie-melody",
    title: "Pixie Melody",
    status: "inferred",
    categorySlug: "hand-drawn-animation",
    thumbnail: {
      type: "image",
      src: "/media/posters/pixie-melody.webp",
      alt: "",
      width: 1600,
      height: 900,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      poster: "/media/posters/pixie-melody.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "Pixie_Melody_Animation_V7.mov",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm final public title: Pixie Melody or Pixie Song.",
      "Confirm credits, role, date, and public hosting approval."
    ]
  },
  {
    slug: "daydream",
    title: "Daydream",
    status: "known",
    categorySlug: "hand-drawn-animation",
    thumbnail: {
      type: "image",
      src: "/media/posters/daydream.webp",
      alt: "",
      width: 1600,
      height: 900,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/daydream.mp4",
      poster: "/media/posters/daydream.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "daydream.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: ["Confirm credits, role, date, and public hosting approval."]
  },
  {
    slug: "sila-lua-iris-sumluv-remix",
    title: "Sila Lua - Iris (Sumluv Remix)",
    status: "inferred",
    categorySlug: "hand-drawn-animation",
    thumbnail: {
      type: "image",
      src: "https://i.ytimg.com/vi/PWRUr9AIxH4/hqdefault.jpg",
      alt: "",
      width: 480,
      height: 360,
      aspectRatio: "16 / 9"
    },
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=PWRUr9AIxH4",
      title: "Sila Lua - Iris (Sumluv Remix) (Visualizer)",
      thumbnail: "https://i.ytimg.com/vi/PWRUr9AIxH4/hqdefault.jpg"
    },
    sourceAssets: [
      {
        label: "Y2Mate.is - Sila Lua - Iris (Sumluv Remix) (Visualizer)-PWRUr9AIxH4-1080p-1658810051663.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm category: Music Videos, Hand Drawn Animation, or both.",
      "Confirm whether the local downloaded MP4 may be hosted."
    ]
  },
  {
    slug: "episode-05-the-leak",
    title: "Episode 05 - The Leak",
    status: "inferred",
    categorySlug: "social-impact",
    thumbnail: {
      type: "image",
      src: "/media/posters/episode-05-the-leak.webp",
      alt: "",
      width: 1600,
      height: 900,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/episode-05-the-leak.mp4",
      poster: "/media/posters/episode-05-the-leak.webp",
      aspectRatio: "16 / 9"
    },
    sourceAssets: [
      {
        label: "EP05_The_Leak_v4.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm exact project title, client, credits, and role."
    ]
  },
  {
    slug: "big-feelings",
    title: "Big Feelings",
    caseStudyContent: {
      clients: ["Black Dog Institute", "Portable"],
      introduction: [
        "The Vibe Checkers are here to help each other learn how to regulate their Big Feelings!",
        "This is part of a 9 episode animated series in which I was the lead animator, handling every stage of production including storyboarding, scriptwriting, animation, and background design, while also managing the team."
      ],
      referenceUrl: "https://www.leighsalvage.com/big-feelings"
    },
    status: "known",
    categorySlug: "big-feelings",
    thumbnail: {
      type: "image",
      src: "/media/images/big-feelings.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    hero: {
      type: "image",
      src: "/media/images/big-feelings.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    localVideo: {
      type: "video",
      src: "/media/video/projects/big-feelings-episode-05-a-storms-brewing.mp4",
      poster: "/media/images/big-feelings.webp",
      aspectRatio: "16 / 9"
    },
    gallery: [
      {
        type: "image",
        src: "/media/images/big-feelings-storyboard-1.webp",
        alt: "Storyboard panels 1 to 6: Bounce says goodbye to Ollie and sits alone at school",
        section: "storyboarding",
        width: 1600,
        height: 980
      },
      {
        type: "image",
        src: "/media/images/big-feelings-storyboard-2.webp",
        alt: "Storyboard panels 7 to 12: Zip talks with Bounce on the school bench",
        section: "storyboarding",
        width: 1600,
        height: 946
      },
      {
        type: "image",
        src: "/media/images/big-feelings-bg-2.webp",
        alt: "Playground background panorama",
        section: "background-design",
        caption: "Background Art",
        width: 1920,
        height: 679,
        aspectRatio: "3572 / 1263"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-character-designs.webp",
        alt: "Leg and foot pose studies",
        section: "character-design",
        caption: "Character Designs",
        width: 1024,
        height: 635,
        aspectRatio: "1024 / 635"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-face.webp",
        alt: "Facial expression studies",
        section: "character-design",
        caption: "Expression Library",
        width: 1024,
        height: 640,
        aspectRatio: "1024 / 640"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-hands.webp",
        alt: "Hand pose studies",
        section: "character-design",
        caption: "Hand Poses",
        width: 1024,
        height: 549,
        aspectRatio: "1024 / 549"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-bounce.webp",
        alt: "Bounce basketball character poses and expressions",
        section: "character-design",
        caption: "Character Designs",
        width: 1024,
        height: 826,
        aspectRatio: "1024 / 826"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-spark.webp",
        alt: "Pencil character poses and expressions",
        section: "character-design",
        caption: "Character Designs",
        width: 1024,
        height: 578,
        aspectRatio: "1024 / 578"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-bg-1.webp",
        alt: "Classroom background design",
        section: "background-design",
        caption: "Background Art",
        width: 1920,
        height: 1093,
        aspectRatio: "7998 / 4552"
      },
      {
        type: "image",
        src: "/media/images/big-feelings-bg-3.webp",
        alt: "Golden Vibes Primary School exterior background",
        section: "background-design",
        caption: "Background Art",
        width: 1920,
        height: 1307,
        aspectRatio: "6400 / 4355"
      }
    ],
    caseStudy: true,
    featured: true,
    layout: "case-study",
    sourceAssets: [
      {
        label: "_Paulo/Big Feelings.png",
        kind: "image",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      },
      {
        label: "_Paulo/BIG FEELINGS/BIG FEELINGS - Episode 05 - A Storm's Brewing_v7.mp4",
        kind: "video",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      },
      {
        label: "_Paulo/BIG FEELINGS process artwork",
        kind: "process",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      },
      {
        label: "_Paulo/BIG FEELINGS/Characters.zip",
        kind: "archive",
        requiresDerivative: true,
        publicUse: "needs-confirmation"
      }
    ],
    unresolved: [
      "Confirm any additional outcomes and collaborator credits beyond the approved live-site copy.",
      "Confirm which process assets are approved for public display.",
      "Confirm whether Characters.zip may be extracted."
    ]
  }
];
