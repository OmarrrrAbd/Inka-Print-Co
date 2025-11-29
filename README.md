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

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. In Netlify:
   - Go to "Add new site" > "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

The site will automatically deploy on every push to your main branch.

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

### EmailJS et reCAPTCHA

Le formulaire de contact nécessite une configuration EmailJS et Google reCAPTCHA.

1. Créez un fichier `.env.local` à la racine du projet
2. Copiez les variables depuis `.env.example`
3. Suivez les instructions dans `docs/EMAILJS_SETUP.md` pour obtenir vos clés

```bash
cp .env.example .env.local
# Puis éditez .env.local avec vos clés
```

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
