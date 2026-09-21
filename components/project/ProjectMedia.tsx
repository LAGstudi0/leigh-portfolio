import type { Project } from "@/content/types";
import { ExternalVideo } from "@/components/media/ExternalVideo";
import { LocalVideo } from "@/components/media/LocalVideo";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

export function ProjectMedia({ project }: { project: Project }) {
  if (project.externalVideo) return <ExternalVideo video={project.externalVideo} />;
  if (project.localVideo) return <LocalVideo media={project.localVideo} title={project.title} />;
  return <ResponsiveImage media={project.hero ?? project.thumbnail} priority />;
}
