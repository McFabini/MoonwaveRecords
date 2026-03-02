import { useEffect } from 'react';
import { Services } from '../components/Services';
import { useNavigate } from 'react-router';

export function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return <Services onNavigate={handleNavigate} />;
}
