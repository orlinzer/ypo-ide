import { Box } from "@mui/material";
import { ReactNode } from "react";

interface MainProps {
  // children: JSX.Element;
  // children?: any;
  // children: IntrinsicAttributes;
  children: ReactNode;
}

interface MainState {
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  width?: number;
  height?: number;
}

export default function Main({ children }: MainProps) {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center"
      }}>
      {children}
    </Box>
  )
}
