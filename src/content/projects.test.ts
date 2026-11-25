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

  it("validates demo links: HTTPS URL with a demo kind when set, empty otherwise", () => {
    for (const project of publicProjects) {
      expect(["live", "api", "npm"]).toContain(project.demoKind);
      if (project.demoUrl) {
        expect(new URL(project.demoUrl).protocol).toBe("https:");
        expect(project.demoUrl.startsWith("https://")).toBe(true);
        expect(project.demoKind).toBeTruthy();
      }
    }
    // npm package only: no hosted demo URL yet.
    expect(publicProjects.find((project) => project.slug === "mcp-mx-economy")?.demoUrl).toBe("");
  });

  it("assigns the approved demo type and cold-start note to each project", () => {
    expect(Object.fromEntries(publicProjects.map(({ slug, demoKind }) => [slug, demoKind]))).toEqual({
      flowboard: "live",
      "mcp-mx-economy": "npm",
      "docscan-api": "api",
      "docscan-mobile": "live",
      "checkout-service": "api",
      "go-shortener": "live",
    });

    const coldStartProjects = publicProjects.filter((project) => project.demoNote);
    expect(coldStartProjects.map(({ slug }) => slug)).toEqual(["flowboard", "docscan-api", "checkout-service", "go-shortener"]);
    for (const project of coldStartProjects) {
      expect(project.demoNote).toEqual({ es: "Puede tardar ~50 s en despertar", en: "May take ~50 s to wake up" });
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
