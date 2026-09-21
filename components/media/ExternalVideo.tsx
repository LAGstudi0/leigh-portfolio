"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import type { ExternalVideo as ExternalVideoData } from "@/content/types";
import { AspectBox } from "@/components/media/AspectBox";

type ExternalVideoProps = {
  video: ExternalVideoData;
};

function getEmbedUrl(video: ExternalVideoData) {
  if (video.platform === "youtube") {
    const match = video.url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/
    );
    const id = match?.[1];

    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
      : undefined;
  }

  const match = video.url.match(/vimeo\.com\/(\d+)/);
  const id = match?.[1];

  return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : undefined;
}

export function ExternalVideo({ video }: ExternalVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = useMemo(() => getEmbedUrl(video), [video]);
  const loadVideo = () => setIsLoaded(true);
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      loadVideo();
    }
  };

  return (
    <AspectBox className="external-video">
      {isLoaded && embedUrl ? (
        <iframe
          src={embedUrl}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          className="external-video__poster"
          type="button"
          onClick={loadVideo}
          onKeyDown={handleKeyDown}
          onPointerUp={loadVideo}
          aria-label={`Play ${video.title}`}
        >
          {video.thumbnail ? (
            <img src={video.thumbnail} alt="" loading="lazy" />
          ) : null}
          <span className="external-video__play" aria-hidden="true"><span className="play-symbol" /></span>
        </button>
      )}
    </AspectBox>
  );
}
