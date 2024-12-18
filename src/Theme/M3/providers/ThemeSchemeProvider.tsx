import React, { createContext, FC, useLayoutEffect, useState } from "react";

import { generateDesignTokens, ThemeScheme, ThemeSchemeDefault, useTonalPalette } from "../..";

export interface ThemeSchemeContextType {
  generateScheme: (hexColor?: string) => void;
  themeScheme: ThemeScheme;
  storedColor: {
    get: string | null;
    set: (newValue: string) => void;
  };
}

export interface ThemeSchemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeSchemeContext = createContext<ThemeSchemeContextType>({
  generateScheme: () => {},
  themeScheme: ThemeSchemeDefault,
  storedColor: {
    get: localStorage.getItem("storedColor"),
    set: (newValue: string) => localStorage.setItem("storedColor", newValue),
  },
});

const ThemeSchemeProvider: FC<ThemeSchemeProviderProps> = ({ children }) => {
  const [tonalPalette, generatePalette] = useTonalPalette();
  const [themeScheme, setThemeScheme] = useState<ThemeScheme>(ThemeSchemeDefault);

  useLayoutEffect(() => {
    const lightTokens = generateDesignTokens("light", tonalPalette);
    const darkTokens = generateDesignTokens("dark", tonalPalette);

    setThemeScheme({
      light: lightTokens,
      dark: darkTokens,
      tones: tonalPalette,
    });
  }, [tonalPalette]);

  const generateScheme = (hexColor?: string) => {
    const DIGITS: string = "0123456789ABCDEF";

    const randomColor = (): string => {
      let result = "#";
      for (let i = 0; i < 6; ++i) {
        const index = Math.floor(16 * Math.random());
        result += DIGITS[index];
      }
      localStorage.setItem("storedColor", result);

      return result;
    };

    generatePalette(hexColor ? hexColor : randomColor());
  };

  const storedColor = {
    get: localStorage.getItem("storedColor"),
    set: (newValue: string) => {
      generateScheme(newValue);
      localStorage.setItem("storedColor", newValue);
    },
  };

  return (
    <ThemeSchemeContext.Provider value={{ generateScheme, themeScheme, storedColor }}>
      {children}
    </ThemeSchemeContext.Provider>
  );
};

export default ThemeSchemeProvider;
