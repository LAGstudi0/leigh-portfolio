import Link from "next/link";
import type { Project } from "@/content/types";

type ProjectSummaryProps = {
  project: Project;
};

export function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <article className="project-summary">
      <div>
        <h2 className="project-summary__title">
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="muted">{project.status}</p>
      </div>
      {project.caseStudy ? <span className="status-pill">Case study</span> : null}
    </article>
  );
}
