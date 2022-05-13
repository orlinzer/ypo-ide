import { Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { CtxOrReq } from "next-auth/client/_utils";
import { BuiltInProviderType } from "next-auth/providers";
import { getProviders, getCsrfToken, signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { FormEvent, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Link from "../../components/Link/Link";

export interface SignInProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
}

export const SignIn = ({ providers, csrfToken }: SignInProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleUsernameChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handlePasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleShowPassword = () => {
    setShowPassword((oldShowPassword) => !oldShowPassword);
  }

  return (
    <Layout>
      <Paper
        sx={{
          padding: '0.5em 1em',

          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Typography variant='h5' >Sign In</Typography>

        {/* <Form> */}
        <form
          // target=""
          // action="/api/auth/signin/email"
          action="/api/auth/callback/credentials"
          method="post"
          id="signInForm"
          // name="signInForm"
          style={{
            padding: '0.5em 1em',

            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '0.5em',
          }}
        // noValidate
        // autoComplete="off"
        // autoCapitalize=""
        // autoCorrect=""
        // autoSave=""
        // defaultValue={}
        // onVolumeChange={}
        // onVolumeChangeCapture={}
        >
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

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
          <FormControl
            sx={{ m: 1, width: '25ch' }}
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
            {/* <FormHelperText id="password-helper-text"></FormHelperText> */}
          </FormControl>

          <Button
            type="submit"
            form="signInForm"
            variant="contained"
            color="primary"
            endIcon={<Send />}
          >
            Sign In
          </Button>
          <Button
            type="reset"
            form="signInForm"
            variant="contained"
            color="primary"
            endIcon={<Delete />}
          >
            Reset
          </Button>

        </form>
        {/* </Form> */}

        {/* TODO: deside what to use. form or this */}
        {providers && Object.values(providers).map((provider) => (
          <Box
            key={provider.name}
            sx={{
              padding: '0.5em 1em',

              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              endIcon={<Send />}
              onClick={() => signIn(provider.id, { username: username, password: password })}>
              {/* <button onClick={() => signIn(provider.id}> */}
              Sign in with {provider.name}
            </Button>
          </Box>
        ))}

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Link href='#'>Sign Up</Link>
          <Link href='#'>I Forgot My Password</Link>
        </Box>
      </Paper>
    </Layout>
  )
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

export default SignIn;
