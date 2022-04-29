import { Box, Divider, Drawer, List } from "@mui/material";
import { NextPage } from "next";
import { ElementType, Fragment, ReactNode, useState } from "react";
import { ListLink } from "../Link/Link";

export interface MenuElement {
  href: string,
  icon: ReactNode,
  text: string,
}

export type MenuSection = MenuElement[];

export interface MenuProps {
  open: boolean,
  direction: 'left' | 'right' | 'top' | 'bottom',
  sections: MenuSection[],
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void),
  component?: any
}

export const Menu: NextPage<MenuProps> = ({ open = false, direction = 'left', sections = [], onClose, component }: MenuProps) => {

  // const [open, setOpen] = useState(false);
  // const toggleOpen = () => setOpen((oldOpen) => !oldOpen);

  // const [direction, setDirection] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  // const [elements, setElements] = useState([]);

  return (
    <Drawer
      anchor={direction}
      open={open}
      // onClose={() => setOpen(false)}
      onClose={onClose}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        component={component}
      // onClick={toggleDrawer('right', false)}
      // onKeyDown={toggleDrawer('right', false)}
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
    </Drawer >
  );
};

export default Menu;
