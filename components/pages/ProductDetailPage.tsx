'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductDetailPageProps {
  productId: string;
  setCurrentPage: (page: string) => void;
}

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductDetail {
  title: string;
  description: string;
  image: string;
  specs: ProductSpec[];
  uses: string[];
}

const productDetails: Record<string, ProductDetail> = {
  'product-flyers': {
    title: 'Flyers professionnels',
    description: 'Communiquez efficacement avec nos flyers de haute qualité. Parfaits pour vos campagnes marketing, événements, promotions et annonces.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=800&fit=crop',
    specs: [
      { label: 'Formats disponibles:', value: 'A6 (105x148mm), A5 (148x210mm), A4 (210x297mm)' },
      { label: 'Papier:', value: 'Couché brillant ou mat, 135g, 170g, 250g, 300g' },
      { label: 'Impression:', value: 'Recto ou recto-verso, quadrichromie CMJN' },
      { label: 'Finitions:', value: 'Pelliculage mat ou brillant disponible' },
      { label: 'Quantités:', value: 'À partir de 100 exemplaires' },
      { label: 'Délai:', value: '3-5 jours ouvrés (express disponible)' },
    ],
    uses: ['Événements', 'Promotions', 'Publicité', 'Annonces', 'Marketing direct'],
  },
  'product-cards': {
    title: 'Cartes de visite professionnelles',
    description: 'Faites une première impression mémorable avec nos cartes de visite premium. Qualité d\'impression exceptionnelle et finitions élégantes.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=800&fit=crop',
    specs: [
      { label: 'Format:', value: 'Standard 85x55mm (format européen)' },
      { label: 'Papier:', value: 'Couché 350g premium' },
      { label: 'Impression:', value: 'Recto-verso, haute définition, quadrichromie' },
      { label: 'Finitions:', value: 'Brillant, mat, soft-touch, vernis sélectif' },
      { label: 'Quantités:', value: 'À partir de 100 exemplaires' },
      { label: 'Délai:', value: '2-4 jours ouvrés' },
    ],
    uses: ['Pelliculage brillant', 'Pelliculage mat', 'Soft-touch', 'Vernis sélectif', 'Dorure à chaud'],
  },
  'product-brochures': {
    title: 'Brochures professionnelles',
    description: 'Présentez vos services et produits avec élégance grâce à nos brochures pliées de haute qualité. Pliage professionnel et impression éclatante.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop',
    specs: [
      { label: 'Formats:', value: 'A4 (210x297mm), A5 (148x210mm)' },
      { label: 'Pliage:', value: '2 volets (1 pli), 3 volets (2 plis roulé ou accordéon)' },
      { label: 'Papier:', value: 'Couché brillant ou mat, 170g, 200g, 250g' },
      { label: 'Impression:', value: 'Recto-verso, quadrichromie CMJN' },
      { label: 'Finitions:', value: 'Pelliculage mat ou brillant disponible' },
      { label: 'Quantités:', value: 'À partir de 100 exemplaires' },
      { label: 'Délai:', value: '4-6 jours ouvrés' },
    ],
    uses: ['Présentation entreprise', 'Catalogue produits', 'Menus restaurant', 'Programmes événements'],
  },
  'product-rollups': {
    title: 'Roll-ups publicitaires',
    description: 'Supports publicitaires grand format idéaux pour salons, événements et points de vente. Installation ultra-rapide et transport facile.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop',
    specs: [
      { label: 'Formats:', value: '85x200cm, 100x200cm, 120x200cm' },
      { label: 'Support:', value: 'Enrouleur aluminium avec pieds stabilisateurs' },
      { label: 'Impression:', value: 'Bâche anti-reflet 510g, haute résolution' },
      { label: 'Installation:', value: 'Montage en 30 secondes sans outils' },
      { label: 'Transport:', value: 'Housse de transport incluse' },
      { label: 'Durabilité:', value: 'Résistant, réutilisable, visuel remplaçable' },
      { label: 'Délai:', value: '5-7 jours ouvrés' },
    ],
    uses: ['Salons professionnels', 'Événements', 'Points de vente', 'Conférences', 'Showrooms'],
  },
  'product-banners': {
    title: 'Banderoles publicitaires',
    description: 'Supports grand format pour extérieur et intérieur. Résistantes aux intempéries, idéales pour une visibilité maximale de votre message.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop',
    specs: [
      { label: 'Dimensions:', value: 'Personnalisées selon vos besoins' },
      { label: 'Matériau:', value: 'Bâche PVC 510g frontlit' },
      { label: 'Finitions:', value: 'Œillets métalliques renforcés tous les 50cm' },
      { label: 'Impression:', value: 'Haute résolution, couleurs vives et durables' },
      { label: 'Résistance:', value: 'Intempéries, UV, déchirures' },
      { label: 'Usage:', value: 'Intérieur et extérieur' },
      { label: 'Délai:', value: '5-7 jours ouvrés' },
    ],
    uses: ['Façades magasins', 'Événements extérieurs', 'Chantiers', 'Promotions', 'Signalétique'],
  },
  'product-packaging': {
    title: 'Packaging personnalisé',
    description: 'Valorisez votre marque avec des emballages sur mesure. Boîtes, sachets, étiquettes personnalisées pour une expérience client unique.',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=800&fit=crop',
    specs: [
      { label: 'Types:', value: 'Boîtes pliantes, sachets kraft, étiquettes adhésives' },
      { label: 'Matériaux:', value: 'Carton recyclable, kraft naturel, papier couché' },
      { label: 'Dimensions:', value: 'Sur mesure selon vos produits' },
      { label: 'Impression:', value: 'Offset ou numérique, quadrichromie + Pantone' },
      { label: 'Finitions:', value: 'Pelliculage, vernis, dorure, gaufrage' },
      { label: 'Options:', value: 'Fenêtre transparente, fermeture aimantée' },
      { label: 'Délai:', value: '7-10 jours ouvrés (selon complexité)' },
    ],
    uses: ['E-commerce', 'Cosmétiques', 'Alimentaire', 'Cadeaux', 'Retail'],
  },
};

export default function ProductDetailPage({ productId, setCurrentPage }: ProductDetailPageProps) {
  const { t } = useLanguage();
  const product = productDetails[productId];

  if (!product) {
    return null;
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
          <div>
            <img src={product.image} alt={product.title} className="w-full rounded-xl shadow-lg" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{product.description}</p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Spécifications techniques
              </h3>
              <div className="space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <div>
                      <span className="font-semibold">{spec.label}</span> {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Utilisations recommandées
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.uses.map((use, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                  >
                    {use}
                  </span>
                ))}
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

