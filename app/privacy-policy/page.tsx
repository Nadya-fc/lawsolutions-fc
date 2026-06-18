'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

const content = {
  en: {
    backToHome: 'Back to Home',
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: June 18, 2026',
    intro: 'LawSolutionsFC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our legal intake services.',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'We may collect the following types of information:',
        items: [
          'Personal Information: Name, phone number, email address, and any information you provide when filling out our contact form.',
          'Case Information: Details about your legal matter that you choose to share with us.',
          'Usage Data: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.',
          'Cookies and Tracking Data: We use cookies, pixels, conversion APIs, and similar technologies that may collect device identifiers, click identifiers, referral URLs, page URLs, IP address, browser information, and event information such as page views, button clicks, form starts, and form submissions.'
        ]
      },
      {
        title: '2. How We Use Your Information',
        content: 'We use the information we collect for the following purposes:',
        items: [
          'To contact you regarding your inquiry',
          'To contact you by phone, SMS/text message, and email when you submit your information and consent to be contacted',
          'To connect you with qualified attorneys',
          'To provide information about our services',
          'To improve our website and services',
          'To measure advertising performance, attribute conversions, prevent duplicate conversion reporting, and improve our marketing campaigns',
          'To comply with legal obligations'
        ]
      },
      {
        title: '3. Information Sharing',
        content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with:',
        items: [
          'Partnered Attorneys: We share your information with independent attorneys who may be able to assist with your case.',
          'Service Providers: Third-party vendors who help us operate our website and provide our services.',
          'Advertising and Analytics Providers: We may share limited event data and hashed identifiers with providers such as TikTok, Meta, Google Analytics, and Google Tag Manager to measure website activity, form submissions, calls, and advertising performance.',
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
        content: 'We use cookies, pixels, tags, analytics tools, and server-side conversion technologies to understand how visitors use our website and to measure advertising performance.',
        items: [
          'These technologies may collect page views, content views, button clicks, form interactions, lead submissions, phone link clicks, page URLs, referrers, IP address, user agent, TikTok click identifiers, and TikTok browser identifiers.',
          'For advertising measurement, we may send conversion events through browser pixels and server-side conversion APIs, including TikTok Events API, Meta Pixel/Conversions API where applicable, Google Analytics 4, and Google Tag Manager.',
          'When you submit a form, we may send hashed versions of your email address, phone number, and an internal external identifier to advertising platforms for matching and conversion measurement. We do not send raw email or raw phone values to TikTok through advanced matching.',
          'You can set your browser to refuse cookies or alert you when cookies are being sent. Some website features or measurement tools may not function properly if cookies are disabled.'
        ]
      },
      {
        title: '7. Communications Consent',
        content: 'When you submit your information through our website, you consent to be contacted by LawSolutionsFC, our intake team, service providers, and/or independent attorneys by phone, SMS/text message, and email at the contact information you provide, including through automated technology where permitted by law.',
        items: [
          'Message and data rates may apply.',
          'Consent to receive marketing or informational text messages is not a condition of hiring an attorney or receiving legal services.',
          'You may request that we stop contacting you by following opt-out instructions in a message or by contacting us directly.'
        ]
      },
      {
        title: '8. Children\'s Privacy',
        content: 'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.',
        items: []
      },
      {
        title: '9. Changes to This Policy',
        content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        items: []
      },
      {
        title: '10. Contact Us',
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
    lastUpdated: 'Ultima Actualizacion: 18 de junio de 2026',
    intro: 'LawSolutionsFC ("nosotros," "nuestro") esta comprometido a proteger su privacidad. Esta Politica de Privacidad explica como recopilamos, usamos, divulgamos y protegemos su informacion cuando visita nuestro sitio web y utiliza nuestros servicios de admision legal.',
    sections: [
      {
        title: '1. Informacion que Recopilamos',
        content: 'Podemos recopilar los siguientes tipos de informacion:',
        items: [
          'Informacion Personal: Nombre, numero de telefono, direccion de correo electronico y cualquier informacion que proporcione al completar nuestro formulario de contacto.',
          'Informacion del Caso: Detalles sobre su asunto legal que elija compartir con nosotros.',
          'Datos de Uso: Informacion sobre como interactua con nuestro sitio web, incluida la direccion IP, tipo de navegador, paginas visitadas y tiempo dedicado a las paginas.',
          'Cookies y Datos de Seguimiento: Utilizamos cookies, pixeles, APIs de conversion y tecnologias similares que pueden recopilar identificadores de dispositivo, identificadores de clic, URLs de referencia, URLs de paginas, direccion IP, informacion del navegador e informacion de eventos como vistas de pagina, clics en botones, inicio de formularios y envios de formularios.'
        ]
      },
      {
        title: '2. Como Usamos su Informacion',
        content: 'Utilizamos la informacion que recopilamos para los siguientes propositos:',
        items: [
          'Para contactarlo respecto a su consulta',
          'Para contactarlo por telefono, SMS/mensaje de texto y correo electronico cuando envie su informacion y acepte ser contactado',
          'Para conectarlo con abogados calificados',
          'Para proporcionar informacion sobre nuestros servicios',
          'Para mejorar nuestro sitio web y servicios',
          'Para medir el rendimiento publicitario, atribuir conversiones, evitar informes duplicados de conversiones y mejorar nuestras campanas de marketing',
          'Para cumplir con obligaciones legales'
        ]
      },
      {
        title: '3. Compartir Informacion',
        content: 'No vendemos, comerciamos ni alquilamos su informacion personal a terceros. Podemos compartir su informacion con:',
        items: [
          'Abogados Asociados: Compartimos su informacion con abogados independientes que pueden ayudar con su caso.',
          'Proveedores de Servicios: Proveedores externos que nos ayudan a operar nuestro sitio web y proporcionar nuestros servicios.',
          'Proveedores de Publicidad y Analitica: Podemos compartir datos limitados de eventos e identificadores codificados con proveedores como TikTok, Meta, Google Analytics y Google Tag Manager para medir actividad del sitio web, envios de formularios, llamadas y rendimiento publicitario.',
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
        content: 'Utilizamos cookies, pixeles, etiquetas, herramientas de analitica y tecnologias de conversion del lado del servidor para entender como los visitantes usan nuestro sitio web y medir el rendimiento publicitario.',
        items: [
          'Estas tecnologias pueden recopilar vistas de pagina, vistas de contenido, clics en botones, interacciones con formularios, envios de prospectos, clics en enlaces telefonicos, URLs de pagina, referencias, direccion IP, agente de usuario, identificadores de clic de TikTok e identificadores de navegador de TikTok.',
          'Para medir publicidad, podemos enviar eventos de conversion mediante pixeles del navegador y APIs de conversion del lado del servidor, incluyendo TikTok Events API, Meta Pixel/Conversions API cuando aplique, Google Analytics 4 y Google Tag Manager.',
          'Cuando envia un formulario, podemos enviar versiones codificadas de su correo electronico, numero de telefono y un identificador externo interno a plataformas publicitarias para coincidencia y medicion de conversiones. No enviamos valores sin codificar de correo electronico o telefono a TikTok mediante advanced matching.',
          'Puede configurar su navegador para rechazar cookies o avisarle cuando se envien cookies. Algunas funciones del sitio web o herramientas de medicion pueden no funcionar correctamente si las cookies estan deshabilitadas.'
        ]
      },
      {
        title: '7. Consentimiento para Comunicaciones',
        content: 'Cuando envia su informacion a traves de nuestro sitio web, usted consiente ser contactado por LawSolutionsFC, nuestro equipo de admision, proveedores de servicios y/o abogados independientes por telefono, SMS/mensaje de texto y correo electronico en la informacion de contacto que proporcione, incluyendo mediante tecnologia automatizada cuando lo permita la ley.',
        items: [
          'Pueden aplicar tarifas de mensajes y datos.',
          'El consentimiento para recibir mensajes de texto de marketing o informativos no es condicion para contratar a un abogado o recibir servicios legales.',
          'Puede solicitar que dejemos de contactarlo siguiendo las instrucciones para darse de baja en un mensaje o contactandonos directamente.'
        ]
      },
      {
        title: '8. Privacidad de Menores',
        content: 'Nuestros servicios no estan destinados a personas menores de 18 anos. No recopilamos intencionalmente informacion personal de ninos menores de 18.',
        items: []
      },
      {
        title: '9. Cambios a Esta Politica',
        content: 'Podemos actualizar nuestra Politica de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Politica de Privacidad en esta pagina y actualizando la fecha de "Ultima Actualizacion".',
        items: []
      },
      {
        title: '10. Contactenos',
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
