import { NextPage } from "next";
import { Button as MuiButton, IconButton, ListItem, Tooltip } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";


export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  startIcon?: ReactNode,
  endIcon?: ReactNode,
  icon?: ReactNode,
  label: string,
  tooltipPlace?: "bottom-end" |
  "bottom-start" |
  "bottom" |
  "left-end" |
  "left-start" |
  "left" |
  "right-end" |
  "right-start" |
  "right" |
  "top-end" |
  "top-start" |
  "top";
}

export const Button: NextPage<ButtonProps> = ({ onClick, startIcon, endIcon, icon, label, tooltipPlace }: ButtonProps) => {
  if (icon) {
    return (
      <Tooltip title={label} placement={tooltipPlace} arrow>
        <IconButton
          onClick={onClick}
          color='primary'
          size='medium'
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  }
  return (
    <Tooltip title={label} placement={tooltipPlace} arrow>
      <MuiButton
        variant='text'
        onClick={onClick}
        color='primary'
        size='medium'
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {label}
      </MuiButton>
    </Tooltip>
  );
};

export default Button