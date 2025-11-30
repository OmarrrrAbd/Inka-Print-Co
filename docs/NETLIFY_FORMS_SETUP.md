# Configuration Netlify Forms - Inka Print Co.

## 📋 Vue d'ensemble

Le formulaire de contact utilise **Netlify Forms** pour recevoir les notifications directement dans votre dashboard Netlify. Cette solution est intégrée nativement à Netlify et ne nécessite pas de configuration supplémentaire une fois le formulaire déployé.

## ✅ Avantages de Netlify Forms

- ✅ **Gratuit** : Jusqu'à 100 soumissions/mois (plan gratuit)
- ✅ **Pas de configuration** : Fonctionne automatiquement après déploiement
- ✅ **Notifications email** : Recevez un email à chaque soumission
- ✅ **Dashboard Netlify** : Consultez toutes les soumissions dans un seul endroit
- ✅ **Protection anti-spam** : Honeypot intégré
- ✅ **Support des fichiers joints** : Jusqu'à 10MB par fichier

## 🔧 Configuration requise

### 1. Attributs du formulaire

Le formulaire doit avoir ces attributs :
```html
<form 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- Honeypot pour la protection anti-spam -->
  <div style="display: none;">
    <label>
      Ne remplissez pas ce champ si vous êtes humain: 
      <input name="bot-field" />
    </label>
  </div>
  <!-- Reste du formulaire -->
</form>
```

### 2. Noms des champs

Les champs doivent avoir des attributs `name` correspondants :
- `fullName` - Nom complet
- `email` - Email du client
- `phone` - Téléphone (optionnel)
- `productType` - Type de produit
- `message` - Message
- `file` - Fichier joint (optionnel)

## 📧 Configuration des notifications email

### 1. Activer les notifications dans Netlify

1. Allez dans votre dashboard Netlify
2. Sélectionnez votre site
3. Allez dans **Forms** dans le menu de gauche
4. Cliquez sur **Settings** (⚙️)
5. Activez **Email notifications**
6. Entrez l'adresse email où vous voulez recevoir les notifications
7. Sauvegardez

### 2. Personnaliser l'email de notification

1. Dans **Forms** > **Settings**
2. Cliquez sur **Email notifications**
3. Personnalisez le sujet et le contenu de l'email
4. Vous pouvez utiliser des variables comme :
   - `{{form_name}}` - Nom du formulaire
   - `{{all_fields}}` - Tous les champs
   - `{{email}}` - Email du client
   - `{{fullName}}` - Nom du client

**Exemple de template d'email :**
```
Sujet: Nouvelle demande de devis - {{fullName}}

Bonjour,

Vous avez reçu une nouvelle demande de devis depuis le site web Inka Print Co.

{{all_fields}}

---
Cet email a été envoyé depuis le formulaire de contact.
```

## 📁 Gestion des fichiers joints

### Limites
- **Taille maximale** : 10MB par fichier
- **Formats acceptés** : Tous les formats (PDF, JPG, PNG, AI, EPS, PSD, etc.)
- **Stockage** : Les fichiers sont stockés temporairement sur Netlify (30 jours)

### Accéder aux fichiers joints

1. Allez dans **Forms** dans votre dashboard Netlify
2. Cliquez sur **Submissions** pour voir toutes les soumissions
3. Cliquez sur une soumission pour voir les détails
4. Les fichiers joints sont disponibles en téléchargement

## 🔍 Consulter les soumissions

### Via le dashboard Netlify

1. Allez dans **Forms** > **Submissions**
2. Vous verrez toutes les soumissions avec :
   - Date et heure
   - Informations du client
   - Message
   - Fichiers joints (si présents)

### Exporter les données

1. Dans **Forms** > **Submissions**
2. Cliquez sur **Export** pour télécharger un CSV
3. Les fichiers joints ne sont pas inclus dans l'export CSV

## 🛡️ Protection anti-spam

### Honeypot (déjà configuré)

Le formulaire utilise un champ "honeypot" caché qui piège les bots :
- Les humains ne voient pas ce champ
- Les bots le remplissent souvent
- Netlify rejette automatiquement ces soumissions

### reCAPTCHA (optionnel)

Le formulaire utilise aussi Google reCAPTCHA pour une protection supplémentaire. C'est optionnel mais recommandé.

## 🔄 Double envoi (Netlify + EmailJS)

Le formulaire envoie les données à **deux endroits** :

1. **Netlify Forms** : Pour les notifications et le stockage
2. **EmailJS** : Pour l'envoi des fichiers joints et comme backup

Cela garantit que vous recevez toujours les notifications, même si un service est temporairement indisponible.

## 📊 Limites du plan gratuit

- **100 soumissions/mois** pour Netlify Forms
- **200 emails/mois** pour EmailJS
- **10MB** par fichier joint

Pour plus de soumissions, considérez un plan Netlify payant.

## 🔧 Dépannage

### Les soumissions n'apparaissent pas dans Netlify

1. **Vérifiez les attributs du formulaire** :
   - `name="contact"` doit être présent
   - `data-netlify="true"` doit être présent
   - `method="POST"` doit être présent

2. **Vérifiez le champ caché** :
   - `<input type="hidden" name="form-name" value="contact" />` doit être présent

3. **Vérifiez la console du navigateur** :
   - Ouvrez les outils de développement (F12)
   - Regardez s'il y a des erreurs lors de la soumission

4. **Vérifiez les logs Netlify** :
   - Allez dans **Functions** > **Logs** pour voir les erreurs

### Les notifications email ne sont pas reçues

1. **Vérifiez la configuration** :
   - Allez dans **Forms** > **Settings** > **Email notifications**
   - Assurez-vous que les notifications sont activées
   - Vérifiez que l'adresse email est correcte

2. **Vérifiez le dossier spam** :
   - Les emails peuvent arriver dans le dossier spam
   - Ajoutez `notifications@netlify.com` à vos contacts

3. **Vérifiez les limites** :
   - Vérifiez que vous n'avez pas dépassé la limite de 100 soumissions/mois

### Les fichiers joints ne sont pas reçus

1. **Vérifiez la taille** :
   - Les fichiers doivent faire moins de 10MB
   - Netlify rejette les fichiers trop volumineux

2. **Vérifiez le format** :
   - Tous les formats sont acceptés, mais certains peuvent être bloqués par votre client email

3. **Accédez via le dashboard** :
   - Les fichiers sont toujours disponibles dans le dashboard Netlify, même si l'email ne les contient pas

## 📝 Notes importantes

- Les soumissions sont stockées pendant **30 jours** sur le plan gratuit
- Les fichiers joints sont stockés pendant **30 jours**
- Pour un stockage permanent, considérez un plan payant ou exportez régulièrement les données
- Netlify Forms fonctionne uniquement sur les sites hébergés sur Netlify

## 🔗 Ressources

- [Documentation Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Configuration des notifications email](https://docs.netlify.com/forms/notifications/)
- [Limites et quotas](https://docs.netlify.com/forms/overview/#form-submission-limits)

