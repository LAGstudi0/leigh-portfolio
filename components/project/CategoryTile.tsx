import Link from "next/link";
import type { Category } from "@/content/types";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

type CategoryTileProps = {
  category: Category;
  priority?: boolean;
};

export function CategoryTile({ category, priority = false }: CategoryTileProps) {
  const href = category.featuredProjectSlug
    ? `/work/${category.featuredProjectSlug}`
    : `/work/category/${category.slug}`;

  return (
    <Link
      className="category-tile"
      href={href}
      aria-label={`View ${category.title}`}
    >
      <span className="category-tile__media" aria-hidden="true">
        <ResponsiveImage
          media={category.cover}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </span>
      <span className="category-tile__title">
        {category.title}
      </span>
    </Link>
  );
}
