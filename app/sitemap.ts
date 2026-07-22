import type { MetadataRoute } from "next";
import { getAllTil } from "@/lib/til";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllTil();
  const latest = posts[0]?.date;

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/til`,
      lastModified: latest ? new Date(latest) : new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${site.url}/til/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
