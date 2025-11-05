# Focus Level Up 🚀

A modern, bilingual (Norwegian/English) React website for Focus Level Up digital marketing agency. Built with React, Vite, and a custom translation system.

## ✨ Features

- 🌍 **Bilingual Support**: Complete Norwegian and English translation system
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎯 **Modern UI**: Clean, professional design with smooth animations
- 📝 **Contact Form**: Functional contact form with validation
- 🔄 **Language Switching**: Seamless language switching with localStorage persistence

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router
- **Build Tool**: Vite
- **Styling**: CSS Modules + Global CSS
- **Icons**: React Icons
- **Translation**: Custom translation system with Context API

## 📁 Project Structure

```
src/
├── components/         # Reusable components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Navbar.module.css
├── contexts/          # React contexts
│   └── LanguageContext.jsx
├── hooks/             # Custom hooks
│   └── useTranslation.js
├── pages/             # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── GoogleAds.jsx
│   ├── Home.jsx
│   ├── MetaAds.jsx
│   ├── SEO.jsx
│   ├── Services.jsx
│   └── WebsiteShop.jsx
├── styles/            # CSS files
│   ├── About.css
│   ├── Ads.css
│   ├── Contact.css
│   ├── Global.css
│   └── Home.css
└── translations/      # Translation files
    └── index.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sigurdmaeland/focus-level-up.git
   cd focus-level-up
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Translation System

The website uses a custom translation system built with React Context API:

- **Languages**: Norwegian (default) and English
- **Storage**: User preference saved in localStorage
- **Switching**: Language switcher in navigation bar
- **Implementation**: `useTranslation` hook for easy access to translations

### Adding New Translations

1. Add new keys to `src/translations/index.js`
2. Use the `useTranslation` hook in components:

```jsx
import { useTranslation } from '../hooks/useTranslation';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('mySection.title')}</h1>;
}
```

## 📱 Pages

- **Home**: Hero section with typing animation, services overview, testimonials, FAQ
- **About**: Company information, mission, values, team introduction
- **Contact**: Contact form with country code selection and validation
- **Meta Ads**: Facebook and Instagram advertising services
- **Google Ads**: Google advertising and PPC services
- **SEO**: Search engine optimization services (coming soon)
- **Website & E-commerce**: Web development services (coming soon)

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth typing animations
- Responsive navigation with mobile hamburger menu
- Professional color scheme with brand colors
- Interactive elements and hover effects
- Mobile-optimized layouts

## 📧 Contact Information

**Focus Level Up**
- Email: post@focuslevelup.no
- Phone: +47 483 53 943
- Instagram: @focuslevelup

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is proprietary and confidential. All rights reserved by Focus Level Up.

---

Built with ❤️ by Focus Level Up team

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
