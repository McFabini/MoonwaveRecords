import { Check, Music, Radio, TrendingUp, Mic, Disc, Share2, GraduationCap, Sparkles, Megaphone, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'framer-motion';

const releasePackages = [
  {
    id: 'single',
    icon: Music,
    title: 'Package Single',
    subtitle: '1 titre - 2min30 inclus',
    description: 'Parfait pour débuter votre carrière musicale',
    features: [
      'Sorties illimitées sur toutes les plateformes musicales',
      'Badge d\'Artiste vérifié sur Spotify',
      'Accès Apple Music for Artists',
      'Répartition des revenus (Splits)',
      'Sorties illimitées sur plateformes sociales (frais 20%)',
      'Store Automator',
      'Rapports quotidiens des tendances',
      'Programmez la date de sortie de votre choix',
      'Utilisez votre propre code ISRC',
      'Accès à des partenariats exclusifs (Tidal, Twitch...)',
      'Présentation optimisée auprès des plateformes',
      'YouTube Content ID',
      'Rapports de vente officiels Premium',
      'Utilisez votre propre code UPC',
      'Sélection des restrictions géographiques',
      'Chaîne d\'artiste officielle YouTube',
      'Temps additionnel : +10€ par minute',
    ],
    priceNormal: '30€',
    priceStudent: '15€',
    priceType: '',
    popular: false,
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'ep',
    icon: Disc,
    title: 'Package EP',
    subtitle: '3 titres inclus',
    description: 'L\'offre idéale pour les artistes en développement',
    features: [
      'Sorties illimitées sur toutes les plateformes musicales',
      'Badge d\'Artiste vérifié sur Spotify',
      'Accès Apple Music for Artists',
      'Répartition des revenus (Splits)',
      'Sorties illimitées sur plateformes sociales (frais 20%)',
      'Store Automator',
      'Rapports quotidiens des tendances',
      'Programmez la date de sortie de votre choix',
      'Utilisez votre propre code ISRC',
      'Accès à des partenariats exclusifs (Tidal, Twitch...)',
      'Présentation optimisée auprès des plateformes',
      'YouTube Content ID',
      'Rapports de vente officiels Premium',
      'Utilisez votre propre code UPC',
      'Sélection des restrictions géographiques',
      'Chaîne d\'artiste officielle YouTube',
      'Pistes supplémentaires : +15€ par piste',
    ],
    priceNormal: '60€',
    priceStudent: '30€',
    priceType: '',
    popular: true,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'album',
    icon: Sparkles,
    title: 'Package Album',
    subtitle: '7 titres inclus',
    description: 'L\'expérience complète pour les artistes professionnels',
    features: [
      'Sorties illimitées sur toutes les plateformes musicales',
      'Badge d\'Artiste vérifié sur Spotify',
      'Accès Apple Music for Artists',
      'Répartition des revenus (Splits)',
      'Sorties illimitées sur plateformes sociales (frais 20%)',
      'Store Automator',
      'Rapports quotidiens des tendances',
      'Programmez la date de sortie de votre choix',
      'Utilisez votre propre code ISRC',
      'Accès  des partenariats exclusifs (Tidal, Twitch...)',
      'Présentation optimisée auprès des plateformes',
      'YouTube Content ID',
      'Rapports de vente officiels Premium',
      'Utilisez votre propre code UPC',
      'Sélection des restrictions géographiques',
      'Chaîne d\'artiste officielle YouTube',
      'Artiste Principal supplémentaire : +14,99€',
      'Pistes supplémentaires : +10€ par piste',
    ],
    priceNormal: '120€',
    priceStudent: '60€',
    priceType: '',
    popular: false,
    color: 'from-pink-500/20 to-purple-500/20',
  },
];

const additionalServices = [
  {
    id: 1,
    icon: Megaphone,
    title: 'Campagne Groover',
    description: 'Faites découvrir votre musique à des curateurs professionnels',
    services: [
      { name: 'Campagne promotionnelle Groover', price: '20€', studentPrice: '20€' },
    ],
  },
  {
    id: 2,
    icon: FileText,
    title: 'Service Publishing',
    description: 'Gérez vos droits d\'auteur et maximisez vos revenus',
    services: [
      { name: 'Service Publishing complet', price: '40€', studentPrice: '40€' },
    ],
  },
];

export function Services() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des packages tout-inclus pour sortir votre musique professionnellement
          </p>
        </motion.div>

        {/* Tabs for Normal / Student Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="normal" className="mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="normal">Tarifs Normaux</TabsTrigger>
              <TabsTrigger value="student" className="gap-2">
                <GraduationCap className="w-4 h-4" />
                Tarifs Étudiants
              </TabsTrigger>
            </TabsList>

            <TabsContent value="normal" className="space-y-8">
              {/* Release Packages - Normal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {releasePackages.map((pkg) => {
                  const IconComponent = pkg.icon;
                  return (
                    <Card
                      key={pkg.id}
                      className={`relative bg-card border-border hover:border-primary/50 transition-all ${
                        pkg.popular ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-1">
                            Le plus populaire
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-center">{pkg.title}</CardTitle>
                        <CardDescription className="text-center text-sm">
                          {pkg.subtitle}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground text-center mt-2">
                          {pkg.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Price */}
                        <div className="text-center py-4 border-y border-border">
                          <div className="text-4xl mb-1">{pkg.priceNormal}</div>
                          <div className="text-sm text-muted-foreground">Paiement unique</div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button 
                          className={`w-full ${
                            pkg.popular 
                              ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                              : 'bg-primary hover:bg-primary/90'
                          }`}
                        >
                          Choisir ce package
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="student" className="space-y-8">
              {/* Release Packages - Student */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-8 border border-primary/30">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Tarifs Étudiants - 50% de réduction</h3>
                    <p className="text-sm text-muted-foreground">
                      Vous êtes étudiant(e) en école de musique, conservatoire ou université ? 
                      Bénéficiez de 50% de réduction sur tous nos packages. 
                      <span className="text-primary"> Carte étudiant à présenter.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {releasePackages.map((pkg) => {
                  const IconComponent = pkg.icon;
                  return (
                    <Card
                      key={pkg.id}
                      className={`relative bg-card border-border hover:border-primary/50 transition-all ${
                        pkg.popular ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-1">
                            Le plus populaire
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-center">{pkg.title}</CardTitle>
                        <CardDescription className="text-center text-sm">
                          {pkg.subtitle}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground text-center mt-2">
                          {pkg.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Price */}
                        <div className="text-center py-4 border-y border-border">
                          <div className="flex items-center justify-center gap-3 mb-1">
                            <span className="text-2xl text-muted-foreground line-through">
                              {pkg.priceNormal}
                            </span>
                            <div className="flex items-center gap-1">
                              <div className="text-4xl text-primary">{pkg.priceStudent}</div>
                              <span className="text-lg text-primary">{pkg.priceType}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-primary text-primary mt-2">
                            -50% Étudiant
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-2">Paiement unique</div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button 
                          className={`w-full ${
                            pkg.popular 
                              ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                              : 'bg-primary hover:bg-primary/90'
                          }`}
                        >
                          Choisir ce package
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Additional Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Options supplémentaires</h2>
            <p className="text-muted-foreground">
              Boostez votre visibilité et gérez vos droits d'auteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.services.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <span className="text-sm">{item.name}</span>
                          <span className="text-xl font-semibold text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border">
          <h3 className="text-3xl mb-4">Besoin d'un package personnalisé ?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chaque artiste est unique. Discutons ensemble de vos besoins et créons une offre
            sur mesure adaptée à votre projet et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Demander un devis
            </Button>
            <Button size="lg" variant="outline">
              Prendre rendez-vous
            </Button>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border text-center p-6">
            <h4 className="mb-2">Paiement sécurisé</h4>
            <p className="text-sm text-muted-foreground">
              CB, PayPal, virement bancaire
            </p>
          </Card>
          <Card className="bg-card/50 border-border text-center p-6">
            <h4 className="mb-2">Paiement en plusieurs fois</h4>
            <p className="text-sm text-muted-foreground">
              Jusqu'à 4x sans frais (packages EP et Album)
            </p>
          </Card>
          <Card className="bg-card/50 border-border text-center p-6">
            <h4 className="mb-2">Garantie satisfait ou remboursé</h4>
            <p className="text-sm text-muted-foreground">
              30 jours pour changer d'avis
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}