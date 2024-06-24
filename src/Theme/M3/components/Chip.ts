import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  alpha,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    filled: false;
    outlined: true;
    elevated: true;
  }
}

interface M3Chip {
  MuiChip: {
    defaultProps?: ComponentsProps["MuiChip"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiChip"];
    variants?: ComponentsVariants["MuiChip"];
  };
}
export const getChip = (theme: Theme): M3Chip => {
  const { palette } = theme;
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "500 !important",
          height: "32px",
          padding: "0px 16px",
          userSelect: "none",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            height: "32px",
            border: "1px olid" + palette.onSurface.main,
            boxShadow: theme.shadows[0],
            color: palette.onSurface.main,
            fontSize: theme.typography.labelLarge.fontSize,
            lineHeight: theme.typography.labelLarge.lineHeight,
            letterSpacing: theme.typography.labelLarge.letterSpacing,
            fontWeight: theme.typography.labelLarge.fontWeight,
            "& .MuiSvgIcon": {
              color: palette.primary.main,
              height: "18px",
            },
            "& .Mui-disabled": {
              border: `${alpha(palette.onSurface.main, 0.12)} solid 1px`,
              color: alpha(palette.onSurface.main, 0.38),
            },
            "&:hover": {
              background: `${getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainer.main,
                palette.surfaceContainer.main
              )} solid 1px`,
              boxShadow: theme.shadows[2],
            },
            "&:focus": {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainer.main,
                palette.surfaceContainer.main
              ),
              boxShadow: theme.shadows[1],
            },
            "&:active": {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainer.main,
                palette.surfaceContainer.main
              ),
              boxShadow: theme.shadows[1],
            },
          },
        },
      ],
    },
  };
};
