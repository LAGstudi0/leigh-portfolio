import Link from "next/link";
import { categories, getProjectBySlug } from "@/content";
import { CategoryTile } from "@/components/project/CategoryTile";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

export default function HomePage() {
  const heroProject = getProjectBySlug("hand-drawn-animation-showreel");

  return (
    <main className="page home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__identity">
          <p className="eyebrow">Home</p>
          <h1 className="home-title" id="home-title">
            Leigh Salvage
          </h1>
        </div>

        <Link
          className="home-hero__media media-link"
          href="/work/category/hand-drawn-animation"
          aria-label="View Hand Drawn Animation"
        >
          <ResponsiveImage
            media={heroProject?.thumbnail}
            priority
            sizes="(min-width: 1024px) 70rem, 100vw"
          />
          <span className="media-link__label">Work</span>
        </Link>
      </section>

      <section className="home-work" aria-labelledby="home-work-heading">
        <h2 className="section-title" id="home-work-heading">
          Work
        </h2>
        <div className="category-grid" aria-label="Work categories">
          {categories.map((category, index) => (
            <CategoryTile
              key={category.slug}
              category={category}
              priority={index < 3}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
