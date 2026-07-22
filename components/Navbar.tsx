"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/#projects", label: "עבודות" },
  { href: "/#about", label: "עליי" },
  { href: "/#process", label: "איך זה עובד" },
  { href: "/til", label: "חידוש יומי" },
  { href: "/#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-40 border-b border-line bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <a href="/#top" className="flex items-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-horizontal.png"
            alt={site.brand}
            className="h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(56,166,255,0.3)] md:h-11"
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
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-105 active:scale-95 md:block"
        >
          דברו איתי
        </a>

        {/* כפתור המבורגר — מובייל בלבד */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-lg border border-line md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute right-0 top-0 h-0.5 w-full bg-body transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute right-0 top-1.5 h-0.5 w-full bg-body transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute right-0 top-3 h-0.5 w-full bg-body transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* תפריט מובייל נפתח */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-body transition-colors active:bg-surface"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-accent px-4 py-3 text-center font-medium text-ink"
                >
                  דברו איתי בוואטסאפ
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
