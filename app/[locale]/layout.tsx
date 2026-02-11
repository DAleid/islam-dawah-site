import { Locale, getTranslations, getDirection, locales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☪</text></svg>" />
      </head>
      <body className={`${locale === "ar" ? "font-arabic" : "font-sans"} min-h-screen flex flex-col`}>
        <Navbar locale={locale} translations={t} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} translations={t} />
      </body>
    </html>
  );
}
