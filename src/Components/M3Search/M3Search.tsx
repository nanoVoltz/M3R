import React from "react";
import { getStateLayerColor, StateLayer } from "../..";
import { styled, Box, InputBase, InputBaseProps } from "@mui/material";

// Define additional props and modified props for M3InputBase
interface M3InputBaseModifiedProps {
  shadow?: boolean;
  leading?: React.ReactNode | undefined;
  trailing?: React.ReactNode | undefined;
  placeholder?: string | undefined;
}

// Merge the new props with InputBaseProps
export type M3InputBaseProps = M3InputBaseModifiedProps & InputBaseProps;

const Search = styled(Box, {
  shouldForwardProp: (prop) => prop !== "shadow",
})<InputBaseProps & { shadow?: boolean }>(({ theme, shadow }) => ({
  background: theme.palette.surfaceContainerHigh.main,
  boxShadow: shadow ? theme.shadows[3] : "none",
  border: 0,
  borderRadius: 999,
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 20px",

  "& .Mui-Search-leading , & .Mui-Search-trailing": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  <Box className="Mui-Search-leading">{children}</Box>
);
const SearchTrailing = ({ children }: { children: React.ReactNode }) => (
  <Box className="Mui-Search-trailing">{children}</Box>
);

export default function SearchField(props: M3InputBaseProps) {
  const { shadow, leading, trailing, placeholder } = props;
  return (
    <Search shadow={shadow}>
      {leading && <SearchLeading>{leading}</SearchLeading>}
      <InputBase {...props} placeholder={placeholder} sx={{ width: "100%" }} />
      {trailing && <SearchTrailing>{trailing}</SearchTrailing>}
    </Search>
  );
}
