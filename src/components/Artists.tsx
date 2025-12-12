import { ImageWithFallback } from './figma/ImageWithFallback';
import { Instagram, Twitter, Facebook, Music } from 'lucide-react';
import { Badge } from './ui/badge';

const artists = [
  {
    id: 1,
    name: 'Luna Nova',
    genre: 'Electronic Pop',
    image: 'https://images.unsplash.com/photo-1666143208844-ac2f983b171a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBtaWNyb3Bob25lJTIwc3RhZ2V8ZW58MXx8fHwxNzY1NDkxNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Artiste électro-pop émergente avec un son unique mêlant synthés vintage et production moderne.',
    releases: 5,
    socials: {
      instagram: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    id: 2,
    name: 'Shadow Beats',
    genre: 'Hip-Hop',
    image: 'https://images.unsplash.com/photo-1728301078583-53bcfdcc2861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHBlcmZvcm1pbmd8ZW58MXx8fHwxNzY1NTA1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Producteur et rappeur talentueux reconnu pour ses lyrics percutants et ses beats innovants.',
    releases: 8,
    socials: {
      instagram: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    id: 3,
    name: 'DJ Neon',
    genre: 'House / Techno',
    image: 'https://images.unsplash.com/photo-1647160494152-4c8eb24a844b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG1peGluZyUyMG11c2ljfGVufDF8fHx8MTc2NTM5NDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'DJ et producteur de musique électronique spécialisé dans la house progressive et la techno mélodique.',
    releases: 12,
    socials: {
      instagram: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    id: 4,
    name: 'Stellar Waves',
    genre: 'Ambient / Chillwave',
    image: 'https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc2NTQxODYxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Créateur de paysages sonores atmosphériques qui transportent l\'auditeur dans des univers cosmiques.',
    releases: 6,
    socials: {
      instagram: '#',
      twitter: '#',
      facebook: '#',
    },
  },
];

export function Artists() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl tracking-wider bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Notre Roster
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les artistes talentueux qui font partie de la famille MoonWave Records
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
                <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                  {artist.genre}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl mb-1">{artist.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Music className="w-4 h-4" />
                      <span className="text-sm">{artist.releases} Releases</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">{artist.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={artist.socials.instagram}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={artist.socials.twitter}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={artist.socials.facebook}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border">
          <h3 className="text-2xl mb-3">Vous voulez rejoindre notre roster ?</h3>
          <p className="text-muted-foreground mb-6">
            Soumettez votre démo et notre équipe A&R l'écoutera attentivement
          </p>
        </div>
      </div>
    </section>
  );
}
