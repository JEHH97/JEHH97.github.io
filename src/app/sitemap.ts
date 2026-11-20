import type { MetadataRoute } from "next";
import { allProjects } from "@/content/projects";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ["es", "en"].map((locale) => ({ url: `${site.siteUrl}/${locale}/`, alternates: { languages: { es: `${site.siteUrl}/es/`, en: `${site.siteUrl}/en/` } } }));
  for (const project of allProjects) {
    pages.push(...(["es", "en"] as const).map((locale) => ({ url: `${site.siteUrl}/${locale}/projects/${project.slug}/`, alternates: { languages: { es: `${site.siteUrl}/es/projects/${project.slug}/`, en: `${site.siteUrl}/en/projects/${project.slug}/` } } })));
  }
  return pages;
}
