import es from "./es";
import en from "./en";

export const dictionaries = { es, en } as const;
export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}
