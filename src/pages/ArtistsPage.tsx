import { useEffect } from 'react';
import { Artists } from '../components/Artists';

export function ArtistsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <Artists />;
}
