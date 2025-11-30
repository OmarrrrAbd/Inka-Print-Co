'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

export default function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const { t } = useLanguage();

  useEffect(() => {
    // Gérer le scroll vers une section si hash présent dans l'URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

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

        {/* Section Impression */}
        <div id="impression" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.home.printing}
          </h2>
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
                <span>Cartes d&apos;affaires, circulaires, dépliants</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Cartes postales, signets, pochettes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Quantités de 200 à 1000+ exemplaires</span>
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
                <span>Affiches, bloc-notes, cartes de voeux</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Grandes quantités (500+ exemplaires)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Meilleur rapport qualité-prix</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-600 mt-1 mr-3"></i>
                <span>Finitions premium disponibles</span>
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
        </div>

        {/* Section Design */}
        <div id="design" className="scroll-mt-24 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.home.design}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Conception graphique
              </h3>
              <p className="text-gray-600 mb-4">
                Création de designs professionnels adaptés à vos besoins d&apos;impression. Logos, mise en page, identité visuelle complète.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
                  <span>Logos et identité visuelle</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
                  <span>Mise en page de documents</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
                  <span>Design de cartes d&apos;affaires</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-image text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Retouche d&apos;images
              </h3>
              <p className="text-gray-600 mb-4">
                Amélioration et optimisation de vos images pour l&apos;impression. Retouche photo professionnelle et préparation des fichiers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
                  <span>Retouche photo professionnelle</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
                  <span>Optimisation des couleurs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
                  <span>Préparation pour l&apos;impression</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Conseil */}
        <div id="conseil" className="scroll-mt-24 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.home.consulting}
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-8 mb-16 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-handshake text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Conseil et accompagnement
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Notre équipe d&apos;experts vous guide dans tous vos projets d&apos;impression. De la sélection des matériaux aux finitions, nous vous conseillons pour obtenir le meilleur résultat.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-alt text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Choix des formats</h4>
                <p className="text-sm text-gray-600">Conseil sur les formats optimaux pour vos projets</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-palette text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sélection des finitions</h4>
                <p className="text-sm text-gray-600">Recommandations sur les finitions adaptées</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-check-circle text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Suivi de projet</h4>
                <p className="text-sm text-gray-600">Accompagnement tout au long de votre projet</p>
              </div>
            </div>
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
              <div className="w-full h-96 bg-gray-200 rounded-xl shadow-2xl flex items-center justify-center">
                <i className="fas fa-users text-gray-400 text-6xl"></i>
              </div>
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

