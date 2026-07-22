"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { site, whatsappLink } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24">
      <div className="glow absolute -bottom-52 start-1/2 size-[38rem] -translate-x-1/2 rounded-full" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-32 text-center">
        <Reveal>
          <p className="font-display text-sm text-accent">04 — צור קשר</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] leading-tight">
            יש לכם רעיון או כאב?
            <span className="text-accent"> בואו נדבר.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted">
            שיחה ראשונה תמיד בחינם וללא התחייבות. הכי קל בוואטסאפ:
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-medium text-ink"
          >
            <WhatsAppIcon className="size-6" />
            שלחו לי הודעה בוואטסאפ
          </motion.a>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="grid size-12 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
            >
              <LinkedInIcon className="size-5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="grid size-12 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="אימייל"
              title={site.email}
              className="grid size-12 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
            >
              <MailIcon className="size-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
