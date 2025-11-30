'use client';

import React from 'react';
import AboutPage from '@/components/pages/AboutPage';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    router.push(`/${page === 'home' ? '' : page}`);
  };

  return <AboutPage setCurrentPage={handlePageChange} />;
}

