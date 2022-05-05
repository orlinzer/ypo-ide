import { AppBar, Toolbar } from "@mui/material";
import { NextPage } from "next";

export interface BottomBarProps {
  children?: JSX.Element;
  // children?: any;
  // children: IntrinsicAttributes;
}

// export default function Footer<HeaderProps, HeaderState>({ children }: HeaderProps) {
export const BottomBar: NextPage<BottomBarProps> = ({ }: BottomBarProps) => {
  return (
    <AppBar
      component='footer'
      position='relative'

      // on dark theme the color property dont have effect
      // enableColorOnDark
      color="primary"
    >
      <Toolbar>

      </Toolbar>
    </AppBar>
  )
}

export default BottomBar;
