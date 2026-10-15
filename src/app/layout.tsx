import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/lib/profile";
import "./globals.css";

const siteUrl = process.env.SITE_URL;
const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title,
  description: profile.description,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title,
    description: profile.description,
    siteName: "Gaby · jeanga7",
    locale: "fr_FR",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title, description: profile.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
