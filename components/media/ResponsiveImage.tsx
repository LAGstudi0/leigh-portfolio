import Image from "next/image";
import type { MediaAsset } from "@/content/types";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";

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
    return (
      <MediaPlaceholder
        label="Image pending"
        aspectRatio={media?.aspectRatio ?? "16 / 9"}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt ?? ""}
      width={media.width ?? 1920}
      height={media.height ?? 1080}
      sizes={sizes}
      priority={priority}
      className="responsive-image"
    />
  );
}
