import { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Menu, { MenuSection } from "../Menu/Menu";

export interface MenuBarProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;

  sections?: MenuSection[];
}

export const MenuBar: NextPage<MenuBarProps> = ({
  open: propsOpen = false,
  setOpen: propsSetOpen,
  sections = []
}: MenuBarProps) => {

  // Open State
  let [open, setOpen] = useState(propsOpen);
  if (propsSetOpen) {
    setOpen = propsSetOpen;
  }

  return (
    <Menu
      open={open}
      anchor={'right'}
      sections={sections}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    // component='nav'
    />
  );
};

export default MenuBar;
