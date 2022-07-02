import Layout from "../components/Layout/Layout";
import dynamic from 'next/dynamic';
import { Paper, Typography } from "@mui/material";
import NextLink from "next/link";
import Link from "../components/Link/Link";

// export const Device = dynamic(() => import('../components/Layout/Layout'), { ssr: false });

export default function ContactUsPage() {
  return (
    <Layout>
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
        <Typography variant='h1'>Contact Us</Typography>
        <Typography variant='body1'>
          Website: <Link href='https://www.ypo.co.il/'>YPO Website &quot;www.ypo.co.il&quot;</Link>
        </Typography>
        <Typography variant='body1'>
          Mail: <Link href='mailto://info@ypo.co.il/'>YPO Mail &quot;info@ypo.co.il&quot;</Link>
        </Typography>
      </Paper>
    </Layout>
  );
}
