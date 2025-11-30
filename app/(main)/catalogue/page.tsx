'use client';

import React from 'react';
import CataloguePage from '@/components/pages/CataloguePage';
import { useRouter } from 'next/navigation';
import { getProductById } from '@/lib/products';

export default function Catalogue() {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    if (page.startsWith('product-category-')) {
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

  return <CataloguePage setCurrentPage={handlePageChange} />;
}

