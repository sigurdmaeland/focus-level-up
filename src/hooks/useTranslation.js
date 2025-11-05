import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

// Custom hook to get translations based on current language
export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  return { t, currentLanguage };
};

// Helper function to get nested translation
export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return value || key;
};
