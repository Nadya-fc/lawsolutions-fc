'use client';

import React from 'react';
import {
  CheckCircle2,
  Clock,
  FileCheck2,
  Headphones,
  Languages,
  Scale,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from 'lucide-react';
import { getTikTokApplicationPayload, trackEvent } from '../lib/tracking';

const phoneNumber = 'tel:+18584399983';

export function TrustBar() {
  const items = [
    'Consulta Gratuita',
    'Atención En Español',
    'Disponible 24/7',
    'Evaluación Rápida Del Caso',
    'Sin Honorarios Por Adelantado*',
  ];

  return (
    <section className="bg-[#001b3d] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#f8b146]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-white/60">*Aplican términos y condiciones.</p>
      </div>
    </section>
  );
}

export function CredibilitySection() {
  const cards = [
    {
      icon: FileCheck2,
      title: 'Consulta Gratuita',
      description: 'Hable con un especialista sin costo inicial.',
    },
    {
      icon: Languages,
      title: 'Atención En Español',
      description: 'Comunicación clara durante todo el proceso.',
    },
    {
      icon: Clock,
      title: 'Respuesta Rápida',
      description: 'Revisamos solicitudes rápidamente.',
    },
    {
      icon: ShieldCheck,
      title: 'Sin Honorarios Por Adelantado',
      description: 'No paga si no hay recuperación según los términos del caso.',
    },
    {
      icon: Headphones,
      title: 'Disponible 24/7',
      description: 'Solicite ayuda cuando la necesite.',
    },
    {
      icon: Scale,
      title: 'Red De Abogados Experimentados',
      description: 'Conectamos personas con abogados que pueden evaluar su caso.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d] mb-4">
            ¿Por Qué Elegir Law Solutions FC?
          </h2>
          <div className="w-20 h-1 bg-[#f8b146] mx-auto" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#001b3d]">
                <card.icon className="h-6 w-6 text-[#f8b146]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#001b3d] mb-2">{card.title}</h3>
              <p className="text-[#444444] leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UrgencySection() {
  const items = [
    'Consulta gratuita',
    'Atención en español',
    'Disponible 24/7',
    'Sin pagos por adelantado',
    'Evaluación rápida del caso',
  ];

  const scrollToQuiz = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-[#001b3d] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f8b146]">
              <Sparkles className="h-4 w-4" />
              Evaluación gratuita
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              No Hable Con La Aseguradora Antes De Conocer Sus Derechos
            </h2>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5">
            <ul className="space-y-3 mb-5">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#f8b146]" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={scrollToQuiz}
              className="inline-flex min-h-12 w-full items-center justify-center rounded bg-[#f8b146] px-6 py-3 font-bold text-[#001b3d] transition-colors hover:bg-[#e09f3a]"
            >
              Ver Si Califico
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QualificationChecklist() {
  const items = [
    'El accidente ocurrió en California',
    'Resultó lesionado',
    'Recibió o planea recibir atención médica',
    'El accidente ocurrió recientemente',
  ];

  return (
    <div className="mb-8 rounded-lg border border-[#f8b146]/40 bg-[#fff8ed] p-5 md:p-6">
      <h3 className="mb-4 flex items-center gap-2 text-2xl font-serif font-bold text-[#001b3d]">
        <UserRoundCheck className="h-6 w-6 text-[#f8b146]" />
        Puede Calificar Si:
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2 text-[#001b3d]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-700" />
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileStickyCta() {
  const scrollToQuiz = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-[#001b3d] px-3 py-3 shadow-2xl [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={phoneNumber}
          onClick={() =>
            trackEvent(
              'call_button_clicked',
              { location: 'sticky_mobile_cta', ...getTikTokApplicationPayload('Mobile Call Button') },
              { tikTokEventName: 'ClickButton' }
            )
          }
          className="inline-flex min-h-12 items-center justify-center rounded bg-[#f8b146] px-3 py-3 text-center font-bold text-[#001b3d]"
        >
          Llamar Ahora
        </a>
        <button
          type="button"
          onClick={scrollToQuiz}
          className="inline-flex min-h-12 items-center justify-center rounded border border-white/25 bg-white px-3 py-3 text-center font-bold text-[#001b3d]"
        >
          Consulta Gratis
        </button>
      </div>
    </div>
  );
}
