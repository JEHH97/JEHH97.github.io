import Image from "next/image";
import { PublicProjectDemoLink } from "@/components/public-project-demo-link";
import type { PublicProject } from "@/content/projects";
import type { Dictionary, Locale } from "@/i18n";

export function PublicProjectDetail({ project, locale, dictionary }: { project: PublicProject; locale: Locale; dictionary: Dictionary }) {
  const copy = dictionary.publicProject;

  return (
    <>
      <div className="public-detail-actions">
        <a className="button button-primary" href={project.repoUrl} target="_blank" rel="noreferrer">{copy.viewCode} ↗</a>
        <PublicProjectDemoLink project={project} locale={locale} dictionary={dictionary} variant="detail" />
      </div>
      {project.image ? <figure className="detail-screenshot"><Image src={project.image.src} alt={project.image.alt[locale]} width={project.image.width} height={project.image.height} sizes="(max-width: 760px) 100vw, 900px" /><figcaption>{project.image.kind === "diagram" ? copy.architecture : copy.image}: {project.image.alt[locale]}</figcaption></figure> : null}
      <div className="detail-grid">
        <div className="detail-content">
          <section><h2>{copy.problem}</h2><p>{project.detail.problem[locale]}</p></section>
          <section><h2>{copy.features}</h2><ul className="bullet-list">{project.detail.features[locale].map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          <section>
            <h2>{copy.architecture}</h2>
            <ol className="architecture-list">
              {project.detail.architecture.map((step) => <li key={step[locale].title}><strong>{step[locale].title}</strong><span>{step[locale].description}</span></li>)}
            </ol>
          </section>
          <section><h2>{copy.decisions}</h2><ul className="bullet-list">{project.detail.decisions[locale].map((decision) => <li key={decision}>{decision}</li>)}</ul></section>
          <section><h2>{copy.quality}</h2><ul className="bullet-list">{project.detail.quality[locale].map((fact) => <li key={fact}>{fact}</li>)}</ul></section>
          <section><h2>{copy.localRun}</h2><pre className="run-command"><code>{project.detail.localRun[locale]}</code></pre></section>
        </div>
        <aside className="detail-aside"><h2>{dictionary.common.stack}</h2><ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></aside>
      </div>
    </>
  );
}
