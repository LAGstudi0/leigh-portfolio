"use client";

import { useRef, useState } from "react";
import type { MediaAsset } from "@/content/types";
import { AspectBox } from "@/components/media/AspectBox";

type LocalVideoProps = {
  media?: MediaAsset;
  title: string;
};

export function LocalVideo({ media, title }: LocalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  async function play() {
    try {
      await videoRef.current?.play();
      setStarted(true);
      setPlaybackError(false);
    } catch {
      setPlaybackError(true);
    }
  }
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
        ref={videoRef}
        className="local-video"
        controls
        playsInline
        preload="none"
        poster={media.poster}
        aria-label={title}
        onPlay={() => setStarted(true)}
      >
        <source src={media.src} type="video/mp4" />
      </video>
      {!started ? (
        <button className="local-video__start" onClick={play} aria-label={`Play ${title}`} type="button">
          <span className="external-video__play" aria-hidden="true"><span className="play-symbol" /></span>
        </button>
      ) : null}
      {playbackError ? <p role="alert" className="video-error">Playback could not start. Try Play again.</p> : null}
    </AspectBox>
  );
}
