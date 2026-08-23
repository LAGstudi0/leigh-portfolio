import type { Category } from "@/content/types";

export const categories: Category[] = [
  {
    slug: "music-videos",
    title: "Music Videos",
    status: "known"
  },
  {
    slug: "big-feelings",
    title: "Big Feelings",
    status: "known"
  },
  {
    slug: "hand-drawn-animation",
    title: "Hand Drawn Animation",
    status: "known",
    unresolved: [
      "Confirm whether the showreel is a category hero, standalone project, or both."
    ]
  },
  {
    slug: "social-impact",
    title: "Social Impact",
    status: "inferred",
    unresolved: [
      "Confirm whether this is a standalone category page, a project page, or only a Work-grid tile."
    ]
  },
  {
    slug: "explainers",
    title: "Explainers",
    status: "known"
  },
  {
    slug: "trailer-work",
    title: "Trailer Work",
    status: "known"
  }
];
