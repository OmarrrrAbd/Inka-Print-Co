# Guide de déploiement Netlify - Inka Print Co.

## 🚀 Déploiement sur Netlify

### Prérequis
- Un compte Netlify (gratuit disponible sur [netlify.com](https://www.netlify.com))

---

## 📋 Étapes de déploiement

### 1. Préparer le projet

Assurez-vous que votre projet est prêt :
```bash
npm run build
```

Vérifiez que le dossier `out` est généré correctement.

### 2. Créer un dépôt GitHub (recommandé)

1. Créez un nouveau dépôt sur GitHub
2. Poussez votre code :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/inka-print-co.git
git push -u origin main
```

### 3. Déployer sur Netlify

#### Option A : Via GitHub (recommandé)
1. Connectez-vous à [Netlify](https://app.netlify.com)
2. Cliquez sur **"Add new site"** > **"Import an existing project"**
3. Sélectionnez **GitHub** et autorisez Netlify
4. Choisissez votre dépôt `inka-print-co`
5. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `out`
6. Cliquez sur **"Deploy site"**

#### Option B : Via drag & drop
1. Connectez-vous à [Netlify](https://app.netlify.com)
2. Allez dans **"Sites"**
3. Glissez-déposez le dossier `out` dans la zone de déploiement

---

---

## 📧 Configuration des notifications

Le formulaire utilise **Netlify Forms** pour recevoir les notifications. C'est la solution la plus simple et elle fonctionne automatiquement après le déploiement.

### Activer les notifications email

1. Allez dans votre dashboard Netlify
2. Sélectionnez votre site
3. Allez dans **Forms** dans le menu de gauche
4. Cliquez sur **Settings** (⚙️)
5. Activez **Email notifications**
6. Entrez l'adresse email où vous voulez recevoir les notifications
7. Sauvegardez

📖 **Guide complet** : Voir [docs/NETLIFY_FORMS_SETUP.md](./NETLIFY_FORMS_SETUP.md) pour tous les détails sur la configuration et l'utilisation de Netlify Forms.

---

---

## ✅ Vérification après déploiement

### 1. Tester le formulaire
1. Visitez votre site déployé
2. Remplissez le formulaire de contact
3. Soumettez le formulaire
4. Vérifiez que vous recevez l'email de notification

### 2. Vérifier les soumissions dans Netlify
1. Dans Netlify, allez dans **Forms** > **Submissions**
2. Vous devriez voir la soumission que vous venez de faire
3. Vérifiez que toutes les données sont présentes

---

## 🔧 Dépannage

### L'email n'arrive pas

1. **Vérifiez la configuration des notifications**
   - Allez dans Netlify > Forms > Settings
   - Assurez-vous que les notifications email sont activées
   - Vérifiez que l'adresse email est correcte

2. **Vérifiez le spam**
   - Les emails peuvent arriver dans le dossier spam
   - Vérifiez aussi les promotions/publicités (Gmail)
   - Ajoutez `notifications@netlify.com` à vos contacts

3. **Vérifiez les soumissions dans Netlify**
   - Allez dans Forms > Submissions
   - Vérifiez que les soumissions arrivent bien dans Netlify
   - Si les soumissions arrivent mais pas les emails, c'est un problème de configuration email

### Le site ne se déploie pas

1. **Vérifiez les logs de build**
   - Dans Netlify > Deploys, cliquez sur le dernier déploiement
   - Regardez les logs pour identifier l'erreur

2. **Vérifiez la configuration**
   - Build command : `npm run build`
   - Publish directory : `out`

---

## 📝 Notes importantes

- **Limite Netlify Forms gratuite** : 100 soumissions/mois
- **Taille maximale de fichier** : 10MB par fichier
- **Formats de fichiers acceptés** : PDF, JPG, JPEG, PNG, AI, EPS, PSD
- Les fichiers sont stockés temporairement sur Netlify (30 jours)
- Pour des volumes plus importants, considérez un plan Netlify payant

---

## 🔄 Mises à jour futures

Pour mettre à jour le site :
1. Poussez vos changements sur GitHub
2. Netlify redéploiera automatiquement (si connecté à GitHub)
3. Ou déclenchez un déploiement manuel depuis Netlify

---

## 📞 Support

Pour toute question :
- Documentation Netlify Forms : https://docs.netlify.com/forms/setup/
- Documentation Netlify : https://docs.netlify.com/

