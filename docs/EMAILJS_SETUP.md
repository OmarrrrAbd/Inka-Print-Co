# Configuration EmailJS et reCAPTCHA

## 📧 Configuration EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois)
3. Vérifiez votre email

### 2. Configurer un service email
1. Dans le dashboard, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID**

### 3. Créer un template d'email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. **IMPORTANT** : Dans le champ **To Email**, entrez **VOTRE adresse email** (celle où vous voulez recevoir les notifications)
4. Utilisez ce template de base :

```
Sujet: Nouvelle demande de devis - {{from_name}}

Bonjour,

Vous avez reçu une nouvelle demande de devis depuis le site web Inka Print Co.

Informations du client:
- Nom: {{from_name}}
- Email: {{from_email}}
- Téléphone: {{phone}}
- Type de produit: {{product_type}}

Message:
{{message}}

{% if file_name %}
Fichier joint: {{file_name}} ({{file_size}})
Le fichier est disponible en pièce jointe (base64).
{% endif %}

---
Cet email a été envoyé depuis le formulaire de contact du site web.
Date: {{date}}
```

**⚠️ Important** : 
- Le champ **To Email** doit contenir **VOTRE email** (ex: contact@inkaprint.ca)
- C'est à cette adresse que vous recevrez toutes les notifications de formulaire
- Le champ **From Name** peut être `{{from_name}}` pour afficher le nom du client

5. Notez le **Template ID**

### 4. Obtenir la clé publique
1. Allez dans **Account** > **General**
2. Copiez votre **Public Key**

### 5. Configurer les variables d'environnement
1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez vos clés :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=votre_recaptcha_site_key
```

## 🛡️ Configuration Google reCAPTCHA

### 1. Créer un site reCAPTCHA
1. Allez sur [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Cliquez sur **+** pour créer un nouveau site
3. Remplissez le formulaire :
   - **Label** : Inka Print Co.
   - **Type** : reCAPTCHA v2 > "Je ne suis pas un robot"
   - **Domaines** : 
     - `localhost` (pour le développement)
     - Votre domaine de production (ex: `inkaprint.ca`)
4. Acceptez les conditions
5. Copiez la **Site Key**

### 2. Ajouter la clé dans les variables d'environnement
Ajoutez `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` dans votre fichier `.env.local`

## ✅ Vérification

1. Redémarrez votre serveur de développement
2. Testez le formulaire de contact
3. Vérifiez que l'email arrive bien dans votre boîte de réception

## 📝 Notes importantes

- **Limite de taille de fichier** : 10MB maximum
- **Formats acceptés** : PDF, JPG, JPEG, PNG, AI, EPS, PSD
- Les fichiers sont convertis en base64 et envoyés dans l'email
- Pour des fichiers plus volumineux, considérez utiliser un service de stockage cloud (Cloudinary, AWS S3)

## 🔧 Dépannage

### L'email n'est pas envoyé
- Vérifiez que toutes les variables d'environnement sont correctes
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que le service email est bien connecté dans EmailJS

### reCAPTCHA ne s'affiche pas
- Vérifiez que `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` est défini
- Vérifiez que le domaine est autorisé dans la configuration reCAPTCHA
- Videz le cache du navigateur

