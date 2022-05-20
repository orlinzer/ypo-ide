import { UsbRounded } from "@mui/icons-material";
import { AppBar, Avatar, Box, Collapse, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, useTheme } from "@mui/material";
import { minHeight } from "@mui/system";
import { NextPage } from "next";
import { element } from "prop-types";
import { Dispatch, Fragment, MouseEvent, MouseEventHandler, ReactNode, SetStateAction, useCallback, useState } from "react";
import { ListLink } from "../Link/Link";
import Menu, { MenuSection } from "../Menu/Menu";
import { v4 as uuid } from 'uuid';

export interface PrimaryMenuElement {
  href: string,
  icon?: ReactNode,
  text: string,
}

export type PrimaryMenuSection = PrimaryMenuElement[];

export interface PrimarySideBarProps {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  sections?: PrimaryMenuSection[];
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
      component='nav'
    >
      <List>
        <ListItem
          draggable='true'
          onDrag={() => {
            console.log('drag');
          }}
          onDragStart={(e) => {
            console.log('drag start');
            e.dataTransfer.setData('text', 'for (let i = 0; i < arr.length; i++) {}');
            // e.dataTransfer.setDragImage();

            setOpen(false);
          }}
        >
          for
        </ListItem>
      </List>

      {/* <Fragment>
        {sections.map((section) => (
          <Fragment key={uuid()}>
            <List>
              {section.map((element) => (
                <ListLink
                  key={uuid()}
                  href={element.href}
                  icon={element.icon}
                  text={element.text}
                />
              ))}
            </List>
            <Divider />
          </Fragment>
        ))}
      </Fragment> */}
    </Menu>
  );
};

export default PrimarySideBar;
