import { site } from "@/config/site";
import type { Locale, Dictionary } from "@/i18n";

export function SiteFooter({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const year = new Date().getFullYear();
  return <footer className="site-footer"><div className="footer-inner"><p>© {year} {site.shortName}. {dictionary.footer.rights}</p><p>{dictionary.footer.made}</p><div className="footer-links"><a href={site.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${site.email}`}>{site.email}</a>{site.linkedin ? <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> : null}<a href={site.cv[locale]} download>{dictionary.common.cv}</a></div></div></footer>;
}
