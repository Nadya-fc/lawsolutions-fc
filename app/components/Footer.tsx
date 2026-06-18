'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getTikTokApplicationPayload, trackEvent } from '../lib/tracking';

export default function Footer() {
  const { t } = useLanguage();
  const phoneNumber = 'tel:+18584399983';

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
                  onClick={() =>
                    trackEvent(
                      'call_button_clicked',
                      { location: 'footer_primary_phone', ...getTikTokApplicationPayload('Footer Primary Phone') },
                      { tikTokEventName: 'ClickButton' }
                    )
                  }
                  className="flex items-center text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (858) 439-9983
                </a>
              </li>
              <li>
                <a
                  href="tel:+13238804017"
                  onClick={() =>
                    trackEvent(
                      'call_button_clicked',
                      { location: 'footer_secondary_phone', ...getTikTokApplicationPayload('Footer Secondary Phone') },
                      { tikTokEventName: 'ClickButton' }
                    )
                  }
                  className="flex items-center text-white/70 hover:text-[#f8b146] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (323) 880-4017
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

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white/90">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/LawSolutionsFC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f8b146] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lawsolutionsfc?igsh=YTZqdnlkaXI1c242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f8b146] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@lawsolutionsfc?_r=1&_t=ZS-95MLajuCCWN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f8b146] transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>{t.footer.copyright}</p>
            <p className="mt-2 md:mt-0">
              Designed by <a href="https://codevostudio.com" target="_blank" rel="noopener noreferrer" className="text-[#f8b146] hover:underline">CodevoStudio</a>
            </p>
            <p className="mt-2 md:mt-0">{t.footer.callRecording}</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
