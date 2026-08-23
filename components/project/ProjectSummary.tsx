import Link from "next/link";
import type { Project } from "@/content/types";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

type ProjectSummaryProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectSummary({ project, priority = false }: ProjectSummaryProps) {
  return (
    <article className="project-summary">
      <Link className="project-summary__link" href={`/work/${project.slug}`}>
        <span className="project-summary__media" aria-hidden="true">
          <ResponsiveImage
            media={project.thumbnail}
            priority={priority}
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </span>
        <span className="project-summary__body">
          <span className="project-summary__title">{project.title}</span>
          {project.caseStudy ? (
            <span className="project-summary__meta">Case Study</span>
          ) : null}
        </span>
      </Link>
    </article>
  );
}
