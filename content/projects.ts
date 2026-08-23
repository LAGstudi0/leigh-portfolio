import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "trailer-showreel",
    title: "Trailer Showreel",
    status: "known",
    categorySlug: "trailer-work",
    externalVideo: {
      platform: "vimeo",
      url: "https://vimeo.com/902615675",
      title: "Leigh Salvage Trailer Reel",
      thumbnail:
        "https://i.vimeocdn.com/video/1782187082-26f9efb5862c8cc77946b9687b24fcb7935b989497f037ad7455862c686b2e34-d_295x166?region=us",
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
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=otDkCBw7f-w",
      title: "CNCO - Beso (An Immersive 360 Reality Audio Experience)",
      thumbnail: "https://i.ytimg.com/vi/otDkCBw7f-w/hqdefault.jpg"
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
    externalVideo: {
      platform: "youtube",
      url: "https://youtu.be/gwkq_ubkzEY?si=dKgAalZT039K_8te",
      title: "The Kid LAROI - STAY (A Performance Video I Made With My Fans)",
      thumbnail: "https://i.ytimg.com/vi/gwkq_ubkzEY/hqdefault.jpg"
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
      "Confirm whether _Paulo/Music Videos.png belongs to this project.",
      "Confirm credits and role."
    ]
  },
  {
    slug: "maxi-millz-young-and-stupid",
    title: "Maxi Millz - Young and Stupid",
    status: "known",
    categorySlug: "music-videos",
    externalVideo: {
      platform: "youtube",
      url: "https://youtu.be/0yau_f0PKR8?si=LUqq5gyZ-3Us2Z4d",
      title: "Maxi Millz - Young and Stupid (Official Music Video)",
      thumbnail: "https://i.ytimg.com/vi/0yau_f0PKR8/hqdefault.jpg"
    },
    unresolved: [
      "Confirm credits and role.",
      "Confirm whether a client-supplied thumbnail exists."
    ]
  },
  {
    slug: "the-cribs-running-into-you",
    title: "The Cribs - Running Into You",
    status: "known",
    categorySlug: "music-videos",
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=m_eAE8sSRho",
      title: "The Cribs - Running Into You",
      thumbnail: "https://i.ytimg.com/vi/m_eAE8sSRho/hqdefault.jpg"
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
    externalVideo: {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=qeCEhIiACbg",
      title: "TRAILD's Fast Smart Secure Accounts Payable",
      thumbnail: "https://i.ytimg.com/vi/qeCEhIiACbg/hqdefault.jpg"
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
    localVideo: {
      type: "video",
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
    localVideo: {
      type: "video",
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
    localVideo: {
      type: "video",
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
      "Confirm category: Social Impact or Explainers.",
      "Confirm client, credits, role, date, and public hosting approval."
    ]
  },
  {
    slug: "hand-drawn-animation-showreel",
    title: "Hand Drawn Animation Showreel",
    status: "known",
    categorySlug: "hand-drawn-animation",
    localVideo: {
      type: "video",
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
      "Confirm if this is a category hero, standalone project, or both."
    ]
  },
  {
    slug: "the-metamorphic-rainbow",
    title: "The Metamorphic Rainbow",
    status: "inferred",
    categorySlug: "hand-drawn-animation",
    localVideo: {
      type: "video",
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
    localVideo: {
      type: "video",
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
    localVideo: {
      type: "video",
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
    localVideo: {
      type: "video",
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
    localVideo: {
      type: "video",
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
      "Confirm exact project title, client, category, and public hosting approval."
    ]
  },
  {
    slug: "big-feelings",
    title: "Big Feelings",
    status: "known",
    categorySlug: "big-feelings",
    localVideo: {
      type: "video",
      aspectRatio: "16 / 9"
    },
    caseStudy: true,
    featured: true,
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
      "Confirm client, description, outcomes, and credits.",
      "Confirm which process assets are approved for public display.",
      "Confirm whether Characters.zip may be extracted."
    ]
  }
];
