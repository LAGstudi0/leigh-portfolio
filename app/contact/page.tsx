import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main className="page page--narrow stack">
      <PageHeader eyebrow="Contact" title="Contact" />
      <section className="stack" aria-labelledby="contact-heading">
        <h2 className="section-title" id="contact-heading">
          Leigh Salvage
        </h2>
        <p>
          <a className="text-link" href="mailto:leigh.salvage@gmail.com">
            leigh.salvage@gmail.com
          </a>
        </p>
        <p className="muted">Portrait and approved bio copy are unresolved.</p>
      </section>
    </main>
  );
}
