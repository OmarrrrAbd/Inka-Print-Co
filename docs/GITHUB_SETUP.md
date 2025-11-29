# Guide de configuration GitHub

## 📦 Créer un dépôt GitHub privé

### 1. Créer le dépôt sur GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite > **"New repository"**
3. Remplissez le formulaire :
   - **Repository name** : `Inka-Print-Co` (ou le nom de votre choix)
   - **Description** : "Site web statique pour Inka Print Co. - Services d'impression professionnels"
   - **Visibility** : ✅ **Private** (important !)
   - ❌ Ne cochez PAS "Initialize with README" (nous avons déjà un README)
   - ❌ Ne cochez PAS "Add .gitignore" (nous avons déjà un .gitignore)
4. Cliquez sur **"Create repository"**

### 2. Initialiser Git localement

Si Git n'est pas encore initialisé dans votre projet :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire le commit initial
git commit -m "Initial commit: Inka Print Co. website with EmailJS and reCAPTCHA integration"

# Renommer la branche en main
git branch -M main
```

### 3. Connecter au dépôt GitHub

```bash
# Ajouter le remote (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/Inka-Print-Co.git

# Vérifier que le remote est bien configuré
git remote -v
```

### 4. Pousser le code

```bash
# Pousser vers GitHub
git push -u origin main
```

Si vous êtes invité à vous authentifier :
- Utilisez un **Personal Access Token** (pas votre mot de passe)
- Pour créer un token : GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
- Donnez les permissions : `repo` (accès complet aux dépôts privés)

## 🔒 Sécurité

### Variables d'environnement

⚠️ **IMPORTANT** : Ne jamais commiter les fichiers `.env` ou `.env.local` !

Les fichiers suivants sont déjà dans `.gitignore` :
- `.env`
- `.env.local`
- `.env*.local`

### Secrets GitHub (optionnel)

Si vous utilisez GitHub Actions pour CI/CD, vous pouvez stocker les secrets dans :
- GitHub > Repository > Settings > Secrets and variables > Actions

## 📝 Commandes Git utiles

```bash
# Vérifier l'état
git status

# Ajouter des fichiers modifiés
git add .

# Faire un commit
git commit -m "Description des changements"

# Pousser vers GitHub
git push

# Récupérer les dernières modifications
git pull
```

## 🔄 Workflow recommandé

1. Faire des modifications
2. `git add .`
3. `git commit -m "Description claire"`
4. `git push`

## ✅ Vérification

Après avoir poussé le code, vérifiez sur GitHub :
- ✅ Tous les fichiers sont présents
- ✅ Le dépôt est bien en mode **privé**
- ✅ Le fichier `.env.local` n'est **PAS** présent (sécurité)

---

**Note** : Le code est maintenant sécurisé dans un dépôt privé GitHub ! 🎉

