import { useState } from 'react';
import { Play, Pause, Music2, Disc, Album } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  year: number;
}

interface Single {
  id: number;
  title: string;
  artist: string;
  cover: string;
  year: number;
}

interface EP {
  id: number;
  title: string;
  artist: string;
  cover: string;
  year: number;
  tracks: number;
}

const albums: Album[] = [];

const singles: Single[] = [];

const eps: EP[] = [];

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
            Nos Releases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les dernières sorties de nos artistes sur MoonWave Records
          </p>
        </motion.div>

        {/* Singles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <Music2 className="w-6 h-6 text-primary" />
            <h3 className="text-2xl">Singles</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {singles.map((single) => (
              <Card
                key={single.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={single.cover}
                    alt={single.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={() => togglePlay(single.id)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 p-0"
                    >
                      {playingAlbum === single.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="mb-1 text-sm">{single.title}</h4>
                  <p className="text-sm text-foreground/60">{single.artist}</p>
                  <p className="text-xs text-foreground/40 mt-1">{single.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* EPs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <Disc className="w-6 h-6 text-primary" />
            <h3 className="text-2xl">EPs</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eps.map((ep) => (
              <Card
                key={ep.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={ep.cover}
                    alt={ep.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={() => togglePlay(ep.id)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 p-0"
                    >
                      {playingAlbum === ep.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm">{ep.title}</h4>
                    <Badge variant="secondary" className="text-xs">{ep.tracks} pistes</Badge>
                  </div>
                  <p className="text-sm text-foreground/60">{ep.artist}</p>
                  <p className="text-xs text-foreground/40 mt-1">{ep.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Albums */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <Album className="w-6 h-6 text-primary" />
            <h3 className="text-2xl">Albums</h3>
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
        </motion.div>

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