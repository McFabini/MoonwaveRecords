import { Check, Music, Radio, TrendingUp, Mic, Disc, Share2, GraduationCap, Sparkles, Megaphone, FileText, CreditCard, Landmark, Smartphone, Wallet, Rocket, Target, Crown, X, Zap, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

const releasePackages = [
  {
    id: 'starter',
    icon: Rocket,
    title: 'Starter Low-Cost',
    subtitle: 'Idéal pour les étudiants et débutants',
    description: 'Lancez vos premières sorties musicales sans vous ruiner et commencez à construire votre présence digitale.',
    features: [
      'Distribution sur toutes les plateformes (Spotify, Apple Music, Deezer...)',
      'Chaîne d\'artiste officielle YouTube + YouTube Content ID',
      'Rapports de vente officiels',
      'Programmez votre date de sortie',
      'Utilisez votre propre code ISRC',
      'Support technique par email',
      '📦 Formules disponibles :',
      'Single : 1 titre (3 min inclus) – +5€/min supplémentaire',
      'EP : 3 titres – +15€/titre supplémentaire',
      'Album : 10 titres – +10€/titre supplémentaire',
    ],
    priceNormal: '30€ - 120€',
    priceType: 'HT',
    popular: false,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'growth',
    icon: Target,
    title: 'Growth / Accompagnement',
    subtitle: 'Boostez vos streams et votre visibilité',
    description: 'Développez votre carrière musicale avec un accompagnement professionnel et des outils stratégiques pour augmenter vos streams et votre audience.',
    features: [
      'Tout du Starter Low-Cost inclus',
      'Stratégie marketing personnalisée pour votre projet',
      'Campagne promotionnelle Groover (20€ de crédit inclus)',
      'Sorties illimitées sur plateformes sociales (TikTok, Instagram...)',
      'Partenariats exclusifs : Tidal, Twitch, Amazon',
      'Store Automator – Optimisation automatique',
      'Rapports quotidiens des tendances et analytics',
      'Présentation optimisée auprès des plateformes',
      'Sélection des restrictions géographiques',
      'Consultation mensuelle avec un expert du label',
      'Conseils sur la création de visuels (covers, artworks)',
      'Support prioritaire 48h',
    ],
    priceNormal: '350€',
    priceType: 'HT',
    popular: false,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'signature',
    icon: Crown,
    title: 'Signature Premium',
    subtitle: 'Partenariat stratégique avec MoonWave Records',
    description: 'Bénéficiez d\'un partenariat stratégique complet pour propulser votre carrière sur le long terme. Places limitées – nous sélectionnons les artistes avec le plus fort potentiel.',
    features: [
      'Tout du Growth / Accompagnement inclus',
      'Signature officielle sous le label MoonWave Records',
      'Service Publishing complet (70€ de valeur inclus)',
      'Création professionnelle de visuels (cover, artwork)',
      'Campagne marketing complète multi-plateformes',
      'Présentation premium aux curateurs et playlists',
      'Campagnes publicitaires sponsorisées (Spotify Ads, Meta Ads)',
      'Relations presse et médias spécialisés',
      'Coaching artistique et développement de carrière',
      'Accès prioritaire aux collaborations label',
      'Évènements et showcases MoonWave Records',
      'Support dédié 24/7 par manager assigné',
      'Stratégie de sortie sur 6–12 mois',
    ],
    priceNormal: '1 200€',
    priceType: 'HT',
    popular: false,
    color: 'from-pink-500 to-purple-500',
  },
];

const additionalServices = [
  {
    id: 1,
    icon: Megaphone,
    title: 'Campagne Groover',
    description: 'Faites découvrir votre musique à des curateurs professionnels',
    services: [
      { name: 'Campagne promotionnelle Groover', price: '20€ HT' },
    ],
  },
  {
    id: 2,
    icon: FileText,
    title: 'Service Publishing',
    description: 'Gérez vos droits d\'auteur et maximisez vos revenus',
    services: [
      { name: 'Service Publishing complet', price: '70€ HT' },
    ],
  },
];

export function Services({ onNavigate }: ServicesProps) {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    objectives: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xnnqaqpb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Nouvelle demande Signature Premium - MoonWave Records',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: formData.project,
          objectives: formData.objectives,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', project: '', objectives: '' });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const isArtist = data.name === 'Artiste';
      const backgroundColor = isArtist ? '#7c3aed' : '#a855f7';
      const borderColor = isArtist ? '#8b5cf6' : '#c084fc';
      
      return (
        <div 
          style={{
            backgroundColor,
            border: `2px solid ${borderColor}`,
            borderRadius: '12px',
            padding: '12px 16px',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{data.name}</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200 mb-4">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Packages tout-inclus</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le package qui correspond à vos ambitions et lancez votre carrière musicale
          </p>
        </motion.div>

        {/* Release Packages - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {releasePackages.map((pkg, idx) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  <Card className="relative bg-white border-2 border-gray-200 hover:border-purple-300 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        {pkg.id === 'signature' && (
                          <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                            <Award className="w-3 h-3 mr-1" />
                            Prestige
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                      <p className="text-white/90 text-sm">{pkg.subtitle}</p>
                    </div>

                    <CardContent className="p-8 flex-1 flex flex-col">
                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                            {pkg.priceNormal}
                          </span>
                          <span className="text-gray-500">HT</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Paiement unique</p>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{pkg.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-8 flex-1">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white py-6 rounded-2xl shadow-lg transition-all hover:shadow-xl`}
                        onClick={() => {
                          if (pkg.id === 'signature') {
                            setShowPremiumModal(true);
                          } else {
                            onNavigate?.('demos');
                          }
                        }}
                      >
                        {pkg.id === 'signature' ? 'Réserver votre Partenariat Premium' : 'Soumettre une Démo'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Premium Modal */}
        {showPremiumModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Signature Premium</h2>
                    <p className="text-sm text-gray-600">Partenariat stratégique</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowPremiumModal(false);
                    setIsSubmitted(false);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Demande envoyée avec succès !</h3>
                    <p className="text-gray-600 mb-6">
                      Notre équipe va vous contacter sous 24-48h pour planifier votre appel stratégique de 15-30 minutes.
                    </p>
                    <div className="text-sm text-gray-700 bg-purple-50 p-6 rounded-2xl border border-purple-200">
                      <p className="font-semibold text-purple-900 mb-3">📞 Durant cet appel, nous allons :</p>
                      <ul className="text-left space-y-2">
                        <li>• Présenter en détail le pack Signature Premium</li>
                        <li>• Analyser votre projet musical et vos objectifs</li>
                        <li>• Vérifier l'adéquation avec notre label</li>
                        <li>• Répondre à toutes vos questions</li>
                      </ul>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      setShowPremiumModal(false);
                      setIsSubmitted(false);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:opacity-90 text-white px-8 py-3 rounded-2xl"
                  >
                    Fermer
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-gray-600 mb-6">
                    Remplissez ce formulaire pour réserver votre partenariat premium. Nous vous contacterons pour planifier un appel stratégique de 15-30 minutes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-900">Nom / Prénom *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Votre nom complet"
                        className="rounded-xl border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="votre@email.com"
                        className="rounded-xl border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+33 6 XX XX XX XX"
                      className="rounded-xl border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-gray-900">Projet musical *</Label>
                    <Select
                      value={formData.project}
                      onValueChange={(value) => setFormData({ ...formData, project: value })}
                      required
                    >
                      <SelectTrigger id="project" className="rounded-xl border-gray-300">
                        <SelectValue placeholder="Sélectionnez votre projet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="ep">EP</SelectItem>
                        <SelectItem value="album">Album</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objectives" className="text-gray-900">Vos objectifs *</Label>
                    <Textarea
                      id="objectives"
                      value={formData.objectives}
                      onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                      required
                      placeholder="Ex: Augmenter mes streams, développer ma visibilité, structurer ma carrière musicale..."
                      rows={4}
                      className="rounded-xl border-gray-300"
                    />
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                    <p className="text-sm text-gray-700">
                      💡 <span className="font-semibold text-purple-900">Après soumission :</span> Vous recevrez un email de confirmation et nous fixerons un appel stratégique de 15-30 minutes pour présenter le pack, vérifier votre motivation et répondre à toutes vos questions.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowPremiumModal(false)}
                      className="flex-1 rounded-2xl border-2"
                    >
                      Annuler
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:opacity-90 text-white rounded-2xl"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Réserver mon appel'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}

        {/* Revenue Split Chart - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-12 border border-purple-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Répartition des Revenus
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Une répartition équitable et transparente des revenus générés par vos sorties
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Pie Chart */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <PieChart width={400} height={400}>
                  <defs>
                    <filter id="shadow" height="200%">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3"/>
                    </filter>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={1}/>
                    </linearGradient>
                    <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084fc" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#a855f7" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <Pie
                    data={[
                      { name: 'Artiste', value: 80 },
                      { name: 'MoonWave Records', value: 20 }
                    ]}
                    cx={200}
                    cy={180}
                    labelLine={false}
                    label={({ value }) => `${value}%`}
                    outerRadius={120}
                    innerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                    style={{ filter: 'url(#shadow)' }}
                  >
                    <Cell fill="url(#blueGradient)" stroke="#6366f1" strokeWidth={2} />
                    <Cell fill="url(#purpleGradient)" stroke="#a855f7" strokeWidth={2} />
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    formatter={(value) => <span className="text-gray-700">{value}</span>}
                  />
                </PieChart>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-purple-600">80%</h4>
                      <p className="text-sm text-gray-600">Pour l'Artiste</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Vous conservez la grande majorité de vos revenus. C'est votre musique, 
                    vous méritez d'en profiter pleinement.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-violet-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                      <Radio className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-violet-600">20%</h4>
                      <p className="text-sm text-gray-600">Pour MoonWave Records</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Couvre la distribution, le maintien sur les plateformes, le support technique 
                    et les outils professionnels mis à votre disposition.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-6 rounded-2xl border border-purple-300">
                  <p className="text-gray-800">
                    💰 <span className="font-semibold">Paiements mensuels</span> - Recevez vos revenus 
                    directement chaque mois, avec des rapports détaillés de vos performances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Services - Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Options supplémentaires
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Boostez votre visibilité et gérez vos droits d'auteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  {service.services.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200"
                    >
                      <span className="text-gray-800 font-medium">{item.name}</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{item.price}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="text-center bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl p-12 shadow-2xl shadow-purple-500/50 text-white">
          <h3 className="text-4xl font-bold mb-4">Besoin d'un package personnalisé ?</h3>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Chaque artiste est unique. Discutons ensemble de vos besoins et créons une offre
            sur mesure adaptée à votre projet et votre budget.
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate?.('contact')}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl shadow-lg"
          >
            Envoyer un e-mail
          </Button>
        </div>

        {/* Payment Options */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Moyens de paiement acceptés</h3>
            <p className="text-gray-600">
              Payez en toute sécurité avec votre méthode préférée
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { icon: CreditCard, label: 'Carte Bancaire' },
              { icon: Landmark, label: 'Virement Bancaire' },
              { icon: Wallet, label: 'Revolut Pay' },
              { icon: Smartphone, label: 'Google Pay' },
              { icon: Smartphone, label: 'Apple Pay' },
            ].map((payment, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 hover:border-purple-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all hover:shadow-lg">
                <payment.icon className="w-8 h-8 text-purple-600" />
                <p className="text-sm text-center text-gray-700 font-medium">{payment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}