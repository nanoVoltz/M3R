import React from "react";
import { Chip, ChipProps } from "@mui/material";

interface M3ChipModifiedProps {}

export type M3ChipProps = M3ChipModifiedProps & ChipProps;

const M3Chip = (props: M3ChipProps) => {
  return <Chip {...props} />;
};

export default M3Chip;
