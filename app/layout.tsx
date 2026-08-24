import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { SiteShell } from "@/components/layout/SiteShell";

const siteUrl = new URL("https://www.leighsalvage.com");
const siteDescription =
  "Portfolio of animation, music video, trailer, explainer, and case-study work by Leigh Salvage.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Leigh Salvage",
    template: "%s | Leigh Salvage"
  },
  description: siteDescription,
  applicationName: "Leigh Salvage",
  authors: [{ name: "Leigh Salvage" }],
  creator: "Leigh Salvage",
  publisher: "Leigh Salvage",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Leigh Salvage",
    description: siteDescription,
    url: "/",
    siteName: "Leigh Salvage",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Leigh Salvage",
    description: siteDescription
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
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
