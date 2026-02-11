import { Locale, getTranslations } from "@/lib/i18n";
import PillarCard from "@/components/PillarCard";

export default function PillarsPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);

  const pillars = [
    {
      ...t.pillars.shahada,
      icon: "☝️",
      arabic: t.pillars.shahada.arabic,
    },
    {
      ...t.pillars.salah,
      icon: "🤲",
    },
    {
      ...t.pillars.zakat,
      icon: "💰",
    },
    {
      ...t.pillars.sawm,
      icon: "🌙",
    },
    {
      ...t.pillars.hajj,
      icon: "🕋",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            {t.pillars.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold-500/50" />
            <span className="text-gold-500 text-xl">✦</span>
            <div className="h-px w-16 bg-gold-500/50" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-5">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              number={index + 1}
              title={pillar.title}
              description={pillar.description}
              arabic={"arabic" in pillar ? pillar.arabic : undefined}
              icon={pillar.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
