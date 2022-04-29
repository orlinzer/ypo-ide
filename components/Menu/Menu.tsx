import { Box, Divider, Drawer, List, SwipeableDrawer } from "@mui/material";
import { NextPage } from "next";
import { ElementType, Fragment, ReactEventHandler, ReactNode, useState } from "react";
import { ListLink } from "../Link/Link";

export interface MenuElement {
  href: string,
  icon: ReactNode,
  text: string,
}

export type MenuSection = MenuElement[];

export interface MenuProps {
  open: boolean,
  anchor: 'left' | 'right' | 'top' | 'bottom',
  sections: MenuSection[],
  onClose: ReactEventHandler<{}>,
  onOpen: ReactEventHandler<{}>,
  component?: any
}

export const Menu: NextPage<MenuProps> = ({ open = false, anchor = 'left', sections = [], onClose, onOpen, component }: MenuProps) => {

  // const [open, setOpen] = useState(false);
  // const toggleOpen = () => setOpen((oldOpen) => !oldOpen);

  // const [direction, setDirection] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  // const [elements, setElements] = useState([]);

  return (
    <SwipeableDrawer
      variant='temporary'
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        component={component}
      >
        {sections.map((elements, index: number) => (
          <Fragment>
            <List>
              {elements.map(element => (
                <ListLink
                  href={element.href}
                  icon={element.icon}
                  text={element.text}
                />
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
