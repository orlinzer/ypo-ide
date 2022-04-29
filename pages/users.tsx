import { Grid } from "@mui/material";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import User from "../components/User/User";

export const usersPage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}
        sx={{
          m: '0 10'
        }}>
        <Grid item xs={12}>
          <User />
        </Grid>
        <Grid item xs={12}>
          <User />
        </Grid>
        <Grid item xs={12}>
          <User />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default usersPage;
