import Image from "next/image";
import Link from "next/link";
import { PublicProjectDemoLink } from "@/components/public-project-demo-link";
import type { PublicProject } from "@/content/projects";
import type { Dictionary, Locale } from "@/i18n";

export function PublicProjectCard({ project, locale, dictionary }: { project: PublicProject; locale: Locale; dictionary: Dictionary }) {
  const text = dictionary.home;
  return <article className="other-card public-card">
    <div className="public-card-media">
      {project.image ? <Image className="public-card-image" src={project.image.src} alt={project.image.alt[locale]} width={project.image.width} height={project.image.height} sizes="(max-width: 640px) 100vw, 50vw" /> : <div className="public-card-placeholder" aria-hidden="true"><span>{"</>"}</span></div>}
    </div>
    <h3><Link href={`/${locale}/projects/${project.slug}/`}>{project.title[locale]}</Link></h3>
    <p>{project.description[locale]}</p>
    <ul className="tag-list" aria-label={dictionary.common.stack}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
    <div className="footer-links">
      <a href={project.repoUrl} target="_blank" rel="noreferrer">{text.repository} ↗</a>
      <PublicProjectDemoLink project={project} locale={locale} dictionary={dictionary} variant="card" />
      <Link href={`/${locale}/projects/${project.slug}/`}>{text.viewDetails} →</Link>
    </div>
  </article>;
}
