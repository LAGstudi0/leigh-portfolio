type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <picture className="brand-logo" aria-hidden="true">
      <source
        srcSet="/media/branding/logo-static.png"
        media="(prefers-reduced-motion: reduce)"
        type="image/png"
      />
      <img
        className="brand-logo__image"
        src="/media/branding/logo.gif"
        alt=""
        width={563}
        height={317}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
