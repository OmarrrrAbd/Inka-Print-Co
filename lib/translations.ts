export type Language = 'fr' | 'en';

export interface Translations {
  nav: {
    home: string;
    catalogue: string;
    services: string;
    contact: string;
    about: string;
    requestQuote: string;
  };
  home: {
    title: string;
    titleLine2: string;
    subtitle: string;
    seeCatalogue: string;
    contactUs: string;
    ourProducts: string;
    productsSubtitle: string;
    whyChooseUs: string;
    whyChooseUsSubtitle: string;
    qualityPremium: string;
    qualityPremiumDesc: string;
    competitivePrices: string;
    competitivePricesDesc: string;
    fastDelivery: string;
    fastDeliveryDesc: string;
    dedicatedSupport: string;
    dedicatedSupportDesc: string;
    readyToStart: string;
    readyToStartDesc: string;
    requestFreeQuote: string;
    ourServices: string;
    servicesSubtitle: string;
    printing: string;
    design: string;
    consulting: string;
    seeAllProducts: string;
  };
  products: {
    flyers: string;
    flyersDesc: string;
    businessCards: string;
    businessCardsDesc: string;
    brochures: string;
    brochuresDesc: string;
    rollups: string;
    rollupsDesc: string;
    banners: string;
    bannersDesc: string;
    packaging: string;
    packagingDesc: string;
    seeProduct: string;
    backToCatalogue: string;
    requestPersonalizedQuote: string;
  };
  catalogue: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    digitalPrinting: string;
    digitalPrintingDesc: string;
    offsetPrinting: string;
    offsetPrintingDesc: string;
    largeFormat: string;
    largeFormatDesc: string;
    customPackaging: string;
    customPackagingDesc: string;
    ourAdvantages: string;
    guaranteedQuality: string;
    guaranteedQualityDesc: string;
    competitivePrices: string;
    competitivePricesDesc: string;
    fastDelivery: string;
    fastDeliveryDesc: string;
    expertSupport: string;
    expertSupportDesc: string;
    readyToStart: string;
    readyToStartDesc: string;
    requestFreeQuote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    contactInfo: string;
    phone: string;
    email: string;
    whatsapp: string;
    location: string;
    locationDesc: string;
    followUs: string;
    requestQuote: string;
    fullName: string;
    emailLabel: string;
    phoneLabel: string;
    productType: string;
    selectProduct: string;
    message: string;
    sendRequest: string;
    messageSent: string;
    messageSentDesc: string;
    uploadFile: string;
    fileUploaded: string;
  };
  about: {
    title: string;
    subtitle: string;
    ourServices: string;
    ourValues: string;
    mission: string;
    missionDesc: string;
    vision: string;
    visionDesc: string;
    values: string;
    quality: string;
    qualityDesc: string;
    innovation: string;
    innovationDesc: string;
    customerFocus: string;
    customerFocusDesc: string;
    sustainability: string;
    sustainabilityDesc: string;
  };
  footer: {
    description: string;
    products: string;
    company: string;
    contact: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      catalogue: 'Catalogue',
      services: 'Services',
      contact: 'Contact',
      about: 'À propos',
      requestQuote: 'Demander un devis',
    },
    home: {
      title: 'Solutions d\'impression',
      titleLine2: 'rapides et fiables',
      subtitle: 'Transformez vos idées en réalité avec nos services d\'impression professionnels de haute qualité. Livraison rapide et prix compétitifs garantis.',
      seeCatalogue: 'Voir le catalogue',
      contactUs: 'Nous contacter',
      ourProducts: 'Nos produits d\'impression',
      productsSubtitle: 'Découvrez notre gamme complète de solutions d\'impression pour tous vos besoins professionnels',
      whyChooseUs: 'Pourquoi nous choisir',
      whyChooseUsSubtitle: 'Nous nous engageons à fournir des services d\'impression de qualité supérieure avec une attention particulière aux détails',
      qualityPremium: 'Qualité premium',
      qualityPremiumDesc: 'Matériaux de haute qualité et technologies d\'impression de pointe pour des résultats exceptionnels',
      competitivePrices: 'Prix compétitifs',
      competitivePricesDesc: 'Tarifs transparents et compétitifs sans compromis sur la qualité de nos services',
      fastDelivery: 'Livraison rapide',
      fastDeliveryDesc: 'Délais de production courts et livraison express disponible pour vos urgences',
      dedicatedSupport: 'Support dédié',
      dedicatedSupportDesc: 'Équipe professionnelle à votre écoute pour vous accompagner dans vos projets',
      readyToStart: 'Prêt à démarrer votre projet ?',
      readyToStartDesc: 'Contactez-nous dès aujourd\'hui pour obtenir un devis gratuit et personnalisé',
      requestFreeQuote: 'Demander un devis gratuit',
      ourServices: 'Nos services',
      servicesSubtitle: 'Une gamme complète de services pour répondre à tous vos besoins',
      printing: 'Impression – Flyers, cartes, brochures, bannières, packaging',
      design: 'Design – Création graphique professionnelle adaptée à vos supports',
      consulting: 'Conseil / suivi – Assistance pour vos choix, formats et finitions',
      seeAllProducts: 'Voir tous les produits',
    },
    products: {
      flyers: 'Flyers',
      flyersDesc: 'Formats variés, papier de qualité, finitions brillantes ou mates',
      businessCards: 'Cartes de visite',
      businessCardsDesc: 'Impression professionnelle, plusieurs finitions disponibles',
      brochures: 'Brochures',
      brochuresDesc: 'Pliage professionnel, papier premium, couleurs éclatantes',
      rollups: 'Roll-ups',
      rollupsDesc: 'Supports publicitaires grand format, installation facile',
      banners: 'Banderoles',
      bannersDesc: 'Dimensions personnalisées. Bâche PVC 510g. Œillets renforcés. Résistant aux intempéries. Idéal pour extérieur.',
      packaging: 'Packaging personnalisé',
      packagingDesc: 'Boîtes, sachets, étiquettes sur mesure. Carton recyclable. Impression offset ou numérique. Valorisez votre marque.',
      seeProduct: 'Voir le produit',
      backToCatalogue: 'Retour au catalogue',
      requestPersonalizedQuote: 'Demander un devis personnalisé',
    },
    catalogue: {
      title: 'Notre catalogue',
      subtitle: 'Explorez notre gamme complète de produits d\'impression professionnels',
    },
    services: {
      title: 'Nos services d\'impression',
      subtitle: 'Solutions complètes d\'impression professionnelle pour tous vos besoins marketing et communication',
      digitalPrinting: 'Impression numérique',
      digitalPrintingDesc: 'Idéale pour les petites et moyennes quantités avec un rendu de haute qualité. Délais rapides et flexibilité maximale pour vos projets urgents.',
      offsetPrinting: 'Impression offset',
      offsetPrintingDesc: 'Pour les grandes quantités avec une qualité d\'impression exceptionnelle et des coûts optimisés. Parfait pour vos campagnes d\'envergure.',
      largeFormat: 'Grand format',
      largeFormatDesc: 'Supports publicitaires de grande taille pour une visibilité maximale. Intérieur et extérieur, résistants aux intempéries.',
      customPackaging: 'Packaging sur mesure',
      customPackagingDesc: 'Créez une expérience unique pour vos clients avec des emballages personnalisés qui reflètent votre identité de marque.',
      ourAdvantages: 'Nos avantages',
      guaranteedQuality: 'Qualité garantie',
      guaranteedQualityDesc: 'Matériaux premium et contrôle qualité rigoureux sur chaque commande',
      competitivePrices: 'Prix compétitifs',
      competitivePricesDesc: 'Tarifs transparents et dégressifs selon les quantités commandées',
      fastDelivery: 'Livraison rapide',
      fastDeliveryDesc: 'Production express et livraison dans tout le Québec',
      expertSupport: 'Support expert',
      expertSupportDesc: 'Équipe dédiée pour vous conseiller et accompagner vos projets',
      readyToStart: 'Prêt à démarrer votre projet ?',
      readyToStartDesc: 'Notre équipe est à votre disposition pour vous accompagner et vous fournir un devis personnalisé',
      requestFreeQuote: 'Demander un devis gratuit',
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets d\'impression',
      contactInfo: 'Informations de contact',
      phone: 'Téléphone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Localisation',
      locationDesc: 'Basé à Montréal, livraison partout au Québec. Qualité et rapidité garanties.',
      followUs: 'Suivez-nous',
      requestQuote: 'Demander un devis',
      fullName: 'Nom complet *',
      emailLabel: 'Email *',
      phoneLabel: 'Téléphone',
      productType: 'Type de produit',
      selectProduct: 'Sélectionnez un produit',
      message: 'Message *',
      sendRequest: 'Envoyer la demande',
      messageSent: 'Message envoyé !',
      messageSentDesc: 'Nous vous répondrons dans les plus brefs délais.',
      uploadFile: 'Téléverser un fichier',
      fileUploaded: 'Fichier téléversé',
    },
    about: {
      title: 'À propos de nous',
      subtitle: 'Découvrez qui nous sommes et nos valeurs',
      ourServices: 'Nos services',
      ourValues: 'Nos valeurs',
      mission: 'Notre mission',
      missionDesc: 'Fournir des solutions d\'impression professionnelles de haute qualité qui permettent à nos clients de communiquer efficacement et de se démarquer dans leur marché.',
      vision: 'Notre vision',
      visionDesc: 'Devenir le partenaire de confiance pour tous les besoins d\'impression au Québec, en offrant des services innovants, durables et centrés sur le client.',
      values: 'Nos valeurs',
      quality: 'Qualité',
      qualityDesc: 'Nous nous engageons à fournir des produits et services de la plus haute qualité, en utilisant les meilleurs matériaux et technologies disponibles.',
      innovation: 'Innovation',
      innovationDesc: 'Nous restons à la pointe des dernières technologies d\'impression et des tendances du marché pour offrir des solutions modernes et efficaces.',
      customerFocus: 'Service client',
      customerFocusDesc: 'La satisfaction de nos clients est notre priorité. Nous écoutons, conseillons et accompagnons chaque projet avec attention et professionnalisme.',
      sustainability: 'Durabilité',
      sustainabilityDesc: 'Nous nous engageons à minimiser notre impact environnemental en utilisant des matériaux recyclables et des pratiques durables.',
    },
    footer: {
      description: 'Solutions d\'impression professionnelles de haute qualité pour tous vos besoins.',
      products: 'Produits',
      company: 'Entreprise',
      contact: 'Contact',
      rights: '© 2024 Inka Print Co. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      catalogue: 'Catalogue',
      services: 'Services',
      contact: 'Contact',
      about: 'About',
      requestQuote: 'Request a quote',
    },
    home: {
      title: 'Fast and reliable',
      titleLine2: 'printing solutions',
      subtitle: 'Transform your ideas into reality with our high-quality professional printing services. Fast delivery and competitive prices guaranteed.',
      seeCatalogue: 'View catalogue',
      contactUs: 'Contact us',
      ourProducts: 'Our printing products',
      productsSubtitle: 'Discover our complete range of printing solutions for all your professional needs',
      whyChooseUs: 'Why choose us',
      whyChooseUsSubtitle: 'We are committed to providing superior quality printing services with particular attention to detail',
      qualityPremium: 'Premium quality',
      qualityPremiumDesc: 'High-quality materials and cutting-edge printing technologies for exceptional results',
      competitivePrices: 'Competitive prices',
      competitivePricesDesc: 'Transparent and competitive rates without compromising on the quality of our services',
      fastDelivery: 'Fast delivery',
      fastDeliveryDesc: 'Short production times and express delivery available for your emergencies',
      dedicatedSupport: 'Dedicated support',
      dedicatedSupportDesc: 'Professional team at your service to support you in your projects',
      readyToStart: 'Ready to start your project?',
      readyToStartDesc: 'Contact us today to get a free and personalized quote',
      requestFreeQuote: 'Request a free quote',
      ourServices: 'Our services',
      servicesSubtitle: 'A complete range of services to meet all your needs',
      printing: 'Printing – Flyers, cards, brochures, banners, packaging',
      design: 'Design – Professional graphic design adapted to your media',
      consulting: 'Consulting / follow-up – Assistance for your choices, formats and finishes',
      seeAllProducts: 'View all products',
    },
    products: {
      flyers: 'Flyers',
      flyersDesc: 'Various formats, quality paper, glossy or matte finishes',
      businessCards: 'Business cards',
      businessCardsDesc: 'Professional printing, multiple finishes available',
      brochures: 'Brochures',
      brochuresDesc: 'Professional folding, premium paper, vibrant colors',
      rollups: 'Roll-ups',
      rollupsDesc: 'Large format advertising supports, easy installation',
      banners: 'Banners',
      bannersDesc: 'Custom dimensions. 510g PVC banner. Reinforced eyelets. Weather resistant. Ideal for outdoor use.',
      packaging: 'Custom packaging',
      packagingDesc: 'Custom boxes, bags, labels. Recyclable cardboard. Offset or digital printing. Enhance your brand.',
      seeProduct: 'View product',
      backToCatalogue: 'Back to catalogue',
      requestPersonalizedQuote: 'Request a personalized quote',
    },
    catalogue: {
      title: 'Our catalogue',
      subtitle: 'Explore our complete range of professional printing products',
    },
    services: {
      title: 'Our printing services',
      subtitle: 'Complete professional printing solutions for all your marketing and communication needs',
      digitalPrinting: 'Digital printing',
      digitalPrintingDesc: 'Ideal for small and medium quantities with high-quality output. Fast turnaround and maximum flexibility for your urgent projects.',
      offsetPrinting: 'Offset printing',
      offsetPrintingDesc: 'For large quantities with exceptional print quality and optimized costs. Perfect for your large-scale campaigns.',
      largeFormat: 'Large format',
      largeFormatDesc: 'Large-size advertising supports for maximum visibility. Indoor and outdoor, weather resistant.',
      customPackaging: 'Custom packaging',
      customPackagingDesc: 'Create a unique experience for your customers with personalized packaging that reflects your brand identity.',
      ourAdvantages: 'Our advantages',
      guaranteedQuality: 'Guaranteed quality',
      guaranteedQualityDesc: 'Premium materials and rigorous quality control on every order',
      competitivePrices: 'Competitive prices',
      competitivePricesDesc: 'Transparent and volume-based pricing according to quantities ordered',
      fastDelivery: 'Fast delivery',
      fastDeliveryDesc: 'Express production and delivery throughout Quebec',
      expertSupport: 'Expert support',
      expertSupportDesc: 'Dedicated team to advise and support your projects',
      readyToStart: 'Ready to start your project?',
      readyToStartDesc: 'Our team is at your disposal to support you and provide you with a personalized quote',
      requestFreeQuote: 'Request a free quote',
    },
    contact: {
      title: 'Contact us',
      subtitle: 'We are here to answer all your questions and support you in your printing projects',
      contactInfo: 'Contact information',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      locationDesc: 'Based in Montreal, delivery throughout Quebec. Quality and speed guaranteed.',
      followUs: 'Follow us',
      requestQuote: 'Request a quote',
      fullName: 'Full name *',
      emailLabel: 'Email *',
      phoneLabel: 'Phone',
      productType: 'Product type',
      selectProduct: 'Select a product',
      message: 'Message *',
      sendRequest: 'Send request',
      messageSent: 'Message sent!',
      messageSentDesc: 'We will respond to you as soon as possible.',
      uploadFile: 'Upload a file',
      fileUploaded: 'File uploaded',
    },
    about: {
      title: 'About us',
      subtitle: 'Discover who we are and our values',
      ourServices: 'Our services',
      ourValues: 'Our values',
      mission: 'Our mission',
      missionDesc: 'To provide high-quality professional printing solutions that enable our clients to communicate effectively and stand out in their market.',
      vision: 'Our vision',
      visionDesc: 'To become the trusted partner for all printing needs in Quebec, by offering innovative, sustainable and customer-focused services.',
      values: 'Our values',
      quality: 'Quality',
      qualityDesc: 'We are committed to providing the highest quality products and services, using the best materials and technologies available.',
      innovation: 'Innovation',
      innovationDesc: 'We stay at the forefront of the latest printing technologies and market trends to offer modern and efficient solutions.',
      customerFocus: 'Customer service',
      customerFocusDesc: 'Customer satisfaction is our priority. We listen, advise and support each project with care and professionalism.',
      sustainability: 'Sustainability',
      sustainabilityDesc: 'We are committed to minimizing our environmental impact by using recyclable materials and sustainable practices.',
    },
    footer: {
      description: 'High-quality professional printing solutions for all your needs.',
      products: 'Products',
      company: 'Company',
      contact: 'Contact',
      rights: '© 2024 Inka Print Co. All rights reserved.',
    },
  },
};

