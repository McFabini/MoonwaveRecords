import { Calendar, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const articles: NewsArticle[] = [
  {
    id: 1,
    title: 'Sortie du nouvel album de Luna Eclipse',
    excerpt:
      "Découvrez 'Midnight Frequencies', le nouvel opus qui promet de révolutionner la scène électronique avec ses mélodies envoûtantes et ses textures sonores innovantes.",
    date: '5 Décembre 2024',
    category: 'Sortie',
    image: 'https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NjUzNTY5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '3 min',
  },
  {
    id: 2,
    title: 'MoonWave Festival 2025 annoncé',
    excerpt:
      "Préparez-vous pour l'événement musical de l'année ! Le MoonWave Festival revient avec une programmation exceptionnelle et des surprises inédites.",
    date: '28 Novembre 2024',
    category: 'Événement',
    image: 'https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY1MzIyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '5 min',
  },
  {
    id: 3,
    title: 'Collaboration exclusive avec Neon Waves',
    excerpt:
      "Une fusion unique entre Luna Eclipse et Neon Waves pour un projet collaboratif qui mêle électro dream et synthwave dans une expérience sonore inédite.",
    date: '20 Novembre 2024',
    category: 'Collaboration',
    image: 'https://images.unsplash.com/photo-1611936042825-0c0edbf09893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNzk3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '4 min',
  },
  {
    id: 4,
    title: 'Nouvelle collection de vêtements disponible',
    excerpt:
      'Découvrez notre collection capsule hiver 2024 avec des pièces exclusives qui allient style urbain et esthétique nocturne, inspirée par nos artistes.',
    date: '15 Novembre 2024',
    category: 'Boutique',
    image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NTMxMDEzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '2 min',
  },
  {
    id: 5,
    title: 'Starlight Collective en tournée européenne',
    excerpt:
      "Le collectif ambient partira en tournée à travers l'Europe en 2025. Dates et billetterie disponibles dès maintenant pour une expérience immersive unique.",
    date: '10 Novembre 2024',
    category: 'Tournée',
    image: 'https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY1MzIyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '6 min',
  },
  {
    id: 6,
    title: 'Interview exclusive avec Luna Eclipse',
    excerpt:
      "Plongez dans l'univers créatif de Luna Eclipse dans cette interview exclusive où elle partage son processus de création et ses inspirations nocturnes.",
    date: '1 Novembre 2024',
    category: 'Interview',
    image: 'https://images.unsplash.com/photo-1611936042825-0c0edbf09893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNzk3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '8 min',
  },
];

export function News() {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Actualités
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Restez informés des dernières sorties, événements et collaborations
          </p>
        </div>

        {/* Article principal (featured) */}
        <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 mb-12 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                À la une
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-accent/20 text-accent border-accent">
                {articles[0].category}
              </Badge>
              <h3 className="text-3xl mb-4">{articles[0].title}</h3>
              <p className="text-foreground/70 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-foreground/50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{articles[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{articles[0].readTime} de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-accent/80 text-accent-foreground backdrop-blur-sm">
                  {article.category}
                </Badge>
              </div>
              <div className="p-6">
                <h4 className="mb-3">{article.title}</h4>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-foreground/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
