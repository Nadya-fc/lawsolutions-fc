'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const { t, language } = useLanguage();
  const phoneNumber = 'tel:+13238804017';

  return (
    <footer className="bg-[#001b3d] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/ls-fc-logo.png"
              alt="LawSolutionsFC Logo"
              width={180}
              height={1800}
              className="h-28 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t.about.description}
            </p>
            <div className="flex items-center text-[#f8b146] font-semibold">
              <span className="text-xs uppercase tracking-wider">
                {t.footer.attorneyAdvertising}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={phoneNumber}
                  className="flex items-center text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (323) 880-4017
                </a>
              </li>
              <li>
                <a
                  href="tel:+14245265039"
                  className="flex items-center text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (424) 526-5039
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.contactEmail}`}
                  className="flex items-center text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t.footer.contactEmail}
                </a>
              </li>
              <li className="flex items-start text-white/70">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Serving all of Southern California - Los Angeles, Orange County, San Diego, Riverside, San Bernardino, Ventura</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-white/60 leading-relaxed">
            <p>{t.footer.disclaimer}</p>
            <p>{t.footer.disclaimerEs}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>{t.footer.copyright}</p>
            <p className="mt-2 md:mt-0">{t.footer.callRecording}</p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#f8b146] p-4 z-50 animate-pulse">
        <a
          href={phoneNumber}
          className="flex items-center justify-center text-white font-semibold"
        >
          <Phone className="w-5 h-5 mr-2" />
          {t.nav.callNow}
        </a>
      </div>
    </footer>
  );
}
