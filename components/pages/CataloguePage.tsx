'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategories } from '@/lib/products';

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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-neutral-dark mb-4">
            {t.catalogue.title}
          </h1>
          <p className="text-lg text-slate-neutral max-w-2xl mx-auto">
            {t.catalogue.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const colorIndex = index % 3;
            const colors = [
              { bg: 'from-ink-primary-50 to-white', border: 'border-ink-primary-100', icon: 'bg-ink-primary', text: 'text-ink-primary' },
              { bg: 'from-coral-accent-50 to-white', border: 'border-coral-accent-100', icon: 'bg-coral-accent', text: 'text-coral-accent' },
              { bg: 'from-slate-neutral-50 to-white', border: 'border-slate-neutral-100', icon: 'bg-slate-neutral', text: 'text-slate-neutral-dark' },
            ];
            const color = colors[colorIndex];
            return (
              <div
                key={category.id}
                className={`bg-gradient-to-br ${color.bg} border ${color.border} rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:scale-105 group`}
                onClick={() => handleCategoryClick(category.slug)}
              >
                <div className={`w-full h-48 bg-gradient-to-br ${color.bg} flex items-center justify-center relative overflow-hidden`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/categories/${category.slug}.jpg`}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        // Afficher l'icône en fallback si l'image n'existe pas
                        const iconContainer = document.createElement('div');
                        iconContainer.className = `w-20 h-20 ${color.icon} rounded-lg flex items-center justify-center shadow-lg`;
                        const icon = document.createElement('i');
                        icon.className = `fas ${getCategoryIcon(category.slug)} text-white text-5xl`;
                        iconContainer.appendChild(icon);
                        parent.appendChild(iconContainer);
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-neutral-dark mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-neutral mb-4">
                    {category.products.length} {category.products.length === 1 ? 'variant' : 'variants'} disponible{category.products.length > 1 ? 's' : ''}
                  </p>
                  <button className={`${color.icon} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all w-full text-sm shadow-md`}>
                    {t.products.seeProduct}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

