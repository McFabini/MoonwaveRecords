import { useEffect } from 'react';
import { DemoSubmission } from '../components/DemoSubmission';

export function DemosPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <DemoSubmission />;
}
