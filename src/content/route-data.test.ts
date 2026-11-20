import { describe, expect, it } from "vitest";
import { allProjects, caseStudies, publicProjects } from "./projects";
import { projectStaticParams } from "./route-data";

describe("static project routes", () => {
  it("creates a localized route for all six open-source projects and three case studies", () => {
    expect(allProjects).toHaveLength(9);
    expect(projectStaticParams).toHaveLength(18);
    for (const locale of ["es", "en"] as const) {
      for (const project of allProjects) {
        expect(projectStaticParams).toContainEqual({ locale, slug: project.slug });
        expect(project.title[locale]).toBeTruthy();
        expect("summary" in project ? project.summary[locale] : project.description[locale]).toBeTruthy();
      }
    }
    expect(allProjects.slice(0, publicProjects.length)).toEqual(publicProjects);
    expect(allProjects.slice(publicProjects.length)).toEqual(caseStudies);
  });
});
