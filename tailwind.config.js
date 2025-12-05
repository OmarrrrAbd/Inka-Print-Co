/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale pour Inka Print Co.
        ink: {
          // Bleu indigo profond - Évoque l'encre, la précision, le professionnalisme
          primary: '#1e40af',      // Indigo 800
          'primary-light': '#3b82f6', // Indigo 500
          'primary-dark': '#1e3a8a',  // Indigo 900
          'primary-50': '#eef2ff',
          'primary-100': '#e0e7ff',
          'primary-600': '#4f46e5',
        },
        coral: {
          // Orange corail - Évoque la créativité, l'énergie, la chaleur
          accent: '#f97316',       // Orange 500
          'accent-light': '#fb923c', // Orange 400
          'accent-dark': '#ea580c',  // Orange 600
          'accent-50': '#fff7ed',
          'accent-100': '#ffedd5',
        },
        slate: {
          // Gris ardoise - Élégance, neutralité, sophistication
          neutral: '#475569',      // Slate 600
          'neutral-light': '#64748b', // Slate 500
          'neutral-dark': '#334155',   // Slate 700
          'neutral-50': '#f8fafc',
          'neutral-100': '#f1f5f9',
        },
      },
    },
  },
  plugins: [],
}

