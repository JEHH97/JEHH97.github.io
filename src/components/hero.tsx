import Link from "next/link";
import type { Locale, Dictionary } from "@/i18n";
import { site } from "@/config/site";

export function Hero({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const copy = dictionary.home;
  return <section className="hero section-wrap" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" aria-hidden="true" />{copy.eyebrow}</p><h1 id="hero-title">{copy.title}</h1><p className="hero-tagline">{copy.tagline}</p><p className="hero-location">{dictionary.common.location}</p><div className="hero-actions"><Link className="button button-primary" href={`/${locale}/#projects`}>{copy.viewProjects}<span aria-hidden="true"> ↓</span></Link><a className="button button-secondary" href={site.cv[locale]} download>{dictionary.common.cv}<span aria-hidden="true"> ↓</span></a><Link className="button button-quiet" href={`/${locale}/#contact`}>{copy.contact}<span aria-hidden="true"> ↗</span></Link></div></div><div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-monogram">JH<span>.</span></div><span className="hero-chip chip-code">&lt;/&gt; TypeScript</span><span className="hero-chip chip-cloud">Cloud + AI</span><span className="hero-chip chip-python">Python</span></div></section>;
}
