import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { PublicProjectDetail } from "@/components/public-project-detail";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { allProjects, publicProjects, type Locale } from "@/content/projects";
import { projectStaticParams } from "@/content/route-data";
import { getDictionary, isLocale } from "@/i18n";
import { site } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectStaticParams;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  if (!isLocale(value)) return {};
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) return {};
  const locale: Locale = value;
  const title = project.title[locale];
  const description = "summary" in project ? project.summary[locale] : project.description[locale];
  const path = `/${locale}/projects/${slug}/`;
  return {
    title,
    description,
    alternates: { canonical: `${site.siteUrl}${path}`, languages: { es: `${site.siteUrl}/es/projects/${slug}/`, en: `${site.siteUrl}/en/projects/${slug}/`, "x-default": `${site.siteUrl}/en/projects/${slug}/` } },
    openGraph: { type: "article", url: `${site.siteUrl}${path}`, title, description, siteName: site.shortName, locale: locale === "es" ? "es_MX" : "en_US" },
    twitter: { card: "summary", title, description },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  if (!isLocale(value)) notFound();
  const locale = value;
  const dictionary = getDictionary(locale);
  const copy = dictionary.project;
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index < 0) notFound();
  const project = allProjects[index];
  const publicProject = "description" in project ? project : null;
  const caseStudy = "summary" in project ? project : null;
  const previousProject = allProjects[(index + allProjects.length - 1) % allProjects.length];
  const nextProject = allProjects[(index + 1) % allProjects.length];
  const isPublicProject = publicProject !== null;
  const caseStudyIndex = index - publicProjects.length;
  const backAnchor = isPublicProject ? "open-source" : "professional";
  const diagramLabels: readonly [string, string, string, string] = locale === "es"
    ? ["Entrada", "Procesamiento", "Servicios", "Resultado"]
    : ["Input", "Processing", "Services", "Output"];

  return <><a className="skip-link" href="#main">{dictionary.common.skip}</a><SiteHeader locale={locale} dictionary={dictionary} /><main id="main" className="section-wrap project-detail"><Link className="back-link" href={`/${locale}/#${backAnchor}`}>← {dictionary.common.back}</Link><header className="detail-header"><p className="section-kicker">{isPublicProject ? `${dictionary.publicProject.label} 0${index + 1} / 09` : `${locale === "es" ? "Caso de estudio" : "Case study"} 0${caseStudyIndex + 1} / 09`}</p><h1>{project.title[locale]}</h1><p>{"summary" in project ? project.summary[locale] : project.description[locale]}</p>{isPublicProject ? null : <p className="notice">{copy.notice}</p>}</header>{publicProject ? <PublicProjectDetail project={publicProject} locale={locale} dictionary={dictionary} /> : caseStudy ? <><div className="detail-grid"><div className="detail-content"><section><h2>{copy.problem}</h2><p>{caseStudy.context[locale]}</p></section><section><h2>{copy.role}</h2><p>{caseStudy.role[locale]}</p></section><section><h2>{copy.architecture}</h2><p>{caseStudy.architecture[locale]}</p><ArchitectureDiagram labels={diagramLabels} /></section><section><h2>{copy.decisions}</h2><ul className="bullet-list">{caseStudy.decisions[locale].map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>{copy.results}</h2><ul className="bullet-list">{caseStudy.highlights[locale].map((item) => <li key={item}>{item}</li>)}</ul></section></div><aside className="detail-aside"><h2>{dictionary.common.stack}</h2><ul className="tag-list">{caseStudy.stack.map((item) => <li key={item}>{item}</li>)}</ul></aside></div></> : null}<nav className="project-navigation" aria-label={locale === "es" ? "Navegación entre proyectos" : "Project navigation"}><Link href={`/${locale}/projects/${previousProject.slug}/`}>← {dictionary.common.previous}: {previousProject.title[locale]}</Link><Link href={`/${locale}/projects/${nextProject.slug}/`}>{dictionary.common.next}: {nextProject.title[locale]} →</Link></nav></main><SiteFooter locale={locale} dictionary={dictionary} /></>;
}
