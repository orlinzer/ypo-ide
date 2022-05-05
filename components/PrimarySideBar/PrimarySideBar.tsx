import { UsbRounded } from "@mui/icons-material";
import { AppBar, Avatar, Box, Collapse, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from "@mui/material";
import { minHeight } from "@mui/system";
import { NextPage } from "next";
import { Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useCallback, useState } from "react";
import Menu, { MenuSection } from "../Menu/Menu";

export const defaultDrawerWidth = 240;
const minDrawerWidth = 50;
const maxDrawerWidth = 1000;

export interface PrimarySideBarProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;

  sections?: MenuSection[];
}

export const PrimarySideBar: NextPage<PrimarySideBarProps> = ({
  open: propsOpen = false,
  setOpen: propsSetOpen,
  sections = []
}: PrimarySideBarProps) => {

  const theme = useTheme();

  // Open State
  let [open, setOpen] = useState(propsOpen);
  if (propsSetOpen) {
    setOpen = propsSetOpen;
  }

  // Width State
  const [width, setWidth] = useState(defaultDrawerWidth);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseMove = useCallback(e => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
      setWidth(newWidth);
    }
  }, []);

  return (
    // <Menu
    //   open={open}
    //   anchor={'right'}
    //   sections={sections}
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
    // // component='nav'
    // />
    // <AppBar>
    // {/* <Toolbar> */}

    // {/* </Toolbar> */}
    // </AppBar>

    <Drawer
      variant='temporary'
      // variant='permanent'
      // open={open}
      open={true}
      // anchor={anchor}
      anchor='left'

      elevation={16}
      hideBackdrop={true}

      sx={{ flexShrink: 0 }}

      PaperProps={{ style: { width: width } }}
    >

      {/* // <Collapse
        //   in={true}
        //   collapsedSize={'2em'}
        //   orientation={'horizontal'}

        // // color='secondary'
        // // sx={{
        // //   // position: 'absolute'
        // //   // color: 'blue'
        // //   backgroundColor: 'secondary'
        // // }}
        // > */}

      {/* Spacing to be below the toolbar */}
      <div style={theme.mixins.toolbar} />

      <div onMouseDown={(e) => handleMouseDown(e)} style={{
        width: "5px",
        cursor: "ew-resize",
        padding: "4px 0 0",
        borderTop: "1px solid #ddd",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        // backgroundColor: "#f4f7f9"
      }} />

      <List>
        <ListItem>
          <ListItemIcon><UsbRounded /></ListItemIcon>
          <ListItemText>asdfasdf</ListItemText>
          <ListItemAvatar><Avatar>asdf</Avatar></ListItemAvatar>
          <ListItemButton>asdf</ListItemButton>
        </ListItem>
      </List>
      {/* // </Collapse> */}
    </Drawer >
  );
};

export default PrimarySideBar;
