# Guide d'ajout des quantités aux produits

## Structure JSON

Pour ajouter des quantités disponibles à un produit, ajoutez le champ `quantities` dans le fichier `data/products.json` :

```json
{
  "id": 1,
  "category": "cartes-affaires",
  "name": "Cartes d'affaires",
  "variant": "14pt + Matte Finish",
  "description": "",
  "image": "/images/cartes-affaires/14pt-matte.jpg",
  "slug": "cartes-affaires-14pt-matte-finish",
  "quantities": [200, 500, 1000, 2000, 5000]
}
```

## Exemple complet

```json
{
  "products": [
    {
      "id": 1,
      "category": "cartes-affaires",
      "name": "Cartes d'affaires",
      "variant": "14pt + Matte Finish",
      "description": "",
      "image": "/images/cartes-affaires/14pt-matte.jpg",
      "slug": "cartes-affaires-14pt-matte-finish",
      "quantities": [200, 500, 1000, 2000, 5000]
    },
    {
      "id": 2,
      "category": "cartes-affaires",
      "name": "Cartes d'affaires",
      "variant": "16pt + Matte Finish",
      "description": "",
      "image": "/images/cartes-affaires/16pt-matte.jpg",
      "slug": "cartes-affaires-16pt-matte-finish",
      "quantities": [200, 500, 1000, 2000, 5000]
    }
  ]
}
```

## Notes importantes

- Le champ `quantities` est **optionnel** - si un produit n'a pas de quantités définies, la section ne s'affichera pas
- Les quantités doivent être un **tableau de nombres**
- Les quantités sont affichées dans l'ordre défini dans le tableau
- La première quantité du tableau sera sélectionnée par défaut
- Les quantités sont formatées avec des séparateurs de milliers (ex: 1,000 au lieu de 1000)

## Comportement

- Si un produit a des quantités définies, elles s'affichent comme des boutons sélectionnables
- La quantité sélectionnée est mise en évidence (fond bleu)
- Quand l'utilisateur change de variant, la quantité est réinitialisée à la première quantité disponible du nouveau variant
- Si le variant actuel n'a pas de quantités, la section quantité ne s'affiche pas

