import { useEffect } from 'react';
import { Music } from '../components/Music';

export function MusicPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <Music />;
}
