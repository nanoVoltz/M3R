import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";

interface M3IconButton {
  MuiIconButton: {
    defaultProps?: ComponentsProps["MuiIconButton"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiIconButton"];
    variants?: ComponentsVariants["MuiIconButton"];
  };
}

export const getIconButton = (theme: Theme): M3IconButton => {
  const { palette } = theme;
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: palette.onSurface.main,
        },
      },
    },
  };
};
