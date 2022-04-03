import { useSession } from "next-auth/react";
import Layout from "../../components/Layout/Layout";

export default function Page() {
  const { data: session } = useSession();

  return (
    <Layout>
      <h1>This page is protected by Middleware</h1>
      <p>Only admin users can see this page.</p>
      <p>
        To learn more about the NextAuth middleware see&nbsp;
        <a href="https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs#middleware">
          the docs
        </a>
        .
      </p>
    </Layout>
  )
}

Page.auth = {
  role: "admin",
  // loading: <AdminLoadingSkeleton />,
  loading: <p>loading</p>,
  unauthorized: "/login-with-different-user", // redirect to this url
}