import { Music, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-primary" />
              <span className="font-bold">MoonWave Records</span>
            </div>
            <p className="text-sm text-foreground/60">
              Label de musique indépendant. Production, distribution et promotion d&apos;artistes talentueux.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-foreground/60 hover:text-primary transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artists')} className="text-foreground/60 hover:text-primary transition-colors">
                  Artistes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-foreground/60 hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('music')} className="text-foreground/60 hover:text-primary transition-colors">
                  Musique
                </button>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
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
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-sm text-foreground/60 mb-4">
              Restez informés de nos dernières sorties et événements
            </p>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
            © {currentYear} MoonWave Records. Fait avec <Heart className="w-4 h-4 text-primary" />{' '}
            pour la musique.
          </p>
        </div>
      </div>
    </footer>
  );
}