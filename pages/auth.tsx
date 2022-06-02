
import { AddPhotoAlternate, Close, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, Dialog, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, Tab, Tabs, TextField } from "@mui/material";
import { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getCsrfToken, getProviders, LiteralUnion, signIn } from "next-auth/react";
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
        {/* </Dialog> */}
      </Paper>
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
  }
}

export default AuthPage;
