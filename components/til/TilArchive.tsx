"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { TilPostSummary } from "@/lib/til";

export default function TilArchive({
  posts,
  dates,
}: {
  posts: TilPostSummary[];
  dates: Record<string, string>; // slug -> תאריך מפורמט בעברית (מחושב בשרת)
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = [...new Set(posts.flatMap((p) => p.tags))];
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <div>
      {tags.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeTag === null
                ? "border-accent bg-accent-soft text-accent"
                : "border-line text-muted hover:text-body"
            }`}
          >
            הכל
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t === activeTag ? null : t)}
              dir="ltr"
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                activeTag === t
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-muted hover:text-body"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/til/${p.slug}`}
                className="group block h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <time className="text-xs text-muted">{dates[p.slug]}</time>
                <h3 className="mt-2 font-display text-xl leading-snug transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      dir="ltr"
                      className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
