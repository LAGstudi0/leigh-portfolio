type AnimatedLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "header" | "hero";
};

export function AnimatedLogo({
  className,
  priority = false,
  variant = "header"
}: AnimatedLogoProps) {
  const classes = [
    "animated-logo",
    `animated-logo--${variant}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <span className={classes} aria-hidden="true">
      <img
        className="animated-logo__fallback"
        src="/media/branding/leigh-logo-static.png"
        alt=""
        width={1120}
        height={338}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
      <video
        className="animated-logo__motion"
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        poster="/media/branding/leigh-logo-static.png"
      >
        <source
          src="/media/branding/leigh-logo.webm"
          type="video/webm"
          media="(prefers-reduced-motion: no-preference)"
        />
      </video>
    </span>
  );
}
