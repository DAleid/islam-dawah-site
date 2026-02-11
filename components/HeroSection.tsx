import Link from "next/link";
import { Locale } from "@/lib/i18n";

interface HeroSectionProps {
  locale: Locale;
  translations: {
    home: {
      heroVerse: string;
      heroVerseTranslation: string;
      heroTitle: string;
      heroSubtitle: string;
      exploreButton: string;
    };
  };
}

export default function HeroSection({ locale, translations: t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-800 via-primary-700 to-primary-600 text-white">
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="islamic-pattern w-full h-full" style={{ filter: "invert(1)" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
        {/* Bismillah */}
        <div className="mb-8">
          <p className="font-arabic text-3xl md:text-4xl text-gold-300 leading-relaxed">
            {t.home.heroVerse}
          </p>
          <p className="text-primary-200 text-sm mt-2 italic">
            {t.home.heroVerseTranslation}
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gold-500/50" />
          <span className="text-gold-400 text-2xl">✦</span>
          <div className="h-px w-16 bg-gold-500/50" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {t.home.heroTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.home.heroSubtitle}
        </p>

        {/* CTA Button */}
        <Link
          href={`/${locale}/what-is-islam`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
        >
          {t.home.exploreButton}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={locale === "ar" ? "M19 12H5M12 5l-7 7 7 7" : "M5 12h14M12 5l7 7-7 7"}
            />
          </svg>
        </Link>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
