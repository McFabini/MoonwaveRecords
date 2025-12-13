import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Music2 } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete();
      }
    }, currentStep === 0 ? 1500 : currentStep === 1 ? 2000 : currentStep === 2 ? 2500 : 1000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-24 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${i * 15}%`,
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: '100%',
              opacity: [0, 0.5, 0.8, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="z-10 text-center space-y-12">
        {/* Step 1: Bienvenue */}
        {currentStep >= 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: currentStep === 0 ? 1 : 0,
              scale: currentStep === 0 ? 1 : 1.2,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
              >
                <Music2 className="w-16 h-16 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent"
              >
                Bienvenue
              </motion.h1>
            </div>
          </motion.div>
        )}

        {/* Step 2: MoonWave Records */}
        {currentStep >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: currentStep === 1 ? 1 : 0,
              y: currentStep === 1 ? 0 : -50,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-40 h-40 mx-auto relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                  <Music2 className="w-20 h-20 text-primary" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-6xl md:text-8xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
                  MoonWave
                </h1>
                <h2 className="text-4xl md:text-5xl tracking-widest bg-gradient-to-r from-primary via-accent to-white bg-clip-text text-transparent">
                  RECORDS
                </h2>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Votre Label Indépendant */}
        {currentStep >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentStep === 2 ? 1 : 0,
              scale: currentStep === 2 ? 1 : 0.8,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-4xl px-4 space-y-8">
              {/* Logo */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -20 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
              >
                <Music2 className="w-12 h-12 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent"
              >
                MoonWave Records
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground"
              >
                Votre label de musique indépendant
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
              >
                {['Publishing', 'Distribution', 'Promotion'].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6"
                  >
                    <p className="text-lg text-primary">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Loading Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="max-w-md mx-auto mt-12"
              >
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}