export type ContentStatus = "known" | "inferred" | "needs-confirmation";

export type MediaKind = "image" | "video";

export type MediaAsset = {
  type: MediaKind;
  src?: string;
  poster?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
};

export type ExternalVideo = {
  platform: "youtube" | "vimeo";
  url: string;
  title: string;
  thumbnail?: string;
  durationSeconds?: number;
};

export type SourceAssetReference = {
  label: string;
  kind: MediaKind | "archive" | "process";
  requiresDerivative?: boolean;
  publicUse?: "approved" | "needs-confirmation" | "unknown";
};

export type Category = {
  slug: string;
  title: string;
  status: ContentStatus;
  unresolved?: string[];
};

export type Project = {
  slug: string;
  title: string;
  status: ContentStatus;
  categorySlug: string;
  thumbnail?: MediaAsset;
  hero?: MediaAsset;
  localVideo?: MediaAsset;
  externalVideo?: ExternalVideo;
  gallery?: MediaAsset[];
  sourceAssets?: SourceAssetReference[];
  featured?: boolean;
  caseStudy?: boolean;
  unresolved: string[];
};
