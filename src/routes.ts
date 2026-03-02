import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { MusicPage } from './pages/MusicPage';
import { DemosPage } from './pages/DemosPage';
import { ContactPage } from './pages/ContactPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiesPolicyPage } from './pages/CookiesPolicyPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', Component: Home },
      { path: 'services', Component: ServicesPage },
      { path: 'artistes', Component: ArtistsPage },
      { path: 'musique', Component: MusicPage },
      { path: 'demos', Component: DemosPage },
      { path: 'contact', Component: ContactPage },
      { path: 'mentions-legales', Component: LegalNoticePage },
      { path: 'confidentialite', Component: PrivacyPolicyPage },
      { path: 'conditions', Component: TermsOfServicePage },
      { path: 'cookies', Component: CookiesPolicyPage },
      { path: '*', Component: NotFound },
    ],
  },
]);