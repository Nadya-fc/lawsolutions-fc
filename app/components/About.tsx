'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Info } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-200">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-[#001b3d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-6 h-6 text-[#f8b146]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d]">
              {t.about.title}
            </h2>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-[#f8b146] mx-auto mb-8" />

          {/* Description */}
          <p className="text-lg text-[#444444] leading-relaxed text-center max-w-2xl mx-auto">
            {t.about.description}
          </p>

          {/* Disclaimer Box */}
          <div className="mt-10 p-6 bg-[#001b3d]/5 rounded-lg border-l-4 border-[#f8b146]">
            <p className="text-sm text-[#444444] leading-relaxed">
              <strong className="text-[#001b3d]">{language === 'es' ? 'Aviso Importante:' : 'Important Notice:'}</strong>{' '}
              {language === 'es'
                ? 'LawSolutionsFC es un servicio de marketing jurídico y gestión de clientes. No somos un despacho de abogados y nuestros empleados no son abogados. No proporcionamos asesoramiento jurídico. Toda la información proporcionada en este sitio web tiene únicamente fines informativos y no constituye asesoramiento jurídico. Al utilizar nuestros servicios, usted reconoce que cualquier relación abogado-cliente se establecerá exclusivamente entre usted y el abogado independiente con el que le pongamos en contacto.'
                : 'LawSolutionsFC is a legal marketing and intake service. We are not a law firm, and our employees are not attorneys. We do not provide legal advice. All information provided on this website is for informational purposes only and does not constitute legal advice. By using our service, you acknowledge that any attorney-client relationship will be formed only between you and the independent attorney we connect you with.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
