"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;
  const otherLocale = locale === "es" ? "en" : "es";
  const href = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${otherLocale}`) || `/${otherLocale}/`;
  return <nav className="language-switcher" aria-label="Language"><a href={locale === "es" ? pathname : href} lang="es" aria-current={locale === "es" ? "page" : undefined}>ES</a><span aria-hidden="true">/</span><a href={locale === "en" ? pathname : href} lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a></nav>;
}
