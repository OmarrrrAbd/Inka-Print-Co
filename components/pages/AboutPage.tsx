'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.about.ourServices}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-print text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.home.printing}
              </h3>
              <p className="text-gray-600">
                {t.home.printing}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.home.design}
              </h3>
              <p className="text-gray-600">
                {t.home.design}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.home.consulting}
              </h3>
              <p className="text-gray-600">
                {t.home.consulting}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.about.ourValues}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.about.mission}
              </h3>
              <p className="text-gray-600">{t.about.missionDesc}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.about.vision}
              </h3>
              <p className="text-gray-600">{t.about.visionDesc}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t.about.quality}
              </h4>
              <p className="text-gray-600 text-sm">{t.about.qualityDesc}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t.about.innovation}
              </h4>
              <p className="text-gray-600 text-sm">{t.about.innovationDesc}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t.about.customerFocus}
              </h4>
              <p className="text-gray-600 text-sm">{t.about.customerFocusDesc}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t.about.sustainability}
              </h4>
              <p className="text-gray-600 text-sm">{t.about.sustainabilityDesc}</p>
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

