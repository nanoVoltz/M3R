import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  alpha,
  capitalize,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    elevated: true;
    filled: true;
    tonal: true;
    outlined: true;
    text: true;
    contained: false;
  }
}

interface M3Button {
  MuiButton: {
    defaultProps?: ComponentsProps["MuiButton"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
    variants?: ComponentsVariants["MuiButton"];
  };
}

type Color = "primary" | "secondary" | "success" | "error" | "info" | "warning";

type onColor =
  | "onPrimary"
  | "onSecondary"
  | "onSuccess"
  | "onError"
  | "onInfo"
  | "onWarning";

type onColorContainer =
  | "onPrimaryContainer"
  | "onSecondaryContainer"
  | "onSuccessContainer"
  | "onErrorContainer"
  | "onInfoContainer"
  | "onWarningContainer";

const elevatedVariant = (theme: Theme, color: Color) => {
  const { palette } = theme;

  return {
    boxShadow: theme.shadows[1],
    backgroundColor: palette.surfaceContainerLow.main,
    color: palette[color].main,
    "&:hover": {
      background: getStateLayerColor(
        StateLayer.Hover,
        palette.surfaceContainerLow.main,
        palette[color].main
      ),
      boxShadow: theme.shadows[2],
    },
    "&:focus": {
      background: getStateLayerColor(
        StateLayer.Focus,
        palette.surfaceContainerLow.main,
        palette[color].main
      ),
    },
    "&:active": {
      background: getStateLayerColor(
        StateLayer.Press,
        palette.surfaceContainerLow.main,
        palette[color].main
      ),
    },
    "&.Mui-disabled": {
      backgroundColor: alpha(palette.onSurface.main, 0.12),
      color: alpha(palette.onSurface.main, 0.38),
      boxShadow: theme.shadows[0],
    },
  };
};

const filledVariant = (theme: Theme, color: Color) => {
  const { palette } = theme;
  return {
    backgroundColor: palette[color].main,
    color: palette[`on${capitalize(color)}` as onColor].main,
    boxShadow: theme.shadows[0],
    "&.Mui-disabled": {
      backgroundColor: alpha(palette.onSurface.main, 0.12),
      color: alpha(palette.onSurface.main, 0.38),
      boxShadow: theme.shadows[0],
    },
    "&:hover": {
      backgroundColor: getStateLayerColor(
        StateLayer.Hover,
        palette[color].main,
        palette[`on${capitalize(color)}` as onColor].main
      ),
      boxShadow: theme.shadows[1],
    },
    "&:focus": {
      backgroundColor: getStateLayerColor(
        StateLayer.Focus,
        palette[color].main,
        palette[`on${capitalize(color)}` as onColor].main
      ),
      boxShadow: theme.shadows[0],
    },
    "&:active": {
      backgroundColor: getStateLayerColor(
        StateLayer.Press,
        palette[color].main,
        palette[`on${capitalize(color)}` as onColor].main
      ),
      boxShadow: theme.shadows[0],
    },
  };
};

const tonalVariant = (theme: Theme, color: Color) => {
  const { palette } = theme;
  return {
    backgroundColor: palette[`${color}Container`].main,
    color: palette[`on${capitalize(color)}Container` as onColorContainer].main,
    boxShadow: theme.shadows[0],
    "&.Mui-disabled": {
      backgroundColor: alpha(palette.onSurface.main, 0.12),
      color: alpha(palette.onSurface.main, 0.38),
      boxShadow: theme.shadows[0],
    },
    "&:hover": {
      backgroundColor: getStateLayerColor(
        StateLayer.Hover,
        palette[`${color}Container`].main,
        palette[`on${capitalize(color)}Container` as onColorContainer].main
      ),
      boxShadow: theme.shadows[1],
    },
    "&:focus": {
      backgroundColor: getStateLayerColor(
        StateLayer.Focus,
        palette[`${color}Container`].main,
        palette[`on${capitalize(color)}Container` as onColorContainer].main
      ),
      boxShadow: theme.shadows[0],
    },
    "&:active": {
      backgroundColor: getStateLayerColor(
        StateLayer.Press,
        palette[`${color}Container`].main,
        palette[`on${capitalize(color)}Container` as onColorContainer].main
      ),
      boxShadow: theme.shadows[0],
    },
  };
};

const outlinedVariant = (theme: Theme, color: Color) => {
  const { palette } = theme;
  return {
    color: palette[color].main,
    borderColor: palette.outline.main,
    borderWidth: "1px",
    boxShadow: theme.shadows[0],
    "&.Mui-disabled": {
      borderColor: alpha(palette.onSurface.main, 0.12),
      color: alpha(palette.onSurface.main, 0.38),
    },
    "&:hover": {
      backgroundColor: getStateLayerColor(
        StateLayer.Hover,
        palette.surface.main,
        palette[color].main
      ),
      borderColor: getStateLayerColor(
        StateLayer.Hover,
        palette.outline.main,
        palette[color].main
      ),
    },
    "&:focus": {
      backgroundColor: getStateLayerColor(
        StateLayer.Focus,
        palette.surface.main,
        palette[color].main
      ),
      borderColor: getStateLayerColor(
        StateLayer.Focus,
        palette[color].main,
        palette[color].main
      ),
    },
    "&:active": {
      backgroundColor: getStateLayerColor(
        StateLayer.Press,
        palette.surface.main,
        palette.primary.main
      ),
      borderColor: getStateLayerColor(
        StateLayer.Press,
        palette.outline.main,
        palette.primary.main
      ),
    },
  };
};

const textVariant = (theme: Theme, color: Color) => {
  const { palette } = theme;
  return {
    backgroundColor: "transparent",
    color: palette[color].main,
    boxShadow: theme.shadows[0],
    padding: "5px 15px",
    "&.Mui-disabled": {
      color: alpha(palette.onSurface.main, 0.38),
    },
    "&:hover": {
      backgroundColor: getStateLayerColor(
        StateLayer.Hover,
        palette.surface.main,
        palette[color].main
      ),
    },
    "&:focus": {
      backgroundColor: getStateLayerColor(
        StateLayer.Focus,
        palette.surface.main,
        palette[color].main
      ),
    },
    "&:active": {
      backgroundColor: getStateLayerColor(
        StateLayer.Press,
        palette.surface.main,
        palette[color].main
      ),
    },
  };
};

export const getButton = (theme: Theme): M3Button => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
          fontWeight: "bold",
          "&:has(>svg)": {
            padding: "8px",
            borderRadius: "50%",
            minWidth: "1em",
            minHeight: "1em",
          },
        },
      },
      variants: [
        // Elevated variant
        {
          props: { variant: "elevated", color: "primary" },
          style: elevatedVariant(theme, "primary"),
        },
        {
          props: { variant: "elevated", color: "secondary" },
          style: elevatedVariant(theme, "secondary"),
        },
        {
          props: { variant: "elevated", color: "success" },
          style: elevatedVariant(theme, "success"),
        },
        {
          props: { variant: "elevated", color: "error" },
          style: elevatedVariant(theme, "error"),
        },
        {
          props: { variant: "elevated", color: "info" },
          style: elevatedVariant(theme, "info"),
        },
        {
          props: { variant: "elevated", color: "warning" },
          style: elevatedVariant(theme, "warning"),
        },

        // Filled variant
        {
          props: { variant: "filled", color: "primary" },
          style: filledVariant(theme, "primary"),
        },
        {
          props: { variant: "filled", color: "secondary" },
          style: filledVariant(theme, "secondary"),
        },
        {
          props: { variant: "filled", color: "success" },
          style: filledVariant(theme, "success"),
        },
        {
          props: { variant: "filled", color: "error" },
          style: filledVariant(theme, "error"),
        },
        {
          props: { variant: "filled", color: "info" },
          style: filledVariant(theme, "info"),
        },
        {
          props: { variant: "filled", color: "warning" },
          style: filledVariant(theme, "warning"),
        },

        // Tonal variant
        {
          props: { variant: "tonal", color: "primary" },
          style: tonalVariant(theme, "primary"),
        },
        {
          props: { variant: "tonal", color: "secondary" },
          style: tonalVariant(theme, "secondary"),
        },
        {
          props: { variant: "tonal", color: "success" },
          style: tonalVariant(theme, "success"),
        },
        {
          props: { variant: "tonal", color: "error" },
          style: tonalVariant(theme, "error"),
        },
        {
          props: { variant: "tonal", color: "info" },
          style: tonalVariant(theme, "info"),
        },
        {
          props: { variant: "tonal", color: "warning" },
          style: tonalVariant(theme, "warning"),
        },

        // Outlined variant
        {
          props: { variant: "outlined", color: "primary" },
          style: outlinedVariant(theme, "primary"),
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: outlinedVariant(theme, "secondary"),
        },
        {
          props: { variant: "outlined", color: "success" },
          style: outlinedVariant(theme, "success"),
        },
        {
          props: { variant: "outlined", color: "error" },
          style: outlinedVariant(theme, "error"),
        },
        {
          props: { variant: "outlined", color: "info" },
          style: outlinedVariant(theme, "info"),
        },

        {
          props: { variant: "outlined", color: "warning" },
          style: outlinedVariant(theme, "warning"),
        },

        // Text variant
        {
          props: { variant: "text", color: "primary" },
          style: textVariant(theme, "primary"),
        },
        {
          props: { variant: "text", color: "secondary" },
          style: textVariant(theme, "secondary"),
        },
        {
          props: { variant: "text", color: "success" },
          style: textVariant(theme, "success"),
        },
        {
          props: { variant: "text", color: "error" },
          style: textVariant(theme, "error"),
        },
        {
          props: { variant: "text", color: "info" },
          style: textVariant(theme, "info"),
        },

        {
          props: { variant: "text", color: "warning" },
          style: textVariant(theme, "warning"),
        },
      ],
    },
  };
};
