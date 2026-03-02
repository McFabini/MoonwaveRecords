import { useEffect } from 'react';
import { CookiesPolicy } from '../components/CookiesPolicy';
import { useNavigate } from 'react-router';

export function CookiesPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return <CookiesPolicy onNavigate={handleNavigate} />;
}
