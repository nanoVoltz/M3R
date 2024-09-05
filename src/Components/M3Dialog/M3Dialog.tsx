import { Dialog, DialogProps } from "@mui/material";
import React from "react";

// Define additional props and modified props for M3Card
interface M3DialogModifiedProps {}

// Merge the new props with CardProps
export type M3DialogProps = M3DialogModifiedProps & DialogProps;

const M3Dialog = (props: M3DialogProps) => {
  const { children } = props;
  return <Dialog {...props}>{children}</Dialog>;
};

export default M3Dialog;
