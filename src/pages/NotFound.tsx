import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-violet-50 px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shadow-purple-500/30 ring-4 ring-purple-100">
              <img
                src="https://i.ibb.co/t6CZpKR/image-circulaire-recadree-1.png"
                alt="MoonWave Records Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 404 */}
          <div>
            <h1 className="text-9xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page introuvable
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              variant="outline"
              className="px-8 py-6 text-lg rounded-2xl border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/home')}
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-purple-500/50"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Button>
          </div>

          {/* Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Ou explorez nos sections :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'Services', path: '/services' },
                { label: 'Artistes', path: '/artistes' },
                { label: 'Musique', path: '/musique' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}