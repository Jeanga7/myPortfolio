import type { Metadata } from "next";
import { Nunito, Lato } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jean-gabriel-goudiaby.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jean-Gabriel Goudiaby | Ingénieur Full-Stack & Entrepreneur",
  description:
    "Portfolio de Jean-Gabriel Goudiaby, ingénieur full-stack et entrepreneur. Go, Rust, React, architectures cloud et expériences web immersives.",
  keywords: [
    "Jean-Gabriel Goudiaby",
    "Full-Stack Engineer",
    "Go",
    "Rust",
    "React",
    "Next.js",
    "Three.js",
    "Cloud Architecture",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jean-Gabriel Goudiaby | Ingénieur Full-Stack & Entrepreneur",
    description:
      "Go, Rust, React, architecture cloud et produits interactifs. Découvrez mon univers technologique, mes projets et mon parcours.",
    url: "/",
    siteName: "Jean-Gabriel Goudiaby",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jean-Gabriel Goudiaby, ingénieur full-stack et entrepreneur",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Gabriel Goudiaby | Ingénieur Full-Stack & Entrepreneur",
    description:
      "Portfolio interactif 3D autour de l'ingénierie logicielle, du cloud et de la création de produits.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${nunito.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="bg-slate-900 text-slate-50 overflow-hidden font-lato">
        {children}
      </body>
    </html>
  );
}
