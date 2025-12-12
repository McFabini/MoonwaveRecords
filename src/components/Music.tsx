import { useState } from 'react';
import { Play, Pause, Music2, User } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  bio: string;
}

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  year: number;
}

const artists: Artist[] = [
  {
    id: 1,
    name: 'Luna Eclipse',
    genre: 'Électro Dream',
    image: 'https://images.unsplash.com/photo-1611936042825-0c0edbf09893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNzk3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Artiste visionnaire mélangeant sonorités électroniques et mélodies lunaires',
  },
  {
    id: 2,
    name: 'Neon Waves',
    genre: 'Synthwave',
    image: 'https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY1MzIyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Pionnier du son rétro-futuriste avec des influences des années 80',
  },
  {
    id: 3,
    name: 'Starlight Collective',
    genre: 'Ambient',
    image: 'https://images.unsplash.com/photo-1611936042825-0c0edbf09893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNzk3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Collectif créant des paysages sonores immersifs et contemplatifs',
  },
];

const albums: Album[] = [
  {
    id: 1,
    title: 'Midnight Frequencies',
    artist: 'Luna Eclipse',
    cover: 'https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NjUzNTY5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2024,
  },
  {
    id: 2,
    title: 'Neon Dreams',
    artist: 'Neon Waves',
    cover: 'https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NjUzNTY5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2024,
  },
  {
    id: 3,
    title: 'Cosmic Echoes',
    artist: 'Starlight Collective',
    cover: 'https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NjUzNTY5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2023,
  },
  {
    id: 4,
    title: 'Purple Horizons',
    artist: 'Luna Eclipse',
    cover: 'https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NjUzNTY5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2023,
  },
];

export function Music() {
  const [playingAlbum, setPlayingAlbum] = useState<number | null>(null);

  const togglePlay = (albumId: number) => {
    if (playingAlbum === albumId) {
      setPlayingAlbum(null);
    } else {
      setPlayingAlbum(albumId);
    }
  };

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Nos Releases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les dernières sorties de nos artistes sur MoonWave Records
          </p>
        </div>

        {/* Albums */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Music2 className="w-6 h-6 text-primary" />
            <h3 className="text-2xl">Albums & Singles</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <Card
                key={album.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={() => togglePlay(album.id)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 p-0"
                    >
                      {playingAlbum === album.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="mb-1 text-sm">{album.title}</h4>
                  <p className="text-sm text-foreground/60">{album.artist}</p>
                  <p className="text-xs text-foreground/40 mt-1">{album.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Lecteur audio (interface uniquement) */}
        {playingAlbum && (
          <Card className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border p-4 z-40">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    {albums.find((a) => a.id === playingAlbum)?.title}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {albums.find((a) => a.id === playingAlbum)?.artist}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => togglePlay(playingAlbum)}
                  className="text-primary"
                >
                  <Pause className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}