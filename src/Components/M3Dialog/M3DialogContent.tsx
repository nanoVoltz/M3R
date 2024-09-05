import { DialogContent, DialogContentProps } from "@mui/material";
import React from "react";

// Define additional props and modified props for M3Card
interface M3DialogContentModifiedProps {}

// Merge the new props with CardProps
export type M3DialogContentProps = M3DialogContentModifiedProps &
  DialogContentProps;

const M3DialogContent = (props: M3DialogContentProps) => {
  const { children } = props;
  return <DialogContent {...props}>{children}</DialogContent>;
};

export default M3DialogContent;
