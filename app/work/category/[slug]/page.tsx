import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProjectsByCategory
} from "@/content";
import { ProjectSummary } from "@/components/project/ProjectSummary";
import { PageHeader } from "@/components/ui/PageHeader";

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
      title: "Work"
    };
  }

  return {
    title: category.title
  };
}

export default async function CategoryPage({ params }: CategoryRouteProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProjects = getProjectsByCategory(category.slug);

  return (
    <main className="page stack">
      <PageHeader
        eyebrow="Work"
        title={category.title}
        status={category.status}
      />
      <section className="project-list" aria-label={`${category.title} projects`}>
        {categoryProjects.map((project) => (
          <ProjectSummary key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
