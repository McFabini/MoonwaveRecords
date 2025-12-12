import { Check, Music, Radio, TrendingUp, Mic, Disc, Share2, GraduationCap, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const releasePackages = [
  {
    id: 'single',
    icon: Music,
    title: 'Package Single',
    subtitle: '1 titre',
    description: 'Parfait pour lancer votre carrière ou tester le marché',
    features: [
      'Mixage et mastering professionnel (1 titre)',
      'Distribution illimitée sur toutes les plateformes',
      'Création de cover art professionnel',
      'Inscription ISRC et codes-barres',
      'Promotion sur nos réseaux sociaux',
      'Placement sur 3 playlists Spotify',
      'Communiqué de presse',
      'Analytics et statistiques détaillées',
    ],
    priceNormal: '499€',
    priceStudent: '399€',
    popular: false,
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'ep',
    icon: Disc,
    title: 'Package EP',
    subtitle: '4 à 6 titres',
    description: 'L\'offre idéale pour construire votre identité artistique',
    features: [
      'Mixage et mastering professionnel (4-6 titres)',
      'Distribution illimitée sur toutes les plateformes',
      'Création de cover art + visuels promo',
      'Inscription ISRC et codes-barres',
      'Campagne promotion réseaux sociaux (1 mois)',
      'Placement sur 10 playlists Spotify',
      'Communiqué de presse + dossier artiste',
      'Interview pour notre blog',
      'Analytics et statistiques détaillées',
      '1 session photo promo incluse',
    ],
    priceNormal: '1299€',
    priceStudent: '999€',
    popular: true,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'album',
    icon: Sparkles,
    title: 'Package Album',
    subtitle: '8 à 12 titres',
    description: 'L\'expérience complète pour un lancement professionnel',
    features: [
      'Mixage et mastering professionnel (8-12 titres)',
      'Distribution illimitée sur toutes les plateformes',
      'Création de cover art + booklet digital',
      'Design complet identité visuelle',
      'Inscription ISRC et codes-barres',
      'Campagne promotion réseaux sociaux (3 mois)',
      'Placement sur 20+ playlists Spotify',
      'Relations presse musicale complète',
      'Interview pour notre blog + média partenaires',
      'Analytics et rapports mensuels détaillés',
      '2 sessions photo/vidéo promo',
      'Création de 3 clips vidéo pour réseaux sociaux',
      'Coaching développement artistique (3 mois)',
      'Support prioritaire dédié',
    ],
    priceNormal: '2999€',
    priceStudent: '2399€',
    popular: false,
    color: 'from-pink-500/20 to-purple-500/20',
  },
];

const additionalServices = [
  {
    id: 1,
    icon: Mic,
    title: 'Studio d\'enregistrement',
    services: [
      { name: 'Demi-journée (4h)', price: '350€', studentPrice: '280€' },
      { name: 'Journée complète (8h)', price: '600€', studentPrice: '480€' },
      { name: 'Package 5 jours (40h)', price: '2500€', studentPrice: '2000€' },
    ],
  },
  {
    id: 2,
    icon: Radio,
    title: 'Production musicale',
    services: [
      { name: 'Beat exclusif', price: '300€', studentPrice: '240€' },
      { name: 'Production complète (1 titre)', price: '600€', studentPrice: '480€' },
      { name: 'Production EP (4 titres)', price: '2000€', studentPrice: '1600€' },
    ],
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Promotion & Marketing',
    services: [
      { name: 'Campagne 1 mois', price: '500€', studentPrice: '400€' },
      { name: 'Campagne 3 mois', price: '1200€', studentPrice: '960€' },
      { name: 'Campagne 6 mois', price: '2000€', studentPrice: '1600€' },
    ],
  },
  {
    id: 4,
    icon: Share2,
    title: 'Clip vidéo & Contenu',
    services: [
      { name: 'Clip vidéo simple', price: '800€', studentPrice: '640€' },
      { name: 'Clip vidéo premium', price: '1500€', studentPrice: '1200€' },
      { name: 'Pack contenu réseaux sociaux', price: '400€', studentPrice: '320€' },
    ],
  },
];

export function Services() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des packages tout-inclus pour sortir votre musique professionnellement
          </p>
        </div>

        {/* Tabs for Normal / Student Pricing */}
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
                  <h3 className="text-xl mb-2">Tarifs Étudiants - 20% de réduction</h3>
                  <p className="text-sm text-muted-foreground">
                    Vous êtes étudiant(e) en école de musique, conservatoire ou université ? 
                    Bénéficiez de 20% de réduction sur tous nos packages. 
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
                          <div className="text-4xl text-primary">{pkg.priceStudent}</div>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary mt-2">
                          -20% Étudiant
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

        {/* Additional Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Services à la carte</h2>
            <p className="text-muted-foreground">
              Besoin de services spécifiques ? Composez votre package sur mesure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.services.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <span className="text-sm">{item.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">{item.studentPrice}</span>
                            <span className="font-semibold">{item.price}</span>
                          </div>
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
