import React, { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

// Export nomeado para consumir o contexto
export const useTheme = () => useContext(ThemeContext);

// Definições para o Text Zoom
const FONT_SCALE_MIN = 0.9;
const FONT_SCALE_MAX = 1.3;
const FONT_SCALE_STEP = 0.1;

export function ThemeProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSizeScale, setFontSizeScale] = useState(1.0); // Novo estado para a escala de fonte

  // Função para aumentar/diminuir a fonte
  const updateFontSize = (action) => {
    setFontSizeScale((prevScale) => {
      let newScale = prevScale;
      if (action === "increase") {
        newScale = Math.min(FONT_SCALE_MAX, prevScale + FONT_SCALE_STEP);
      } else if (action === "decrease") {
        newScale = Math.max(FONT_SCALE_MIN, prevScale - FONT_SCALE_STEP);
      } else if (action === "reset") {
        newScale = 1.0;
      }
      return parseFloat(newScale.toFixed(2));
    });
  };

  // Aplica/remove classe no body para CSS variables (Alto Contraste)
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [highContrast]);

  // Aplica a escala de fonte ao elemento HTML (root)
  useEffect(() => {
    // Define a variável CSS que será usada no index.css
    document.documentElement.style.setProperty(
      "--font-size-scale",
      fontSizeScale
    );
  }, [fontSizeScale]);

  return (
    <ThemeContext.Provider
      value={{ highContrast, setHighContrast, fontSizeScale, updateFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
