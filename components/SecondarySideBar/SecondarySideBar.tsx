import { List } from "@mui/material";
import { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import Menu, { MenuSection } from "../Menu/Menu";

export interface SecondarySideBarProps {
  // open?: boolean;
  // setOpen?: Dispatch<SetStateAction<boolean>>;

  sections?: MenuSection[];
}

export const SecondarySideBar: NextPage<SecondarySideBarProps> = ({
  // open: propsOpen = false,
  // setOpen: propsSetOpen,
  // sections = []
}: SecondarySideBarProps) => {

  // Open State
  // let [open, setOpen] = useState(propsOpen);
  // if (propsSetOpen) {
  //   setOpen = propsSetOpen;
  // }

  const sections = [[
    {
      href: '/auth/sign_in',
      // icon: < LoginIcon />,
      text: 'bla bla bla',
    }
  ]];

  return (
    <Menu
      // open={true}
      open={false}
      anchor={'right'}
      setOpen={() => { }}
      // sections={sections}
      component='div'
    >
      <List>

      </List>
    </Menu>
  );
};

export default SecondarySideBar;
