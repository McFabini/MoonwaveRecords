import { useState } from 'react';
import { Link2, Music2, CheckCircle, AlertCircle, GraduationCap, Calculator, Megaphone, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import { Switch } from './ui/switch';
import { Checkbox } from './ui/checkbox';

export function DemoSubmission() {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    phone: '',
    genre: '',
    customGenre: '',
    package: '',
    extraMinutes: '',
    demoLink: '',
    socialLinks: '',
    description: '',
    isStudent: false,
    grooverPromotion: false,
    publishingService: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fonction pour calculer le coût total TTC
  const calculateTotalCost = () => {
    if (!formData.package) return null;

    let baseCost = 0;
    let extraCostPerUnit = 0;
    
    // Prix de base selon le package (HT)
    if (formData.package === 'single') {
      baseCost = 30;
      extraCostPerUnit = 10; // 10€ par minute supplémentaire
    } else if (formData.package === 'ep') {
      baseCost = 60;
      extraCostPerUnit = 15; // 15€ par piste supplémentaire
    } else if (formData.package === 'album') {
      baseCost = 120;
      extraCostPerUnit = 10; // 10€ par piste supplémentaire
    }

    // Calcul des frais supplémentaires
    const extraUnits = parseInt(formData.extraMinutes) || 0;
    const extraCost = extraUnits * extraCostPerUnit;
    
    // Total avant réduction (HT)
    let totalCostHT = baseCost + extraCost;
    
    // Réduction étudiant (-50%)
    if (formData.isStudent) {
      totalCostHT = totalCostHT / 2;
    }

    // Services additionnels HT (pas de réduction étudiant sur ces services)
    const grooverCostHT = formData.grooverPromotion ? 20 : 0;
    const publishingCostHT = formData.publishingService ? 70 : 0;
    const additionalServicesCostHT = grooverCostHT + publishingCostHT;
    
    // Total HT
    const totalHT = totalCostHT + additionalServicesCostHT;
    
    // Application de la TVA (×1.2 = +20%)
    const totalTTC = totalHT * 1.2;

    return {
      baseCost,
      extraCost,
      totalCostHT,
      isStudent: formData.isStudent,
      grooverCostHT,
      publishingCostHT,
      additionalServicesCostHT,
      totalHT,
      totalTTC,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation des champs requis
      if (!formData.artistName || !formData.email || !formData.description) {
        toast.error('Champs requis manquants', {
          description: 'Veuillez remplir tous les champs obligatoires.',
        });
        setIsSubmitting(false);
        return;
      }

      if (!formData.genre) {
        toast.error('Genre musical requis', {
          description: 'Veuillez sélectionner un genre musical.',
        });
        setIsSubmitting(false);
        return;
      }

      if (!formData.package) {
        toast.error('Package requis', {
          description: 'Veuillez sélectionner un package.',
        });
        setIsSubmitting(false);
        return;
      }

      if (!formData.demoLink) {
        toast.error('Lien de démo requis', {
          description: 'Veuillez fournir un lien vers votre démo.',
        });
        setIsSubmitting(false);
        return;
      }

      // Calcul du coût total TTC
      const totalCost = calculateTotalCost();
      if (!totalCost) {
        toast.error('Erreur de calcul du coût', {
          description: 'Veuillez vérifier vos entrées.',
        });
        setIsSubmitting(false);
        return;
      }

      // Préparer les données à envoyer
      const dataToSend = {
        ...formData,
        estimatedCost: `${totalCost.totalTTC}€`,
      };

      // Envoi vers Formspree
      const response = await fetch('https://formspree.io/f/mjknllpl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success('Démo envoyée avec succès!', {
          description: 'Notre équipe A&R l\'écoutera dans les prochains jours.',
        });

        // Réinitialiser le formulaire
        setFormData({
          artistName: '',
          email: '',
          phone: '',
          genre: '',
          customGenre: '',
          package: '',
          extraMinutes: '',
          demoLink: '',
          socialLinks: '',
          description: '',
          isStudent: false,
          grooverPromotion: false,
          publishingService: false,
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: 'Veuillez réessayer plus tard.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Soumettre une Démo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partagez votre musique avec notre équipe A&R
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Artist Name */}
                <div className="space-y-2">
                  <Label htmlFor="artistName">Nom d'artiste / Projet *</Label>
                  <Input
                    id="artistName"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleInputChange}
                    placeholder="Votre nom d'artiste"
                    required
                    className="bg-input-background border-border"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      className="bg-input-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+33 6 12 34 56 78"
                      className="bg-input-background border-border"
                    />
                  </div>
                </div>

                {/* Genre */}
                <div className="space-y-2">
                  <Label htmlFor="genre">Genre musical *</Label>
                  <Select
                    value={formData.genre}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, genre: value }))
                    }
                  >
                    <SelectTrigger className="bg-input-background border-border">
                      <SelectValue placeholder="Sélectionnez un genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="hiphop">Hip-Hop</SelectItem>
                      <SelectItem value="pop">Pop</SelectItem>
                      <SelectItem value="rock">Rock</SelectItem>
                      <SelectItem value="rnb">R&B</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="techno">Techno</SelectItem>
                      <SelectItem value="ambient">Ambient</SelectItem>
                      <SelectItem value="indie">Indie</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Genre */}
                {formData.genre === 'autre' && (
                  <div className="space-y-2">
                    <Label htmlFor="customGenre">Genre musical spécifique</Label>
                    <Input
                      id="customGenre"
                      name="customGenre"
                      value={formData.customGenre}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre genre musical spécifique"
                      className="bg-input-background border-border"
                    />
                  </div>
                )}

                {/* Package */}
                <div className="space-y-2">
                  <Label htmlFor="package">Package souhaité *</Label>
                  <Select
                    value={formData.package}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, package: value }))
                    }
                  >
                    <SelectTrigger className="bg-input-background border-border">
                      <SelectValue placeholder="Sélectionnez un package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single - 30€ HT (base 3min)</SelectItem>
                      <SelectItem value="ep">EP - 60€ HT (base 3 pistes)</SelectItem>
                      <SelectItem value="album">Album - 120€ HT (base 10 pistes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Extra Minutes/Tracks */}
                {formData.package && (
                  <div className="space-y-2">
                    <Label htmlFor="extraMinutes">
                      {formData.package === 'single' && 'Minutes supplémentaires (+10€ HT/min)'}
                      {formData.package === 'ep' && 'Pistes supplémentaires (+15€ HT/piste)'}
                      {formData.package === 'album' && 'Pistes supplémentaires (+10€ HT/piste)'}
                    </Label>
                    <Input
                      id="extraMinutes"
                      name="extraMinutes"
                      type="number"
                      min="0"
                      value={formData.extraMinutes}
                      onChange={handleInputChange}
                      placeholder={
                        formData.package === 'single' 
                          ? 'Nombre de minutes supplémentaires' 
                          : 'Nombre de pistes supplémentaires'
                      }
                      className="bg-input-background border-border"
                    />
                  </div>
                )}

                {/* Demo Link */}
                <div className="space-y-2">
                  <Label htmlFor="demoLink">Lien vers votre démo * (50 MB max)</Label>
                  <Input
                    id="demoLink"
                    name="demoLink"
                    value={formData.demoLink}
                    onChange={handleInputChange}
                    placeholder="https://www.soundcloud.com/your-demo"
                    required
                    className="bg-input-background border-border"
                  />
                </div>

                {/* Social Links */}
                <div className="space-y-2">
                  <Label htmlFor="socialLinks">Liens réseaux sociaux / Streaming</Label>
                  <Textarea
                    id="socialLinks"
                    name="socialLinks"
                    value={formData.socialLinks}
                    onChange={handleInputChange}
                    placeholder="Instagram, Spotify, SoundCloud, etc. (un lien par ligne)"
                    rows={3}
                    className="bg-input-background border-border resize-none"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Parlez-nous de votre projet *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre style musical, vos influences, vos objectifs..."
                    rows={5}
                    required
                    className="bg-input-background border-border resize-none"
                  />
                </div>

                {/* Student Status */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div>
                      <Label htmlFor="isStudent" className="cursor-pointer">
                        Êtes-vous étudiant(e) ?
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        -50% de réduction sur tous les packages
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="isStudent"
                    checked={formData.isStudent}
                    onCheckedChange={(checked) => 
                      setFormData((prev) => ({ ...prev, isStudent: checked }))
                    }
                  />
                </div>

                {/* Additional Services */}
                <div className="space-y-3">
                  <Label>Services additionnels (optionnels)</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Groover Promotion */}
                    <div 
                      className={`relative p-5 rounded-lg border-2 transition-all ${
                        formData.grooverPromotion 
                          ? 'border-accent bg-accent/5' 
                          : 'border-border bg-card hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="grooverPromotion"
                          checked={formData.grooverPromotion}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, grooverPromotion: !!checked }))
                          }
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Megaphone className="w-5 h-5 text-accent" />
                            <Label htmlFor="grooverPromotion" className="cursor-pointer">
                              Promotion Groover
                            </Label>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">
                            Faites découvrir votre musique à des curateurs professionnels
                          </p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl text-accent">20€</span>
                            <span className="text-xs text-muted-foreground">HT</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Publishing Service */}
                    <div 
                      className={`relative p-5 rounded-lg border-2 transition-all ${
                        formData.publishingService 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="publishingService"
                          checked={formData.publishingService}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, publishingService: !!checked }))
                          }
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-5 h-5 text-primary" />
                            <Label htmlFor="publishingService" className="cursor-pointer">
                              Service Publishing
                            </Label>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">
                            Gérez vos droits d'auteur et maximisez vos revenus
                          </p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl text-primary">70€</span>
                            <span className="text-xs text-muted-foreground">HT</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Simulation */}
                {formData.package && (() => {
                  const costDetails = calculateTotalCost();
                  if (!costDetails) return null;

                  return (
                    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Calculator className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="mb-1">Simulation de paiement</h3>
                          <p className="text-xs text-muted-foreground mb-4">
                            Estimation du coût total pour votre projet
                          </p>

                          <div className="space-y-2">
                            {/* Prix de base */}
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Package {formData.package === 'single' ? 'Single' : formData.package === 'ep' ? 'EP' : 'Album'}
                              </span>
                              <span>{costDetails.baseCost}€</span>
                            </div>

                            {/* Frais supplémentaires */}
                            {costDetails.extraCost > 0 && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                  {formData.package === 'single' 
                                    ? `${formData.extraMinutes} minute(s) supplémentaire(s)`
                                    : `${formData.extraMinutes} piste(s) supplémentaire(s)`}
                                </span>
                                <span>+{costDetails.extraCost}€</span>
                              </div>
                            )}

                            {/* Réduction étudiant */}
                            {costDetails.isStudent && (
                              <div className="flex items-center justify-between text-sm text-primary">
                                <span className="flex items-center gap-1">
                                  <GraduationCap className="w-4 h-4" />
                                  Réduction Étudiant
                                </span>
                                <span>-50%</span>
                              </div>
                            )}

                            {/* Services additionnels */}
                            {costDetails.grooverCostHT > 0 && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                  Promotion Groover
                                </span>
                                <span>+{costDetails.grooverCostHT}€</span>
                              </div>
                            )}
                            {costDetails.publishingCostHT > 0 && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                  Service de publication
                                </span>
                                <span>+{costDetails.publishingCostHT}€</span>
                              </div>
                            )}

                            {/* Séparateur */}
                            <div className="border-t border-border pt-3 mt-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Total HT</span>
                                <span className="text-base">{costDetails.totalHT}€</span>
                              </div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-muted-foreground">TVA (20%)</span>
                                <span className="text-base">+{(costDetails.totalTTC - costDetails.totalHT).toFixed(2)}€</span>
                              </div>
                              <div className="flex items-center justify-between border-t border-border pt-3">
                                <span className="text-base">Total TTC</span>
                                <div className="text-right">
                                  <div className="text-3xl text-primary">
                                    {costDetails.totalTTC.toFixed(2)}€
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })()}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma démo'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* How to Share Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-primary/10 border-primary/30 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Link2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-3">Comment partager votre démo</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Uploadez votre démo sur l'une de ces plateformes :
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>🔗 Google Drive</li>
                      <li>🔗 Dropbox</li>
                      <li>🔗 WeTransfer</li>
                      <li>🔗 SwissTransfer</li>
                      <li>🔗 SoundCloud (privé)</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      Assurez-vous que le lien est accessible (public ou avec lien de partage).
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2">Ce que nous recherchons</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Production de qualité</li>
                      <li>✓ Son original et unique</li>
                      <li>✓ Potentiel commercial</li>
                      <li>✓ Engagement sur les réseaux</li>
                      <li>✓ Vision artistique claire</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Music2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2">Processus de sélection</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>1. Écoute par notre équipe A&R</li>
                      <li>2. Réponse sous 2-3 semaines</li>
                      <li>3. Rendez-vous si sélectionné</li>
                      <li>4. Discussion des opportunités</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}