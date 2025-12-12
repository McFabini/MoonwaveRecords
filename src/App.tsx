import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Artists } from './components/Artists';
import { Services } from './components/Services';
import { Music } from './components/Music';
import { DemoSubmission } from './components/DemoSubmission';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

type Section = 'home' | 'artists' | 'services' | 'music' | 'demos' | 'contact';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
  };

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
      </main>

      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
