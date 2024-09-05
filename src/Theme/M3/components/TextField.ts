import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  alpha,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    filled: true;
    outlined: true;
  }
}

interface M3Button {
  MuiTextField: {
    defaultProps?: ComponentsProps["MuiTextField"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
    variants?: ComponentsVariants["MuiTextField"];
  };
}
export const getTextField = (theme: Theme): M3Button => {
  const { palette } = theme;
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: ".5s",
        },
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            height: "56px",
            boxShadow: theme.shadows[0],
            caret: palette.primary.main,
            color: palette.onSurface.main,
            backgroundColor: palette.surfaceContainerHighest.main,
            fontSize: theme.typography.bodyLarge.fontSize,
            lineHeight: theme.typography.bodyLarge.lineHeight,
            letterSpacing: theme.typography.bodyLarge.letterSpacing,
            fontWeight: theme.typography.bodyLarge.fontWeight,
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px",

            label: {
              color: palette.onSurfaceVariant.main,
              fontSize: theme.typography.bodyLarge.fontSize,
              lineHeight: theme.typography.bodyLarge.lineHeight,
              fontWeight: theme.typography.bodyLarge.fontWeight,
              "&[data-shrink='true']": {
                fontSize: theme.typography.bodySmall.fontSize,
                lineHeight: theme.typography.bodySmall.lineHeight,
              },
              "&.Mui-disabled": {
                background: "transparent",
              },
            },

            "& .MuiFormHelperText-root": {
              fontSize: theme.typography.bodySmall.fontSize,
              lineHeight: theme.typography.bodySmall.lineHeight,
              letterSpacing: theme.typography.bodySmall.letterSpacing,
              fontWeight: theme.typography.bodySmall.fontWeight,
              "&.Mui-disabled": {
                background: "transparent",
              },
            },

            "& .MuiSvgIcon": {
              color: palette.onSurfaceVariant.main,
              width: "24px",
              height: "24px",
            },

            "& .Mui-disabled": {
              background: alpha(palette.onSurface.main, 0.04),
              color: alpha(palette.onSurface.main, 0.38),
            },

            "&:hover": {
              color: palette.onSurface.main,
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerHighest.main,
                palette.onSurface.main
              ),
              label: {
                color: palette.onSurfaceVariant.main,
                "&.Mui-error": {
                  color: palette.error.main,
                },
              },
              "& .MuiSvgIcon": {
                color: palette.onSurfaceVariant.main,
                "&.Mui-error": {
                  color: palette.error.main,
                },
              },
              "& .MuiFormHelperText-root": {
                color: palette.onSurfaceVariant.main,
                "&.Mui-error": {
                  color: palette.error.main,
                },
              },
            },

            "&:focus": {
              label: {
                color: palette.primary.main,
              },
              "& .MuiSvgIcon": {
                color: palette.onSurfaceVariant.main,
              },
              "& .MuiFormHelperText-root": {
                color: palette.onSurfaceVariant.main,
              },
            },

            "& .Mui-error": {
              label: {
                color: palette.error.main,
              },
              "& .MuiSvgIcon": {
                color: palette.error.main,
              },
              "& .MuiFormHelperText-root": {
                color: palette.error.main,
              },
              borderColor: palette.error.main,
            },
          },
        },

        {
          props: { variant: "outlined" },
          style: {
            height: "56px",
            caret: palette.primary.main,
            color: palette.onSurface.main,
            fontSize: theme.typography.bodyLarge.fontSize,
            lineHeight: theme.typography.bodyLarge.lineHeight,
            letterSpacing: theme.typography.bodyLarge.letterSpacing,
            fontWeight: theme.typography.bodyLarge.fontWeight,
            borderRadius: "4px",
            fieldset: {
              borderColor: palette.outline.main,
            },
            label: {
              color: palette.onSurfaceVariant.main,
              fontSize: theme.typography.bodyLarge.fontSize,
              lineHeight: theme.typography.bodyLarge.lineHeight,
              fontWeight: theme.typography.bodyLarge.fontWeight,
              "&[data-shrink='true']": {
                fontSize: theme.typography.bodyMedium.fontSize,
                lineHeight: theme.typography.bodyMedium.lineHeight,
              },
            },

            "& .MuiSvgIcon": {
              color: palette.onSurfaceVariant.main,
              width: "24px",
              height: "24px",
            },

            "& .MuiFormHelperText-root": {
              fontSize: theme.typography.bodySmall.fontSize,
              lineHeight: theme.typography.bodySmall.lineHeight,
              letterSpacing: theme.typography.bodySmall.letterSpacing,
              fontWeight: theme.typography.bodySmall.fontWeight,
            },

            "& .Mui-disabled": {
              outlineColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              "&.Mui-error": {
                color: palette.error.main,
              },
            },

            "&:hover": {
              color: palette.onSurface.main,
              outlineColor: palette.onSurface.main,
              label: {
                color: palette.onSurfaceVariant.main,
                "&.Mui-error": {
                  color: palette.error.main,
                },
              },
              "& .MuiSvgIcon": {
                color: palette.onSurfaceVariant.main,
                "&.Mui-error": {
                  color: palette.error.main,
                },
              },
              "& .MuiFormHelperText-root": {
                color: palette.onSurfaceVariant.main,
                "&.Mui-error": {
                  color: palette.error.main,
                },
              },
            },

            "&:focus": {
              label: {
                color: palette.primary.main,
              },
              "& .MuiSvgIcon": {
                color: palette.onSurfaceVariant.main,
              },
              "& .MuiFormHelperText-root": {
                color: palette.onSurfaceVariant.main,
              },
              outlineColor: palette.primary.main,
            },

            "& .Mui-error": {
              label: {
                color: palette.error.main,
              },
              "& .MuiSvgIcon": {
                color: palette.error.main,
              },
              "& .MuiFormHelperText-root": {
                color: palette.error.main,
              },
              outlineColor: palette.error.main,
            },
          },
        },
      ],
    },
  };
};
