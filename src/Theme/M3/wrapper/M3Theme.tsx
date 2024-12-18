import React, { useEffect } from "react";
import { useContext, useMemo } from "react";
import { CssBaseline, createTheme, ThemeProvider, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";

import {
  ThemeContext,
  ThemeModeContext,
  ThemeSchemeContext,
  getMUIComponents,
  getMUIPalette,
  getTypography,
} from "../..";

interface M3Props {
  children?: React.ReactNode;
  themeColor?: string;
  enteredThemeMode?: "light" | "dark";
}

const M3Theme = ({ children, themeColor, enteredThemeMode }: M3Props) => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);
  const { themeScheme, generateScheme } = useContext(ThemeSchemeContext);
  const { setThemeObj, setPalette } = useContext(ThemeContext);

  const storedColor = localStorage.getItem("storedColor");

  useEffect(() => {
    generateScheme(
      storedColor ? storedColor : themeColor ? themeColor : undefined
    );
    enteredThemeMode && setThemeMode(enteredThemeMode);
  }, []);

  const m3Theme = useMemo(() => {
    const muiPalette = getMUIPalette(themeMode, themeScheme);

    const muiTypography = getTypography();

    let theme = createTheme({ ...muiPalette, ...muiTypography });
    theme = deepmerge(theme, getMUIComponents(theme));

    return theme;
  }, [themeMode, themeScheme]);

  useEffect(() => {
    setPalette(m3Theme.palette);
  }, [m3Theme, setPalette]);

  useEffect(() => {
    setThemeObj(m3Theme);
  }, [m3Theme, setThemeObj]);

  return (
    <ThemeProvider theme={m3Theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default M3Theme;
