import type { MetadataRoute } from "next";
import { categories, projects } from "@/content";

const siteUrl = "https://www.leighsalvage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/contact"];
  const categoryRoutes = categories.map(
    (category) => `/work/category/${category.slug}`
  );
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-08-24")
  }));
}
