type PageHeaderProps = {
  eyebrow?: string;
  title: string;
};

export function PageHeader({ eyebrow, title }: PageHeaderProps) {
  return (
    <header className="page-header">
      {eyebrow && eyebrow !== title ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="page-title">{title}</h1>
    </header>
  );
}
