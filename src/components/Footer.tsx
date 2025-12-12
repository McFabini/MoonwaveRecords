import { Music, Heart } from 'lucide-react';

export function Footer() {
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
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Artistes
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Musique
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-sm text-foreground/60 mb-4">
              Restez informés de nos dernières sorties et événements
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2 bg-input-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                OK
              </button>
            </div>
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