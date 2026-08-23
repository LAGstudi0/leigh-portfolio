import { categories, projects } from "@/content";
import { CategoryTile } from "@/components/project/CategoryTile";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <main className="page stack">
      <PageHeader eyebrow="Work" title="Work" />
      <section className="category-grid" aria-label="Work categories">
        {categories.map((category) => (
          <CategoryTile
            key={category.slug}
            category={category}
            projectCount={
              projects.filter((project) => project.categorySlug === category.slug)
                .length
            }
          />
        ))}
      </section>
    </main>
  );
}
