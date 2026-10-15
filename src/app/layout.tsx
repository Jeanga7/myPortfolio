import type { Metadata } from "next";
import { Lato, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Living Signature",
  description: "Portfolio personnel de Jean Gabriel Goudiaby.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${nunito.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
