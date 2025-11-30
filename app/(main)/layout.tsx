'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById } from '@/lib/products';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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

  const getCurrentPage = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/catalogue/') && pathname.split('/').length > 2) {
      const categorySlug = pathname.split('/')[2];
      return `product-category-${categorySlug}`;
    }
    return pathname.replace('/', '') || 'home';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={getCurrentPage()} setCurrentPage={handlePageChange} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}

