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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-neutral-dark mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg text-slate-neutral max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Section Impression */}
        <div id="impression" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-slate-neutral-dark mb-8 text-center">
            {t.home.printing}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-ink-primary-50 to-white border border-ink-primary-100 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-ink-primary rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-print text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
              {t.services.digitalPrinting}
            </h3>
            <p className="text-slate-neutral mb-4">{t.services.digitalPrintingDesc}</p>
            <ul className="space-y-2 text-slate-neutral-dark">
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Cartes d&apos;affaires, circulaires, dépliants</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Cartes postales, signets, pochettes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Quantités de 200 à 1000+ exemplaires</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Livraison express disponible</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-coral-accent-50 to-white border border-coral-accent-100 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-coral-accent rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-coral-accent/30">
              <i className="fas fa-layer-group text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
              {t.services.offsetPrinting}
            </h3>
            <p className="text-slate-neutral mb-4">{t.services.offsetPrintingDesc}</p>
            <ul className="space-y-2 text-slate-neutral-dark">
              <li className="flex items-start">
                <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                <span>Affiches, bloc-notes, cartes de voeux</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                <span>Grandes quantités (500+ exemplaires)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                <span>Meilleur rapport qualité-prix</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                <span>Finitions premium disponibles</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-neutral-50 to-white border border-slate-neutral-100 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-slate-neutral rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-panorama text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
              {t.services.largeFormat}
            </h3>
            <p className="text-slate-neutral mb-4">{t.services.largeFormatDesc}</p>
            <ul className="space-y-2 text-slate-neutral-dark">
              <li className="flex items-start">
                <i className="fas fa-check text-slate-neutral-dark mt-1 mr-3"></i>
                <span>Roll-ups, banderoles, kakémonos</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-slate-neutral-dark mt-1 mr-3"></i>
                <span>Dimensions personnalisées</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-slate-neutral-dark mt-1 mr-3"></i>
                <span>Matériaux durables et résistants</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-ink-primary-50 to-white border border-ink-primary-100 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-ink-primary rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-box-open text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
              {t.services.customPackaging}
            </h3>
            <p className="text-slate-neutral mb-4">{t.services.customPackagingDesc}</p>
            <ul className="space-y-2 text-slate-neutral-dark">
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Boîtes, sachets, étiquettes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Design personnalisé</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-ink-primary mt-1 mr-3"></i>
                <span>Matériaux écologiques disponibles</span>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Section Design */}
        <div id="design" className="scroll-mt-24 mt-16">
          <h2 className="text-3xl font-bold text-slate-neutral-dark mb-8 text-center">
            {t.home.design}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-coral-accent-50 to-white border border-coral-accent-100 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-coral-accent rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-coral-accent/30">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                Conception graphique
              </h3>
              <p className="text-slate-neutral mb-4">
                Création de designs professionnels adaptés à vos besoins d&apos;impression. Logos, mise en page, identité visuelle complète.
              </p>
              <ul className="space-y-2 text-slate-neutral-dark">
                <li className="flex items-start">
                  <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                  <span>Logos et identité visuelle</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                  <span>Mise en page de documents</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                  <span>Design de cartes d&apos;affaires</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-coral-accent-50 to-white border border-coral-accent-100 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-coral-accent rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-coral-accent/30">
                <i className="fas fa-image text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                Retouche d&apos;images
              </h3>
              <p className="text-slate-neutral mb-4">
                Amélioration et optimisation de vos images pour l&apos;impression. Retouche photo professionnelle et préparation des fichiers.
              </p>
              <ul className="space-y-2 text-slate-neutral-dark">
                <li className="flex items-start">
                  <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                  <span>Retouche photo professionnelle</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                  <span>Optimisation des couleurs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-coral-accent mt-1 mr-3"></i>
                  <span>Préparation pour l&apos;impression</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Conseil */}
        <div id="conseil" className="scroll-mt-24 mt-16">
          <h2 className="text-3xl font-bold text-slate-neutral-dark mb-8 text-center">
            {t.home.consulting}
          </h2>
          <div className="bg-gradient-to-br from-slate-neutral-50 to-white border border-slate-neutral-100 rounded-xl p-8 mb-16 max-w-4xl mx-auto hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-slate-neutral rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg">
              <i className="fas fa-handshake text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4 text-center">
              Conseil et accompagnement
            </h3>
            <p className="text-slate-neutral mb-6 text-center">
              Notre équipe d&apos;experts vous guide dans tous vos projets d&apos;impression. De la sélection des matériaux aux finitions, nous vous conseillons pour obtenir le meilleur résultat.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-alt text-slate-neutral-dark"></i>
                </div>
                <h4 className="font-semibold text-slate-neutral-dark mb-2">Choix des formats</h4>
                <p className="text-sm text-slate-neutral">Conseil sur les formats optimaux pour vos projets</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-palette text-slate-neutral-dark"></i>
                </div>
                <h4 className="font-semibold text-slate-neutral-dark mb-2">Sélection des finitions</h4>
                <p className="text-sm text-slate-neutral">Recommandations sur les finitions adaptées</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-check-circle text-slate-neutral-dark"></i>
                </div>
                <h4 className="font-semibold text-slate-neutral-dark mb-2">Suivi de projet</h4>
                <p className="text-sm text-slate-neutral">Accompagnement tout au long de votre projet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ink-primary to-ink-primary-dark text-white rounded-2xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-coral-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.services.ourAdvantages}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 backdrop-blur-sm">
                    <i className="fas fa-medal text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.guaranteedQuality}
                    </h4>
                    <p className="text-ink-primary-100">{t.services.guaranteedQualityDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-coral-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-coral-accent/30">
                    <i className="fas fa-euro-sign text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.competitivePrices}
                    </h4>
                    <p className="text-ink-primary-100">{t.services.competitivePricesDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 backdrop-blur-sm">
                    <i className="fas fa-truck-fast text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.fastDelivery}
                    </h4>
                    <p className="text-ink-primary-100">{t.services.fastDeliveryDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-neutral rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <i className="fas fa-comments text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.services.expertSupport}
                    </h4>
                    <p className="text-ink-primary-100">{t.services.expertSupportDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-96 bg-white bg-opacity-10 rounded-xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-users text-white text-6xl opacity-50"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-neutral-dark mb-4">
            {t.services.readyToStart}
          </h2>
          <p className="text-lg text-slate-neutral mb-8 max-w-2xl mx-auto">
            {t.services.readyToStartDesc}
          </p>
          <button
            onClick={() => setCurrentPage('quote')}
            className="bg-coral-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-accent-dark transition-all transform hover:scale-105 shadow-lg shadow-coral-accent/30 text-lg"
          >
            {t.services.requestFreeQuote}
          </button>
        </div>
      </div>
    </section>
  );
}

