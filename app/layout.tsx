import type { Metadata } from "next";
import { Suez_One, Rubik } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const suez = Suez_One({
  variable: "--font-suez",
  weight: "400",
  subsets: ["hebrew", "latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.brand} — ${site.role}`,
  description: site.positioning,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.brand} — ${site.role}`,
    description: site.positioning,
    url: site.url,
    siteName: site.brand,
    locale: "he_IL",
    type: "website",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${suez.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col">{children}</body>
    </html>
  );
}
