import productsData from '@/data/products.json';

export interface Product {
  id: number;
  category: string;
  name: string;
  variant: string;
  description: string;
  image: string;
  slug: string;
  quantities?: number[]; // Quantités disponibles pour ce produit
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}

export const products: Product[] = productsData.products;

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((product) => product.category === categorySlug);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getCategories = (): Category[] => {
  const categoryMap = new Map<string, Product[]>();
  
  products.forEach((product) => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, []);
    }
    categoryMap.get(product.category)!.push(product);
  });

  const categories: Category[] = [];
  categoryMap.forEach((products, categorySlug) => {
    const categoryName = getCategoryDisplayName(categorySlug);
    categories.push({
      id: categorySlug,
      name: categoryName,
      slug: categorySlug,
      products,
    });
  });

  return categories.sort((a, b) => a.name.localeCompare(b.name));
};

export const getCategoryDisplayName = (categorySlug: string): string => {
  const names: Record<string, string> = {
    'cartes-affaires': 'Cartes d\'affaires',
    'circulaires': 'Circulaires',
    'depliants': 'Dépliants',
    'cartes-postales': 'Cartes postales',
    'signets': 'Signets',
    'pochettes': 'Pochettes corporatives',
    'cartes-voeux': 'Cartes de voeux',
    'affiches': 'Affiches',
    'bloc-notes': 'Bloc-notes',
    'puzzle': 'Puzzle',
  };
  return names[categorySlug] || categorySlug;
};

