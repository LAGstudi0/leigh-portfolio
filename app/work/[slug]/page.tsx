import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProjectBySlug,
  projects
} from "@/content";
import { ExternalVideo } from "@/components/media/ExternalVideo";
import { LocalVideo } from "@/components/media/LocalVideo";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
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
      title: "Work"
    };
  }

  return {
    title: project.title
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
        {project.externalVideo ? (
          <ExternalVideo video={project.externalVideo} />
        ) : project.localVideo ? (
          <LocalVideo media={project.localVideo} title={project.title} />
        ) : (
          <ResponsiveImage media={project.hero ?? project.thumbnail} priority />
        )}
      </section>

      {project.layout === "case-study" && project.gallery ? (
        <section className="case-study-gallery" aria-labelledby="case-study-heading">
          <h2 className="section-title" id="case-study-heading">
            Big Feelings
          </h2>
          <div className="case-study-gallery__grid">
            {project.gallery.map((item, index) => (
              <figure className="case-study-gallery__item" key={item.src}>
                <ResponsiveImage
                  media={item}
                  priority={index < 2}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {item.caption ? <figcaption>{item.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <nav className="project-footer-nav" aria-label="Project navigation">
        <Link href={category ? `/work/category/${category.slug}` : "/work"}>
          {category?.title ?? "Work"}
        </Link>
        <Link href="/work">Work</Link>
      </nav>
    </main>
  );
}
