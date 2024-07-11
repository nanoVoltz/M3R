import { ComponentsOverrides, Theme } from "@mui/material";

interface M3Table {
  MUIDataTable: {
    styleOverrides?: ComponentsOverrides<Theme>["MUIDataTable"];
  };
  MUIDataTableToolbar: {
    styleOverrides?: ComponentsOverrides<Theme>["MUIDataTableToolbar"];
  };
  MUIDataTableViewCol: {
    styleOverrides?: ComponentsOverrides<Theme>["MUIDataTableViewCol"];
  };
  MuiTableCell: {
    styleOverrides?: ComponentsOverrides<Theme>["MuiTableCell"];
  };
  MuiTableRow: {
    styleOverrides?: ComponentsOverrides<Theme>["MuiTableRow"];
  };
  MUIDataTableHeadCell: {
    styleOverrides?: ComponentsOverrides<Theme>["MUIDataTableHeadCell"];
  };
  MUIDataTableSelectCell: {
    styleOverrides?: ComponentsOverrides<Theme>["MUIDataTableSelectCell"];
  };
}

export const getTable = (theme: Theme): M3Table => {
  const { palette, typography, shadows } = theme;

  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: palette.surfaceContainerLow.main,
          ":hover": {
            ":hover": {
              background: palette.surfaceContainer.main,
            },
          },
        },
        footer: {
          backgroundColor: palette.surfaceContainerLow.main,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          border: "none",
          borderBottomColor: palette.divider,
          backgroundColor: palette.surfaceContainerLow.main,
          padding: "6px 12px",
          ...typography.titleSmall,
          fontWeight: "bold",
        },
        body: {
          padding: "0px 12px",
          border: "none",
          borderBottomColor: palette.divider,
          ...typography.bodyMedium,
        },
        footer: {
          borderBottom: "none",
          ":hover": {
            backgroundColor: palette.surfaceContainerLow.main,
          },
        },
      },
    },
    MUIDataTableSelectCell: {
      styleOverrides: {
        headerCell: {
          backgroundColor: palette.surfaceContainerLow.main,
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        fixedHeader: {
          backgroundColor: palette.surfaceContainerLow.main,
        },
      },
    },
    MUIDataTable: {
      styleOverrides: {
        root: {
          borderRadius: "18px !important",
          overflow: "hidden",
          boxShadow: "none !important",
        },
      },
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.surfaceContainerLow.main,
        },
      },
    },
    MUIDataTableViewCol: {
      styleOverrides: {
        root: {
          boxShadow: shadows[2],
          backgroundColor: palette.surfaceContainer.main,
        },
        title: {
          display: "none",
        },
        formGroup: {
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "24px",
        },
        formControl: {
          margin: "0px !important",
        },
      },
    },
  };
};
