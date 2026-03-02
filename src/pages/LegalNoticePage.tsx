import { useEffect } from 'react';
import { LegalNotice } from '../components/LegalNotice';
import { useNavigate } from 'react-router';

export function LegalNoticePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return <LegalNotice onNavigate={handleNavigate} />;
}
