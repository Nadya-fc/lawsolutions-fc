'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, FileText, Shield, Clock, Lock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();
  const phoneNumber = 'tel:+13238804017';

  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#001b3d]/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* SEO Hidden Location Tags */}
          <div className="sr-only">
            <span>Abogado de lesiones personales Los Angeles</span>
            <span>Abogado de accidentes Orange County</span>
            <span>Abogado de accidentes San Diego</span>
            <span>Abogado de lesiones Riverside</span>
            <span>Abogado de accidentes San Bernardino</span>
            <span>Abogado de accidentes Ventura</span>
            <span>Abogado hispano California</span>
            <span>Abogado latino Los Angeles</span>
            <span>Abogado latino Orange County</span>
            <span>Abogado latino San Diego</span>
            <span>Abogado latino Riverside</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t.hero.subheadline}
          </p>

          {/* Location Pills for SEO */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Los Angeles</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Orange County</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">San Diego</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Riverside</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">San Bernardino</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Ventura</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Santa Ana</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Anaheim</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Long Beach</span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">Ontario</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={phoneNumber}
              className="inline-flex items-center px-8 py-4 bg-[#f8b146] text-white font-semibold rounded hover:bg-[#e09f3a] transition-colors animate-pulse"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.hero.ctaCall}
            </a>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center px-8 py-4 bg-white text-[#001b3d] font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              {t.hero.ctaForm}
            </button>
          </div>

          {/* Trust Cues */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center text-white/80">
              <Shield className="w-5 h-5 text-[#f8b146] mr-2" />
              <span className="text-sm md:text-base">{t.hero.trustNoFees}</span>
            </div>
            <div className="flex items-center text-white/80">
              <Clock className="w-5 h-5 text-[#f8b146] mr-2" />
              <span className="text-sm md:text-base">{t.hero.trustFastResponse}</span>
            </div>
            <div className="flex items-center text-white/80">
              <Lock className="w-5 h-5 text-[#f8b146] mr-2" />
              <span className="text-sm md:text-base">{t.hero.trustConfidential}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
