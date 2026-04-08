'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

const content = {
  en: {
    backToHome: 'Back to Home',
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: March 18, 2026',
    intro: 'Please read these Terms of Service ("Terms") carefully before using the LawSolutionsFC website and services. By accessing or using our service, you agree to be bound by these Terms.',
    sections: [
      {
        title: '1. Not a Law Firm',
        content: 'IMPORTANT DISCLAIMER: LawSolutionsFC is NOT a law firm. We are a legal marketing and intake service. Our employees, representatives, and agents are not attorneys and do not provide legal advice. No attorney-client relationship is formed by your use of this website or our services.',
        items: []
      },
      {
        title: '2. No Legal Advice',
        content: 'The information provided on this website is for general informational purposes only and does not constitute legal advice. Nothing on this website should be construed as creating an attorney-client relationship or as a substitute for consulting with a qualified attorney licensed in your jurisdiction.',
        items: []
      },
      {
        title: '3. Our Services',
        content: 'LawSolutionsFC provides the following services:',
        items: [
          'Legal intake and referral services connecting individuals with independent attorneys',
          'Initial case evaluation and information gathering',
          'Coordination between potential clients and attorneys'
        ]
      },
      {
        title: '4. No Guarantee of Results',
        content: 'We make no representations or warranties about the outcome of any legal matter. Past results do not guarantee future outcomes. Each case is unique and results depend on various factors specific to that case.',
        items: []
      },
      {
        title: '5. User Responsibilities',
        content: 'By using our services, you agree to:',
        items: [
          'Provide accurate and truthful information',
          'Be at least 18 years of age or have parental consent',
          'Not use our services for any unlawful purpose',
          'Not submit false or misleading information',
          'Comply with all applicable laws and regulations'
        ]
      },
      {
        title: '6. Consent to Contact',
        content: 'By submitting your information through our website, you expressly consent to be contacted by LawSolutionsFC and/or affiliated attorneys via telephone, email, text message, or other means at the contact information you provide. You understand that calls may be recorded for quality and training purposes.',
        items: []
      },
      {
        title: '7. Limitation of Liability',
        content: 'To the maximum extent permitted by law, LawSolutionsFC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:',
        items: [
          'Your access to or use of or inability to access or use our services',
          'Any conduct or content of any third party on our services',
          'Any content obtained from our services',
          'Unauthorized access, use, or alteration of your transmissions or content'
        ]
      },
      {
        title: '8. Third-Party Attorneys',
        content: 'Any attorneys we connect you with are independent professionals and not employees or agents of LawSolutionsFC. We do not endorse any specific attorney and are not responsible for the quality of legal services provided. You are responsible for selecting and evaluating any attorney you choose to work with.',
        items: []
      },
      {
        title: '9. Intellectual Property',
        content: 'All content on this website, including text, graphics, logos, images, and software, is the property of LawSolutionsFC or its content suppliers and is protected by United States and international copyright laws.',
        items: []
      },
      {
        title: '10. Governing Law',
        content: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action arising out of these Terms shall be filed in the state or federal courts located in California.',
        items: []
      },
      {
        title: '11. Changes to Terms',
        content: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
        items: []
      },
      {
        title: '12. Contact Information',
        content: 'If you have any questions about these Terms, please contact us:',
        items: [
          'Email: legal@lawsolutionsfc.com',
          'Address: Law Offices of Payman Zargari, 5959 Mission Gorge Rd STE 202, San Diego, CA 92120',
          'California State Bar License: 208451'
        ]
      }
    ],
    agreement: 'By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
    copyright: '© 2026 LawSolutionsFC. All rights reserved.'
  },
  es: {
    backToHome: 'Volver al Inicio',
    title: 'Terminos de Servicio',
    lastUpdated: 'Ultima Actualizacion: 18 de marzo de 2026',
    intro: 'Por favor lea estos Terminos de Servicio ("Terminos") cuidadosamente antes de usar el sitio web y servicios de LawSolutionsFC. Al acceder o usar nuestro servicio, usted acepta estar sujeto a estos Terminos.',
    sections: [
      {
        title: '1. No Somos un Bufete de Abogados',
        content: 'AVISO IMPORTANTE: LawSolutionsFC NO es un bufete de abogados. Somos un servicio de marketing legal y admision. Nuestros empleados, representantes y agentes no son abogados y no proporcionan asesoria legal. No se forma ninguna relacion abogado-cliente por el uso de este sitio web o nuestros servicios.',
        items: []
      },
      {
        title: '2. No Asesoria Legal',
        content: 'La informacion proporcionada en este sitio web es solo para fines informativos generales y no constituye asesoria legal. Nada en este sitio web debe interpretarse como creando una relacion abogado-cliente o como sustituto de consultar con un abogado calificado licenciado en su jurisdiccion.',
        items: []
      },
      {
        title: '3. Nuestros Servicios',
        content: 'LawSolutionsFC proporciona los siguientes servicios:',
        items: [
          'Servicios de admision legal y referencia conectando individuos con abogados independientes',
          'Evaluacion inicial de casos y recopilacion de informacion',
          'Coordinacion entre clientes potenciales y abogados'
        ]
      },
      {
        title: '4. Sin Garantia de Resultados',
        content: 'No hacemos representaciones ni garantias sobre el resultado de ningun asunto legal. Los resultados pasados no garantizan resultados futuros. Cada caso es unico y los resultados dependen de varios factores especificos de ese caso.',
        items: []
      },
      {
        title: '5. Responsabilidades del Usuario',
        content: 'Al usar nuestros servicios, usted acepta:',
        items: [
          'Proporcionar informacion precisa y veraz',
          'Tener al menos 18 anos de edad o tener consentimiento parental',
          'No usar nuestros servicios para ningun proposito ilegal',
          'No enviar informacion falsa o enganosa',
          'Cumplir con todas las leyes y regulaciones aplicables'
        ]
      },
      {
        title: '6. Consentimiento para Contacto',
        content: 'Al enviar su informacion a traves de nuestro sitio web, usted consiente expresamente ser contactado por LawSolutionsFC y/o abogados afiliados via telefono, correo electronico, mensaje de texto u otros medios en la informacion de contacto que proporcione. Usted entiende que las llamadas pueden ser grabadas para fines de calidad y capacitacion.',
        items: []
      },
      {
        title: '7. Limitacion de Responsabilidad',
        content: 'En la maxima medida permitida por la ley, LawSolutionsFC no sera responsable por danos indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo sin limitacion, perdida de ganancias, datos, uso, goodwill u otras perdidas intangibles, resultantes de:',
        items: [
          'Su acceso o uso o incapacidad para acceder o usar nuestros servicios',
          'Cualquier conducta o contenido de cualquier tercero en nuestros servicios',
          'Cualquier contenido obtenido de nuestros servicios',
          'Acceso no autorizado, uso o alteracion de sus transmisiones o contenido'
        ]
      },
      {
        title: '8. Abogados de Terceros',
        content: 'Cualquier abogado con el que lo conectemos son profesionales independientes y no empleados o agentes de LawSolutionsFC. No respaldamos ningun abogado especifico y no somos responsables de la calidad de los servicios legales proporcionados. Usted es responsable de seleccionar y evaluar cualquier abogado con el que elija trabajar.',
        items: []
      },
      {
        title: '9. Propiedad Intelectual',
        content: 'Todo el contenido en este sitio web, incluyendo texto, graficos, logos, imagenes y software, es propiedad de LawSolutionsFC o sus proveedores de contenido y esta protegido por las leyes de derechos de autor de Estados Unidos e internacionales.',
        items: []
      },
      {
        title: '10. Ley Aplicable',
        content: 'Estos Terminos se regiran e interpretaran de acuerdo con las leyes del Estado de California, sin tener en cuenta sus disposiciones de conflicto de leyes. Cualquier accion legal derivada de estos Terminos se presentara en los tribunales estatales o federales ubicados en California.',
        items: []
      },
      {
        title: '11. Cambios a los Terminos',
        content: 'Nos reservamos el derecho de modificar o reemplazar estos Terminos en cualquier momento. Si una revision es material, proporcionaremos al menos 30 dias de aviso antes de que los nuevos terminos entren en vigor. Lo que constituye un cambio material sera determinado a nuestra sola discrecion.',
        items: []
      },
      {
        title: '12. Informacion de Contacto',
        content: 'Si tiene alguna pregunta sobre estos Terminos, por favor contactenos:',
        items: [
          'Correo electronico: legal@lawsolutionsfc.com',
          'Direccion: Law Offices of Payman Zargari, 5959 Mission Gorge Rd STE 202, San Diego, CA 92120',
          'Licencia del Colegio de Abogados de California: 208451'
        ]
      }
    ],
    agreement: 'Al usar nuestro sitio web y servicios, usted reconoce que ha leido, entendido y acepta estar sujeto a estos Terminos de Servicio.',
    copyright: '© 2026 LawSolutionsFC. Todos los derechos reservados.'
  }
};

export default function TermsOfService() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-[#f8b146] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToHome}
          </Link>
          <div className="flex items-center bg-white/10 rounded-full p-1">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                lang === 'en' ? 'bg-[#f8b146] text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                lang === 'es' ? 'bg-[#f8b146] text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
            <FileText className="w-6 h-6 text-[#f8b146]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-black">
            {t.title}
          </h1>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-[#444444] leading-relaxed mb-6">
            <strong>{t.lastUpdated}</strong>
          </p>

          <p className="text-[#444444] leading-relaxed mb-6">
            {t.intro}
          </p>

          {t.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-serif font-bold text-black mt-8 mb-4">
                {section.title}
              </h2>
              <p className="text-[#444444] leading-relaxed mb-4">
                {section.content}
              </p>
              {section.items.length > 0 && (
                <ul className="list-disc pl-6 text-[#444444] space-y-2 mb-6">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-[#f8b146]">
            <p className="text-sm text-[#444444] leading-relaxed">
              <strong>{t.agreement}</strong>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm">{t.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
