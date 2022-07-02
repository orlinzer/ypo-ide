import { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import Menu, { MenuSection } from "../Menu/Menu";

export interface PanelProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;

  sections?: MenuSection[];
}

export const Panel: NextPage<PanelProps> = ({
  open: propsOpen = false,
  setOpen: propsSetOpen,
  sections = []
}: PanelProps) => {

  // Open State
  let [open, setOpen] = useState(propsOpen);
  if (propsSetOpen) {
    setOpen = propsSetOpen;
  }

  return (
    <></>
    // <Menu
    //   open={open}
    //   anchor={'right'}
    //   sections={sections}
    // onClose={() => setOpen(false)}
    // onOpen={() => setOpen(true)}
    // // component='nav'
    // />
  );
};

export default Panel;
