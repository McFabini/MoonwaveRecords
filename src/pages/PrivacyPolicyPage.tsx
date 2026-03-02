import { useEffect } from 'react';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { useNavigate } from 'react-router';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return <PrivacyPolicy onNavigate={handleNavigate} />;
}
