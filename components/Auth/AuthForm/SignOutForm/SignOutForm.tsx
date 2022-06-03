import { Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";

export interface SignOutFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
}

export const SignOutForm: NextPage<SignOutFormProps> = ({
  providers,
  csrfToken,
}) => {

  return (
    // {/* Sign In Form */ }
    <Box
      component={'form'}
      // method={'post'}
      // action=
      // onSubmit={(e: FormEvent) => {
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();

        // getProviders().then((value) => {
        // TODO make it work
        // signIn(CredentialsProvider.name, { username: username, password: password, redirect: false });
        // signIn(value?.credentials.id, { username: username, password: password, redirect: false });
        // });
        signOut();

        return false;
      }}

      sx={{
        // display: signTab === 0 ? 'flex' : 'none',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1em',
        p: '1em',
      }}
    >
      {/* CSRF Token */}
      <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

      {/* Submit */}
      <Button
        type="submit"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Send />}
      // onClick={() => signIn(CredentialsProvider.name, { username: username, password: password })}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default SignOutForm;
