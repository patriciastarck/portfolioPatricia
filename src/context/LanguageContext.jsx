import React, { createContext, useState, useContext } from "react";
// Importa as traduções do arquivo i18n.js
import { translations, availableLanguages } from "../i18n";

export const LanguageContext = createContext();

// EXPORT NOMEADO: resolve o erro 'does not provide an export named useLanguage'
export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
  // Inicializa o idioma como Português (PT)
  const [language, setLanguage] = useState(availableLanguages.PT);

  const toggleLanguage = () => {
    setLanguage((prevLang) =>
      prevLang === availableLanguages.PT
        ? availableLanguages.EN
        : availableLanguages.PT
    );
  };

  // Função 't' (translate) para buscar a string traduzida pela chave (key)
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
