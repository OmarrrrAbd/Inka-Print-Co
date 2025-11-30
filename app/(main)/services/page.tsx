'use client';

import React, { useEffect } from 'react';
import ServicesPage from '@/components/pages/ServicesPage';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  useEffect(() => {
    // Gérer le scroll vers une section si hash présent dans l'URL
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    }
  }, []);

  const handlePageChange = (page: string) => {
    if (page.includes('#')) {
      const [pageName, sectionId] = page.split('#');
      router.push(`/${pageName === 'home' ? '' : pageName}#${sectionId}`);
    } else {
      router.push(`/${page === 'home' ? '' : page}`);
    }
  };

  return <ServicesPage setCurrentPage={handlePageChange} />;
}

