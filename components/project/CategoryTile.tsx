import Link from "next/link";
import type { Category } from "@/content/types";

type CategoryTileProps = {
  category: Category;
  projectCount: number;
};

export function CategoryTile({ category, projectCount }: CategoryTileProps) {
  return (
    <Link className="category-tile" href={`/work/category/${category.slug}`}>
      <span className="category-tile__title">{category.title}</span>
      <span className="category-tile__meta">
        {projectCount} {projectCount === 1 ? "entry" : "entries"}
      </span>
    </Link>
  );
}
