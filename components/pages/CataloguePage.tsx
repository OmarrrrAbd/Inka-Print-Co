'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CataloguePageProps {
  setCurrentPage: (page: string) => void;
}

export default function CataloguePage({ setCurrentPage }: CataloguePageProps) {
  const { t } = useLanguage();

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setCurrentPage('product-flyers')}
          >
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
              alt="Flyers"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t.products.flyers}
              </h3>
              <p className="text-gray-600 mb-4">
                Formats A6, A5, A4 disponibles. Papier couché brillant ou mat 135g à 300g. Idéal pour vos campagnes publicitaires et événements.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                {t.products.seeProduct}
              </button>
            </div>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setCurrentPage('product-cards')}
          >
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop"
              alt="Cartes de visite"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t.products.businessCards}
              </h3>
              <p className="text-gray-600 mb-4">
                Format standard 85x55mm. Papier 350g. Finitions: brillant, mat, soft-touch. Impression recto-verso haute définition.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                {t.products.seeProduct}
              </button>
            </div>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setCurrentPage('product-brochures')}
          >
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop"
              alt="Brochures"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t.products.brochures}
              </h3>
              <p className="text-gray-600 mb-4">
                Pliage 2 ou 3 volets. Formats A4, A5. Papier couché 170g à 250g. Parfait pour présenter vos services et produits.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                {t.products.seeProduct}
              </button>
            </div>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setCurrentPage('product-rollups')}
          >
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
              alt="Roll-ups"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t.products.rollups}
              </h3>
              <p className="text-gray-600 mb-4">
                Formats 85x200cm, 100x200cm. Support enrouleur inclus. Impression haute résolution sur bâche anti-reflet. Installation en 30 secondes.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                {t.products.seeProduct}
              </button>
            </div>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setCurrentPage('product-banners')}
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
              alt="Banderoles"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t.products.banners}
              </h3>
              <p className="text-gray-600 mb-4">{t.products.bannersDesc}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                {t.products.seeProduct}
              </button>
            </div>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setCurrentPage('product-packaging')}
          >
            <img
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop"
              alt="Packaging"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t.products.packaging}
              </h3>
              <p className="text-gray-600 mb-4">{t.products.packagingDesc}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                {t.products.seeProduct}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

