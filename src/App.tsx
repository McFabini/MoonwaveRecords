import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Artists } from './components/Artists';
import { Services } from './components/Services';
import { Music } from './components/Music';
import { DemoSubmission } from './components/DemoSubmission';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalNotice } from './components/LegalNotice';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookiesPolicy } from './components/CookiesPolicy';
import { Toaster } from './components/ui/sonner';
import { WelcomeAnimation } from './components/WelcomeAnimation';

type Section = 'home' | 'artists' | 'services' | 'music' | 'demos' | 'contact' | 'legal' | 'privacy' | 'terms' | 'cookies';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />
      
      <main className="pt-16">
        {currentSection === 'home' && <Hero onNavigate={handleNavigate} />}
        {currentSection === 'artists' && <Artists />}
        {currentSection === 'services' && <Services />}
        {currentSection === 'music' && <Music />}
        {currentSection === 'demos' && <DemoSubmission />}
        {currentSection === 'contact' && <Contact />}
        {currentSection === 'legal' && <LegalNotice onNavigate={handleNavigate} />}
        {currentSection === 'privacy' && <PrivacyPolicy onNavigate={handleNavigate} />}
        {currentSection === 'terms' && <TermsOfService onNavigate={handleNavigate} />}
        {currentSection === 'cookies' && <CookiesPolicy onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
      <Toaster position="bottom-right" />
    </div>
  );
}