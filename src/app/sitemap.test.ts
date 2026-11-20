import { describe, expect, it } from "vitest";
import { allProjects } from "@/content/projects";
import sitemap from "./sitemap";

describe("localized sitemap", () => {
  it("includes every project route with Spanish and English alternates", () => {
    const pages = sitemap();
    for (const project of allProjects) {
      for (const locale of ["es", "en"] as const) {
        const path = `/${locale}/projects/${project.slug}/`;
        const page = pages.find(({ url }) => new URL(url).pathname === path);
        expect(page).toBeDefined();
        expect(page?.alternates?.languages).toMatchObject({
          es: expect.stringContaining(`/es/projects/${project.slug}/`),
          en: expect.stringContaining(`/en/projects/${project.slug}/`),
        });
      }
    }
  });
});
