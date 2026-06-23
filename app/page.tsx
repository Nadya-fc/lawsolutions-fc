import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PracticeAreas from './components/PracticeAreas';
import LeadForm from './components/LeadForm';
import About from './components/About';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import SeoFaq from './components/SeoFaq';
import {
  CredibilitySection,
  MobileStickyCta,
  TrustBar,
  UrgencySection,
} from './components/HomeFunnelSections';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <CredibilitySection />
        <UrgencySection />
        <PracticeAreas />
        <SeoFaq />
        <LeadForm />
        <About />
      </main>
      <Footer />
      <MobileStickyCta />
      <CookieConsent />
    </>
  );
}
