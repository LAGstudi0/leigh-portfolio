import Image from "next/image";
import type { MediaAsset } from "@/content/types";

type ResponsiveImageProps = {
  media?: MediaAsset;
  priority?: boolean;
  sizes?: string;
};

export function ResponsiveImage({
  media,
  priority = false,
  sizes = "(min-width: 1024px) 70rem, 100vw"
}: ResponsiveImageProps) {
  if (!media?.src || media.type !== "image") {
    return null;
  }

  return (
    <Image
      src={media.src}
      alt={media.alt ?? ""}
      width={media.width ?? 1920}
      height={media.height ?? 1080}
      sizes={sizes}
      preload={priority}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className="responsive-image"
    />
  );
}
