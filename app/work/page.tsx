import { categories } from "@/content";
import { CategoryTile } from "@/components/project/CategoryTile";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Work",
  description:
    "Work by Leigh Salvage across music videos, animation, explainers, trailer work, social impact, and Big Feelings.",
  alternates: {
    canonical: "/work"
  },
  openGraph: {
    title: "Work",
    description:
      "Work by Leigh Salvage across music videos, animation, explainers, trailer work, social impact, and Big Feelings.",
    url: "/work"
  }
};

export default function WorkPage() {
  return (
    <main className="page work-page">
      <PageHeader eyebrow="Work" title="Work" />
      <section className="category-grid" aria-label="Work categories">
        {categories.map((category, index) => (
          <CategoryTile
            key={category.slug}
            category={category}
            priority={index < 6}
          />
        ))}
      </section>
    </main>
  );
}
