import { Locale, getTranslations } from "@/lib/i18n";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);

  const cards = [
    {
      href: `/${params.locale}/what-is-islam`,
      title: t.home.cardIslam,
      desc: t.home.cardIslamDesc,
      icon: "📖",
      color: "from-emerald-500 to-green-600",
    },
    {
      href: `/${params.locale}/pillars`,
      title: t.home.cardPillars,
      desc: t.home.cardPillarsDesc,
      icon: "🕌",
      color: "from-amber-500 to-yellow-600",
    },
    {
      href: `/${params.locale}/faq`,
      title: t.home.cardFaq,
      desc: t.home.cardFaqDesc,
      icon: "❓",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <>
      <HeroSection locale={params.locale} translations={t} />

      {/* Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="card-hover group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-primary-50/50 islamic-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-500/50" />
            <span className="text-gold-500 text-xl">✦</span>
            <div className="h-px w-12 bg-gold-500/50" />
          </div>
          <p className="font-arabic text-2xl md:text-3xl text-primary-800 leading-relaxed mb-4">
            {t.home.quote}
          </p>
          <p className="text-gray-500 italic">{t.home.quoteTranslation}</p>
        </div>
      </section>
    </>
  );
}
