import { AppBar, Box, Toolbar } from "@mui/material";
import { NextPage } from "next";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { MenuSection } from "../Menu/Menu";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import SecondarySideBar from "../SecondarySideBar/SecondarySideBar";

export interface MainProps {
  primarySideBarOpen: boolean;
  setPrimarySideBarOpen: Dispatch<SetStateAction<boolean>>;

  primarySections?: MenuSection[];
  children?: ReactNode;
}

export const Main: NextPage<MainProps> = ({
  primarySideBarOpen,
  setPrimarySideBarOpen,

  primarySections = [],
  children,
}: MainProps) => {

  return (
    <Box
      component="main"
      position='relative'
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        flexGrow: 1,
        alignItems: "stretch"
      }}>

      <PrimarySideBar
        open={primarySideBarOpen}
        setOpen={setPrimarySideBarOpen}
        sections={primarySections}
      />
      <SecondarySideBar />
      {children}

    </Box>
  )
}

export default Main;
