import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { otherProjects } from "@/content/projects";
import { experience, education } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { getDictionary, isLocale } from "@/i18n";
import { site } from "@/config/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value;
  const dictionary = getDictionary(locale);
  const text = dictionary.home;

  return <><a className="skip-link" href="#main">{dictionary.common.skip}</a><SiteHeader locale={locale} dictionary={dictionary} /><main id="main"><Hero locale={locale} dictionary={dictionary} />
    <ProjectsShowcase locale={locale} dictionary={dictionary} />
    <section className="section" id="experience" aria-labelledby="experience-title"><div className="section-wrap"><div className="section-heading"><div><p className="section-kicker">{locale === "es" ? "Trayectoria" : "Career"}</p><h2 id="experience-title">{text.experienceTitle}</h2></div><p>{text.experienceLead}</p></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.employer}><div><p className="timeline-date">{item.date[locale]}</p>{item.location ? <p className="timeline-date">{item.location[locale]}</p> : null}</div><div><h3>{item.role[locale]}</h3><p className="timeline-employer">{item.employer}</p><ul className="bullet-list">{item.bullets[locale].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></div></section>
    <section className="section" id="skills" aria-labelledby="skills-title"><div className="section-wrap"><div className="section-heading"><div><p className="section-kicker">{locale === "es" ? "Caja de herramientas" : "Toolbox"}</p><h2 id="skills-title">{text.skillsTitle}</h2></div><p>{text.skillsLead}</p></div><div className="skill-grid">{skillGroups.map((group) => <article className="skill-group" key={group.id}><h3>{group.title[locale]}</h3><ul className="tag-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
    <section className="section" aria-labelledby="other-title"><div className="section-wrap"><div className="section-heading"><div><p className="section-kicker">{locale === "es" ? "Selección" : "Selected"}</p><h2 id="other-title">{text.otherTitle}</h2></div></div><div className="other-grid">{otherProjects.map((project) => <article className="other-card" key={project.title.en}><h3>{project.title[locale]}</h3><p>{project.description[locale]}</p><ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className="section" id="about" aria-labelledby="about-title"><div className="section-wrap about-grid"><div><p className="section-kicker">{locale === "es" ? "Perfil" : "Profile"}</p><h2 className="section-title" id="about-title">{text.aboutTitle}</h2><p className="about-copy">{text.about}</p></div><div><h2 className="section-title">{text.educationTitle}</h2><div className="education-card"><p><strong>{education.degree[locale]}</strong><br />{education.institution} · {education.date}</p><p>{education.certification[locale]}</p><p>{education.languages[locale]}</p></div></div></div></section>
    <section className="section" id="contact" aria-labelledby="contact-title"><div className="section-wrap"><div className="contact-panel"><div><p className="section-kicker">{locale === "es" ? "Contacto" : "Get in touch"}</p><h2 className="section-title" id="contact-title">{text.contactTitle}</h2><p>{text.contactLead}</p></div><div className="contact-links"><a href={`mailto:${site.email}`}>{text.email} ↗</a><a href={site.github} target="_blank" rel="noreferrer">{text.github} ↗</a>{site.linkedin ? <a href={site.linkedin} target="_blank" rel="noreferrer">{text.linkedin} ↗</a> : null}</div></div></div></section>
  </main><SiteFooter locale={locale} dictionary={dictionary} /></>;
}
