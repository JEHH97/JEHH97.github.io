import Link from "next/link";
import type { CaseStudy, Locale } from "@/content/projects";
import type { Dictionary } from "@/i18n";

export function ProjectCard({ project, locale, dictionary, index = 0 }: { project: CaseStudy; locale: Locale; dictionary: Dictionary; index?: number }) {
  return <article className="project-card"><div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="card-arrow" aria-hidden="true">↗</span></div><h3><Link href={`/${locale}/projects/${project.slug}/`}>{project.title[locale]}</Link></h3><p>{project.summary[locale]}</p><ul className="tag-list" aria-label={dictionary.common.stack}>{project.stack.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}</ul><Link className="text-link" href={`/${locale}/projects/${project.slug}/`}>{dictionary.common.viewCase}<span aria-hidden="true"> →</span></Link></article>;
}
