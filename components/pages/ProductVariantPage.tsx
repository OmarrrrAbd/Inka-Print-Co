'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById, getProductsByCategory, Product, getCategoryDisplayName } from '@/lib/products';

interface ProductVariantPageProps {
  categorySlug: string;
  setCurrentPage: (page: string) => void;
}

export default function ProductVariantPage({ categorySlug, setCurrentPage }: ProductVariantPageProps) {
  const { t } = useLanguage();
  
  const categoryProducts = getProductsByCategory(categorySlug);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    categoryProducts.length > 0 ? categoryProducts[0] : null
  );
  const [variants, setVariants] = useState<Product[]>(categoryProducts);
  const [quantity, setQuantity] = useState<number | null>(null);

  useEffect(() => {
    const newCategoryProducts = getProductsByCategory(categorySlug);
    if (newCategoryProducts.length > 0) {
      setVariants(newCategoryProducts);
      const firstProduct = newCategoryProducts[0];
      setSelectedProduct(firstProduct);
      if (firstProduct.quantities && firstProduct.quantities.length > 0) {
        setQuantity(firstProduct.quantities[0]);
      } else {
        setQuantity(null);
      }
    } else {
      setVariants([]);
      setSelectedProduct(null);
      setQuantity(null);
    }
  }, [categorySlug]);

  useEffect(() => {
    if (selectedProduct && selectedProduct.quantities && selectedProduct.quantities.length > 0) {
      if (!quantity || !selectedProduct.quantities.includes(quantity)) {
        setQuantity(selectedProduct.quantities[0]);
      }
    } else {
      setQuantity(null);
    }
  }, [selectedProduct, quantity]);

  const handleVariantChange = (variantId: number) => {
    const product = getProductById(variantId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  if (!selectedProduct) {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.products.productNotFound}</h1>
          <button
            onClick={() => setCurrentPage('catalogue')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            {t.products.backToCatalogue}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('catalogue')}
          className="text-blue-600 font-semibold mb-8 flex items-center hover:text-blue-700"
        >
          <i className="fas fa-arrow-left mr-2"></i> {t.products.backToCatalogue}
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="w-full h-96 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center mb-4 overflow-hidden">
              {selectedProduct.image && selectedProduct.image !== '' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.variant}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const icon = document.createElement('i');
                      icon.className = 'fas fa-image text-gray-400 text-6xl';
                      parent.appendChild(icon);
                    }
                  }}
                />
              ) : (
                <i className="fas fa-image text-gray-400 text-6xl"></i>
              )}
            </div>
          </div>

          {/* Détails */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedProduct.name}
            </h1>
            <p className="text-xl text-gray-600 mb-2 font-semibold">
              {selectedProduct.variant}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {selectedProduct.description || t.products.defaultProductDescription}
            </p>

            {/* Sélecteur de variants */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {t.products.chooseVariant}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantChange(variant.id)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all text-left ${
                      selectedProduct.id === variant.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {variant.variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Sélecteur de quantité */}
            {selectedProduct.quantities && selectedProduct.quantities.length > 0 && (
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  {t.products.quantity}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {selectedProduct.quantities.map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        quantity === qty
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {qty.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spécifications */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t.products.specifications}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{t.products.category}</span> {getCategoryDisplayName(selectedProduct.category)}
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{t.products.variant}</span> {selectedProduct.variant}
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{t.products.reference}</span> #{selectedProduct.id}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full text-lg"
            >
              {t.products.requestPersonalizedQuote}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

