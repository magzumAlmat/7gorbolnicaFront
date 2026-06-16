'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ locale: 'ru', setLocale: () => {} });

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('ru');

  useEffect(() => {
    const saved = localStorage.getItem('kazniisa_locale');
    if (saved && ['ru', 'kz', 'en'].includes(saved)) setLocale(saved);
  }, []);

  const changeLocale = (loc) => {
    setLocale(loc);
    localStorage.setItem('kazniisa_locale', loc);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
