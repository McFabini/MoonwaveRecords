import { useState } from 'react';
import { Music, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavigate, currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'artists', label: 'Artistes' },
    { id: 'services', label: 'Services' },
    { id: 'music', label: 'Musique' },
    { id: 'demos', label: 'Démos' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl tracking-wider">MoonWave Records</span>
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </motion.header>
  );
}