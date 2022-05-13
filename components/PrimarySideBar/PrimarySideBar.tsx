import { UsbRounded } from "@mui/icons-material";
import { AppBar, Avatar, Box, Collapse, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, useTheme } from "@mui/material";
import { minHeight } from "@mui/system";
import { NextPage } from "next";
import { Dispatch, MouseEvent, MouseEventHandler, ReactNode, SetStateAction, useCallback, useState } from "react";
import Menu, { MenuSection } from "../Menu/Menu";

export interface PrimarySideBarProps {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  sections?: MenuSection[];
}

export const PrimarySideBar: NextPage<PrimarySideBarProps> = ({
  open = false,
  setOpen,

  sections = [],
}: PrimarySideBarProps) => {

  return (
    <Menu
      open={open}
      setOpen={setOpen}
      anchor={'left'}
      sections={sections}
      component='nav'
    />
  );
};

export default PrimarySideBar;
