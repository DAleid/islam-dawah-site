import { Locale, getTranslations } from "@/lib/i18n";
import FaqAccordion from "@/components/FaqAccordion";

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            {t.faq.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold-500/50" />
            <span className="text-gold-500 text-xl">✦</span>
            <div className="h-px w-16 bg-gold-500/50" />
          </div>
          <p className="text-lg text-gray-600">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <FaqAccordion questions={t.faq.questions} />

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-primary-50 rounded-2xl p-8">
          <p className="font-arabic text-xl text-primary-700 mb-2">
            {params.locale === "ar"
              ? "هل لديك سؤال آخر؟ لا تتردد في البحث والتعلم"
              : "Have another question? Don't hesitate to search and learn"}
          </p>
          <p className="text-gray-500">
            {params.locale === "ar"
              ? "«وَقُل رَّبِّ زِدْنِي عِلْمًا» - سورة طه: 114"
              : '"And say: My Lord, increase me in knowledge" - Quran 20:114'}
          </p>
        </div>
      </div>
    </div>
  );
}
