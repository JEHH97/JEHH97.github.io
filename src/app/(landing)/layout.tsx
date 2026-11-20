import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { ThemeScript } from "@/components/theme-script";
import { site } from "@/config/site";

export const metadata = { metadataBase: new URL(site.siteUrl), title: site.shortName };

export default function LandingLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className={GeistSans.variable} suppressHydrationWarning><body><ThemeScript />{children}</body></html>;
}
