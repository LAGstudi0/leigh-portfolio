import { AspectBox } from "@/components/media/AspectBox";

type MediaPlaceholderProps = {
  label: string;
  aspectRatio?: string;
};

export function MediaPlaceholder({
  label,
  aspectRatio = "16 / 9"
}: MediaPlaceholderProps) {
  return (
    <AspectBox aspectRatio={aspectRatio} className="media-placeholder">
      <span>{label}</span>
    </AspectBox>
  );
}
