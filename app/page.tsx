import Link from "next/link";
import { categories, projects } from "@/content";
import { PageHeader } from "@/components/ui/PageHeader";

export default function HomePage() {
  return (
    <main className="page stack">
      <PageHeader eyebrow="Home" title="Leigh Salvage" />
      <section className="stack" aria-labelledby="foundation-heading">
        <h2 className="section-title" id="foundation-heading">
          Portfolio foundation
        </h2>
        <p className="muted">
          {categories.length} work categories and {projects.length} candidate
          projects are available in structured content.
        </p>
        <div className="cluster">
          <Link className="text-link" href="/work">
            Work
          </Link>
          <Link className="text-link" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
