import React from "react";
import { Tab, TabProps } from "@mui/material";

interface M3TabModifiedProps { }

export type M3TabProps = M3TabModifiedProps & TabProps;

const M3Tab = (props: M3TabProps) => {
  const { children, onClick, ...rest } = props;

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.currentTarget.blur();
    if (onClick) {
      onClick(event);
    }
  };

  return <Tab {...rest} onClick={handleClick}>{children}</Tab>;
};

export default M3Tab;
