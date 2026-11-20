import { describe, expect, it } from "vitest";
import { publicProjects } from "./projects";

describe("public open-source projects", () => {
  it("lists the six projects in the approved order", () => {
    expect(publicProjects.map((project) => project.slug)).toEqual([
      "flowboard",
      "mcp-mx-economy",
      "docscan-api",
      "docscan-mobile",
      "checkout-service",
      "go-shortener",
    ]);
  });

  it("has Spanish and English copy for every visible field", () => {
    for (const project of publicProjects) {
      for (const locale of ["es", "en"] as const) {
        expect(project.title[locale]).toBeTruthy();
        expect(project.description[locale]).toBeTruthy();
        expect(project.detail.problem[locale]).toBeTruthy();
        expect(project.detail.features[locale].length).toBeGreaterThan(0);
        expect(project.detail.architecture.length).toBeGreaterThan(0);
        expect(project.detail.decisions[locale].length).toBeGreaterThan(0);
        expect(project.detail.quality[locale].length).toBeGreaterThan(0);
        expect(project.detail.localRun[locale]).toBeTruthy();
        expect(project.image).toBeDefined();
        expect(project.image?.alt[locale]).toBeTruthy();
      }
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.repoUrl).toBe(`https://github.com/JEHH97/${project.slug}`);
    }
  });

  it("keeps demo links empty so the demo button stays hidden", () => {
    for (const project of publicProjects) {
      expect(project.demoUrl).toBe("");
    }
  });

  it("gives every image explicit dimensions", () => {
    for (const project of publicProjects) {
      expect(project.image).toBeDefined();
      expect(project.image?.width).toBeGreaterThan(0);
      expect(project.image?.height).toBeGreaterThan(0);
      expect(project.image?.src).toBe(`/projects/${project.slug}.webp`);
    }
  });
});
