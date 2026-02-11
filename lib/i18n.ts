import ar from "@/locales/ar.json";
import en from "@/locales/en.json";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

const translations: Record<Locale, typeof ar> = { ar, en };

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
