import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

interface CookiesPolicyProps {
  onNavigate: (section: string) => void;
}

export function CookiesPolicy({ onNavigate }: CookiesPolicyProps) {
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
            Politique de Cookies
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
                Cette politique explique comment MoonWave Records utilise les cookies et technologies similaires sur son site web. En utilisant notre site, vous acceptez l'utilisation de cookies conformément à cette politique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">1. Qu'est-ce qu'un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors de la visite d'un site web. Les cookies permettent au site de reconnaître votre appareil et de mémoriser certaines informations sur vos préférences ou actions passées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">2. Types de cookies utilisés</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-xl mb-2 text-foreground">2.1. Cookies strictement nécessaires</h3>
                  <p className="mb-2">
                    Ces cookies sont essentiels au fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Gestion de session</li>
                    <li>Sécurité et prévention de la fraude</li>
                    <li>Équilibrage de charge</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-2 text-foreground">2.2. Cookies de performance</h3>
                  <p className="mb-2">
                    Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site, comme les pages les plus visitées. Ces données nous aident à améliorer le fonctionnement du site.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Google Analytics (analyse d'audience)</li>
                    <li>Temps de chargement des pages</li>
                    <li>Messages d'erreur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-2 text-foreground">2.3. Cookies de fonctionnalité</h3>
                  <p className="mb-2">
                    Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre langue ou région) et offrent des fonctionnalités améliorées et personnalisées.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Préférences d'affichage</li>
                    <li>Préférences linguistiques</li>
                    <li>Lecteur audio (mémorisation du volume)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-2 text-foreground">2.4. Cookies de ciblage/publicité</h3>
                  <p className="mb-2">
                    Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts. Ils servent également à limiter le nombre de fois où vous voyez une publicité et à mesurer l'efficacité des campagnes publicitaires.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Réseaux sociaux (partage de contenu)</li>
                    <li>Publicité ciblée</li>
                    <li>Suivi des conversions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">3. Cookies tiers</h2>
              <p className="mb-4">
                Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Nous utilisons notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics :</strong> pour analyser l'utilisation du site</li>
                <li><strong>YouTube :</strong> pour les vidéos intégrées</li>
                <li><strong>SoundCloud/Spotify :</strong> pour les lecteurs audio intégrés</li>
                <li><strong>Réseaux sociaux :</strong> Facebook, Instagram, Twitter pour les boutons de partage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">4. Durée de conservation</h2>
              <p className="mb-4">
                Les cookies ont des durées de vie variables :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies de session :</strong> supprimés lorsque vous fermez votre navigateur</li>
                <li><strong>Cookies persistants :</strong> restent sur votre appareil pendant une durée déterminée (généralement 13 mois maximum)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">5. Gestion des cookies</h2>
              <p className="mb-4">
                Vous pouvez contrôler et gérer les cookies de plusieurs façons :
              </p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-xl mb-2 text-foreground">5.1. Paramètres du navigateur</h3>
                  <p className="mb-2">
                    La plupart des navigateurs vous permettent de refuser ou d'accepter les cookies. Voici comment accéder aux paramètres des cookies dans les principaux navigateurs :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                    <li><strong>Firefox :</strong> Paramètres &gt; Vie privée et sécurité &gt; Cookies</li>
                    <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
                    <li><strong>Edge :</strong> Paramètres &gt; Cookies et autorisations de site</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-2 text-foreground">5.2. Outils de désactivation</h3>
                  <p className="mb-2">
                    Vous pouvez également utiliser des outils spécifiques pour gérer les cookies :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Google Analytics Opt-out : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
                    <li>Your Online Choices (publicité) : <a href="https://www.youronlinechoices.com/fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.youronlinechoices.com/fr/</a></li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm bg-accent/10 p-4 rounded-lg border border-accent/20">
                <strong>Note :</strong> Le blocage de certains cookies peut affecter votre expérience sur notre site et limiter l'accès à certaines fonctionnalités.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">6. Consentement</h2>
              <p className="mb-4">
                Lors de votre première visite sur notre site, un bandeau vous informe de la présence de cookies et vous demande votre consentement. Vous pouvez :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accepter tous les cookies</li>
                <li>Refuser les cookies non essentiels</li>
                <li>Personnaliser vos préférences</li>
              </ul>
              <p className="mt-4">
                Vous pouvez modifier vos choix à tout moment en cliquant sur le lien "Gérer les cookies" présent en bas de page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">7. Cookies et données personnelles</h2>
              <p>
                Certains cookies peuvent collecter des données personnelles. Ces données sont traitées conformément à notre <button onClick={() => onNavigate('privacy')} className="text-primary hover:underline">politique de confidentialité</button> et à la réglementation RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">8. Modifications de la politique</h2>
              <p>
                MoonWave Records se réserve le droit de modifier cette politique de cookies à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">9. Contact</h2>
              <p>
                Pour toute question concernant notre utilisation des cookies, contactez-nous à : <a href="mailto:privacy@moonwaverecords.com" className="text-primary hover:underline">privacy@moonwaverecords.com</a>
              </p>
            </section>

            <section className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-xl mb-3 text-foreground">Besoin d'aide ?</h3>
              <p>
                Si vous avez des questions sur les cookies ou souhaitez exercer vos droits concernant vos données personnelles, n'hésitez pas à nous contacter. Notre équipe est à votre disposition pour vous aider.
              </p>
            </section>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}