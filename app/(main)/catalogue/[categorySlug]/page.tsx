import { getCategories } from '@/lib/products';
import CategoryProductClient from './CategoryProductClient';

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export default function CategoryProduct({ params }: { params: { categorySlug: string } }) {
  return <CategoryProductClient categorySlug={params.categorySlug} />;
}

