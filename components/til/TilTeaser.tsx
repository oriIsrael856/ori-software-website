import Link from "next/link";
import { getAllTil, isToday } from "@/lib/til";

/** פס דק מתחת להירו שמושך לעמוד החידוש היומי. */
export default function TilTeaser() {
  const [latest] = getAllTil();
  if (!latest) return null;

  return (
    <div className="border-b border-line bg-surface/60">
      <Link
        href={`/til/${latest.slug}`}
        className="group mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 text-sm"
      >
        <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs text-accent">
          {isToday(latest.date) ? "החידוש של היום" : "חידוש יומי"}
        </span>
        <span className="truncate text-muted transition-colors group-hover:text-body">
          {latest.title}
        </span>
        <span className="ms-auto shrink-0 text-accent transition-transform group-hover:-translate-x-1">
          ←
        </span>
      </Link>
    </div>
  );
}
