import Link from "next/link";
import type { Locale, Dictionary } from "@/i18n";
import { site } from "@/config/site";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const nav = dictionary.nav;
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={`/${locale}/`} aria-label={`${site.shortName} — ${locale === "es" ? "inicio" : "home"}`}><span className="brand-mark" aria-hidden="true">JH</span><span>{site.shortName}</span></Link>
        <nav className="main-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          <a href={`/${locale}/#projects`}>{nav.projects}</a><a href={`/${locale}/#open-source`}>{nav.openSource}</a><a href={`/${locale}/#experience`}>{nav.experience}</a><a href={`/${locale}/#skills`}>{nav.skills}</a><a href={`/${locale}/#about`}>{nav.about}</a><a href={`/${locale}/#contact`}>{nav.contact}</a>
        </nav>
        <div className="header-tools"><LanguageSwitcher locale={locale} /><ThemeToggle labels={dictionary.common} /></div>
      </div>
    </header>
  );
}
