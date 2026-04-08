export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    howItWorks: string;
    about: string;
    contact: string;
    callNow: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaCall: string;
    ctaForm: string;
    trustNoFees: string;
    trustFastResponse: string;
    trustConfidential: string;
  };
  howItWorks: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  practiceAreas: {
    title: string;
    autoAccidents: string;
    autoAccidentsDesc: string;
    personalInjury: string;
    personalInjuryDesc: string;
    workersComp: string;
    workersCompDesc: string;
  };
  leadForm: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    consentLabel: string;
    submitButton: string;
    successMessage: string;
  };
  about: {
    title: string;
    description: string;
  };
  footer: {
    disclaimer: string;
    disclaimerEs: string;
    privacyPolicy: string;
    termsOfService: string;
    attorneyAdvertising: string;
    callRecording: string;
    contactEmail: string;
    copyright: string;
  };
}
