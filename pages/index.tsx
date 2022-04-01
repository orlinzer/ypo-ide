import { Head } from "next/document";
import Layout from "../components/Layout/Layout";
import dynamic from 'next/dynamic';

// export const Device = dynamic(() => import('../components/Layout/Layout'), { ssr: false });

export default function IndexPage() {
  return (
    <Layout>
      {/* <Device> */}
      {({ isMobile }: any): JSX.Element => {
        if (isMobile) {
          return <div>My Mobile View</div>;
        }
        return <div>My Desktop View</div>;
      }}
      <div>hello</div>
      {/* </Device> */}
    </Layout>
  );
}
