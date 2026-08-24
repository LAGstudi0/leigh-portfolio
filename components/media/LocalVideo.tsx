import type { MediaAsset } from "@/content/types";
import { AspectBox } from "@/components/media/AspectBox";

type LocalVideoProps = {
  media?: MediaAsset;
  title: string;
};

export function LocalVideo({ media, title }: LocalVideoProps) {
  if (!media?.src || media.type !== "video") {
    if (media?.poster) {
      return (
        <AspectBox
          aspectRatio={media.aspectRatio ?? "16 / 9"}
          className="local-video-poster"
        >
          <img src={media.poster} alt="" loading="lazy" />
        </AspectBox>
      );
    }

    return null;
  }

  return (
    <AspectBox
      aspectRatio={media.aspectRatio ?? "16 / 9"}
      className="local-video-frame"
    >
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
    </AspectBox>
  );
}
