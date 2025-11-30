'use client';

import React from 'react';
import HomePage from '@/components/pages/HomePage';
import { useRouter } from 'next/navigation';
import { getProductById } from '@/lib/products';

export default function Home() {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    if (page.includes('#')) {
      const [pageName, sectionId] = page.split('#');
      router.push(`/${pageName === 'home' ? '' : pageName}#${sectionId}`);
    } else if (page.startsWith('product-category-')) {
      const categorySlug = page.replace('product-category-', '');
      router.push(`/catalogue/${categorySlug}`);
    } else if (page.startsWith('product-')) {
      const productIdOrSlug = page.replace('product-', '');
      const productId = parseInt(productIdOrSlug, 10);
      const product = !isNaN(productId) ? getProductById(productId) : null;
      if (product) {
        router.push(`/catalogue/${product.category}`);
      }
    } else {
      router.push(`/${page === 'home' ? '' : page}`);
    }
  };

  return <HomePage setCurrentPage={handlePageChange} />;
}

