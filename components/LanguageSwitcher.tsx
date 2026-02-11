"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = locale === "ar" ? "en" : "ar";
  const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  return (
    <Link
      href={newPath}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-200 text-primary-700 hover:bg-primary-50 transition-colors text-sm font-medium"
    >
      <span className="text-base">{targetLocale === "ar" ? "🇸🇦" : "🇬🇧"}</span>
      <span>{targetLocale === "ar" ? "العربية" : "English"}</span>
    </Link>
  );
}
