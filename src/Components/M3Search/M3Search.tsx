import React from "react"
import { M3TextField } from "../M3TextField"
import { getStateLayerColor, StateLayer } from "../.."
import { alpha, styled, Box, InputBase } from "@mui/material"

const Search = styled(Box)(({ theme }) => {
  return ({
    background: theme.palette.surfaceContainerHigh.main,
    boxShadow: theme.shadows[3],
    border: 0,
    borderRadius: 999,
    minHeight: '56px',
    display: 'flex',
    alignItems: 'center',

    '& .Mui-Search-leading': {
      '& .MuiIconButton-root': {
        color: theme.palette.onSurface.main,
      },
    },

    '& .Mui-Search-trailing': {
      '& .MuiIconButton-root': {
        color: theme.palette.onSurfaceVariant.main,
      },
      '& .MuiAvatar-root': {
        height: '45px',
        width: '45px',
        borderRadius: '99%',
      }
    },

    '& .MuiInputBase-input': {
      fontSize: theme.typography.bodyLarge.fontSize,
      lineHeight: theme.typography.bodyLarge.lineHeight,
      letterSpacing: theme.typography.bodyLarge.letterSpacing,
      fontWeight: theme.typography.bodyLarge.fontWeight,
      backgroundColor: theme.palette.surfaceContainerHigh.main,
      color: theme.palette.onSurface.main,
      '&::placeholder': {
        color: theme.palette.onSurfaceVariant.main,
      },
    },

    '&:hover': {
      background: getStateLayerColor(StateLayer.Hover, theme.palette.surfaceContainerLow.main, theme.palette.primary.main),
      '& .MuiInputBase-input': {
        background: getStateLayerColor(StateLayer.Hover, theme.palette.surfaceContainerLow.main, theme.palette.primary.main),
      }
    },

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.secondary.main
      },
    }
  })
})
const SearchLeading = ({ children }: { children: React.ReactNode }) => <Box className='Mui-Search-leading' sx={{ paddingX: '16px' }}>{children}</Box>
const SearchTrailing = ({ children }: { children: React.ReactNode }) => <Box className='Mui-Search-trailing' sx={{ paddingX: '16px' }}>{children}</Box>

export default function SearchField({ leading, placeholder, trailing }: { leading: React.ReactNode | undefined, trailing: React.ReactNode | undefined, placeholder: string | undefined }) {
  return (
    <Search>
      <SearchLeading>
        {leading}
      </SearchLeading>
      <InputBase placeholder={placeholder} sx={{ width: '100%' }} />
      {
        trailing && <SearchTrailing>
          {trailing}
        </SearchTrailing>
      }
    </Search>
  );
}