import type { MediaAsset } from "@/content/types";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";

type LocalVideoProps = {
  media?: MediaAsset;
  title: string;
};

export function LocalVideo({ media, title }: LocalVideoProps) {
  if (!media?.src || media.type !== "video") {
    return (
      <MediaPlaceholder
        label="Video derivative pending"
        aspectRatio={media?.aspectRatio ?? "16 / 9"}
      />
    );
  }

  return (
    <video
      className="local-video"
      controls
      playsInline
      preload="none"
      poster={media.poster}
      aria-label={title}
    >
      <source src={media.src} type="video/mp4" />
    </video>
  );
}
