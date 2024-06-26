import React, { createContext, FC, useLayoutEffect, useState } from "react";

import {
  generateDesignTokens,
  ThemeScheme,
  ThemeSchemeDefault,
  useTonalPalette,
} from "../..";

export interface ThemeSchemeContextType {
  generateScheme: (hexColor?: string) => void;
  themeScheme: ThemeScheme;
  savedColor: {
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
  savedColor: {
    get: localStorage.getItem("savedColor"),
    set: (newValue: string) => localStorage.setItem("savedColor", newValue),
  },
});

const ThemeSchemeProvider: FC<ThemeSchemeProviderProps> = ({ children }) => {
  const [tonalPalette, generatePalette] = useTonalPalette();
  const [themeScheme, setThemeScheme] =
    useState<ThemeScheme>(ThemeSchemeDefault);

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
      localStorage.setItem("savedColor", result);

      return result;
    };

    generatePalette(hexColor ? hexColor : randomColor());
  };

  const savedColor = {
    get: localStorage.getItem("savedColor"),
    set: (newValue: string) => {
      generateScheme(newValue);
      localStorage.setItem("savedColor", newValue);
    },
  };

  return (
    <ThemeSchemeContext.Provider
      value={{ generateScheme, themeScheme, savedColor }}
    >
      {children}
    </ThemeSchemeContext.Provider>
  );
};

export default ThemeSchemeProvider;
