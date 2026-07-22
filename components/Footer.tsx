import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.brand} · {site.role}
        </p>
        <p className="text-xs">נבנה מאפס. בלי תבניות.</p>
      </div>
    </footer>
  );
}
