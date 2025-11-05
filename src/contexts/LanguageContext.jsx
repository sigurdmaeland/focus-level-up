import React, { createContext, useContext, useState, useEffect } from 'react';

// Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('no'); // Default to Norwegian

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('focuslevelup_language');
    if (savedLanguage && ['no', 'en'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Change language and save to localStorage
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('focuslevelup_language', language);
  };

  const value = {
    currentLanguage,
    changeLanguage,
    isNorwegian: currentLanguage === 'no',
    isEnglish: currentLanguage === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
