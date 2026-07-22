"use client";

import { motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const word = {
  hidden: { opacity: 0, y: 40, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headline: { text: string; accent?: boolean }[][] = [
  [{ text: "תוכנה" }, { text: "שפותרת" }],
  [{ text: "בעיות", accent: true }, { text: "אמיתיות." }],
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24">
      {/* רקע: גריד + כתם אור */}
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="glow absolute -top-40 start-1/2 size-[42rem] -translate-x-1/2 rounded-full" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={word}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted"
          >
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            זמין לפרויקטים חדשים
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[1.05]">
            {headline.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                {line.map((w) => (
                  <motion.span
                    key={w.text}
                    variants={word}
                    className={`inline-block ${w.accent ? "text-accent" : ""}`}
                  >
                    {w.text}
                    {" "}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p variants={word} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {site.positioning}
          </motion.p>

          <motion.div variants={word} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 font-medium text-ink"
            >
              <span className="relative z-10">בואו נדבר על הפרויקט שלכם</span>
              <span className="absolute inset-0 -translate-y-full bg-body transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <a
              href="#projects"
              className="link-underline py-4 text-muted transition-colors hover:text-body"
            >
              צפו בעבודות ↓
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* חץ גלילה */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 text-muted"
        aria-hidden
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block text-xl"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
