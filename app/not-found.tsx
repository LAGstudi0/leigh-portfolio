import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <main className="page not-found-page stack">
      <PageHeader eyebrow="404" title="Page not found" />
      <nav className="not-found-actions" aria-label="Not found navigation">
        <Link className="text-link" href="/">
          Home
        </Link>
        <Link className="text-link" href="/work">
          Work
        </Link>
      </nav>
    </main>
  );
}
