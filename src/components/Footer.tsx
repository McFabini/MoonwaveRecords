import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <footer ref={footerRef} className="border-t border-border bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="https://i.ibb.co/t6CZpKR/image-circulaire-recadree-1.png"
                  alt="MoonWave Records Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold">MoonWave Records</span>
            </div>
            <p className="text-sm text-foreground/60">
              Label de musique indépendant. Production, distribution et promotion d&apos;artistes talentueux.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-foreground/60 hover:text-primary transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artistes')} className="text-foreground/60 hover:text-primary transition-colors">
                  Artistes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-foreground/60 hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('musique')} className="text-foreground/60 hover:text-primary transition-colors">
                  Musique
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Légal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('legal')} className="text-foreground/60 hover:text-primary transition-colors">
                  Mentions légales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-foreground/60 hover:text-primary transition-colors">
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-foreground/60 hover:text-primary transition-colors">
                  CGV
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cookies')} className="text-foreground/60 hover:text-primary transition-colors">
                  Cookies
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-sm text-foreground/60 mb-4">
              Restez informés de nos dernières sorties et événements
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-lg overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-2"
            >
              <iframe 
                width="540" 
                height="305" 
                src="https://2f1373d4.sibforms.com/serve/MUIFADpor47MxNCzfchbs7eSRbE9ZjgTmwLX1HVol9lYAsUtBPNECTY_G7rR4g2MPQFlPomNXV5WKK_2hDsT1xBh9gDXITr6OzSnuNPcXzTNdqikR9Dw0M17wT9iv1IztX7yNAUr82lzAiDNlcTBGgQSd-TBSgKhzCuRC4gxsy5woc-Gwz6IVny4OiQoYCcHHHmABRIYX57YNNGwEQ==" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                title="Newsletter MoonWave Records"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
            © {currentYear} MoonWave Records. Fait avec <Heart className="w-4 h-4 text-primary" />{' '}
            pour la musique.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}