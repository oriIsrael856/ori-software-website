"use client";

import { useState } from "react";
import { LinkedInIcon } from "@/components/icons";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={copy}
        className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent/60 hover:text-accent"
      >
        {copied ? "הועתק!" : "העתקת קישור"}
      </button>
      <button
        onClick={shareLinkedIn}
        aria-label="שיתוף בלינקדאין"
        className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
      >
        <LinkedInIcon className="size-4" />
      </button>
    </div>
  );
}
