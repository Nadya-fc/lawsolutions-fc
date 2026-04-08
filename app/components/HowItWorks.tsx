'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Users, Scale } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Phone,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: Users,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: Scale,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d] mb-4">
            {t.howItWorks.title}
          </h2>
          <div className="w-20 h-1 bg-[#f8b146] mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#f8b146] text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 bg-[#001b3d]/5 rounded-full flex items-center justify-center group-hover:bg-[#001b3d] transition-colors duration-300">
                <step.icon className="w-10 h-10 text-[#001b3d] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-[#001b3d] mb-3">
                {step.title}
              </h3>
              <p className="text-[#444444] leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
