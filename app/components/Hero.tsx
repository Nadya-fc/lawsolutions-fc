'use client';

import React from 'react';
import { Phone, FileText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { getTikTokApplicationPayload, trackEvent } from '../lib/tracking';

export default function Hero() {
  const phoneNumber = 'tel:+18584399983';

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-5" style={{ color: '#FFFFFF' }}>
            ¿Lesionado En Un Accidente?
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-white font-semibold mb-4 max-w-2xl mx-auto">
            Solicite Una Evaluación Gratuita De Su Caso.
          </p>
          <p className="text-base md:text-lg text-white/85 mb-7 max-w-2xl mx-auto leading-relaxed">
            Le ayudamos a conectarse con abogados de lesiones personales para evaluar su situación después de un accidente.
          </p>

          {/* Location Pills for SEO */}
          <div className="flex flex-wrap justify-center gap-2 mb-7">
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

          <div className="mb-7 flex flex-col items-center justify-center gap-3 text-white">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="h-5 w-5 text-[#f8b146]" />
              Atención en español.
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="h-5 w-5 text-[#f8b146]" />
              No paga si no gana.*
            </div>
            <a
              href={phoneNumber}
              onClick={() =>
                trackEvent(
                  'call_button_clicked',
                  { location: 'hero_phone_number', ...getTikTokApplicationPayload('Hero Phone Number') },
                  { tikTokEventName: 'ClickButton' }
                )
              }
              className="text-2xl font-bold text-[#f8b146] underline-offset-4 hover:underline"
            >
              (858) 439-9983
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8">
            <button
              onClick={scrollToForm}
              className="inline-flex min-h-14 items-center justify-center px-8 py-4 bg-[#f8b146] text-[#001b3d] font-bold rounded hover:bg-[#e09f3a] transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Comenzar Evaluación Gratuita
            </button>
            <a
              href={phoneNumber}
              onClick={() =>
                trackEvent(
                  'call_button_clicked',
                  { location: 'hero_secondary_cta', ...getTikTokApplicationPayload('Hero Call Button') },
                  { tikTokEventName: 'ClickButton' }
                )
              }
              className="inline-flex min-h-14 items-center justify-center px-8 py-4 bg-white text-[#001b3d] font-bold rounded hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
          </div>

          <p className="max-w-2xl mx-auto text-xs md:text-sm text-white/70">
            *La elegibilidad y los resultados dependen de las circunstancias específicas de cada caso.
          </p>
        </div>
      </div>
    </section>
  );
}
