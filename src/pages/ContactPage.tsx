import { useEffect } from 'react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <Contact />;
}
