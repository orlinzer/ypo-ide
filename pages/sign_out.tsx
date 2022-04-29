import Layout from "../components/Layout/Layout";
import dynamic from 'next/dynamic';
import { Paper, Typography } from "@mui/material";
import NextLink from "next/link";
import Link from "../components/Link/Link";

// export const Device = dynamic(() => import('../components/Layout/Layout'), { ssr: false });

export default function IndexPage() {
  return (
    <Layout>
      {/* <Device> */}
      {/* {({ isMobile }: any): JSX.Element => {
        if (isMobile) {
          return <div>My Mobile View</div>;
        }
        return <div>My Desktop View</div>;
      }} */}
      {/* <div>hello</div> */}
      {/* </Device> */}

      <Paper
        elevation={10}
        sx={{
          width: '80%',
          p: 1,
          m: 1,

          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Typography variant='h1'>You are Signed Out</Typography>
        <Typography variant='body1'>
          Hope to see you again
        </Typography>
      </Paper>
    </Layout>
  );
}
