import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProjectsByCategory
} from "@/content";
import { ProjectSummary } from "@/components/project/ProjectSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectMedia } from "@/components/project/ProjectMedia";

type CategoryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug
  }));
}

export async function generateMetadata({
  params
}: CategoryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Page not found",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const description = `${category.title} work by Leigh Salvage.`;

  return {
    title: category.title,
    description,
    alternates: {
      canonical: `/work/category/${category.slug}`
    },
    openGraph: {
      title: category.title,
      description,
      url: `/work/category/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }: CategoryRouteProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProjects = getProjectsByCategory(category.slug);
  const leadProject = categoryProjects.find((project) =>
    category.slug === "hand-drawn-animation"
      ? project.slug === "hand-drawn-animation-showreel"
      : category.slug === "trailer-work" && project.slug === "trailer-showreel"
  );
  const gridProjects = leadProject
    ? categoryProjects.filter((project) => project.slug !== leadProject.slug)
    : categoryProjects;

  return (
    <main className="page category-page stack">
      <PageHeader eyebrow="Work" title={category.title} />

      {leadProject ? (
        <section className="category-feature" aria-label={leadProject.title}>
          <ProjectMedia project={leadProject} />
        </section>
      ) : null}

      {gridProjects.length > 0 ? (
        <section className="project-grid" aria-label={`${category.title} projects`}>
          {gridProjects.map((project, index) => (
            category.slug === "social-impact" ? (
              <article className="inline-project" key={project.slug}>
                <h2>{project.title}</h2>
                <ProjectMedia project={project} />
              </article>
            ) : <ProjectSummary
              key={project.slug}
              project={project}
              priority={index < 2}
            />
          ))}
        </section>
      ) : null}
    </main>
  );
}
