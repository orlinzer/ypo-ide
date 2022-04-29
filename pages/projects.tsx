import { Grid } from "@mui/material";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Project from "../components/Project/Project";
import User from "../components/User/User";

export const projectsPage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}
        sx={{
          m: '0 10'
        }}>
        <Grid item xs={12}>
          <Project />
        </Grid>
        <Grid item xs={12}>
          <Project />
        </Grid>
        <Grid item xs={12}>
          <Project />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default projectsPage;
