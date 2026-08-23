import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProjectBySlug,
  projects
} from "@/content";
import { ExternalVideo } from "@/components/media/ExternalVideo";
import { LocalVideo } from "@/components/media/LocalVideo";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
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
    <main className="page stack">
      <PageHeader
        eyebrow={category?.title ?? "Work"}
        title={project.title}
        status={project.status}
      />

      {project.externalVideo ? (
        <ExternalVideo video={project.externalVideo} />
      ) : project.localVideo ? (
        <LocalVideo media={project.localVideo} title={project.title} />
      ) : (
        <MediaPlaceholder label="Media pending" aspectRatio="16 / 9" />
      )}

      {project.unresolved.length > 0 ? (
        <section className="stack" aria-labelledby="unresolved-heading">
          <h2 className="section-title" id="unresolved-heading">
            Unresolved
          </h2>
          <ul className="plain-list">
            {project.unresolved.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
