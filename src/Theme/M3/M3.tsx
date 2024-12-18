import React from "react";
import ThemeModeProvider from "./providers/ThemeModeProvider";
import ThemeSchemeProvider from "./providers/ThemeSchemeProvider";
import M3Theme from "./wrapper/M3Theme";
import ThemeObjProvider from "./providers/ThemeObjProvider";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

interface M3Props {
  children?: React.ReactNode;
  themeColor?: string;
  themeMode?: "light" | "dark";
  direction?: "rtl" | "ltr";
}

const cacheLtr = createCache({
  key: "muiltr",
  stylisPlugins: [prefixer],
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});


const M3 = ({ children, themeColor, themeMode, direction = "ltr" }: M3Props) => {
  return (
    // ThemeModeProvider -> ThemeSchemeProvider
       <ThemeModeProvider>
        <ThemeSchemeProvider>
          <ThemeObjProvider>
            <CacheProvider value={direction === "rtl" ? cacheRtl : cacheLtr}>
              <M3Theme themeColor={themeColor} enteredThemeMode={themeMode}>
                {children}
              </M3Theme>
            </CacheProvider>
          </ThemeObjProvider>
        </ThemeSchemeProvider>
      </ThemeModeProvider>
   );
};

export default M3;
