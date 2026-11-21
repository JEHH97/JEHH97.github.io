import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";
import { LanguageSwitcher } from "./language-switcher";
import { ProjectCard } from "./project-card";
import { PublicProjectCard } from "./public-project-card";
import { PublicProjectDetail } from "./public-project-detail";
import { ProjectsShowcase } from "./projects-showcase";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { caseStudies, publicProjects, type PublicProject } from "@/content/projects";
import { getDictionary } from "@/i18n";
import { site } from "@/config/site";

vi.mock("next/link", () => ({ default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => <a href={href} {...props}>{children}</a> }));
vi.mock("next/navigation", () => ({ usePathname: () => "/es/projects/vision-obstruction-analysis/" }));

describe("portfolio components", () => {
  const withDemo = (kind: NonNullable<PublicProject["demoKind"]>): PublicProject => ({
    ...publicProjects[0],
    demoUrl: "https://demo.example.test",
    demoKind: kind,
    demoNote: { es: "Puede tardar ~50 s en despertar", en: "May take ~50 s to wake up" },
  });

  it("renders the localized hero and primary actions", () => {
    render(<Hero locale="es" dictionary={getDictionary("es")} />);
    expect(screen.getByRole("heading", { level: 1, name: /Full-Stack Developer/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver proyectos/ })).toHaveAttribute("href", "/es/#projects");
  });

  it("keeps the active case study when switching language", () => {
    render(<LanguageSwitcher locale="es" />);
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute("href", "/en/projects/vision-obstruction-analysis/");
  });

  it("renders a case study card with title and stack", () => {
    render(<ProjectCard project={caseStudies[0]} locale="en" dictionary={getDictionary("en")} />);
    expect(screen.getByRole("heading", { name: caseStudies[0].title.en })).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
  });

  it("renders an open-source card with GitHub link and no demo link when demoUrl is empty", () => {
    const project = publicProjects[0];
    render(<PublicProjectCard project={project} locale="es" dictionary={getDictionary("es")} />);
    expect(screen.getByRole("heading", { name: project.title.es })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", project.repoUrl);
    expect(screen.queryByRole("link", { name: /Demo/ })).not.toBeInTheDocument();
    expect(screen.getByRole("img", { name: project.image?.alt.es })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver detalles/ })).toHaveAttribute("href", "/es/projects/flowboard/");
  });

  it.each([
    ["es", "live", "Demo en vivo"],
    ["es", "api", "Documentación de la API"],
    ["es", "npm", "npm"],
    ["en", "live", "Live demo"],
    ["en", "api", "API docs"],
    ["en", "npm", "npm"],
  ] as const)("shows the %s %s demo label, note, and safe external link in card and detail", (locale, kind, label) => {
    const project = withDemo(kind);
    const dictionary = getDictionary(locale);
    const note = project.demoNote![locale];
    const assertDemoLink = () => {
      const link = screen.getByRole("link", { name: `${label} ↗` });
      expect(link).toHaveAttribute("href", project.demoUrl);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
      expect(link).toHaveAttribute("aria-describedby", `demo-note-${project.slug}-${locale}`);
      expect(screen.getByText(note)).toBeVisible();
    };

    const card = render(<PublicProjectCard project={project} locale={locale} dictionary={dictionary} />);
    assertDemoLink();
    card.unmount();

    render(<PublicProjectDetail project={project} locale={locale} dictionary={dictionary} />);
    assertDemoLink();
  });

  it("links the compact navigation to the open-source subsection", () => {
    render(<SiteHeader locale="es" dictionary={getDictionary("es")} />);
    expect(screen.getByRole("link", { name: "Open source" })).toHaveAttribute("href", "/es/#open-source");
  });

  it("places the open-source subsection before professional projects", () => {
    const { container } = render(<ProjectsShowcase locale="en" dictionary={getDictionary("en")} />);
    const openSource = container.querySelector("#open-source");
    const professional = container.querySelector("#professional");
    expect(openSource).toBeInTheDocument();
    expect(professional).toBeInTheDocument();
    expect(openSource!.compareDocumentPosition(professional!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("renders the GitHub code action and hides an empty demo action on detail pages", () => {
    const project = publicProjects[0];
    render(<PublicProjectDetail project={project} locale="en" dictionary={getDictionary("en")} />);
    expect(screen.getByRole("link", { name: /View code on GitHub/ })).toHaveAttribute("href", project.repoUrl);
    expect(screen.queryByRole("link", { name: /View demo/ })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How to run locally" })).toBeInTheDocument();
  });

  it("renders architecture art for a project without a captured screenshot", () => {
    const project = publicProjects.find((item) => item.image?.kind === "diagram");
    expect(project).toBeDefined();
    render(<PublicProjectCard project={project!} locale="en" dictionary={getDictionary("en")} />);
    expect(screen.getByRole("img", { name: project!.image?.alt.en })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", project!.repoUrl);
  });

  it("does not render a LinkedIn link when it is not configured", () => {
    expect(site.linkedin).toBe("");
    render(<SiteFooter locale="en" dictionary={getDictionary("en")} />);
    expect(screen.queryByRole("link", { name: "LinkedIn" })).not.toBeInTheDocument();
  });
});
