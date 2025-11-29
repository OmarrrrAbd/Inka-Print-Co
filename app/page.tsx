'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/components/pages/HomePage';
import CataloguePage from '@/components/pages/CataloguePage';
import ServicesPage from '@/components/pages/ServicesPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import ContactInfoPage from '@/components/pages/ContactInfoPage';
import ProductDetailPage from '@/components/pages/ProductDetailPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'catalogue':
        return <CataloguePage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'contact-info':
        return <ContactInfoPage />;
      case 'product-flyers':
      case 'product-cards':
      case 'product-brochures':
      case 'product-rollups':
      case 'product-banners':
      case 'product-packaging':
        return (
          <ProductDetailPage productId={currentPage} setCurrentPage={setCurrentPage} />
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

