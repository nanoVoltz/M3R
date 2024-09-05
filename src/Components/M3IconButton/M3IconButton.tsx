import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";

interface M3IconButtonModifiedProps {}

export type M3IconButtonProps = M3IconButtonModifiedProps & IconButtonProps;

const M3IconButton = (props: M3IconButtonProps) => {
  const { children } = props;
  return <IconButton {...props}>{children}</IconButton>;
};

export default M3IconButton;
