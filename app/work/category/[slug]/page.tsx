import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProjectsByCategory
} from "@/content";
import { ProjectSummary } from "@/components/project/ProjectSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

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
  const leadProject =
    categoryProjects.find((project) => project.featured) ?? categoryProjects[0];
  const gridProjects = leadProject
    ? categoryProjects.filter((project) => project.slug !== leadProject.slug)
    : categoryProjects;

  return (
    <main className="page category-page stack">
      <PageHeader eyebrow="Work" title={category.title} />

      {leadProject ? (
        <section className="category-feature" aria-label={leadProject.title}>
          <Link className="category-feature__link media-link" href={`/work/${leadProject.slug}`}>
            {leadProject.localVideo?.src ? (
              <span className="video-preview" aria-hidden="true">
                <img
                  src={leadProject.localVideo.poster ?? leadProject.thumbnail?.src}
                  alt=""
                  loading="eager"
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={leadProject.localVideo.poster}
                >
                  <source
                    src={leadProject.localVideo.src}
                    type="video/mp4"
                    media="(prefers-reduced-motion: no-preference)"
                  />
                </video>
              </span>
            ) : (
              <ResponsiveImage
                media={leadProject.thumbnail ?? category.cover}
                sizes="(min-width: 1024px) 70rem, 100vw"
                priority
              />
            )}
            <span className="media-link__label">{leadProject.title}</span>
          </Link>
        </section>
      ) : null}

      {gridProjects.length > 0 ? (
        <section className="project-grid" aria-label={`${category.title} projects`}>
          {gridProjects.map((project, index) => (
            <ProjectSummary
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
