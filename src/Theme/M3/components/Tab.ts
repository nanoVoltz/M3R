import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { getStateLayerColor, StateLayer } from "../utils/getStayeLayerColor";

interface M3Tab {
    MuiTab: {
        defaultProps?: ComponentsProps['MuiTab'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiTab'];
        variants?: ComponentsVariants['MuiTab'];
    }
};

export const getTab = (theme: Theme): M3Tab => {
    const { palette } = theme;
    return {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: palette.onSurfaceVariant.main,
                    padding: '12px 4px',
                    minWidth: 'auto',
                    maxWidth: 'auto',
                    '&:hover': {
                        color: palette.onSurface.main,
                        background: getStateLayerColor(StateLayer.Hover, theme.palette.surface.main, theme.palette.primary.main),
                        '&[aria-selected="true"]': {
                            color: palette.primary.main,
                            background: getStateLayerColor(StateLayer.Hover, theme.palette.surface.main, theme.palette.onSurface.main),
                        },
                    },
                    '&:focus': {
                        color: palette.onSurface.main,
                        background: getStateLayerColor(StateLayer.Focus, theme.palette.surface.main, theme.palette.primary.main),
                        '&[aria-selected="true"]': {
                            color: palette.primary.main,
                            background: getStateLayerColor(StateLayer.Focus, theme.palette.surface.main, theme.palette.onSurface.main),
                        },
                    },
                },
            },
        }
    }
}
