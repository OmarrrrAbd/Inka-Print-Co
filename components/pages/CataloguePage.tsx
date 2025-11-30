'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategories, getCategoryDisplayName, getProductsByCategory } from '@/lib/products';

interface CataloguePageProps {
  setCurrentPage: (page: string) => void;
}

export default function CataloguePage({ setCurrentPage }: CataloguePageProps) {
  const { t } = useLanguage();
  const categories = getCategories();

  const getCategoryIcon = (categorySlug: string) => {
    const icons: Record<string, string> = {
      'cartes-affaires': 'fa-id-card',
      'circulaires': 'fa-file-alt',
      'depliants': 'fa-file-invoice',
      'cartes-postales': 'fa-envelope',
      'signets': 'fa-bookmark',
      'pochettes': 'fa-folder',
      'cartes-voeux': 'fa-heart',
      'affiches': 'fa-image',
      'bloc-notes': 'fa-sticky-note',
      'puzzle': 'fa-puzzle-piece',
    };
    return icons[categorySlug] || 'fa-box';
  };

  const handleCategoryClick = (categorySlug: string) => {
    // Rediriger vers la page produit avec la catégorie
    setCurrentPage(`product-category-${categorySlug}`);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.catalogue.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.catalogue.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:scale-105"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <i className={`fas ${getCategoryIcon(category.slug)} text-blue-600 text-5xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {category.products.length} {category.products.length === 1 ? 'variant' : 'variants'} disponible{category.products.length > 1 ? 's' : ''}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full text-sm">
                  {t.products.seeProduct}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

