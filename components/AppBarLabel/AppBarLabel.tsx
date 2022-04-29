import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { NextPage } from "next";

export interface AppBarLabelProps {
  label: string
};

export const AppBarLabel: NextPage<AppBarLabelProps> = ({ label }: AppBarLabelProps) => {

  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
};

export default AppBarLabel;