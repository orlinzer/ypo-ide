import { Button, Paper, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import Layout from "../../components/Layout/Layout";

export const SignOut = () => {

  return (
    <Layout>
      <Paper
        sx={{
          padding: '0.5em 1em',

          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Typography variant='h5' >Sign Out</Typography>
        <Typography variant='body1' >Are you sure you want to sign out?</Typography>
        <Button
          // type="submit"
          // form="signInForm"
          onClick={() => signOut()}
          variant="contained"
          color="primary"
        // endIcon={<Send />}
        >
          Sign Out
        </Button>
      </Paper>
    </Layout>
  );
}

export default SignOut;
