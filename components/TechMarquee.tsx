const techs = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "REST APIs",
  "אוטומציות",
  "AI & LLMs",
  "Cloud",
];

export default function TechMarquee() {
  const row = [...techs, ...techs];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface py-5" dir="ltr">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6 text-muted">
            <span className="me-6 text-accent">✦</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
