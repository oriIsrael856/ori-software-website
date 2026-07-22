"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { whatsappLink } from "@/lib/site";
import { GitHubIcon } from "./icons";

type Project = {
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  note?: string;
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Stav Cosmetics — חנות אונליין לקליניקת קוסמטיקה",
    problem: "עסק שמכר רק בהודעות פרטיות — בלי חנות, בלי תשלום מקוון, והרבה זמן שהלך על תיאומים",
    solution:
      "חנות מלאה עם סליקת אשראי אמיתית (Hyp), ניהול מוצרים ושרת ייעודי — רצה היום בפרודקשן ומקבלת הזמנות",
    tags: ["React", "Express", "Payments"],
  },
  {
    title: "Gan Nuna Banuna — מערכת ניהול גן ילדים",
    problem: "ניהול גן על וואטסאפ ודפי נייר: נוכחות, עדכונים להורים ומעקב — הכול ידני והכול הולך לאיבוד",
    solution:
      "מערכת ניהול מלאה על Supabase, כולל לוגיקה עסקית בתוך הדאטאבייס (PostgreSQL) והרשאות לפי תפקיד",
    note: "פיתוח בצוות של שניים",
    tags: ["TypeScript", "Supabase", "PostgreSQL"],
    live: "https://gan-nuna-banuna.vercel.app",
    github: "https://github.com/oriIsrael856/gan-nuna-banuna",
  },
  {
    title: "La Hilula — הזמנות לקייטרינג בוטיק",
    problem: "תפריט שחי בטלפון של בעל העסק, והצעות מחיר שנכתבו ידנית להזמנה",
    solution:
      "אתר תפריט עם עגלה, הצעת מחיר מסודרת להדפסה והזמנה ישירה בוואטסאפ — הלקוח סוגר הזמנה בלי טלפון אחד",
    tags: ["Next.js", "TypeScript", "Vitest"],
    live: "https://lahilula.vercel.app",
    github: "https://github.com/oriIsrael856/lahilula",
  },
  {
    title: "Jazz & Blues Around Me — מפת הופעות חיה",
    problem: "מידע על הופעות ג'אז ובלוז מפוזר בין עשרות מקורות — וחובבי הז'אנר מפספסים",
    solution:
      "פלטפורמה שמושכת הופעות אוטומטית (Ticketmaster + Cron), ממפה אותן לפי מיקום, ועובדת גם כאפליקציה (PWA)",
    tags: ["Next.js", "Supabase", "Mapbox"],
    live: "https://jezz-and-bluzz-arround-me.vercel.app",
  },
  {
    title: "Cursor RTL Patch — קוד פתוח",
    problem: "הצ'אט של Cursor מציג עברית בכיוון שגוי — כאב יומיומי לכל מפתח ישראלי",
    solution: "כלי פתוח שמזריק תיקון RTL לתצוגת הצ'אט — זמין לקהילה בחינם",
    tags: ["Open Source", "PowerShell", "RTL"],
    github: "https://github.com/oriIsrael856/cursor-rtl-patch",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <SectionHeading
        index="01"
        title="עבודות נבחרות"
        subtitle="כל פרויקט מתחיל בכאב אמיתי ונגמר בפתרון שעובד. הנה כמה דוגמאות."
      />

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/40 md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <span className="font-display text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-3xl transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  {p.note && <p className="mt-1 text-sm text-muted">{p.note}</p>}
                  <dl className="mt-5 space-y-3 text-muted">
                    <div className="flex gap-3">
                      <dt className="shrink-0 font-medium text-body">הבעיה:</dt>
                      <dd>{p.problem}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="shrink-0 font-medium text-body">הפתרון:</dt>
                      <dd>{p.solution}</dd>
                    </div>
                  </dl>

                  {(p.live || p.github) && (
                    <div className="mt-6 flex items-center gap-4">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-sm text-accent"
                        >
                          לאתר החי ←
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} ב-GitHub`}
                          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                        >
                          <GitHubIcon className="size-4" />
                          קוד פתוח
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-48 md:justify-end">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-muted"
                      dir="ltr"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* פס ליים שנגלה ב-hover */}
              <span className="absolute inset-x-0 bottom-0 h-1 origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          </Reveal>
        ))}

        {/* כרטיס המרה — "הפרויקט הבא שלך" */}
        <Reveal delay={0.3}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid place-items-center rounded-2xl border-2 border-dashed border-line p-12 text-center transition-colors hover:border-accent/60"
          >
            <div>
              <p className="font-display text-2xl text-muted transition-colors group-hover:text-accent">
                הפרויקט הבא? אולי שלכם.
              </p>
              <p className="mt-2 text-sm text-muted">ספרו לי מה כואב — ונבנה פתרון ←</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
