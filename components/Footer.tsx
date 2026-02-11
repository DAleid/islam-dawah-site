import { Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  translations: {
    footer: {
      rights: string;
      message: string;
      source: string;
    };
    site: { title: string };
  };
}

export default function Footer({ locale, translations: t }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Dua / Prayer */}
        <div className="text-center mb-6">
          <p className="font-arabic text-gold-400 text-lg">{t.footer.message}</p>
        </div>

        <div className="border-t border-primary-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">☪</span>
            <span className="font-arabic font-bold">{t.site.title}</span>
          </div>

          <p className="text-primary-200 text-sm">{t.footer.source}</p>

          <p className="text-primary-300 text-sm">
            &copy; {year} {t.site.title} - {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
