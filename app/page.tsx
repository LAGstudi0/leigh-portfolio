import { CategoryTile } from "@/components/project/CategoryTile";
import { categories } from "@/content";

export default function HomePage() {
  return (
    <main className="home-page">
      <h1 className="visually-hidden">Leigh Salvage</h1>
      <section className="home-screen" aria-label="Leigh Salvage">
        <video
          className="home-screen__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/posters/home-background.webp"
          aria-hidden="true"
        >
          <source
            src="/media/video/home-background-720.mp4"
            type="video/mp4"
            media="(prefers-reduced-motion: no-preference) and (max-width: 760px)"
          />
          <source
            src="/media/video/home-background-1080.mp4"
            type="video/mp4"
            media="(prefers-reduced-motion: no-preference)"
          />
        </video>
      </section>

      <section className="page home-work" aria-labelledby="home-work-heading">
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
