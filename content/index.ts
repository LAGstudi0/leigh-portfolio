export { categories } from "@/content/categories";
export { projects } from "@/content/projects";
export type {
  Category,
  ContentStatus,
  ExternalVideo,
  MediaAsset,
  Project,
  SourceAssetReference
} from "@/content/types";

import { categories } from "@/content/categories";
import { projects } from "@/content/projects";

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(categorySlug: string) {
  return projects.filter((project) => project.categorySlug === categorySlug);
}
