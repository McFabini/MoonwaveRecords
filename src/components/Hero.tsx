import { Button } from './ui/button';
import { Music2, Headphones, Sparkles, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated waves */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background"
        ></motion.div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.1,
                ease: 'easeOut'
              }}
              className="absolute w-full h-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              style={{
                top: `${i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
              <Music2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: 'easeOut'
            }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
              MoonWave Records
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6
              }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Votre label de musique indépendant
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8
            }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Production, distribution et promotion musicale de qualité professionnelle.
            Nous accompagnons les artistes émergents et confirmés dans leur carrière musicale.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1
              }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:bg-card/70 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3>Publishing</h3>
              <p className="text-muted-foreground text-sm">
                Gestion de vos droits d'auteur et maximisation de vos revenus
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2
              }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:bg-card/70 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h3>Distribution</h3>
              <p className="text-muted-foreground text-sm">
                Distribution sur toutes les plateformes de streaming majeures
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4
              }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:bg-card/70 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3>Promotion</h3>
              <p className="text-muted-foreground text-sm">
                Stratégies marketing et promotion sur les réseaux sociaux
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.6
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}