import React from "react";
import { M3TextField } from "../M3TextField";
import { getStateLayerColor, StateLayer } from "../..";
import { alpha, styled, Box, InputBase, InputBaseProps } from "@mui/material";

interface SearchProps {
  shadow?: boolean;
}

// Define additional props and modified props for M3InputBase
interface M3InputBaseModifiedProps {}

// Merge the new props with InputBaseProps
export type M3InputBaseProps = M3InputBaseModifiedProps & InputBaseProps;

const Search = styled(Box, {
  shouldForwardProp: (prop) => prop !== "shadow",
})<SearchProps>(({ theme, shadow }) => ({
  background: theme.palette.surfaceContainerHigh.main,
  boxShadow: shadow ? theme.shadows[3] : "none",
  border: 0,
  borderRadius: 999,
  minHeight: "56px",
  display: "flex",
  alignItems: "center",

  "& .Mui-Search-leading": {
    "& .MuiIconButton-root": {
      color: theme.palette.onSurface.main,
    },
  },

  "& .Mui-Search-trailing": {
    "& .MuiIconButton-root": {
      color: theme.palette.onSurfaceVariant.main,
    },
    "& .MuiAvatar-root": {
      height: "45px",
      width: "45px",
      borderRadius: "99%",
    },
  },

  "& .MuiInputBase-input": {
    fontSize: theme.typography.bodyLarge.fontSize,
    lineHeight: theme.typography.bodyLarge.lineHeight,
    letterSpacing: theme.typography.bodyLarge.letterSpacing,
    fontWeight: theme.typography.bodyLarge.fontWeight,
    backgroundColor: theme.palette.surfaceContainerHigh.main,
    color: theme.palette.onSurface.main,
    "&::placeholder": {
      color: theme.palette.onSurfaceVariant.main,
    },
  },

  "&:hover": {
    background: getStateLayerColor(
      StateLayer.Hover,
      theme.palette.surfaceContainerLow.main,
      theme.palette.primary.main
    ),
    "& .MuiInputBase-input": {
      background: getStateLayerColor(
        StateLayer.Hover,
        theme.palette.surfaceContainerLow.main,
        theme.palette.primary.main
      ),
    },
  },

  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const SearchLeading = ({ children }: { children: React.ReactNode }) => (
  <Box className="Mui-Search-leading" sx={{ paddingX: "16px" }}>
    {children}
  </Box>
);
const SearchTrailing = ({ children }: { children: React.ReactNode }) => (
  <Box className="Mui-Search-trailing" sx={{ paddingX: "16px" }}>
    {children}
  </Box>
);

export default function SearchField({
  leading,
  placeholder,
  trailing,
  shadow = false,
  inputBaseProps,
}: {
  leading: React.ReactNode | undefined;
  trailing: React.ReactNode | undefined;
  placeholder: string | undefined;
  shadow?: boolean;
  inputBaseProps?: M3InputBaseProps;
}) {
  return (
    <Search shadow={shadow}>
      <SearchLeading>{leading}</SearchLeading>
      <InputBase
        {...inputBaseProps}
        placeholder={placeholder}
        sx={{ width: "100%" }}
      />
      {trailing && <SearchTrailing>{trailing}</SearchTrailing>}
    </Search>
  );
}
