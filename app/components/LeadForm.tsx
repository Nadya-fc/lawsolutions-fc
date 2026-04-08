'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Send, Check, AlertCircle, Phone } from 'lucide-react';

export default function LeadForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    consent: false,
    website: '', // Honeypot field - should remain empty
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            description: formData.description,
            website: formData.website,
            language: t.nav.home === 'Home' ? 'en' : 'es',
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          setErrors({ submit: 'Failed to submit form. Please try again.' });
        }
      } catch (error) {
        setErrors({ submit: 'An error occurred. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#001b3d] mb-4">
            {t.leadForm.successMessage}
          </h2>
          <a 
            href="tel:+13238804017"
            className="inline-flex items-center px-8 py-4 bg-[#f8b146] text-white font-semibold rounded hover:bg-[#e09f3a] transition-colors mt-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Llamar Ahora (323) 880-4017
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-ping"></span>
            Abogados Disponibles 24/7 - Llame YA
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d] mb-4">
            {t.leadForm.title}
          </h2>
          <p className="text-[#444444] text-lg mb-4">
            Complete el formulario y un abogado especialista lo llamara en <span className="text-[#f8b146] font-bold">15 minutos</span>
          </p>
          <div className="w-20 h-1 bg-[#f8b146] mx-auto" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#001b3d] mb-2"
            >
              {t.leadForm.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.leadForm.namePlaceholder}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#f8b146] focus:border-[#f8b146] outline-none transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#001b3d] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#f8b146] focus:border-[#f8b146] outline-none transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#001b3d] mb-2"
            >
              {t.leadForm.phoneLabel}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.leadForm.phonePlaceholder}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#f8b146] focus:border-[#f8b146] outline-none transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-[#001b3d] mb-2"
            >
              {t.leadForm.descriptionLabel}
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={t.leadForm.descriptionPlaceholder}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f8b146] focus:border-[#f8b146] outline-none transition-all resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-[#f8b146] border-gray-300 rounded focus:ring-[#f8b146]"
              />
              <span className="ml-3 text-sm text-[#444444]">
                {t.leadForm.consentLabel}
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.consent}
              </p>
            )}
          </div>

          {/* Honeypot Field - Hidden from humans, visible to bots */}
          <div className="absolute opacity-0 left-0 top-0 h-0 w-0 overflow-hidden">
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#f8b146] text-white font-semibold rounded hover:bg-[#e09f3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t.leadForm.submitButton}
              </>
            )}
          </button>
          
          {errors.submit && (
            <p className="text-red-500 text-center">{errors.submit}</p>
          )}
        </form>
      </div>
    </section>
  );
}
