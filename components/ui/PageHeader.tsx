import type { ContentStatus } from "@/content/types";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  status?: ContentStatus;
};

export function PageHeader({ eyebrow, title, status }: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {status ? <span className="status-pill">{status}</span> : null}
    </header>
  );
}
