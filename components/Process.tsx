import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  {
    title: "שיחת היכרות",
    text: "מספרים לי מה כואב. בלי ז'רגון טכני — רק מה מפריע לעסק לרוץ.",
  },
  {
    title: "אבחון ותכנון",
    text: "אני חוזר עם תמונה ברורה: מה בונים, כמה זה עולה, ומתי זה מוכן.",
  },
  {
    title: "בנייה שקופה",
    text: "עדכונים שוטפים, גרסאות ביניים לבדיקה, ואפס הפתעות בדרך.",
  },
  {
    title: "השקה וליווי",
    text: "הפתרון באוויר — ואני נשאר זמין לשיפורים, תיקונים והרחבות.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-line bg-surface/50 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <SectionHeading
          index="03"
          title="איך זה עובד?"
          subtitle="תהליך פשוט וברור — מהשיחה הראשונה ועד פתרון שרץ אצלכם."
        />

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="relative h-full rounded-2xl border border-line bg-ink p-6">
                <span className="font-display text-4xl text-accent/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
