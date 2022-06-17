import { Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";

export interface SignInFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export const SignInForm: NextPage<SignInFormProps> = ({
  providers,
  csrfToken,
  username,
  setUsername,
  password,
  setPassword,
}) => {

  // const [username, setUsername] = useState('');
  const handleUsernameChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.currentTarget.value);
  };

  // const [password, setPassword] = useState('');
  const handlePasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.currentTarget.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((oldShowPassword) => !oldShowPassword);
  }

  // const [error, setError] = useState('');

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
        console.log(password);

        getProviders().then((value) => {
          // console.log(value); // DBG

          signIn(value?.credentials.id, { username: username, password: password })
            .then((value) => {
              console.log(value); // DBG
              // setError(JSON.stringify(value)); // DBG
            })
            .catch((reason) => {
              console.log(reason); // DBG
              // setError(reason); // DBG
            });
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
      {/* {error} */}

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
      {/* Password */}
      <FormControl
        sx={{
          width: '25ch'
        }}
        // variant="outlined"
        variant="standard"
        required
      >
        <InputLabel htmlFor="user-password">Password</InputLabel>
        <Input
          id='password'
          name='password'
          type={showPassword ? 'text' : 'password'}

          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"

          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl >

      {/* Submit */}
      <Button
        type="submit"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Send />}
      // onClick={() => signIn(CredentialsProvider.name, { username: username, password: password })}
      >
        Sign In
      </Button >

      {/* Reset */}
      < Button
        type="reset"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Delete />}
      >
        Reset
      </Button >
    </Box >
  );
};

export default SignInForm;
