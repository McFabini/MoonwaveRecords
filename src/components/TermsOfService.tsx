import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

interface TermsOfServiceProps {
  onNavigate: (section: string) => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
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
            Conditions Générales d'Utilisation
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
                Les présentes Conditions Générales d'Utilisation (CGU) régissent les relations contractuelles entre MoonWave Records et ses clients. En commandant nos services, vous acceptez sans réserve les présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">1. Objet</h2>
              <p>
                Les présentes CGU ont pour objet de définir les conditions dans lesquelles MoonWave Records fournit ses services de production musicale, distribution, promotion et publishing aux artistes et clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">2. Services proposés</h2>
              <p className="mb-4">
                MoonWave Records propose trois formules principales :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Package Single :</strong> 30€ (coût additionnel : +10€/minute supplémentaire)</li>
                <li><strong>Package EP :</strong> 60€ (coût additionnel : +15€/piste supplémentaire)</li>
                <li><strong>Package Album :</strong> 120€ (coût additionnel : +10€/piste supplémentaire)</li>
              </ul>
              <p className="mt-4 mb-4">
                Options supplémentaires :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Campagne Groover :</strong> 20€</li>
                <li><strong>Service Publishing :</strong> 40€</li>
              </ul>
              <p className="mt-4">
                <strong>Réduction étudiante :</strong> 50% sur tous les packages sur présentation d'un justificatif valide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">3. Commande</h2>
              <p className="mb-4">
                La commande est ferme et définitive dès validation du paiement. Le client recevra une confirmation par email contenant les détails de sa commande.
              </p>
              <p>
                Toute commande implique l'acceptation des prix, descriptions et disponibilités des services proposés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">4. Prix</h2>
              <p className="mb-4">
                Les prix sont indiqués en euros (€) TTC. MoonWave Records se réserve le droit de modifier ses tarifs à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
              <p>
                Des frais supplémentaires peuvent s'appliquer selon les spécifications du projet (pistes ou minutes supplémentaires).
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">5. Paiement</h2>
              <p className="mb-4">
                Le paiement s'effectue :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Par carte bancaire</li>
                <li>Par virement bancaire</li>
                <li>Par PayPal</li>
              </ul>
              <p className="mt-4">
                Un acompte de 50% peut être demandé pour certaines prestations. Le solde est à régler avant la livraison finale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">6. Délais d'exécution</h2>
              <p className="mb-4">
                Les délais d'exécution sont communiqués à titre indicatif et peuvent varier selon la complexité du projet :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Single : 2-4 semaines</li>
                <li>EP : 4-6 semaines</li>
                <li>Album : 6-12 semaines</li>
              </ul>
              <p className="mt-4">
                Ces délais courent à compter de la réception de tous les éléments nécessaires et du paiement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">7. Droit de rétractation</h2>
              <p>
                Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l'exécution a commencé avec l'accord préalable exprès du client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">8. Propriété intellectuelle</h2>
              <p className="mb-4">
                L'artiste conserve les droits d'auteur sur ses œuvres. MoonWave Records acquiert les droits nécessaires à l'exploitation, la distribution et la promotion des œuvres selon les termes du contrat signé.
              </p>
              <p>
                Les droits de distribution sont accordés à MoonWave Records pour une durée déterminée selon le contrat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">9. Révisions et modifications</h2>
              <p>
                Chaque package inclut un nombre défini de révisions (généralement 2 à 3). Toute révision supplémentaire pourra faire l'objet d'une facturation additionnelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">10. Garanties</h2>
              <p>
                MoonWave Records s'engage à fournir des services de qualité professionnelle. En cas de non-conformité manifeste, le client dispose d'un délai de 15 jours pour signaler les défauts constatés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">11. Responsabilité</h2>
              <p>
                MoonWave Records ne saurait être tenu responsable de l'inexécution du contrat en cas de force majeure. La responsabilité de MoonWave Records est limitée au montant de la prestation commandée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">12. Données personnelles</h2>
              <p>
                Les données personnelles collectées font l'objet d'un traitement informatique. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour plus d'informations, consultez notre <button onClick={() => onNavigate('privacy')} className="text-primary hover:underline">politique de confidentialité</button>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">13. Résiliation</h2>
              <p>
                En cas de manquement grave aux obligations contractuelles, le contrat peut être résilié de plein droit après mise en demeure restée sans effet pendant 15 jours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">14. Litiges</h2>
              <p className="mb-4">
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.
              </p>
              <p>
                Conformément à l'article L.612-1 du Code de la consommation, le client a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-foreground">15. Contact</h2>
              <p>
                Pour toute question concernant ces CGU, contactez-nous à : <a href="mailto:contact@moonwaverecords.com" className="text-primary hover:underline">contact@moonwaverecords.com</a>
              </p>
            </section>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}