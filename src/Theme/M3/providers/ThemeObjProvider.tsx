import { Palette, Theme } from "@mui/material";
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ThemeContextTypes {
  themeObj?: Theme;
  setThemeObj: Dispatch<SetStateAction<Theme | undefined>>;
  palette?: Palette;
  setPalette: Dispatch<SetStateAction<Palette | undefined>>;
}

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextTypes>({
  themeObj: undefined,
  setThemeObj: () => {},
  palette: undefined,
  setPalette: () => {},
});

const ThemeObjProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeObj, setThemeObj] = useState<Theme>();
  const [palette, setPalette] = useState<Palette>();

  return (
    <ThemeContext.Provider
      value={{ themeObj, setThemeObj, palette, setPalette }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeObjProvider;
