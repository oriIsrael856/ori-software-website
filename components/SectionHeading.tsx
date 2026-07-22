import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-sm text-accent">{index}</span>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">{title}</h2>
      </div>
      {subtitle && <p className="mt-3 max-w-lg text-muted">{subtitle}</p>}
    </Reveal>
  );
}
