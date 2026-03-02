import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  useEffect(() => {
    // Set page title
    document.title = 'MoonWave Records';
    
    // Set favicon using the hosted logo URL
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = 'https://i.ibb.co/t6CZpKR/image-circulaire-recadree-1.png';
    
    // Also add apple-touch-icon for iOS devices
    let appleLink = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleLink) {
      appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      document.head.appendChild(appleLink);
    }
    appleLink.href = 'https://i.ibb.co/t6CZpKR/image-circulaire-recadree-1.png';
  }, []);

  return <RouterProvider router={router} />;
}