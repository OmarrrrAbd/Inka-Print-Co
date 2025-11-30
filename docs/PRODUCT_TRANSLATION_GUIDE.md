# Guide de traduction des produits

## Structure recommandée pour les traductions

Pour traduire les produits, nous recommandons d'ajouter les traductions directement dans le fichier `data/products.json`. Voici la structure recommandée :

### Option 1 : Champs séparés par langue (Recommandé)

```json
{
  "id": 1,
  "category": "cartes-affaires",
  "name_fr": "Cartes d'affaires",
  "name_en": "Business cards",
  "variant_fr": "14pt + Finition mate",
  "variant_en": "14pt + Matte Finish",
  "description_fr": "Description en français...",
  "description_en": "Description in English...",
  "image": "/images/cartes-affaires/14pt-matte.jpg",
  "slug": "cartes-affaires-14pt-matte-finish"
}
```

### Option 2 : Objet de traduction

```json
{
  "id": 1,
  "category": "cartes-affaires",
  "name": {
    "fr": "Cartes d'affaires",
    "en": "Business cards"
  },
  "variant": {
    "fr": "14pt + Finition mate",
    "en": "14pt + Matte Finish"
  },
  "description": {
    "fr": "Description en français...",
    "en": "Description in English..."
  },
  "image": "/images/cartes-affaires/14pt-matte.jpg",
  "slug": "cartes-affaires-14pt-matte-finish"
}
```

## Implémentation

Une fois la structure choisie, il faudra :

1. **Modifier l'interface `Product` dans `lib/products.ts`** pour supporter les traductions
2. **Créer des fonctions helper** pour récupérer les traductions selon la langue active
3. **Mettre à jour `ProductVariantPage`** pour utiliser les traductions

### Exemple de fonction helper

```typescript
export const getProductName = (product: Product, language: Language): string => {
  if ('name_fr' in product) {
    return language === 'fr' ? product.name_fr : product.name_en;
  }
  return product.name; // Fallback
};
```

## Avantages de chaque approche

### Option 1 (Champs séparés)
- ✅ Plus simple à implémenter
- ✅ Compatible avec la structure actuelle
- ✅ Facile à migrer progressivement

### Option 2 (Objet de traduction)
- ✅ Structure plus organisée
- ✅ Plus facile à étendre (ajouter d'autres langues)
- ✅ Plus propre au niveau du code

## Recommandation

Nous recommandons l'**Option 1** car elle est plus simple à implémenter et à maintenir, surtout si vous n'avez que deux langues (FR/EN).

