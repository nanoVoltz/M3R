import { DialogContentText, DialogContentTextProps } from "@mui/material";
import React from "react";

// Define additional props and modified props for M3Card
interface M3DialogContentTextModifiedProps {}

// Merge the new props with CardProps
export type M3DialogContentTextProps = M3DialogContentTextModifiedProps &
  DialogContentTextProps;

const M3DialogContentText = ({ children }: M3DialogContentTextProps) => {
  return <DialogContentText>{children}</DialogContentText>;
};

export default M3DialogContentText;
