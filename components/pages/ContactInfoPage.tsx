'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactInfoPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function ContactInfoPage({ setCurrentPage }: ContactInfoPageProps = {}) {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-neutral-dark mb-4">
            {t.contact.contactInfo}
          </h1>
          {setCurrentPage && (
            <button
              onClick={() => setCurrentPage('quote')}
              className="mt-4 text-ink-primary hover:text-ink-primary-dark font-semibold underline transition-colors"
            >
              {t.contact.requestQuote}
            </button>
          )}
        </div>

        <div className="bg-gradient-to-br from-ink-primary via-ink-primary-dark to-ink-primary text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-coral-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="space-y-6 relative z-10">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 backdrop-blur-sm">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.contact.email}</h4>
                <p className="text-ink-primary-100">contact@inkaprint.ca</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 backdrop-blur-sm">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.contact.location}</h4>
                <p className="text-ink-primary-100">{t.contact.locationDesc}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <h4 className="font-semibold mb-4">{t.contact.followUs}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584548938524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-110 transition-all backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-white text-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/inkaprintco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-110 transition-all backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

