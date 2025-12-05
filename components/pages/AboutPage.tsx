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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-neutral-dark mb-4">
            {t.about.title}
          </h1>
          <p className="text-lg text-slate-neutral max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-neutral-dark mb-8 text-center">
            {t.about.ourServices}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-ink-primary-50 to-white border border-ink-primary-100 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-ink-primary rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-print text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                {t.home.printing}
              </h3>
              <p className="text-slate-neutral">
                {t.home.printing}
              </p>
            </div>
            <div className="bg-gradient-to-br from-coral-accent-50 to-white border border-coral-accent-100 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-coral-accent rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-coral-accent/30">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                {t.home.design}
              </h3>
              <p className="text-slate-neutral">
                {t.home.design}
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-neutral-50 to-white border border-slate-neutral-100 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-slate-neutral rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                {t.home.consulting}
              </h3>
              <p className="text-slate-neutral">
                {t.home.consulting}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-neutral-dark mb-12 text-center">
            {t.about.ourValues}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-neutral-50 rounded-xl p-8 border border-slate-neutral-100">
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                {t.about.mission}
              </h3>
              <p className="text-slate-neutral">{t.about.missionDesc}</p>
            </div>
            <div className="bg-slate-neutral-50 rounded-xl p-8 border border-slate-neutral-100">
              <h3 className="text-2xl font-semibold text-slate-neutral-dark mb-4">
                {t.about.vision}
              </h3>
              <p className="text-slate-neutral">{t.about.visionDesc}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-neutral-100 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-ink-primary rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.about.quality}
              </h4>
              <p className="text-slate-neutral text-sm">{t.about.qualityDesc}</p>
            </div>
            <div className="bg-white border border-slate-neutral-100 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-coral-accent rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-coral-accent/30">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.about.innovation}
              </h4>
              <p className="text-slate-neutral text-sm">{t.about.innovationDesc}</p>
            </div>
            <div className="bg-white border border-slate-neutral-100 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-slate-neutral rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.about.customerFocus}
              </h4>
              <p className="text-slate-neutral text-sm">{t.about.customerFocusDesc}</p>
            </div>
            <div className="bg-white border border-slate-neutral-100 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-ink-primary rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-neutral-dark mb-3">
                {t.about.sustainability}
              </h4>
              <p className="text-slate-neutral text-sm">{t.about.sustainabilityDesc}</p>
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

