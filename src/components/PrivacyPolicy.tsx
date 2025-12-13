import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

interface PrivacyPolicyProps {
  onNavigate: (section: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-8 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Button>

          <h1 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Politique de Confidentialité
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-border space-y-8">
            <section>
              <p className="mb-4">
                <strong>Date de dernière mise à jour :</strong> 13 décembre 2024
              </p>
              <p>
                MoonWave Records s'engage à protéger la confidentialité des informations personnelles de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">1. Données collectées</h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Informations relatives à votre navigation sur le site (via cookies)</li>
                <li>Démonstrations musicales et fichiers soumis</li>
                <li>Toute autre information que vous choisissez de partager avec nous</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">2. Utilisation des données</h2>
              <p className="mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traiter vos demandes de contact et de soumission de démos</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer nos services et l'expérience utilisateur</li>
                <li>Respecter nos obligations légales</li>
                <li>Communiquer avec vous concernant nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">3. Base légale du traitement</h2>
              <p className="mb-4">
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Votre consentement (newsletter, cookies)</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                <li>Notre intérêt légitime à gérer et améliorer nos services</li>
                <li>Le respect d'obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">4. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la réglementation en vigueur. Les démonstrations non retenues sont supprimées après 12 mois.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">5. Partage des données</h2>
              <p className="mb-4">
                Nous ne vendons pas vos données personnelles. Vos données peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nos prestataires de services (hébergement, emailing) sous contrat de confidentialité</li>
                <li>Les autorités compétentes si la loi l'exige</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">6. Vos droits</h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@moonwaverecords.com" className="text-primary hover:underline">privacy@moonwaverecords.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">7. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">8. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour plus d'informations, consultez notre <button onClick={() => onNavigate('cookies')} className="text-primary hover:underline">politique de cookies</button>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">9. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">10. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, contactez-nous à : <a href="mailto:privacy@moonwaverecords.com" className="text-primary hover:underline">privacy@moonwaverecords.com</a>
              </p>
            </section>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}