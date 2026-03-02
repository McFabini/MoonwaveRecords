import { Outlet, useNavigate, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from './ui/sonner';
import { useEffect, useState } from 'react';
import { WelcomeAnimation } from './WelcomeAnimation';

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome animation only on first visit to home page
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited && location.pathname === '/') {
      setShowWelcome(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [location.pathname]);

  const handleNavigate = (section: string) => {
    // Map section names back to URLs
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'artists': '/artistes',
      'services': '/services',
      'music': '/musique',
      'demos': '/demos',
      'contact': '/contact',
      'legal': '/mentions-legales',
      'privacy': '/confidentialite',
      'terms': '/conditions',
      'cookies': '/cookies',
    };
    navigate(routeMap[section] || '/');
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Map routes to section names for the header
  const getSectionFromPath = (path: string): string => {
    const cleanPath = path.replace('/', '') || 'home';
    const sectionMap: { [key: string]: string } = {
      'home': 'home',
      '': 'home',
      'services': 'services',
      'artistes': 'artists',
      'musique': 'music',
      'demos': 'demos',
      'contact': 'contact',
      'mentions-legales': 'legal',
      'confidentialite': 'privacy',
      'conditions': 'terms',
      'cookies': 'cookies',
    };
    return sectionMap[cleanPath] || 'home';
  };

  if (showWelcome) {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onNavigate={handleNavigate} currentSection={getSectionFromPath(location.pathname)} />
      
      <main className="pt-16">
        <Outlet />
      </main>

      <Footer onNavigate={handleNavigate} />
      <Toaster position="bottom-right" />
    </div>
  );
}