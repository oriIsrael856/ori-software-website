import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const stats = [
  { value: "100%", label: "מחויבות לתוצאה" },
  { value: "24h", label: "זמן תגובה מקסימלי" },
  { value: "∞", label: "סקרנות לבעיות חדשות" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <SectionHeading index="02" title="נעים להכיר" />

      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed">
              היי, אני {site.firstName}. אני לא מתחיל מקוד — אני מתחיל מהקשבה.
              <span className="text-accent"> מה באמת מעכב את העסק שלכם?</span>
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              אחרי שהבנתי את הכאב, אני בונה בדיוק את הפתרון שצריך: לא יותר, לא
              פחות. מערכות, אוטומציות וכלים דיגיטליים שנכנסים לשגרת העבודה שלכם
              ופשוט עובדים — כדי שאתם תתעסקו בעסק, לא בטכנולוגיה.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-line bg-surface p-5 text-center"
                >
                  <div className="font-display text-3xl text-accent" dir="ltr">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm leading-relaxed text-muted">
                העיקרון שלי פשוט: טכנולוגיה היא אמצעי, לא מטרה. אם הפתרון לא
                חוסך לכם זמן, כסף או כאב ראש — הוא לא פתרון.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            <div className="glow absolute -inset-10 rounded-full" aria-hidden />
            <div className="relative -rotate-2 overflow-hidden rounded-3xl border border-line transition-transform duration-500 hover:rotate-0">
              <Image
                src="/profile.jpeg"
                alt={`${site.name} — ${site.role}`}
                width={1406}
                height={1140}
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
