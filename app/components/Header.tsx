'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getTikTokApplicationPayload, trackEvent } from '../lib/tracking';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const phoneNumber = 'tel:+18888071855';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#001b3d]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ls-fc-logo.png"
              alt="LawSolutionsFC servicio de conexión con abogados de lesiones personales"
              width={180}
              height={180}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white/80 hover:text-[#f8b146] transition-colors font-medium"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-[#f8b146] transition-colors font-medium"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-[#f8b146] transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-[#f8b146] transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Side: Language Toggle + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-[#f8b146] text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'es'
                    ? 'bg-[#f8b146] text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            {/* CTA Button */}
            <a
              href={phoneNumber}
              onClick={() =>
                trackEvent(
                  'call_button_clicked',
                  { location: 'header_desktop_cta', ...getTikTokApplicationPayload('Header Call Button') },
                  { tikTokEventName: 'ClickButton' }
                )
              }
              className="inline-flex items-center px-4 py-2 bg-[#f8b146] text-white font-medium rounded hover:bg-[#e09f3a] transition-colors animate-pulse"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.nav.callNow}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#f8b146]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#001b3d] border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-white/80 hover:text-[#f8b146] transition-colors font-medium px-2"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-white/80 hover:text-[#f8b146] transition-colors font-medium px-2"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-white/80 hover:text-[#f8b146] transition-colors font-medium px-2"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-white/80 hover:text-[#f8b146] transition-colors font-medium px-2"
              >
                {t.nav.contact}
              </button>

              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-2 px-2 pt-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-[#f8b146] text-white'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === 'es'
                      ? 'bg-[#f8b146] text-white'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Mobile CTA */}
              <a
                href={phoneNumber}
                onClick={() =>
                  trackEvent(
                    'call_button_clicked',
                    { location: 'header_mobile_cta', ...getTikTokApplicationPayload('Header Mobile Call Button') },
                    { tikTokEventName: 'ClickButton' }
                  )
                }
                className="inline-flex items-center justify-center px-4 py-3 bg-[#f8b146] text-white font-medium rounded hover:bg-[#e09f3a] transition-colors mx-2 animate-pulse"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t.nav.callNow}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
