'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Home, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { MobileStickyCta } from '../components/HomeFunnelSections';
import { getTikTokApplicationPayload, trackEvent } from '../lib/tracking';

export default function GraciasPage() {
  useEffect(() => {
    trackEvent('thank_you_page_viewed', { page: '/gracias' });
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white pt-28 md:pt-32">
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-9 w-9 text-green-700" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl font-serif font-bold text-[#001b3d]">
              Hemos Recibido Su Solicitud
            </h1>
            <p className="mx-auto mb-7 max-w-2xl text-lg leading-relaxed text-[#444444]">
              Un especialista revisará su información y se pondrá en contacto con usted lo antes posible.
            </p>

            <a
              href="tel:+18888071855"
              onClick={() =>
                trackEvent(
                  'call_button_clicked',
                  { location: 'thank_you_primary_cta', ...getTikTokApplicationPayload('Thank You Phone Number') },
                  { tikTokEventName: 'ClickButton' }
                )
              }
              className="mb-7 inline-flex items-center justify-center text-3xl font-bold text-[#001b3d] underline-offset-4 hover:underline"
            >
              <Phone className="mr-2 h-7 w-7 text-[#f8b146]" />
              (888) 807-1855
            </a>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+18888071855"
                onClick={() =>
                  trackEvent(
                    'call_button_clicked',
                    { location: 'thank_you_call_button', ...getTikTokApplicationPayload('Thank You Call Button') },
                    { tikTokEventName: 'ClickButton' }
                  )
                }
                className="inline-flex min-h-12 items-center justify-center rounded bg-[#f8b146] px-6 py-3 font-bold text-[#001b3d] transition-colors hover:bg-[#e09f3a]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </a>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded border border-gray-300 px-6 py-3 font-bold text-[#001b3d] transition-colors hover:bg-gray-50"
              >
                <Home className="mr-2 h-5 w-5" />
                Volver Al Inicio
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h2 className="mb-5 text-center text-3xl font-serif font-bold text-[#001b3d]">
                ¿Qué Sigue?
              </h2>
              <ol className="space-y-4">
                {[
                  'Revisaremos su información.',
                  'Determinaremos si su caso califica.',
                  'Le ayudaremos a conectarse con un abogado.',
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-[#444444]">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#001b3d] font-bold text-[#f8b146]">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-lg">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCta />
      <CookieConsent />
    </>
  );
}
