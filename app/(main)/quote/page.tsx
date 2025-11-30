'use client';

import React from 'react';
import ContactPage from '@/components/pages/ContactPage';
import { useRouter } from 'next/navigation';

export default function Quote() {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    router.push(`/${page === 'home' ? '' : page}`);
  };

  return <ContactPage setCurrentPage={handlePageChange} />;
}

