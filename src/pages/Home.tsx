import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { useNavigate } from 'react-router';

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return <Hero onNavigate={handleNavigate} />;
}
