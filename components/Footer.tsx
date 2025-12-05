'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          <div>
            <div className="mb-3">
              <img
                src="/images/logo/logo.svg"
                alt="Inka Print Co."
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm mb-3">{t.footer.description}</p>
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=61584548938524"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ink-primary hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/inkaprintco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-coral-accent hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">{t.footer.company}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.nav.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('catalogue')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.nav.catalogue}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.nav.services}
                  </button>
                </li>
              </ul>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.nav.about}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.nav.contact}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-white text-xs"></i>
                <a 
                  href="mailto:contact@inkaprint.ca"
                  className="hover:text-white transition-colors"
                >
                  contact@inkaprint.ca
                </a>
              </li>
              <li className="flex items-start mt-3">
                <i className="fas fa-map-marker-alt mr-2 text-white mt-0.5 text-xs"></i>
                <span className="text-xs leading-relaxed">
                  Basé à Montréal, livraison partout au Québec
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-3 text-center text-gray-500 text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

