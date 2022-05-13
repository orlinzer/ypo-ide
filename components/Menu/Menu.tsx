import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, useTheme } from "@mui/material";
import { NextPage } from "next";
import React, { Dispatch, ElementType, Fragment, MouseEvent, ReactEventHandler, ReactNode, SetStateAction, useCallback, useState } from "react";
import { ListLink } from "../Link/Link";

export const defaultDrawerWidth = 240;
const minDrawerWidth = 50;
const maxDrawerWidth = 1000;

export interface MenuElement {
  href: string,
  icon: ReactNode,
  text: string,
}

export type MenuSection = MenuElement[];

export interface MenuProps {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  // open: boolean,
  anchor?: 'left' | 'right' | 'top' | 'bottom',
  sections: MenuSection[],
  // onClose: ReactEventHandler<{}>,
  // onOpen: ReactEventHandler<{}>,
  component?: any
}

export const Menu: NextPage<MenuProps> = ({
  open = false,
  setOpen,

  anchor = 'left',
  sections = [],
  component,
}: MenuProps) => {

  const theme = useTheme();

  // const [direction, setDirection] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  // const [elements, setElements] = useState([]);

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
    <SwipeableDrawer
      variant='temporary'
      anchor={anchor}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}

      elevation={16}
      hideBackdrop={true}

      sx={{ flexShrink: 0 }}
      PaperProps={{ style: { width: width } }}

    >

      {/* Spacing to be below the toolbar */}
      <div style={theme.mixins.toolbar} />

      {/* Dragger */}
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

      <Box
        // sx={{ width: 250 }}
        role="presentation"
        component={component}
      >
        {sections.map((elements, index: number) => (
          <Fragment>
            <List>
              {elements.map(element => (
                // <ListItem>
                // </ListItem>

                <ListItemButton>
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText>{element.text}</ListItemText>
                </ListItemButton>

                // <ListLink
                //   href={element.href}
                //   icon={element.icon}
                //   text={element.text}
                // />
              ))}
            </List>
            {(index !== sections.length - 1) ? <Divider /> : null}
          </Fragment>
        ))}
      </Box>
    </SwipeableDrawer >
  );
};

export default Menu;
