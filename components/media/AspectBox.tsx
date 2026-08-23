type AspectBoxProps = {
  aspectRatio?: string;
  children: React.ReactNode;
  className?: string;
};

export function AspectBox({
  aspectRatio = "16 / 9",
  children,
  className
}: AspectBoxProps) {
  return (
    <div className={["aspect-box", className].filter(Boolean).join(" ")} style={{ aspectRatio }}>
      {children}
    </div>
  );
}
