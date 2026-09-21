import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProjectBySlug,
  projects
} from "@/content";
import { ProjectMedia } from "@/components/project/ProjectMedia";
import { CaseStudy } from "@/components/project/CaseStudy";
import { PageHeader } from "@/components/ui/PageHeader";

type ProjectRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Page not found",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const category = getCategoryBySlug(project.categorySlug);
  const description = `${project.title} in the ${
    category?.title ?? "Work"
  } section of Leigh Salvage's portfolio.`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/work/${project.slug}`
    },
    openGraph: {
      title: project.title,
      description,
      url: `/work/${project.slug}`
    }
  };
}

export default async function ProjectPage({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const category = getCategoryBySlug(project.categorySlug);

  return (
    <main className="page project-page stack">
      <PageHeader eyebrow={category?.title ?? "Work"} title={project.title} />

      <section className="project-hero" aria-label={project.title}>
        <ProjectMedia project={project} />
      </section>

      {project.layout === "case-study" ? <CaseStudy project={project} /> : null}

      <nav className="project-footer-nav" aria-label="Project navigation">
        <Link href={category ? `/work/category/${category.slug}` : "/work"}>
          {category?.title ?? "Work"}
        </Link>
        <Link href="/work">Work</Link>
      </nav>
    </main>
  );
}
