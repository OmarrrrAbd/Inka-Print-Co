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
          <h1 className="text-4xl font-bold text-slate-neutral-dark mb-4">{t.products.productNotFound}</h1>
          <button
            onClick={() => setCurrentPage('catalogue')}
            className="text-ink-primary hover:text-ink-primary-dark font-semibold transition-colors"
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
            className="text-ink-primary font-semibold mb-8 flex items-center hover:text-ink-primary-dark transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i> {t.products.backToCatalogue}
          </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image avec zoom professionnel */}
          <div>
            <div className="w-full h-96 bg-slate-neutral-100 rounded-xl shadow-lg mb-4 overflow-hidden relative group cursor-zoom-in">
              <div className="w-full h-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/categories/${categorySlug}.jpg`}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-150"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement?.parentElement;
                    if (parent) {
                      const icon = document.createElement('div');
                      icon.className = 'w-full h-full flex items-center justify-center';
                      const iconElement = document.createElement('i');
                      iconElement.className = 'fas fa-image text-slate-neutral text-6xl';
                      icon.appendChild(iconElement);
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>
              {/* Overlay subtil pour effet professionnel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/5 group-hover:via-black/0 group-hover:to-black/0 transition-all duration-700 pointer-events-none"></div>
              {/* Indicateur de zoom */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <i className="fas fa-search-plus text-ink-primary text-sm"></i>
              </div>
            </div>
          </div>

          {/* Détails */}
          <div>
            <h1 className="text-4xl font-bold text-slate-neutral-dark mb-4">
              {selectedProduct.name}
            </h1>
            <p className="text-xl text-slate-neutral mb-2 font-semibold">
              {selectedProduct.variant}
            </p>
            <p className="text-lg text-slate-neutral mb-8">
              {selectedProduct.description || t.products.defaultProductDescription}
            </p>

            {/* Sélecteur de variants */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-neutral-dark mb-3">
                {t.products.chooseVariant}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantChange(variant.id)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all text-left ${
                      selectedProduct.id === variant.id
                        ? 'bg-ink-primary text-white shadow-lg shadow-ink-primary/30'
                        : 'bg-slate-neutral-50 text-slate-neutral-dark hover:bg-slate-neutral-100 border border-slate-neutral-100'
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
                <label className="block text-sm font-semibold text-slate-neutral-dark mb-3">
                  {t.products.quantity}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {selectedProduct.quantities.map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        quantity === qty
                          ? 'bg-coral-accent text-white shadow-lg shadow-coral-accent/30'
                          : 'bg-slate-neutral-50 text-slate-neutral-dark hover:bg-slate-neutral-100 border border-slate-neutral-100'
                      }`}
                    >
                      {qty.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spécifications */}
            <div className="bg-slate-neutral-50 rounded-xl p-6 mb-8 border border-slate-neutral-100">
              <h3 className="text-xl font-semibold text-slate-neutral-dark mb-4">
                {t.products.specifications}
              </h3>
              <div className="space-y-2 text-slate-neutral-dark">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ink-primary mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{t.products.category}</span> {getCategoryDisplayName(selectedProduct.category)}
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ink-primary mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{t.products.variant}</span> {selectedProduct.variant}
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ink-primary mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{t.products.reference}</span> #{selectedProduct.id}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('quote')}
              className="bg-coral-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-accent-dark transition-all transform hover:scale-105 shadow-lg shadow-coral-accent/30 w-full text-lg"
            >
              {t.products.requestPersonalizedQuote}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

