import Layout from "../components/Layout/Layout";
import dynamic from 'next/dynamic';
import { Paper, Typography } from "@mui/material";
import NextLink from "next/link";
import Link from "../components/Link/Link";
import TreeView, { RenderTree } from "../components/TreeView/TreeView";

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
        <Typography variant='h1'>YPO-IDE</Typography>
        <Typography variant='body1'>
          Wellcom to YPO-IDE. This is a Web IDE disign to teach children to program.
          In here you can create websites, games and more.
        </Typography>
        <Typography variant='body2'>
          If you want to know more about <Link href='https://www.ypo.co.il/'>YPO Website</Link>
        </Typography>
      </Paper>
    </Layout>
  );
}
