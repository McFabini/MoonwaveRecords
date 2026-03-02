import { Button } from './ui/button';
import { Music2, Headphones, Sparkles, FileText, Play, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Floating elements decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-400/20 to-violet-400/20 blur-xl"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
                <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                <span className="text-sm font-medium text-purple-900">Label Indépendant Professionnel</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  MoonWave
                </span>
                <br />
                <span className="text-gray-900">Records</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transformez votre passion musicale en succès professionnel. Distribution, promotion et accompagnement sur-mesure pour les artistes ambitieux.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate('demos')}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Soumettre ma musique
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('services')}
                  className="px-8 py-6 text-lg rounded-2xl border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition-all"
                >
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">80%</div>
                  <div className="text-sm text-gray-600">Revenus artiste</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Support dédié</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">30€</div>
                  <div className="text-sm text-gray-600">Dès</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-purple-500/20 p-8 border border-purple-100">
                {/* Logo at top */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-purple-500/50 ring-4 ring-purple-100"
                  >
                    <img
                      src="https://i.ibb.co/t6CZpKR/image-circulaire-recadree-1.png"
                      alt="MoonWave Records Logo"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    { icon: Music2, title: 'Distribution Mondiale', desc: 'Spotify, Apple Music, Deezer...' },
                    { icon: Headphones, title: 'Mixage & Mastering', desc: 'Qualité professionnelle garantie' },
                    { icon: Sparkles, title: 'Promotion Active', desc: 'Campagnes marketing personnalisées' },
                    { icon: FileText, title: 'Publishing & Droits', desc: 'Gestion complète de vos revenus' },
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white px-6 py-3 rounded-2xl shadow-xl shadow-purple-500/50"
              >
                <div className="text-2xl font-bold">🎵</div>
                <div className="text-xs font-medium">Rejoignez-nous</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}