const faqs = [
  {
    question: '¿Qué debo hacer después de un accidente de auto en California?',
    answer:
      'Busque atención médica, documente la escena si puede, guarde los datos de la otra parte y hable con un abogado antes de aceptar una oferta de la aseguradora.',
  },
  {
    question: '¿Cuánto tiempo tengo para demandar después de un accidente?',
    answer:
      'Los plazos dependen del tipo de caso y de las partes involucradas. Un abogado puede revisar los hechos y explicarle el límite aplicable a su situación.',
  },
  {
    question: '¿Puedo recibir ayuda si me chocaron por detrás en el freeway?',
    answer:
      'Sí. Los accidentes en la 405, 5, 10, 60, 91 y otras autopistas pueden involucrar lesiones, daños al vehículo, pérdida de ingresos y reclamaciones contra aseguradoras.',
  },
  {
    question: '¿Qué pasa si el seguro no me quiere pagar?',
    answer:
      'No tiene que aceptar la primera oferta. Un abogado de accidentes puede evaluar la responsabilidad, sus lesiones, sus gastos médicos y si la aseguradora está subestimando el reclamo.',
  },
  {
    question: '¿LawSolutionsFC es un despacho de abogados?',
    answer:
      'No. LawSolutionsFC es un servicio de marketing jurídico e intake. No damos asesoría legal; ayudamos a conectar personas lesionadas con abogados independientes que pueden evaluar el caso.',
  },
];

export default function SeoFaq() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d] mb-4">
            Preguntas Frecuentes Sobre Accidentes En California
          </h2>
          <div className="w-20 h-1 bg-[#f8b146] mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-serif font-semibold text-[#001b3d]">
                {faq.question}
              </h3>
              <p className="leading-relaxed text-[#444444]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
