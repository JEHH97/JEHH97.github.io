import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeScript } from "@/components/theme-script";
import { isLocale } from "@/i18n";
import { site } from "@/config/site";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = locale === "es" ? `${site.shortName} | Desarrollador Full-Stack` : `${site.shortName} | Full-Stack Developer`;
  const description = locale === "es" ? "Portafolio de ingeniería de software, servicios en la nube, visión computacional e IA." : "Software engineering portfolio covering cloud services, computer vision, and AI.";
  return {
    title,
    description,
    alternates: { canonical: `${site.siteUrl}/${locale}/`, languages: { es: `${site.siteUrl}/es/`, en: `${site.siteUrl}/en/`, "x-default": `${site.siteUrl}/en/` } },
    openGraph: { type: "website", url: `${site.siteUrl}/${locale}/`, title, description, siteName: site.shortName, locale: locale === "es" ? "es_MX" : "en_US" },
    twitter: { card: "summary", title, description },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale} className={GeistSans.variable} suppressHydrationWarning><body><ThemeScript />{children}</body></html>;
}
