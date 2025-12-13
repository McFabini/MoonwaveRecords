import { useState } from 'react';
import { Upload, Music2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function DemoSubmission() {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    phone: '',
    genre: '',
    customGenre: '',
    package: '',
    extraMinutes: '',
    socialLinks: '',
    description: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Vérifier la taille (50 MB max)
      if (selectedFile.size > 50 * 1024 * 1024) {
        toast.error('Fichier trop volumineux', {
          description: 'La taille maximale est de 50 MB.',
        });
        return;
      }
      setFile(selectedFile);
      toast.success('Fichier chargé', {
        description: `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`,
      });
    }
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

      if (!file) {
        toast.error('Fichier audio requis', {
          description: 'Veuillez télécharger votre démo.',
        });
        setIsSubmitting(false);
        return;
      }

      // Calcul du coût estim
      let estimatedCost = 0;
      if (formData.package === 'single') {
        estimatedCost = 30 + (parseInt(formData.extraMinutes) || 0) * 10;
      } else if (formData.package === 'ep') {
        estimatedCost = 60 + (parseInt(formData.extraMinutes) || 0) * 15;
      } else if (formData.package === 'album') {
        estimatedCost = 120 + (parseInt(formData.extraMinutes) || 0) * 10;
      }

      // Créer un FormData pour envoyer le fichier
      const formDataToSend = new FormData();
      formDataToSend.append('demoFile', file);
      formDataToSend.append('artistName', formData.artistName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('genre', formData.genre);
      formDataToSend.append('customGenre', formData.customGenre);
      formDataToSend.append('package', formData.package);
      formDataToSend.append('extraMinutes', formData.extraMinutes);
      formDataToSend.append('socialLinks', formData.socialLinks);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('estimatedCost', `${estimatedCost}€`);

      // Envoi vers le backend maison
      const response = await fetch('http://localhost:3001/api/demo', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok && data.success) {
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
          socialLinks: '',
          description: '',
        });
        setFile(null);
        
        // Réinitialiser l'input file
        const fileInput = document.getElementById('file') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: error instanceof Error ? error.message : 'Veuillez vérifier que le serveur est lancé (npm run server)',
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
                      <SelectItem value="single">Single - 30€ (base 3min)</SelectItem>
                      <SelectItem value="ep">EP - 60€ (base 3 pistes)</SelectItem>
                      <SelectItem value="album">Album - 120€ (base 10 pistes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Extra Minutes/Tracks */}
                {formData.package && (
                  <div className="space-y-2">
                    <Label htmlFor="extraMinutes">
                      {formData.package === 'single' && 'Minutes supplémentaires (+10€/min)'}
                      {formData.package === 'ep' && 'Pistes supplémentaires (+15€/piste)'}
                      {formData.package === 'album' && 'Pistes supplémentaires (+10€/piste)'}
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

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file">Télécharger votre démo * (50 MB max)</Label>
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => document.getElementById('file')?.click()}
                  >
                    <div className={`
                      border-2 border-dashed rounded-lg p-8 text-center transition-all
                      ${file 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border bg-input-background hover:border-primary hover:bg-primary/5'
                      }
                    `}>
                      <Upload className={`
                        w-12 h-12 mx-auto mb-4 transition-transform group-hover:scale-110
                        ${file ? 'text-primary' : 'text-muted-foreground'}
                      `} />
                      
                      {file ? (
                        <div className="space-y-2">
                          <p className="text-primary">✓ Fichier chargé</p>
                          <p className="text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <p className="text-xs text-muted-foreground mt-3">
                            Cliquez pour changer de fichier
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-foreground">
                            Cliquez pour sélectionner votre démo
                          </p>
                          <p className="text-sm text-muted-foreground">
                            MP3, WAV, FLAC, AAC, OGG, M4A
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Maximum 50 MB
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      accept="audio/*,.mp3,.wav,.flac,.aac,.ogg,.m4a"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </div>
                </div>

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
            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
              transition={{ duration: 0.6, delay: 0.4 }}
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

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-destructive/10 border-destructive/30 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-2 text-sm">Important</h4>
                    <p className="text-sm text-muted-foreground">
                      En raison du volume de soumissions, nous ne pouvons répondre qu'aux
                      démos qui correspondent à notre ligne artistique. Merci de votre
                      compréhension.
                    </p>
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