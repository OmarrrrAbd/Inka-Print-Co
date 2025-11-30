'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategories, Category } from '@/lib/products';

interface ProductCarouselProps {
  setCurrentPage: (page: string) => void;
}

export default function ProductCarousel({ setCurrentPage }: ProductCarouselProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const productsPerView = 4;
  const categories = getCategories();
  const totalCategories = categories.length;
  const totalSlides = Math.ceil(totalCategories / productsPerView);

  // Dupliquer les catégories pour créer un effet infini (3 copies)
  const duplicatedCategories = [...categories, ...categories, ...categories];
  
  // Fonction pour aller à la slide suivante
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // Si on arrive à la fin, revenir au début de manière invisible
      if (next >= totalSlides) {
        return 0;
      }
      return next;
    });
  };

  // Fonction pour aller à la slide précédente
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      // Si on arrive au début, aller à la fin de manière invisible
      if (next < 0) {
        return totalSlides - 1;
      }
      return next;
    });
  };

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change de slide toutes les 5 secondes
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleCategoryClick = (categorySlug: string) => {
    setCurrentPage(`product-category-${categorySlug}`);
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'from-blue-50 to-blue-100 border-blue-200',
      'from-purple-50 to-purple-100 border-purple-200',
      'from-green-50 to-green-100 border-green-200',
      'from-orange-50 to-orange-100 border-orange-200',
    ];
    return colors[index % colors.length];
  };

  const getCategoryIconColor = (index: number) => {
    const colors = [
      'bg-blue-600',
      'bg-purple-600',
      'bg-green-600',
      'bg-orange-600',
    ];
    return colors[index % colors.length];
  };

  const getCategoryTextColor = (index: number) => {
    const colors = [
      'text-blue-600 hover:text-blue-700',
      'text-purple-600 hover:text-purple-700',
      'text-green-600 hover:text-green-700',
      'text-orange-600 hover:text-orange-700',
    ];
    return colors[index % colors.length];
  };

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

  // Obtenir l'image de la catégorie (premier produit de la catégorie)
  const getCategoryImage = (category: Category) => {
    if (category.products && category.products.length > 0) {
      const firstProduct = category.products[0];
      return firstProduct.image;
    }
    return '';
  };

  // Calculer l'index réel en tenant compte de la duplication (commencer au milieu)
  const startOffset = totalCategories;
  const realIndex = startOffset + currentIndex;

  return (
    <div className="relative">
      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all opacity-80 hover:opacity-100 hidden sm:block"
        aria-label="Précédent"
      >
        <i className="fas fa-chevron-left text-gray-700 text-xl"></i>
      </button>
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all opacity-80 hover:opacity-100 hidden sm:block"
        aria-label="Suivant"
      >
        <i className="fas fa-chevron-right text-gray-700 text-xl"></i>
      </button>

      {/* Container du carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${realIndex * (100 / productsPerView)}%)`,
          }}
        >
          {duplicatedCategories.map((category, index) => {
            const colorIndex = index % 4;
            const categoryImage = getCategoryImage(category);
            return (
              <div
                key={`${category.id}-${index}`}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / productsPerView}%` }}
              >
                <div
                  className={`bg-gradient-to-br ${getCategoryColor(colorIndex)} rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border ${getCategoryColor(colorIndex).split(' ')[2]} hover:scale-105 h-full flex flex-col`}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  {/* Image de la catégorie */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    {categoryImage && categoryImage !== '' ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={categoryImage}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const icon = document.createElement('i');
                            icon.className = `fas ${getCategoryIcon(category.slug)} text-gray-400 text-6xl`;
                            parent.appendChild(icon);
                          }
                        }}
                      />
                    ) : (
                      <div className={`w-20 h-20 ${getCategoryIconColor(colorIndex)} rounded-lg flex items-center justify-center`}>
                        <i className={`fas ${getCategoryIcon(category.slug)} text-white text-4xl`}></i>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">
                    {category.products.length} {category.products.length === 1 ? 'produit' : 'produits'} disponible{category.products.length > 1 ? 's' : ''}
                  </p>
                  <button className={`${getCategoryTextColor(colorIndex)} font-semibold flex items-center`}>
                    {t.products.seeProduct} <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
