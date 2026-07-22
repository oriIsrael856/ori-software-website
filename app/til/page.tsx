import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TilContent from "@/components/til/TilContent";
import TilArchive from "@/components/til/TilArchive";
import {
  getAllTil,
  getStreak,
  formatHebDate,
  isToday,
  toSummary,
  linkConcepts,
} from "@/lib/til";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `חידוש יומי — ${site.brand}`,
  description: "כל יום תובנה אחת משמעותית מהעבודה: פיתוח, עיצוב וכלים. יומן למידה פתוח.",
};

export default function TilPage() {
  const posts = getAllTil();
  const streak = getStreak(posts);
  const [latest, ...rest] = posts;
  const restSummaries = rest.map(toSummary);
  const dates = Object.fromEntries(rest.map((p) => [p.slug, formatHebDate(p.date)]));

  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="glow absolute -top-40 start-1/2 size-[36rem] -translate-x-1/2 rounded-full" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)]">חידוש יומי</h1>
              {streak > 1 && (
                <span className="rounded-full border border-accent/40 bg-accent-soft px-4 py-2 text-sm text-accent">
                  רצף של {streak} ימי למידה
                </span>
              )}
            </div>
            <p className="mt-4 max-w-xl text-muted">
              כל יום אני לומד משהו חדש — מכל פרויקט שעובר תחת הידיים שלי: טריקים
              של קוד, החלטות ארכיטקטורה, אבטחה וכלים. את המשמעותי ביותר אני מתעד
              כאן, כי ידע ששווה משהו — שווה לשתף.
            </p>
          </Reveal>

          {latest && (
            <Reveal delay={0.15}>
              <article className="mt-14 rounded-3xl border border-accent/25 bg-surface p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-ink">
                    {isToday(latest.date) ? "החידוש של היום" : "החידוש האחרון"}
                  </span>
                  <time className="text-muted">{formatHebDate(latest.date)}</time>
                </div>
                <h2 className="mt-4 font-display text-3xl leading-snug md:text-4xl">
                  {latest.title}
                </h2>
                <div className="mt-6">
                  <TilContent>{linkConcepts(latest.content, latest.slug)}</TilContent>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {latest.tags.map((t) => (
                      <span
                        key={t}
                        dir="ltr"
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/til/${latest.slug}`}
                    className="link-underline text-sm text-accent"
                  >
                    לעמוד החידוש ולשיתוף ←
                  </Link>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </section>

      {restSummaries.length > 0 && (
        <section className="mx-auto max-w-4xl px-5 pb-28">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl text-muted">מהארכיון</h2>
          </Reveal>
          <TilArchive posts={restSummaries} dates={dates} />
        </section>
      )}

      <Footer />
    </main>
  );
}
