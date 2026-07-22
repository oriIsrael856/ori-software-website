import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TilContent from "@/components/til/TilContent";
import ShareButtons from "@/components/til/ShareButtons";
import { getAllTil, getTil, formatHebDate, linkConcepts } from "@/lib/til";
import { site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return getAllTil().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getTil(slug);
  if (!post) return {};
  return {
    title: `${post.title} — חידוש יומי | ${site.brandShort}`,
    description: `מה למדתי ב-${formatHebDate(post.date)}: ${post.title}`,
  };
}

export default async function TilPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getTil(slug);
  if (!post) notFound();

  return (
    <main>
      <Navbar />

      <article className="relative overflow-hidden pt-32 pb-24">
        <div className="glow absolute -top-40 start-1/2 size-[32rem] -translate-x-1/2 rounded-full" aria-hidden />

        <div className="relative mx-auto max-w-3xl px-5">
          <Reveal>
            <Link href="/til" className="link-underline text-sm text-muted">
              → כל החידושים
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
              <time>{formatHebDate(post.date)}</time>
              {post.source && (
                <>
                  <span className="text-line">|</span>
                  <span>{post.source}</span>
                </>
              )}
            </div>

            <h1 className="mt-3 font-display text-[clamp(1.9rem,5vw,3.2rem)] leading-tight">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  dir="ltr"
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <TilContent>{linkConcepts(post.content, post.slug)}</TilContent>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <ShareButtons />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                רוצים לבנות משהו יחד? דברו איתי
              </a>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </main>
  );
}
