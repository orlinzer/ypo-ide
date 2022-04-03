import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

export const serverErrorPage: NextPage = () => {
  return (
    <Layout>
      <h2>500 Server Error</h2>
    </Layout>
  );
};

export default serverErrorPage;
