import { Button } from './ui/button';
import { Music2, Headphones, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              style={{
                top: `${i * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
              <Music2 className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
              MoonWave Records
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Votre label de musique indépendant
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production, distribution et promotion musicale de qualité professionnelle.
            Nous accompagnons les artistes émergents et confirmés dans leur carrière musicale.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:bg-card/70 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Music2 className="w-6 h-6 text-primary" />
              </div>
              <h3>Production Studio</h3>
              <p className="text-muted-foreground text-sm">
                Studio d'enregistrement professionnel avec ingénieurs du son experts
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:bg-card/70 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h3>Distribution</h3>
              <p className="text-muted-foreground text-sm">
                Distribution sur toutes les plateformes de streaming majeures
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:bg-card/70 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3>Promotion</h3>
              <p className="text-muted-foreground text-sm">
                Stratégies marketing et promotion sur les réseaux sociaux
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => onNavigate('demos')}
            >
              Soumettre une démo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('services')}
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
