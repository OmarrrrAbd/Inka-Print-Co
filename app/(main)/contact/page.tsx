'use client';

import React from 'react';
import ContactInfoPage from '@/components/pages/ContactInfoPage';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    router.push(`/${page === 'home' ? '' : page}`);
  };

  return <ContactInfoPage setCurrentPage={handlePageChange} />;
}

