// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false);

  // aplica/remover classe no body para CSS variables
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [highContrast]);

  return (
    <ThemeContext.Provider value={{ highContrast, setHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
}
