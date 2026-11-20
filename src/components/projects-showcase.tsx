import type { Dictionary, Locale } from "@/i18n";
import { caseStudies, publicProjects } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { PublicProjectCard } from "./public-project-card";

export function ProjectsShowcase({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const text = dictionary.home;

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{text.sectionIntro}</p>
            <h2 id="projects-title">{text.projectsTitle}</h2>
          </div>
          <div className="project-summary">
            <p>{text.projectsLead}</p>
            <p className="project-counts">{text.projectCount}</p>
          </div>
        </div>

        <section className="project-subsection" id="open-source" aria-labelledby="open-source-title">
          <div className="subsection-heading">
            <p className="section-kicker">{locale === "es" ? "Código público" : "Public code"}</p>
            <h3 id="open-source-title">{text.publicTitle}</h3>
            <p>{text.publicLead}</p>
          </div>
          <div className="public-project-grid">
            {publicProjects.map((project) => <PublicProjectCard key={project.slug} project={project} locale={locale} dictionary={dictionary} />)}
          </div>
        </section>

        <section className="project-subsection" id="professional" aria-labelledby="professional-title">
          <div className="subsection-heading">
            <p className="section-kicker">{locale === "es" ? "Experiencia aplicada" : "Applied experience"}</p>
            <h3 id="professional-title">{text.professionalTitle}</h3>
            <p>{text.professionalLead}</p>
          </div>
          <div className="project-grid">
            {caseStudies.map((project, index) => <ProjectCard key={project.slug} project={project} locale={locale} dictionary={dictionary} index={index} />)}
          </div>
        </section>
      </div>
    </section>
  );
}
