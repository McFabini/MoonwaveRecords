import { Check, Music, Radio, TrendingUp, Mic, Disc, Share2, GraduationCap, Sparkles, Megaphone, FileText, CreditCard, Landmark, Smartphone, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

const releasePackages = [
  {
    id: 'single',
    icon: Music,
    title: 'Package Single',
    subtitle: '1 titre - 3min inclus',
    description: '',
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
      'Temps additionnel : +5€ par minute',
    ],
    priceNormal: '30€',
    priceStudent: '15€',
    priceType: 'HT',
    popular: false,
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'ep',
    icon: Disc,
    title: 'Package EP',
    subtitle: '3 titres inclus',
    description: '',
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
    priceType: 'HT',
    popular: false,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'album',
    icon: Sparkles,
    title: 'Package Album',
    subtitle: '10 titres inclus',
    description: '',
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
      'Pistes supplémentaires : +10€ par piste',
    ],
    priceNormal: '120€',
    priceStudent: '60€',
    priceType: 'HT',
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
      { name: 'Campagne promotionnelle Groover', price: '20€ HT', studentPrice: '20€ HT' },
    ],
  },
  {
    id: 2,
    icon: FileText,
    title: 'Service Publishing',
    description: 'Gérez vos droits d\'auteur et maximisez vos revenus',
    services: [
      { name: 'Service Publishing complet', price: '70€ HT', studentPrice: '70€ HT' },
    ],
  },
];

export function Services({ onNavigate }: ServicesProps) {
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const isArtist = data.name === 'Artiste';
      const backgroundColor = isArtist ? '#6366f1' : '#a855f7';
      const borderColor = isArtist ? '#818cf8' : '#c084fc';
      
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
                          <div className="text-xs text-muted-foreground">HT</div>
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
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => onNavigate?.('demos')}
                        >
                          Soumettre une Démo
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
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => onNavigate?.('demos')}
                        >
                          Soumettre une Démo
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Revenue Split Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/30 overflow-hidden">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl mb-2">Répartition des Revenus</CardTitle>
              <CardDescription className="text-base">
                Une répartition équitable et transparente des revenus générés par vos sorties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Pie Chart */}
                <div className="w-full flex items-center justify-center py-8">
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
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1e1b4b',
                        border: '1px solid #6366f1',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }}
                      formatter={(value: number) => `${value}%`}
                      content={<CustomTooltip />}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      iconType="circle"
                      formatter={(value) => <span className="text-foreground">{value}</span>}
                    />
                  </PieChart>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div className="p-6 bg-card/50 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl text-primary">80%</h4>
                        <p className="text-sm text-muted-foreground">Pour l'Artiste</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vous conservez la grande majorité de vos revenus. C'est votre musique, 
                      vous méritez d'en profiter pleinement.
                    </p>
                  </div>

                  <div className="p-6 bg-card/50 rounded-xl border border-accent/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Radio className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-2xl text-accent">20%</h4>
                        <p className="text-sm text-muted-foreground">Pour MoonWave Records</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Couvre la distribution, le maintien sur les plateformes, le support technique 
                      et les outils professionnels mis à votre disposition.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">
                      💡 <span className="text-foreground">Paiements mensuels</span> - Recevez vos revenus 
                      directement chaque mois, avec des rapports détaillés de vos performances.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => onNavigate?.('contact')}>
            Envoyer un e-mail
          </Button>
        </div>

        {/* Payment Options */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-2">Moyens de paiement acceptés</h3>
            <p className="text-sm text-muted-foreground">
              Payez en toute sécurité avec votre méthode préférée
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-all p-6 flex flex-col items-center justify-center gap-3">
              <CreditCard className="w-8 h-8 text-primary" />
              <p className="text-sm text-center">Carte Bancaire</p>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-all p-6 flex flex-col items-center justify-center gap-3">
              <Landmark className="w-8 h-8 text-primary" />
              <p className="text-sm text-center">Virement Bancaire</p>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-all p-6 flex flex-col items-center justify-center gap-3">
              <Wallet className="w-8 h-8 text-primary" />
              <p className="text-sm text-center">Revolut Pay</p>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-all p-6 flex flex-col items-center justify-center gap-3">
              <Smartphone className="w-8 h-8 text-primary" />
              <p className="text-sm text-center">Google Pay</p>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-all p-6 flex flex-col items-center justify-center gap-3">
              <Smartphone className="w-8 h-8 text-primary" />
              <p className="text-sm text-center">Apple Pay</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}