'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactInfoPage() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.contactInfo}
          </h1>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-phone text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.contact.phone}</h4>
                <p className="text-blue-100">+1 (514) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.contact.email}</h4>
                <p className="text-blue-100">contact@inkaprint.ca</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fab fa-whatsapp text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.contact.whatsapp}</h4>
                <p className="text-blue-100">+1 (514) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.contact.location}</h4>
                <p className="text-blue-100">{t.contact.locationDesc}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <h4 className="font-semibold mb-4">{t.contact.followUs}</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <i className="fab fa-twitter text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

