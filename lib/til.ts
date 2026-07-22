import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import { z } from "zod";

/**
 * שכבת גישה לתוכן (Repository pattern) — ראו ADR-003, ADR-005 ב-ARCHITECTURE.md.
 * כל הגישה לקבצי התוכן עוברת דרך המודול הזה בלבד; שאר האפליקציה
 * לא יודעת (ולא אכפת לה) שהתוכן חי בקבצי Markdown.
 */

// ולידציה ב-build time: frontmatter שגוי מפיל את ה-build עם שגיאה ברורה,
// במקום לרנדר עמוד שבור בפרודקשן (fail fast).
const frontmatterSchema = z.object({
  title: z.string().min(3, "כותרת קצרה מדי"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "תאריך חייב להיות בפורמט YYYY-MM-DD")
    .refine((d) => !Number.isNaN(Date.parse(d)), "תאריך לא תקין"),
  tags: z.array(z.string().min(1)).min(1, "נדרשת לפחות תגית אחת").max(5),
  source: z.string().optional(),
  // מושגים שהחידוש הזה מסביר — חידושים אחרים שמזכירים אותם יקשרו לכאן אוטומטית
  defines: z.array(z.string().min(2)).max(6).optional(),
});

export type TilPost = z.infer<typeof frontmatterSchema> & {
  slug: string;
  content: string;
};

export type TilPostSummary = Omit<TilPost, "content"> & { excerpt: string };

const TIL_DIR = path.join(process.cwd(), "content", "til");

/**
 * cache() של React מבטיח שקריאת הדיסק והפרסור רצים פעם אחת לכל רנדור,
 * גם כשכמה קומפוננטות/עמודים קוראים לפונקציה באותו build.
 */
export const getAllTil = cache((): TilPost[] => {
  if (!fs.existsSync(TIL_DIR)) return [];
  return fs
    .readdirSync(TIL_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(TIL_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const parsed = frontmatterSchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Frontmatter לא תקין ב-content/til/${file}:\n` +
            parsed.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n")
        );
      }

      return {
        ...parsed.data,
        slug: file.replace(/\.md$/, ""),
        content: content.trim(),
      };
    })
    // תאריך יורד; באותו יום — לפי slug, כדי שהמיון יהיה דטרמיניסטי
    .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
});

export function getTil(slug: string): TilPost | undefined {
  return getAllTil().find((p) => p.slug === slug);
}

/** מפת מושג → החידוש שמסביר אותו, נגזרת משדות ה-defines. */
export const getConceptMap = cache((): { term: string; slug: string }[] =>
  getAllTil().flatMap((p) => (p.defines ?? []).map((term) => ({ term, slug: p.slug })))
);

/**
 * קישור מושגים אוטומטי: ההופעה הראשונה של מושג שהוסבר בחידוש אחר
 * הופכת ללינק אליו. מדלגים על בלוקי קוד וקוד inline.
 */
export function linkConcepts(content: string, selfSlug: string): string {
  const concepts = getConceptMap()
    .filter((c) => c.slug !== selfSlug)
    // מושגים ארוכים קודם, כדי ש"עקרון ההרשאה המינימלית" ינצח את "הרשאה"
    .sort((a, b) => b.term.length - a.term.length);
  if (concepts.length === 0) return content;

  const parts = content.split(/(```[\s\S]*?```|`[^`\n]*`)/);
  const linked = new Set<string>();

  return parts
    .map((part) => {
      if (part.startsWith("`")) return part; // קוד — לא נוגעים
      let out = part;
      for (const { term, slug } of concepts) {
        if (linked.has(term)) continue;
        const idx = out.indexOf(term);
        if (idx === -1) continue;
        out = out.slice(0, idx) + `[${term}](/til/${slug})` + out.slice(idx + term.length);
        linked.add(term);
      }
      return out;
    })
    .join("");
}

export function toSummary(post: TilPost): TilPostSummary {
  const { content, ...rest } = post;
  const plain = content
    .replace(/```[\s\S]*?```/g, " ") // בלי בלוקי קוד בתקציר
    .replace(/[#*`>\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return { ...rest, excerpt: plain.slice(0, 150) + (plain.length > 150 ? "…" : "") };
}

/** רצף ימים עוקבים של חידושים, נספר אחורה מהחידוש האחרון. */
export function getStreak(posts: TilPost[]): number {
  const days = [...new Set(posts.map((p) => p.date))].sort().reverse();
  if (days.length === 0) return 0;
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const prev = new Date(days[i - 1] + "T00:00:00Z").getTime();
    const cur = new Date(days[i] + "T00:00:00Z").getTime();
    if (prev - cur === 86_400_000) streak++;
    else break;
  }
  return streak;
}

export function formatHebDate(iso: string): string {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso + "T00:00:00"));
}

export function isToday(iso: string): boolean {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;
  return iso === today;
}
