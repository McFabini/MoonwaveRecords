import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation des champs
      if (!formData.name || !formData.email || !formData.message) {
        toast.error('Champs requis manquants', {
          description: 'Veuillez remplir tous les champs obligatoires.',
        });
        setIsSubmitting(false);
        return;
      }

      // Envoi vers Formspree
      const response = await fetch('https://formspree.io/f/xanrvvlz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès !', {
          description: 'Nous vous répondrons dans les plus brefs délais.',
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
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

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une question sur nos services ? Un projet musical ? N&apos;hésitez pas à nous contacter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card border-border">
              <h3 className="mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nom
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-input-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-input-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Objet de votre message"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-input-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-input-background border-border text-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Email</p>
                    <a
                      href="mailto:contact@moonwave-records.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      contact@moonwave-records.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Téléphone</p>
                    <a
                      href="tel:+33749437577"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +33 7 49 43 75 77
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Adresse</p>
                    <p className="text-foreground">
                      4 rue de la forêt
                      <br />
                      39260 Crenans, France
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="mb-6">Réseaux Sociaux</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}