import { useEffect } from 'react';
import { TermsOfService } from '../components/TermsOfService';
import { useNavigate } from 'react-router';

export function TermsOfServicePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return <TermsOfService onNavigate={handleNavigate} />;
}
