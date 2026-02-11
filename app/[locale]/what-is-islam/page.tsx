import { Locale, getTranslations } from "@/lib/i18n";

export default function WhatIsIslamPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);

  const sections = [
    {
      icon: "💡",
      title: t.whatIsIslam.meaningTitle,
      content: t.whatIsIslam.meaningText,
    },
    {
      icon: "🌟",
      title: t.whatIsIslam.godTitle,
      content: t.whatIsIslam.godText,
      verse: t.whatIsIslam.godVerse,
      verseSource: t.whatIsIslam.godVerseSource,
    },
    {
      icon: "🕊️",
      title: t.whatIsIslam.prophetTitle,
      content: t.whatIsIslam.prophetText,
    },
    {
      icon: "📖",
      title: t.whatIsIslam.quranTitle,
      content: t.whatIsIslam.quranText,
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            {t.whatIsIslam.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold-500/50" />
            <span className="text-gold-500 text-xl">✦</span>
            <div className="h-px w-16 bg-gold-500/50" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.whatIsIslam.intro}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-primary-800">{section.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>

              {section.verse && (
                <div className="mt-6 bg-primary-50/70 rounded-xl p-6 text-center border border-primary-100">
                  <p className="font-arabic text-xl md:text-2xl text-primary-700 leading-loose mb-2">
                    {section.verse}
                  </p>
                  <p className="text-gold-600 text-sm font-medium">{section.verseSource}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-10 bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.whatIsIslam.valuesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.whatIsIslam.values.map((value: string, index: number) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                <span className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-primary-50">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
