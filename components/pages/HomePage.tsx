'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.home.title}
              <br />
              {t.home.titleLine2}
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('catalogue')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                {t.home.seeCatalogue}
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                {t.home.contactUs}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.ourServices}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-print text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.printing}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.design}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.consulting}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.ourProducts}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.productsSubtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border border-blue-200 hover:scale-105"
              onClick={() => setCurrentPage('product-flyers')}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-file-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.products.flyers}
              </h3>
              <p className="text-gray-600 mb-4">{t.products.flyersDesc}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                {t.products.seeProduct} <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            <div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border border-purple-200 hover:scale-105"
              onClick={() => setCurrentPage('product-cards')}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-id-card text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.products.businessCards}
              </h3>
              <p className="text-gray-600 mb-4">{t.products.businessCardsDesc}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                {t.products.seeProduct} <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            <div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border border-green-200 hover:scale-105"
              onClick={() => setCurrentPage('product-brochures')}
            >
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-book text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.products.brochures}
              </h3>
              <p className="text-gray-600 mb-4">{t.products.brochuresDesc}</p>
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                {t.products.seeProduct} <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border border-blue-200 hover:scale-105"
              onClick={() => setCurrentPage('product-rollups')}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-rectangle-ad text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.products.rollups}
              </h3>
              <p className="text-gray-600 mb-4">{t.products.rollupsDesc}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                {t.products.seeProduct} <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('catalogue')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.home.seeAllProducts}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.whyChooseUs}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.whyChooseUsSubtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.qualityPremium}
              </h3>
              <p className="text-gray-600">{t.home.qualityPremiumDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tags text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.competitivePrices}
              </h3>
              <p className="text-gray-600">{t.home.competitivePricesDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shipping-fast text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.fastDelivery}
              </h3>
              <p className="text-gray-600">{t.home.fastDeliveryDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-headset text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.home.dedicatedSupport}
              </h3>
              <p className="text-gray-600">{t.home.dedicatedSupportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.home.readyToStart}</h2>
          <p className="text-xl mb-8 text-blue-100">{t.home.readyToStartDesc}</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t.home.requestFreeQuote}
          </button>
        </div>
      </section>
    </>
  );
}

