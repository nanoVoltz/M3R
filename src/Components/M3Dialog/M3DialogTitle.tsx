import { DialogTitle, DialogTitleProps } from "@mui/material";
import React from "react";

// Define additional props and modified props for M3Card
interface M3DialogTitleModifiedProps {}

// Merge the new props with CardProps
export type M3DialogTitleProps = M3DialogTitleModifiedProps & DialogTitleProps;

const M3DialogTitle = (props: M3DialogTitleProps) => {
  const { children } = props;
  return <DialogTitle {...props}>{children}</DialogTitle>;
};

export default M3DialogTitle;
