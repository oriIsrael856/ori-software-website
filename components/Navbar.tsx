"use client";

import { motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/#projects", label: "עבודות" },
  { href: "/#about", label: "עליי" },
  { href: "/#process", label: "איך זה עובד" },
  { href: "/til", label: "חידוש יומי" },
  { href: "/#contact", label: "צור קשר" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-40 border-b border-line bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/#top" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-horizontal.png"
            alt={site.brand}
            className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(56,166,255,0.3)] md:h-11"
          />
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline transition-colors hover:text-body">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-105 active:scale-95"
        >
          דברו איתי
        </a>
      </nav>
    </motion.header>
  );
}
