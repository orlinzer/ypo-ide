
import { AddPhotoAlternate, Close, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Button, Card, Dialog, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, Tab, Tabs, TextField } from "@mui/material";
import { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getCsrfToken, getProviders, LiteralUnion, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, SyntheticEvent, useState } from "react";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import Layout from "../components/Layout/Layout";

export interface AuthPageProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
}

export const AuthPage: NextPage<AuthPageProps> = ({
  providers,
  csrfToken,
}) => {

  const router = useRouter();
  const { error: queryError, operation } = router.query;

  // TODO: pass the error with promise instead of reload the page
  // TODO: handle multiple errors (string[])
  const [error, setError] = useState<string | string[]>(queryError || '');

  console.log(error); // DBG
  // console.log(router.asPath.split('#')[1]?.split('?')[0]); // DBG
  const requestedTab = router.asPath.split('#')[1]?.split('?')[0];

  // if (operation === 'sign_out') {
  //   console.log('Signing Out');
  //   signOut();
  // } else if (operation === 'sign_out') {
  //   console.log('Signing Out');
  //   signOut();
  // } else

  return (
    <Layout>
      <Paper
        sx={{
          padding: '1em 2em',

          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Card>
          <AuthForm
            providers={providers}
            csrfToken={csrfToken}
          />
        </Card>
      </Paper>

      {/* Error Message */}
      {error &&
        <Alert
          severity="error"
          onClose={() => { setError('') }}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      }
    </Layout>
  );
}

export async function getServerSideProps(context: CtxOrReq) {

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      providers,
      csrfToken,
    },
  };
}

export default AuthPage;
