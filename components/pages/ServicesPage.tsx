'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

export default function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-print text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.services.digitalPrinting}
            </h3>
            <p className="text-gray-600 mb-4">{t.services.digitalPrintingDesc}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Flyers, cartes de visite, brochures</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>À partir de 1 exemplaire</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Livraison express disponible</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-layer-group text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.services.offsetPrinting}
            </h3>
            <p className="text-gray-600 mb-4">{t.services.offsetPrintingDesc}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Catalogues, magazines, affiches</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>À partir de 500 exemplaires</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Meilleur rapport qualité-prix</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-panorama text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.services.largeFormat}
            </h3>
            <p className="text-gray-600 mb-4">{t.services.largeFormatDesc}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Roll-ups, banderoles, kakémonos</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Dimensions personnalisées</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Matériaux durables et résistants</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-box-open text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.services.customPackaging}
            </h3>
            <p className="text-gray-600 mb-4">{t.services.customPackagingDesc}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Boîtes, sachets, étiquettes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Design personnalisé</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Matériaux écologiques disponibles</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.services.ourAdvantages}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-medal text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.guaranteedQuality}
                    </h4>
                    <p className="text-gray-300">{t.services.guaranteedQualityDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-euro-sign text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.competitivePrices}
                    </h4>
                    <p className="text-gray-300">{t.services.competitivePricesDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-truck-fast text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.fastDelivery}
                    </h4>
                    <p className="text-gray-300">{t.services.fastDeliveryDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-comments text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.expertSupport}
                    </h4>
                    <p className="text-gray-300">{t.services.expertSupportDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop"
                alt="Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.services.readyToStart}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.services.readyToStartDesc}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            {t.services.requestFreeQuote}
          </button>
        </div>
      </div>
    </section>
  );
}

