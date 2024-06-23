import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { getStateLayerColor, StateLayer } from "../utils/getStayeLayerColor";

interface M3Tabs {
    MuiTabs: {
        defaultProps?: ComponentsProps['MuiTabs'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiTabs'];
        variants?: ComponentsVariants['MuiTabs'];
    }
};

export const getTabs = (theme: Theme): M3Tabs => {
    const { palette } = theme;
    return {
        MuiTabs: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    background: palette.surface.main,
                    color: palette.onSurfaceVariant.main,

                    fontSize: theme.typography.titleSmall.fontSize,
                    lineHeight: theme.typography.titleSmall.lineHeight,
                    letterSpacing: theme.typography.titleSmall.letterSpacing,
                    fontWeight: theme.typography.titleSmall.fontWeight,

                    '& [aria-selected="true"]': {
                        color: palette.primary.main,
                    },

                    '& .MuiSvgIcon-root': {
                        width: '24px',
                        height: '24px',
                    },
                },
                indicator: {
                    height: "5px",
                    borderRadius: "4px 4px 0px 0px",
                },
            }
        },
    }
}
