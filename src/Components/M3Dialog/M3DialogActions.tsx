import { DialogActions, DialogActionsProps } from "@mui/material";
import React from "react";

// Define additional props and modified props for M3Card
interface M3DialogActionModifiedProps {}

// Merge the new props with CardProps
export type M3DialogActionProps = M3DialogActionModifiedProps &
  DialogActionsProps;

const M3DialogActions = (props: M3DialogActionProps) => {
  const { children } = props;
  return <DialogActions {...props}>{children}</DialogActions>;
};

export default M3DialogActions;
