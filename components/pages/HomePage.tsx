'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCarousel from '@/components/ProductCarousel';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-ink-primary via-ink-primary-dark to-ink-primary text-white py-20 sm:py-32 relative overflow-hidden">
        {/* Effet de profondeur avec des formes géométriques */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coral-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-accent-light rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-20 leading-tight">
              {t.home.title}
              <br />
              {t.home.titleLine2}
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-ink-primary-100 max-w-3xl mx-auto">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('catalogue')}
                className="bg-coral-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-accent-dark transition-all transform hover:scale-105 shadow-lg shadow-coral-accent/30 text-center"
              >
                {t.home.seeCatalogue}
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ink-primary transition-all transform hover:scale-105 text-center"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-neutral-dark mb-4">
              {t.home.ourServices}
            </h2>
            <p className="text-lg text-slate-neutral max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-ink-primary-50 to-white rounded-xl p-8 text-center border border-ink-primary-100 hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col group">
              <div className="w-16 h-16 bg-ink-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="fas fa-print text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.home.printing}
              </h3>
              <p className="text-sm text-slate-neutral mb-4 flex-grow">
                {t.home.printingDesc}
              </p>
              <button
                onClick={() => setCurrentPage('services#impression')}
                className="text-ink-primary font-semibold hover:text-ink-primary-dark flex items-center justify-center gap-2 mt-auto group-hover:gap-3 transition-all"
              >
                {t.home.seeMore} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="bg-gradient-to-br from-coral-accent-50 to-white rounded-xl p-8 text-center border border-coral-accent-100 hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col group">
              <div className="w-16 h-16 bg-coral-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-coral-accent/30">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.home.design}
              </h3>
              <p className="text-sm text-slate-neutral mb-4 flex-grow">
                {t.home.designDesc}
              </p>
              <button
                onClick={() => setCurrentPage('services#design')}
                className="text-coral-accent font-semibold hover:text-coral-accent-dark flex items-center justify-center gap-2 mt-auto group-hover:gap-3 transition-all"
              >
                {t.home.seeMore} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="bg-gradient-to-br from-slate-neutral-50 to-white rounded-xl p-8 text-center border border-slate-neutral-100 hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col group">
              <div className="w-16 h-16 bg-slate-neutral rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.home.consulting}
              </h3>
              <p className="text-sm text-slate-neutral mb-4 flex-grow">
                {t.home.consultingDesc}
              </p>
              <button
                onClick={() => setCurrentPage('services#conseil')}
                className="text-slate-neutral-dark font-semibold hover:text-ink-primary flex items-center justify-center gap-2 mt-auto group-hover:gap-3 transition-all"
              >
                {t.home.seeMore} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-neutral-dark mb-4">
              {t.home.ourProducts}
            </h2>
            <p className="text-lg text-slate-neutral max-w-2xl mx-auto">
              {t.home.productsSubtitle}
            </p>
          </div>
          <ProductCarousel setCurrentPage={setCurrentPage} />
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('catalogue')}
              className="bg-ink-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-ink-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-ink-primary/30"
            >
              {t.home.seeAllProducts}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-neutral-dark mb-4">
              {t.home.whyChooseUs}
            </h2>
            <p className="text-lg text-slate-neutral max-w-2xl mx-auto">
              {t.home.whyChooseUsSubtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-ink-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fas fa-award text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.home.qualityPremium}
              </h3>
              <p className="text-slate-neutral">{t.home.qualityPremiumDesc}</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-coral-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-coral-accent/30">
                <i className="fas fa-tags text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.home.competitivePrices}
              </h3>
              <p className="text-slate-neutral">{t.home.competitivePricesDesc}</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-slate-neutral rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fas fa-headset text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.home.dedicatedSupport}
              </h3>
              <p className="text-slate-neutral">{t.home.dedicatedSupportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 mb-16 sm:mb-24 bg-gradient-to-br from-ink-primary to-ink-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-coral-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.home.readyToStart}</h2>
          <p className="text-xl mb-8 text-ink-primary-100">{t.home.readyToStartDesc}</p>
          <button
            onClick={() => setCurrentPage('quote')}
            className="bg-coral-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-accent-dark transition-all transform hover:scale-105 shadow-lg shadow-coral-accent/30"
          >
            {t.home.requestFreeQuote}
          </button>
        </div>
      </section>
    </>
  );
}

