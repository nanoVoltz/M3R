
import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

interface M3AppBar {
    MuiAppBar: {
        defaultProps?: ComponentsProps['MuiAppBar'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar'];
        variants?: ComponentsVariants['MuiAppBar'];
    }
}

export const getAppBar = (theme: Theme): M3AppBar => {
    const { palette } = theme;
    return {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    height: '80px',
                    background: palette.surfaceContainer.main,
                    color: palette.onSurface.main,
                    '&.MuiPaper-root': {
                        paddingInlineStart: '15px',
                        paddingInlineEnd: '15px',
                        paddingTop: '15px',
                    },
                },
            }
        }
    };
}