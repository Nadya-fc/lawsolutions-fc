'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

const content = {
  en: {
    backToHome: 'Back to Home',
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: March 18, 2026',
    intro: 'LawSolutionsFC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our legal intake services.',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'We may collect the following types of information:',
        items: [
          'Personal Information: Name, phone number, email address, and any information you provide when filling out our contact form.',
          'Case Information: Details about your legal matter that you choose to share with us.',
          'Usage Data: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.',
          'Cookies: We use cookies and similar tracking technologies to enhance your browsing experience.'
        ]
      },
      {
        title: '2. How We Use Your Information',
        content: 'We use the information we collect for the following purposes:',
        items: [
          'To contact you regarding your inquiry',
          'To connect you with qualified attorneys',
          'To provide information about our services',
          'To improve our website and services',
          'To comply with legal obligations'
        ]
      },
      {
        title: '3. Information Sharing',
        content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with:',
        items: [
          'Partnered Attorneys: We share your information with independent attorneys who may be able to assist with your case.',
          'Service Providers: Third-party vendors who help us operate our website and provide our services.',
          'Legal Requirements: When required by law or to protect our rights.'
        ]
      },
      {
        title: '4. California Privacy Rights',
        content: 'If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):',
        items: [
          'The right to know what personal information is being collected about you',
          'The right to know whether your personal information is sold or disclosed and to whom',
          'The right to say no to the sale of personal information',
          'The right to access your personal information',
          'The right to equal service and price, even if you exercise your privacy rights'
        ]
      },
      {
        title: '5. Data Security',
        content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
        items: []
      },
      {
        title: '6. Cookies and Tracking',
        content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
        items: []
      },
      {
        title: '7. Children\'s Privacy',
        content: 'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.',
        items: []
      },
      {
        title: '8. Changes to This Policy',
        content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        items: []
      },
      {
        title: '9. Contact Us',
        content: 'If you have any questions about this Privacy Policy, please contact us:',
        items: [
          'Email: privacy@lawsolutionsfc.com',
          'Address: Law Offices of Payman Zargari, 5959 Mission Gorge Rd STE 202, San Diego, CA 92120',
          'California State Bar License: 208451'
        ]
      }
    ],
    copyright: '© 2026 LawSolutionsFC. All rights reserved.'
  },
  es: {
    backToHome: 'Volver al Inicio',
    title: 'Politica de Privacidad',
    lastUpdated: 'Ultima Actualizacion: 18 de marzo de 2026',
    intro: 'LawSolutionsFC ("nosotros," "nuestro") esta comprometido a proteger su privacidad. Esta Politica de Privacidad explica como recopilamos, usamos, divulgamos y protegemos su informacion cuando visita nuestro sitio web y utiliza nuestros servicios de admision legal.',
    sections: [
      {
        title: '1. Informacion que Recopilamos',
        content: 'Podemos recopilar los siguientes tipos de informacion:',
        items: [
          'Informacion Personal: Nombre, numero de telefono, direccion de correo electronico y cualquier informacion que proporcione al completar nuestro formulario de contacto.',
          'Informacion del Caso: Detalles sobre su asunto legal que elija compartir con nosotros.',
          'Datos de Uso: Informacion sobre como interactua con nuestro sitio web, incluida la direccion IP, tipo de navegador, paginas visitadas y tiempo dedicado a las paginas.',
          'Cookies: Utilizamos cookies y tecnologias de seguimiento similares para mejorar su experiencia de navegacion.'
        ]
      },
      {
        title: '2. Como Usamos su Informacion',
        content: 'Utilizamos la informacion que recopilamos para los siguientes propositos:',
        items: [
          'Para contactarlo respecto a su consulta',
          'Para conectarlo con abogados calificados',
          'Para proporcionar informacion sobre nuestros servicios',
          'Para mejorar nuestro sitio web y servicios',
          'Para cumplir con obligaciones legales'
        ]
      },
      {
        title: '3. Compartir Informacion',
        content: 'No vendemos, comerciamos ni alquilamos su informacion personal a terceros. Podemos compartir su informacion con:',
        items: [
          'Abogados Asociados: Compartimos su informacion con abogados independientes que pueden ayudar con su caso.',
          'Proveedores de Servicios: Proveedores externos que nos ayudan a operar nuestro sitio web y proporcionar nuestros servicios.',
          'Requisitos Legales: Cuando sea requerido por ley o para proteger nuestros derechos.'
        ]
      },
      {
        title: '4. Derechos de Privacidad de California',
        content: 'Si es residente de California, tiene los siguientes derechos bajo la Ley de Privacidad del Consumidor de California (CCPA):',
        items: [
          'El derecho a saber que informacion personal se esta recopilando sobre usted',
          'El derecho a saber si su informacion personal se vende o divulga y a quien',
          'El derecho a decir que no a la venta de informacion personal',
          'El derecho a acceder a su informacion personal',
          'El derecho a igualdad de servicio y precio, incluso si ejerce sus derechos de privacidad'
        ]
      },
      {
        title: '5. Seguridad de Datos',
        content: 'Implementamos medidas tecnicas y organizativas apropiadas para proteger su informacion personal contra el acceso no autorizado, alteracion, divulgacion o destruccion. Sin embargo, ningun metodo de transmision por internet es 100% seguro.',
        items: []
      },
      {
        title: '6. Cookies y Seguimiento',
        content: 'Utilizamos cookies y tecnologias de seguimiento similares para rastrear la actividad en nuestro sitio web y mantener cierta informacion. Puede indicar a su navegador que rechace todas las cookies o que indique cuando se envia una cookie.',
        items: []
      },
      {
        title: '7. Privacidad de Menores',
        content: 'Nuestros servicios no estan destinados a personas menores de 18 anos. No recopilamos intencionalmente informacion personal de ninos menores de 18.',
        items: []
      },
      {
        title: '8. Cambios a Esta Politica',
        content: 'Podemos actualizar nuestra Politica de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Politica de Privacidad en esta pagina y actualizando la fecha de "Ultima Actualizacion".',
        items: []
      },
      {
        title: '9. Contactenos',
        content: 'Si tiene alguna pregunta sobre esta Politica de Privacidad, por favor contactenos:',
        items: [
          'Correo electronico: privacy@lawsolutionsfc.com',
          'Direccion: Law Offices of Payman Zargari, 5959 Mission Gorge Rd STE 202, San Diego, CA 92120',
          'Licencia del Colegio de Abogados de California: 208451'
        ]
      }
    ],
    copyright: '© 2026 LawSolutionsFC. Todos los derechos reservados.'
  }
};

export default function PrivacyPolicy() {
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
            <Shield className="w-6 h-6 text-[#f8b146]" />
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
