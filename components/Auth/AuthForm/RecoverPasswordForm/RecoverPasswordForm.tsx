import { Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";

export interface RecoverPasswordFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

export const RecoverPasswordForm: NextPage<RecoverPasswordFormProps> = ({
  providers,
  csrfToken,
  username,
  setUsername,
}) => {

  // const [username, setUsername] = useState('');
  const handleUsernameChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.currentTarget.value);
  };

  return (
    // {/* Sign In Form */ }
    <Box
      component={'form'}
      // method={'post'}
      // action=
      // onSubmit={(e: FormEvent) => {
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();

        console.log(username);

        getProviders().then((value) => {
          // TODO make it work
          // signIn(CredentialsProvider.name, { username: username, password: password, redirect: false });
          // signIn(value?.credentials.id, { username: username, password: password, redirect: false });
        });

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

      {/* Username */}
      <TextField
        id='username'
        name='username'
        label='Name'
        // helperText='Use only a-z, A-Z, 0-9'
        // placeholder=''
        // value={value}
        // defaultValue="Default Value"

        variant='standard'
        // variant='outlined'
        required
        // InputProps={{
        //   readOnly: true,
        // }}
        // disabled
        // error

        value={username}
        onChange={handleUsernameChange}
      />

      {/* Submit */}
      <Button
        type="submit"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Send />}
      // onClick={() => signIn(CredentialsProvider.name, { username: username, password: password })}
      >
        Send Recovery Email
      </Button>

      {/* Reset */}
      <Button
        type="reset"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Delete />}
      >
        Reset
      </Button>
    </Box>
  );
};

export default RecoverPasswordForm;
