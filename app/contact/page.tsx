import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Contact",
  description: "Contact Leigh Salvage.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact",
    description: "Contact Leigh Salvage.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="page contact-page">
      <section className="contact-panel">
        <PageHeader eyebrow="Contact" title="Contact" />
        <a
          className="contact-email"
          href="mailto:leigh.salvage@gmail.com"
        >
          leigh.salvage@gmail.com
        </a>
      </section>
    </main>
  );
}
