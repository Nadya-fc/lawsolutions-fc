'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  const text = {
    es: {
      title: 'Aviso de Cookies',
      message:
        'Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puede aceptar todas las cookies o elegir solo las necesarias para el funcionamiento del sitio.',
      acceptAll: 'Aceptar Todas',
      necessaryOnly: 'Solo Necesarias',
      learnMore: 'Más información en nuestra',
      privacyPolicy: 'Política de Privacidad',
    },
    en: {
      title: 'Cookie Notice',
      message:
        'We use cookies to improve your experience on our website, analyze traffic, and personalize content. You can accept all cookies or choose only the ones necessary for the site to function.',
      acceptAll: 'Accept All',
      necessaryOnly: 'Necessary Only',
      learnMore: 'Learn more in our',
      privacyPolicy: 'Privacy Policy',
    },
  };

  const t = text[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200 p-5 md:p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="hidden md:flex w-10 h-10 bg-[#001b3d] rounded-full items-center justify-center flex-shrink-0 mt-1">
            <Cookie className="w-5 h-5 text-[#f8b146]" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-[#001b3d] flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#f8b146] md:hidden" />
                {t.title}
              </h3>
              <button
                onClick={handleNecessaryOnly}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-1">
              {t.message}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              {t.learnMore}{' '}
              <a
                href="/privacy-policy"
                className="text-[#f8b146] underline hover:text-[#001b3d] transition-colors"
              >
                {t.privacyPolicy}
              </a>
              .
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-[#f8b146] text-white font-semibold rounded hover:bg-[#e09f3a] transition-colors text-sm"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={handleNecessaryOnly}
                className="px-6 py-2.5 bg-transparent border border-[#001b3d] text-[#001b3d] font-semibold rounded hover:bg-[#001b3d] hover:text-white transition-colors text-sm"
              >
                {t.necessaryOnly}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
