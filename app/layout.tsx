import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: {
    default: "Leigh Salvage",
    template: "%s | Leigh Salvage"
  },
  description: "Portfolio website for Leigh Salvage.",
  openGraph: {
    title: "Leigh Salvage",
    description: "Portfolio website for Leigh Salvage.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
