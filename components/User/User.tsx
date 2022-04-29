import {
  AccountCircle as AccountCircleIcon,
  ManageAccounts as ManageAccountsIcon,
  PersonAdd as PersonAddIcon,
  PersonOff as PersonOffIcon,
  PersonRemove as PersonRemoveIcon
} from "@mui/icons-material";
import { Avatar, Card, Grid, IconButton, Paper, Typography } from "@mui/material";
import { NextComponentType } from "next";
import Image from "next/image";

export const User: NextComponentType = () => {
  return (
    <Paper
      sx={{
        minWidth: 400,
        margin: 1
      }}
      elevation={10}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Avatar></Avatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography noWrap component='h4'>User Name</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography noWrap component='h5'>User About</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <PersonAddIcon />
            {/* <PersonRemoveIcon /> */}
          </IconButton>
          <IconButton>
            <ManageAccountsIcon />
          </IconButton>
          {/* <IconButton>
            <PersonOffIcon />
          </IconButton> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default User;