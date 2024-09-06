import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface M3Radio {
  MuiRadio: {
    defaultProps?: ComponentsProps["MuiRadio"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiRadio"];
    variants?: ComponentsVariants["MuiRadio"];
  };
}

export const getRadio = (theme: Theme): M3Radio => {
  const { palette } = theme;
  return {
    MuiRadio: {
      styleOverrides: {
        root: {},
      },
    },
  };
};
