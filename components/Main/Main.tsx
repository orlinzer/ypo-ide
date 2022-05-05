import { AppBar, Box, Toolbar } from "@mui/material";
import { NextPage } from "next";
import { ReactNode } from "react";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import SecondarySideBar from "../SecondarySideBar/SecondarySideBar";

export interface MainProps {

}

export const Main: NextPage<MainProps> = ({ }: MainProps) => {
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

      <PrimarySideBar />
      <SecondarySideBar />
      {/* {children} */}

    </Box>
  )
}

export default Main;
