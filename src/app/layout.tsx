import type { Metadata } from "next";
import { Caveat, Momo_Trust_Display, Onest } from "next/font/google";
import "./globals.css";

const momoTrustDisplay = Momo_Trust_Display({
  weight: "400",
  variable: "--font-momo-trust-display",
  subsets: ["latin"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
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
    <html lang="fr" className={`${momoTrustDisplay.variable} ${onest.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
