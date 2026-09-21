import type { Project } from "@/content/types";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

const sections = [
  { id: "storyboarding", title: "Storyboarding" },
  { id: "background-design", title: "Background Design" },
  { id: "character-design", title: "Character Design" }
] as const;

export function CaseStudy({ project }: { project: Project }) {
  const content = project.caseStudyContent;
  if (!content) return null;

  return (
    <>
      <section className="case-study-intro" aria-label="About the project">
        <p>Clients: {content.clients.join(" / ")}</p>
        {content.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>
      {sections.map(({ id, title }) => {
        const images = project.gallery?.filter((image) => image.section === id) ?? [];
        return (
          <section className="case-study-section" aria-labelledby={id} key={id}>
            <h2 className="section-title" id={id}>{title}</h2>
            {images.length > 0 ? (
              <div className="case-study-gallery__grid">
                {images.map((media) => (
                  <figure className="case-study-gallery__item" key={media.src}>
                    <a href={media.src} aria-label={`View ${media.alt ?? title}`}>
                      <ResponsiveImage media={media} sizes="(min-width: 1100px) 480px, (min-width: 700px) 46vw, 92vw" />
                    </a>
                  </figure>
                ))}
              </div>
            ) : null}
          </section>
        );
      })}
    </>
  );
}
