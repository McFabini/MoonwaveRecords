import { useState } from 'react';
import { Upload, Music2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

export function DemoSubmission() {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    phone: '',
    genre: '',
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
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation de l'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success('Démo envoyée avec succès!', {
      description: 'Notre équipe A&R l\'écoutera dans les prochains jours.',
    });

    // Réinitialiser le formulaire
    setFormData({
      artistName: '',
      email: '',
      phone: '',
      genre: '',
      socialLinks: '',
      description: '',
    });
    setFile(null);
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Soumettre une Démo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partagez votre musique avec notre équipe A&R
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
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
                  <Label htmlFor="file">Upload votre démo *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      id="file"
                      accept="audio/*,.mp3,.wav,.m4a"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="file"
                      className="cursor-pointer flex flex-col items-center gap-3"
                    >
                      <Upload className="w-12 h-12 text-primary" />
                      {file ? (
                        <div className="space-y-1">
                          <p className="text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      ) : (
                        <>
                          <p>Cliquez pour uploader votre démo</p>
                          <p className="text-sm text-muted-foreground">
                            MP3, WAV, M4A (max 50MB)
                          </p>
                        </>
                      )}
                    </label>
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
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Guidelines */}
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

            {/* Process */}
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

            {/* Important Note */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
