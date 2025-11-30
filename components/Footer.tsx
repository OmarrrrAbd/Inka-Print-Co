'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/images/logo/logo.svg"
                alt="Inka Print Co."
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">{t.footer.description}</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.products}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => setCurrentPage('product-flyers')}
                  className="hover:text-white transition-colors"
                >
                  {t.products.flyers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('product-cards')}
                  className="hover:text-white transition-colors"
                >
                  {t.products.businessCards}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('product-brochures')}
                  className="hover:text-white transition-colors"
                >
                  {t.products.brochures}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('product-rollups')}
                  className="hover:text-white transition-colors"
                >
                  {t.products.rollups}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('catalogue')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.catalogue}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +1 (514) 123-4567
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                contact@inkaprint.ca
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

