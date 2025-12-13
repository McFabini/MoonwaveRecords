import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface LegalNoticeProps {
  onNavigate: (section: string) => void;
}

export function LegalNotice({ onNavigate }: LegalNoticeProps) {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Button>

        <h1 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl mb-4 text-foreground">1. Éditeur du site</h2>
            <p className="mb-2">
              <strong>Nom de l'entreprise :</strong> MoonWave Records
            </p>
            <p className="mb-2">
              <strong>Forme juridique :</strong> Label de musique indépendant
            </p>
            <p className="mb-2">
              <strong>Adresse :</strong> [À compléter]
            </p>
            <p className="mb-2">
              <strong>Email :</strong> contact@moonwaverecords.com
            </p>
            <p className="mb-2">
              <strong>Téléphone :</strong> [À compléter]
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est [Nom à compléter], représentant légal de MoonWave Records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">3. Hébergement</h2>
            <p className="mb-2">
              Le site est hébergé par :
            </p>
            <p className="mb-2">
              <strong>Nom de l'hébergeur :</strong> [À compléter]
            </p>
            <p className="mb-2">
              <strong>Adresse :</strong> [À compléter]
            </p>
            <p>
              <strong>Site web :</strong> [À compléter]
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de MoonWave Records, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de MoonWave Records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">5. Limitation de responsabilité</h2>
            <p className="mb-4">
              MoonWave Records ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site.
            </p>
            <p>
              MoonWave Records s'efforce de fournir des informations aussi précises que possible, mais ne peut garantir l'exactitude, la complétude et l'actualité des informations diffusées sur son site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites. MoonWave Records n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site sera soumis à la juridiction des tribunaux français compétents.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
