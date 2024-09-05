import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface M3Dialog {
  MuiDialog: {
    defaultProps?: ComponentsProps["MuiDialog"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDialog"];
    variants?: ComponentsVariants["MuiDialog"];
  };
  MuiDialogActions: {
    defaultProps?: ComponentsProps["MuiDialogActions"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDialogActions"];
    variants?: ComponentsVariants["MuiDialogActions"];
  };
  MuiDialogContent: {
    defaultProps?: ComponentsProps["MuiDialogContent"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDialogContent"];
    variants?: ComponentsVariants["MuiDialogContent"];
  };
  MuiDialogContentText: {
    defaultProps?: ComponentsProps["MuiDialogContentText"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDialogContentText"];
    variants?: ComponentsVariants["MuiDialogContentText"];
  };
  MuiDialogTitle: {
    defaultProps?: ComponentsProps["MuiDialogTitle"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDialogTitle"];
    variants?: ComponentsVariants["MuiDialogTitle"];
  };
}

export const getDialog = (theme: Theme): M3Dialog => {
  const { palette } = theme;
  return {
    MuiDialog: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "0 24px 24px 24px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {},
      },
    },
  };
};
