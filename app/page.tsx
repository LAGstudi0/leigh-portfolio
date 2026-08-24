import { AnimatedLogo } from "@/components/branding/AnimatedLogo";
import { CategoryTile } from "@/components/project/CategoryTile";
import { categories } from "@/content";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-screen" aria-labelledby="home-title">
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

        <div className="home-screen__brand">
          <h1 className="home-screen__title" id="home-title">
            <span className="visually-hidden">Leigh Salvage</span>
            <AnimatedLogo variant="hero" priority />
          </h1>
        </div>
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
