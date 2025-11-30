# Inka Print Co. - Website

A modern, bilingual (French/English) static website for Inka Print Co., a professional printing services company based in Montreal, Quebec.

## Features

- 🌐 **Bilingual Support**: French and English language switching
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- ⚡ **Fast Performance**: Static site generation with Next.js
- 🎭 **Smooth Transitions**: Fade animations between page changes
- 📄 **Multiple Pages**: Home, Catalogue, Services, About, Contact, and Product Details

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Font Awesome** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory, ready for static hosting.

## Deployment to Netlify

### Quick Start

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. In Netlify:
   - Go to "Add new site" > "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

3. **Configure Environment Variables** (IMPORTANT):
   - Go to Site settings > Environment variables
   - Add these variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - Redéployez après avoir ajouté les variables

4. **Configure EmailJS Template**:
   - Dans EmailJS Dashboard, configurez votre template pour envoyer les emails à **VOTRE adresse email**
   - Voir [docs/EMAILJS_SETUP.md](./docs/EMAILJS_SETUP.md) pour les détails

The site will automatically deploy on every push to your main branch.

📖 **Guide complet** : Voir [docs/NETLIFY_DEPLOYMENT.md](./docs/NETLIFY_DEPLOYMENT.md) pour un guide détaillé de déploiement.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with language provider
│   ├── page.tsx            # Main page with routing logic
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── pages/              # Page components
│       ├── HomePage.tsx
│       ├── CataloguePage.tsx
│       ├── ServicesPage.tsx
│       ├── AboutPage.tsx
│       ├── ContactPage.tsx
│       ├── ContactInfoPage.tsx
│       └── ProductDetailPage.tsx
├── contexts/
│   └── LanguageContext.tsx # Language switching context
├── lib/
│   └── translations.ts     # Translation strings
└── public/                 # Static assets
```

## Language Switching

The website supports French and English. Users can switch languages using the language toggle button in the navigation. The selected language is saved in localStorage for persistence across sessions.

## Pages

- **Home**: Hero section, services overview, product highlights, and why choose us
- **Catalogue**: Complete product catalog with images and descriptions
- **Services**: Detailed service offerings (Digital, Offset, Large Format, Packaging)
- **About**: Company mission, vision, and values
- **Contact**: Quote request form with file upload
- **Contact Info**: Contact information and location details
- **Product Details**: Individual product pages with specifications

## Configuration

### Netlify Forms

Le formulaire de contact utilise **Netlify Forms** pour recevoir les notifications. Aucune configuration supplémentaire n'est nécessaire en développement.

Pour la production sur Netlify :
1. Déployez votre site sur Netlify
2. Allez dans **Forms** > **Settings** dans votre dashboard Netlify
3. Activez **Email notifications** et entrez votre adresse email

📖 **Guide complet** : Voir [docs/NETLIFY_FORMS_SETUP.md](./docs/NETLIFY_FORMS_SETUP.md) pour tous les détails.

## Customization

### Updating Content

Edit the translation files in `lib/translations.ts` to update text content for both languages.

### Styling

Modify Tailwind classes in components or update `tailwind.config.js` for theme customization.

### Images

Replace Unsplash image URLs with your own product images in the respective page components.

## Development Status

Pour voir le statut de développement détaillé et la liste des tâches restantes, consultez [DEVELOPMENT_STATUS.md](./DEVELOPMENT_STATUS.md).

## License

© 2024 Inka Print Co. All rights reserved.
