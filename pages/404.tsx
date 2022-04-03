import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

export const resourceNotFoundErrorPage: NextPage = () => {
  return (
    <Layout>
      <h2>404 Resource Not Found Error</h2>
    </Layout>
  );
};

export default resourceNotFoundErrorPage;
