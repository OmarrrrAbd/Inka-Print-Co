'use client';

import React from 'react';
import ProductVariantPage from '@/components/pages/ProductVariantPage';
import { useRouter } from 'next/navigation';

export default function CategoryProductClient({ categorySlug }: { categorySlug: string }) {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    if (page === 'catalogue') {
      router.push('/catalogue');
    } else {
      router.push(`/${page === 'home' ? '' : page}`);
    }
  };

  return <ProductVariantPage categorySlug={categorySlug} setCurrentPage={handlePageChange} />;
}

