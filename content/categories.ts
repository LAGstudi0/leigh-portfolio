import type { Category } from "@/content/types";

export const categories: Category[] = [
  {
    slug: "music-videos",
    title: "Music Videos",
    status: "known",
    cover: {
      type: "image",
      src: "/media/images/music-videos.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    }
  },
  {
    slug: "big-feelings",
    title: "Big Feelings",
    status: "known",
    featuredProjectSlug: "big-feelings",
    cover: {
      type: "image",
      src: "/media/images/big-feelings.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    }
  },
  {
    slug: "hand-drawn-animation",
    title: "Hand Drawn Animation",
    status: "known",
    cover: {
      type: "image",
      src: "/media/images/hand-drawn-animation.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    unresolved: [
      "Confirm whether the showreel is a category hero, standalone project, or both."
    ]
  },
  {
    slug: "social-impact",
    title: "Social Impact",
    status: "inferred",
    cover: {
      type: "image",
      src: "/media/images/social-impact.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    },
    unresolved: [
      "Confirm whether this is a standalone category page, a project page, or only a Work-grid tile."
    ]
  },
  {
    slug: "explainers",
    title: "Explainers",
    status: "known",
    cover: {
      type: "image",
      src: "/media/images/explainers.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    }
  },
  {
    slug: "trailer-work",
    title: "Trailer Work",
    status: "known",
    cover: {
      type: "image",
      src: "/media/images/trailer-work.webp",
      alt: "",
      width: 1920,
      height: 1080,
      aspectRatio: "16 / 9"
    }
  }
];
