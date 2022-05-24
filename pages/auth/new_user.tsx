import { AddPhotoAlternate, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { CtxOrReq } from "next-auth/client/_utils";
import { BuiltInProviderType } from "next-auth/providers";
import { getProviders, getCsrfToken, signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { FormEvent, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Link from "../../components/Link/Link";

export interface SignUpProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
}

export const SignUp = ({ providers, csrfToken }: SignUpProps) => {

  const [username, setUsername] = useState('');
  const handleUsernameChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.currentTarget.value);
  };

  const [about, setAbout] = useState('');
  const handleAboutChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAbout(e.currentTarget.value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.currentTarget.value);
  };

  const [phone, setPhone] = useState('');
  const handlePhoneChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhone(e.currentTarget.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.currentTarget.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((oldShowPassword) => !oldShowPassword);
  };

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((oldShowPassword) => !oldShowPassword);
  };

  return (
    <Layout>
      <Paper
        elevation={10}
        sx={{
          padding: '1em 2em',
          margin: 'auto 0',

          width: "80%",
          // minWidth: ""

          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',

          // justifySelf: "center",
        }}
      >
        <Typography variant='h5' >Sign Up</Typography>

        <Box
          component='form'
          action="/api/auth/callback/credentials"
          method="post"

          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >

          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

          <TextField
            id='user-name'
            label='Name'
            // helperText='Use only a-z, A-Z, 0-9'
            // placeholder=''
            // value={value}
            // defaultValue="Default Value"

            variant='standard'
            required
            // InputProps={{
            //   readOnly: true,
            // }}
            // disabled
            // error

            onChange={handleUsernameChange}
          />

          <TextField
            id='user-about'
            label='About'
            // helperText='Use only a-z, A-Z, 0-9'
            // placeholder=''
            // value={value}
            // defaultValue="Default Value"

            variant='standard'
            // required
            // InputProps={{
            //   readOnly: true,
            // }}
            // disabled
            // error
            multiline
            rows={4}

            onChange={handleAboutChange}
          />

          <IconButton
            sx={{
              width: 80,
              height: 80,
              alignSelf: 'center',
            }}
          >
            <AddPhotoAlternate sx={{
              width: 64,
              height: 64,
            }}
            />
          </IconButton>

          <TextField
            id='user-email'
            label='Email'
            // helperText='Use only a-z, A-Z, 0-9'
            // placeholder=''
            // value={value}
            // defaultValue="Default Value"

            variant='standard'
            required
            // InputProps={{
            //   readOnly: true,
            // }}
            // disabled
            // error

            onChange={handleEmailChange}
          />

          <TextField
            id='user-phone'
            label='Phone'
            // helperText='Use only numbers spaces dashes and "+" '
            // placeholder=''
            // value={value}
            // defaultValue="Default Value"

            variant='standard'
            // required
            // InputProps={{
            //   readOnly: true,
            // }}
            // disabled
            // error

            onChange={handlePhoneChange}
          />

          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required>
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Input
              id='user-password'
              type={showPassword ? 'text' : 'password'}

              value={password}
              // defaultValue="Default Value"

              // variant='standard'
              // error
              // size='small'
              // margin='dense'
              // fullWidth
              // color=''

              // InputProps={{
              //   readOnly: true,
              // }}
              // disabled
              onChange={handlePasswordChange}
              autoComplete="current-password"

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* <FormHelperText id="password-helper-text"></FormHelperText> */}
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required>
            <InputLabel htmlFor="user-password-confirmation">Confirm Password</InputLabel>
            <Input
              id='user-password-confirmation'
              type={showConfirmPassword ? 'text' : 'password'}

              value={confirmPassword}
              // defaultValue="Default Value"

              // variant='standard'
              // error
              // size='small'
              // margin='dense'
              // fullWidth
              // color=''

              required
              // InputProps={{
              //   readOnly: true,
              // }}
              // disabled
              onChange={handleConfirmPasswordChange}
              autoComplete="current-password"

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowConfirmPassword}
                    onMouseDown={handleShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* <FormHelperText id="password-helper-text"></FormHelperText> */}
          </FormControl>

          <Button variant="text" endIcon={<Send />}>
            Sign Up
          </Button>

          <Button variant="text" endIcon={<Delete />}>
            Reset
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Link href='#'>Sign In</Link>
          <Link href='#'>I Forgot My Password</Link>

          {/* TODO: REMOVE ME */}
          {/* {JSON.stringify(users)} */}
          {/* {(<ul>
            {users.map((user, index) => {
              return (
                <li key={`user_${index}`}>
                  <p>{user.name}</p>
                  <p>{user.about}</p>
                  <Image
                    loader={imageLoader}
                    // if it's hosted somewhere else
                    // unoptimized
                    src={user.image}
                    width="200"
                    height="200"
                    alt="User's Image"
                  />
                </li>
              );
            })}
          </ul>
          )} */}
        </Box>
      </Paper>
    </Layout>
  );
  // return (
  //   <Layout>
  //     <Paper
  //       sx={{
  //         padding: '0.5em 1em',

  //         display: 'flex',
  //         flexDirection: 'column',
  //         flexWrap: 'nowrap',
  //         justifyContent: 'flex-start',
  //         alignItems: 'center'
  //       }}
  //     >
  //       <Typography variant='h5' >Sign In</Typography>

  //       {/* <Form> */}
  //       <form
  //         // target=""
  //         // action="/api/auth/signin/email"
  //         action="/api/auth/callback/credentials"
  //         method="post"
  //         id="signInForm"
  //         // name="signInForm"
  //         style={{
  //           padding: '0.5em 1em',

  //           display: 'flex',
  //           flexDirection: 'column',
  //           flexWrap: 'nowrap',
  //           justifyContent: 'flex-start',
  //           alignItems: 'center',
  //           gap: '0.5em',
  //         }}
  //       // noValidate
  //       // autoComplete="off"
  //       // autoCapitalize=""
  //       // autoCorrect=""
  //       // autoSave=""
  //       // defaultValue={}
  //       // onVolumeChange={}
  //       // onVolumeChangeCapture={}
  //       >
  //         <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

  //         <TextField
  //           id='username'
  //           name='username'
  //           label='Name'
  //           // helperText='Use only a-z, A-Z, 0-9'
  //           // placeholder=''
  //           // value={value}
  //           // defaultValue="Default Value"

  //           variant='standard'
  //           // variant='outlined'
  //           required
  //           // InputProps={{
  //           //   readOnly: true,
  //           // }}
  //           // disabled
  //           // error

  //           value={username}
  //           onChange={handleUsernameChange}
  //         />
  //         <FormControl
  //           sx={{ m: 1, width: '25ch' }}
  //           // variant="outlined"
  //           variant="standard"
  //           required
  //         >
  //           <InputLabel htmlFor="user-password">Password</InputLabel>
  //           <Input
  //             id='password'
  //             name='password'
  //             type={showPassword ? 'text' : 'password'}

  //             value={password}
  //             onChange={handlePasswordChange}
  //             autoComplete="current-password"

  //             endAdornment={
  //               <InputAdornment position="end">
  //                 <IconButton
  //                   aria-label="toggle password visibility"
  //                   onClick={handleShowPassword}
  //                   // onMouseDown={handleMouseDownPassword}
  //                   edge="end"
  //                 >
  //                   {showPassword ? <VisibilityOff /> : <Visibility />}
  //                 </IconButton>
  //               </InputAdornment>
  //             }
  //           />
  //           {/* <FormHelperText id="password-helper-text"></FormHelperText> */}
  //         </FormControl>

  //         <Button
  //           type="submit"
  //           form="signInForm"
  //           variant="contained"
  //           color="primary"
  //           endIcon={<Send />}
  //         >
  //           Sign Up
  //         </Button>
  //         <Button
  //           type="reset"
  //           form="signInForm"
  //           variant="contained"
  //           color="primary"
  //           endIcon={<Delete />}
  //         >
  //           Reset
  //         </Button>

  //       </form>
  //       {/* </Form> */}

  //       {/* TODO: deside what to use. form or this */}
  //       {providers && Object.values(providers).map((provider) => (
  //         <Box
  //           key={provider.name}
  //           sx={{
  //             padding: '0.5em 1em',

  //             display: 'flex',
  //             flexDirection: 'column',
  //             flexWrap: 'nowrap',
  //             justifyContent: 'flex-start',
  //             alignItems: 'center'
  //           }}
  //         >
  //           <Button
  //             variant="contained"
  //             color="primary"
  //             endIcon={<Send />}
  //             onClick={() => signIn(provider.id, { username: username, password: password })}>
  //             {/* <button onClick={() => signIn(provider.id}> */}
  //             Sign in with {provider.name}
  //           </Button>
  //         </Box>
  //       ))}

  //       <Box
  //         sx={{
  //           display: 'flex',
  //           flexWrap: 'nowrap',
  //           flexDirection: 'column',
  //           '& .MuiTextField-root': { m: 1, width: '25ch' },
  //         }}
  //       >
  //         <Link href='#'>Sign Up</Link>
  //         <Link href='#'>I Forgot My Password</Link>
  //       </Box>
  //     </Paper>
  //   </Layout>
  // )
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

export default SignUp;
