'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, ArrowLeft, ArrowRight, Check, Send } from 'lucide-react';
import { QualificationChecklist } from './HomeFunnelSections';
import {
  createEventId,
  getTikTokApplicationPayload,
  identifyTikTokUser,
  sendTikTokServerEvent,
  trackEvent,
} from '../lib/tracking';

type QuizData = {
  accidentType: string;
  accidentDate: string;
  medicalCare: string;
  hasAttorney: string;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
  website: string;
};

const initialFormData: QuizData = {
  accidentType: '',
  accidentDate: '',
  medicalCare: '',
  hasAttorney: '',
  name: '',
  phone: '',
  email: '',
  consent: false,
  website: '',
};

const questions = [
  {
    key: 'accidentType' as const,
    title: '¿Qué tipo de accidente tuvo?',
    options: [
      'Accidente de Auto',
      'Uber / Lyft',
      'Motocicleta',
      'Camión',
      'Resbalón y Caída',
      'Accidente Laboral',
      'Otro',
    ],
  },
  {
    key: 'accidentDate' as const,
    title: '¿Cuándo ocurrió el accidente?',
    options: ['Últimos 30 días', 'Últimos 6 meses', 'Último año', 'Más de un año'],
  },
  {
    key: 'medicalCare' as const,
    title: '¿Recibió atención médica?',
    options: ['Sí', 'No'],
  },
  {
    key: 'hasAttorney' as const,
    title: '¿Ya tiene abogado?',
    options: ['Sí', 'No'],
  },
];

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<QuizData>(initialFormData);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [eventIds] = useState(() => ({
    leadStarted: createEventId('lead_started'),
    qualifiedLead: createEventId('qualified_lead'),
    completeRegistration: createEventId('complete_registration'),
    lead: createEventId('lead'),
    leadSubmitted: createEventId('lead_submitted'),
  }));
  const hasTrackedQualifiedLead = useRef(false);

  const totalSteps = 5;
  const progress = useMemo(() => ((step + 1) / totalSteps) * 100, [step]);
  const isContactStep = step === 4;

  useEffect(() => {
    if (!isContactStep || hasTrackedQualifiedLead.current) return;

    hasTrackedQualifiedLead.current = true;
    const payload = {
      accident_type: formData.accidentType,
      accident_date: formData.accidentDate,
      medical_care: formData.medicalCare,
      has_attorney: formData.hasAttorney,
    };
    const tikTokPayload = getTikTokApplicationPayload('Contact Information Step');

    trackEvent(
      'qualified_lead',
      { ...payload, ...tikTokPayload },
      { eventId: eventIds.qualifiedLead, tikTokEventName: 'Contact' }
    );
    sendTikTokServerEvent('Contact', eventIds.qualifiedLead, {
      ...payload,
      ...tikTokPayload,
    });
  }, [eventIds.qualifiedLead, formData, isContactStep]);

  const markStarted = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('lead_started', { step: 1 }, { eventId: eventIds.leadStarted });
    }
  };

  const selectOption = (key: keyof Pick<QuizData, 'accidentType' | 'accidentDate' | 'medicalCare' | 'hasAttorney'>, value: string) => {
    markStarted();
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validateStep = () => {
    const currentErrors: Record<string, string> = {};

    if (!isContactStep) {
      const question = questions[step];
      if (!formData[question.key]) {
        currentErrors[question.key] = 'Seleccione una respuesta para continuar.';
      }
    } else {
      if (!formData.name.trim()) currentErrors.name = 'Ingrese su nombre completo.';
      if (!formData.phone.trim()) {
        currentErrors.phone = 'Ingrese su número de teléfono.';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        currentErrors.phone = 'Ingrese un teléfono válido de 10 dígitos.';
      }
      if (!formData.email.trim()) {
        currentErrors.email = 'Ingrese su correo electrónico.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        currentErrors.email = 'Ingrese un correo electrónico válido.';
      }
      if (!formData.consent) {
        currentErrors.consent = 'Debe aceptar el contacto y el procesamiento descrito para enviar la solicitud.';
      }
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const goNext = () => {
    markStarted();
    if (!validateStep()) return;

    trackEvent('lead_step_completed', {
      step: step + 1,
      step_name: isContactStep ? 'contact_information' : questions[step].key,
    });

    if (step < totalSteps - 1) {
      setStep((current) => current + 1);
    }
  };

  const goBack = () => {
    if (step > 0) setStep((current) => current - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    markStarted();
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    markStarted();
    if (!validateStep()) return;

    setIsSubmitting(true);

    const description = [
      `Tipo de accidente: ${formData.accidentType}`,
      `Fecha del accidente: ${formData.accidentDate}`,
      `Atención médica: ${formData.medicalCare}`,
      `Ya tiene abogado: ${formData.hasAttorney}`,
    ].join('\n');

    try {
      await identifyTikTokUser(formData.email, formData.phone);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description,
          website: formData.website,
          language: 'es',
          pageUrl: window.location.href,
          referrer: document.referrer,
          tiktokEventIds: {
            lead: eventIds.lead,
            completeRegistration: eventIds.completeRegistration,
            leadSubmitted: eventIds.leadSubmitted,
          },
        }),
      });

      if (response.ok) {
        const tikTokPayload = getTikTokApplicationPayload('Submitted Case Evaluation');

        trackEvent('lead_step_completed', { step: 5, step_name: 'contact_information' });
        trackEvent(
          'CompleteRegistration',
          { source: 'qualification_quiz', ...tikTokPayload },
          { eventId: eventIds.completeRegistration }
        );
        trackEvent(
          'Lead',
          { source: 'qualification_quiz', ...tikTokPayload },
          { eventId: eventIds.lead }
        );
        trackEvent(
          'lead_submitted',
          { source: 'qualification_quiz', ...tikTokPayload },
          { eventId: eventIds.leadSubmitted }
        );
        router.push('/gracias');
      } else {
        setErrors({ submit: 'No se pudo enviar la solicitud. Inténtelo de nuevo.' });
      }
    } catch {
      setErrors({ submit: 'Ocurrió un error. Inténtelo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestion = !isContactStep ? questions[step] : null;

  return (
    <section id="contact" className="py-16 md:py-20 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <QualificationChecklist />

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d] mb-3">
            Evaluación Gratuita Del Caso
          </h2>
          <p className="text-[#444444] text-lg">
            Responda unas preguntas breves para ayudarnos a revisar su solicitud.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-7">
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-sm font-bold uppercase tracking-wide text-[#001b3d]">
                Paso {step + 1} de {totalSteps}
              </p>
              <p className="text-sm font-medium text-[#444444]">{Math.round(progress)}%</p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
              <div
                className="h-full rounded-full bg-[#f8b146] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="min-h-[310px] transition-all duration-300">
            {currentQuestion ? (
              <fieldset>
                <legend className="mb-5 text-2xl font-serif font-bold text-[#001b3d]">
                  {currentQuestion.title}
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option) => {
                    const isSelected = formData[currentQuestion.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectOption(currentQuestion.key, option)}
                        className={`min-h-14 rounded border px-4 py-3 text-left font-semibold transition-all ${
                          isSelected
                            ? 'border-[#001b3d] bg-[#001b3d] text-white'
                            : 'border-gray-300 bg-white text-[#001b3d] hover:border-[#f8b146] hover:bg-[#fff8ed]'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span className="flex items-center justify-between gap-3">
                          {option}
                          {isSelected && <Check className="h-5 w-5 text-[#f8b146]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors[currentQuestion.key] && (
                  <p className="mt-3 flex items-center text-sm text-red-600">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    {errors[currentQuestion.key]}
                  </p>
                )}
              </fieldset>
            ) : (
              <div>
                <h3 className="mb-5 text-2xl font-serif font-bold text-[#001b3d]">
                  Información De Contacto
                </h3>
                <div className="grid gap-5">
                  <InputField
                    id="name"
                    label="Nombre Completo"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Juan García"
                    error={errors.name}
                    autoComplete="name"
                  />
                  <InputField
                    id="phone"
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(323) 555-1234"
                    error={errors.phone}
                    autoComplete="tel"
                  />
                  <InputField
                    id="email"
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    error={errors.email}
                    autoComplete="email"
                  />

                  <label className="flex cursor-pointer items-start rounded border border-gray-200 p-4">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-[#f8b146] focus:ring-[#f8b146]"
                    />
                    <span className="ml-3 text-sm leading-relaxed text-[#444444]">
                      Acepto ser contactado por teléfono, SMS o correo electrónico sobre mi solicitud. También acepto el uso de tecnologías de seguimiento y eventos de conversión del lado del servidor, incluyendo identificadores codificados, como se describe en la Política de Privacidad.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="-mt-3 flex items-center text-sm text-red-600">
                      <AlertCircle className="mr-1 h-4 w-4" />
                      {errors.consent}
                    </p>
                  )}

                  <div className="absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {errors.submit && <p className="mb-4 text-center text-red-600">{errors.submit}</p>}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0 || isSubmitting}
              className="inline-flex min-h-12 items-center justify-center rounded border border-gray-300 px-5 py-3 font-semibold text-[#001b3d] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Atrás
            </button>

            {isContactStep ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center justify-center rounded bg-[#f8b146] px-6 py-3 font-bold text-[#001b3d] transition-colors hover:bg-[#e09f3a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-5 w-5 rounded-full border-2 border-[#001b3d] border-t-transparent animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Hablar Con Un Especialista
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex min-h-12 items-center justify-center rounded bg-[#f8b146] px-6 py-3 font-bold text-[#001b3d] transition-colors hover:bg-[#e09f3a]"
              >
                Continuar
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

type InputFieldProps = {
  id: string;
  label: string;
  name: keyof QuizData;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  autoComplete: string;
};

function InputField({
  id,
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-[#001b3d]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full rounded border px-4 py-3 outline-none transition-all focus:border-[#f8b146] focus:ring-2 focus:ring-[#f8b146] ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && (
        <p className="mt-1 flex items-center text-sm text-red-600">
          <AlertCircle className="mr-1 h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}
