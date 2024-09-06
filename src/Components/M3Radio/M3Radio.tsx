import React from "react";
import { Radio, RadioProps } from "@mui/material";

export interface M3RadioProps extends RadioProps {}

const M3Radio = (props: M3RadioProps) => {
  return <Radio {...props} />;
};

export default M3Radio;
