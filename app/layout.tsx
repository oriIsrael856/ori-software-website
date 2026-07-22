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
  title: `${site.brand} — ${site.role}`,
  description: site.positioning,
  openGraph: {
    title: `${site.brand} — ${site.role}`,
    description: site.positioning,
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
