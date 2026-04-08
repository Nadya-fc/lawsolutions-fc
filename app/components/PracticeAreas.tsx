'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Car, User, Briefcase } from 'lucide-react';

export default function PracticeAreas() {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Car,
      title: t.practiceAreas.autoAccidents,
      description: t.practiceAreas.autoAccidentsDesc,
    },
    {
      icon: User,
      title: t.practiceAreas.personalInjury,
      description: t.practiceAreas.personalInjuryDesc,
    },
    {
      icon: Briefcase,
      title: t.practiceAreas.workersComp,
      description: t.practiceAreas.workersCompDesc,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001b3d] mb-4">
            {t.practiceAreas.title}
          </h2>
          <div className="w-20 h-1 bg-[#f8b146] mx-auto" />
        </div>

        {/* Practice Area Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#001b3d] rounded-lg flex items-center justify-center mb-6">
                <area.icon className="w-7 h-7 text-[#f8b146]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-[#001b3d] mb-3">
                {area.title}
              </h3>
              <p className="text-[#444444] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
