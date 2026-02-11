"use client";

import Link from "next/link";
import { useState } from "react";
import { Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  locale: Locale;
  translations: {
    nav: {
      home: string;
      whatIsIslam: string;
      pillars: string;
      faq: string;
    };
    site: { title: string };
  };
}

export default function Navbar({ locale, translations: t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/what-is-islam`, label: t.nav.whatIsIslam },
    { href: `/${locale}/pillars`, label: t.nav.pillars },
    { href: `/${locale}/faq`, label: t.nav.faq },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-primary-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-primary-700 font-bold text-xl"
          >
            <span className="text-2xl">☪</span>
            <span className="font-arabic">{t.site.title}</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-700 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
