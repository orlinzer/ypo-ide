import { AddPhotoAlternate, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, Paper, TextField, Typography } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { GetUserResult, User } from "../types/User";
import imageLoader from "../utils/ImageLoader";
import { useSession } from 'next-auth/react'
// import { server } from "../config";

// // Next.js will pre-render this page on each request using the data returned by 'getServerSideProps'
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Fetch data from external API
//   const res = await fetch(`${server}/api/v1/get_users`);
//   const data: GetUserResult = await res.json();

//   // Pass data to the page via props
//   return {
//     props: {
//       users: data,
//     }
//   };
// };

// // If a page has Dynamic Routes and uses 'getStaticProps',
// // it needs to define a list of paths to be statically generated.
// // When you export a function called 'getStaticPaths'(Static Site Generation)
// // from a page that uses dynamic routes,
// // Next.js will statically pre - render all the paths specified by 'getStaticPaths'.
// export const getStaticPaths: GetStaticPaths = async () {
//   return {
//     paths: [
//       { params: { id: '1', name: 'name 1' } },
//       { params: { id: '2', name: 'name 2' } },
//     ],
//     fallback: true // false or 'blocking'
//   };
// };

// // Next.js will pre-render this page at build time using the props returned by 'getStaticProps'
// export const getStaticProps: GetStaticProps = async (context) => {
//   // Fetch data from external API
//   // const res = await fetch(`${server}/api/v1/get_users`);
//   // const { results }: GetUserResult = await res.json();
//   const result: GetUserResult = await res.json();

//   // Pass data to the page via props
//   return {
//     props: {
//       // users: results,
//       users: result,
//     },
//   }
// };

export const SignUpPage: NextPage<{ users: User[] }> = ({ users }) => {

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: any, open: any) => (event: { type: string; key: string; }) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [values, setValues] = useState({
    amount: '',
    password: '',
    confirmPassword: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop: string) => (event: { target: { value: any; }; }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // // Load dynamic data
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('api/profile-data')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // const [content, setContent] = useState('');
  // const { data: session, status } = useSession();

  // const loading = status === 'loading';

  // useEffect(() => {
  //   setContent('content');
  //   const fetchData = async () => {
  //     const res = await fetch('/api/v1/get_user')
  //     const json = await res.json()
  //     if (json.content) { setContent(json.content) }
  //   }
  //   fetchData()
  // }, [session]);

  // When rendering client side don't display anything until loading is complete
  // if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  // if (!session) { return <p>AccessDenied</p> }
  // return <p>Content: {content}</p>;

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

          // justifySelf: "center"
        }}
      >
        <Typography variant='h5' >Sign Up</Typography>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >

          {/* <form> */}
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

          // onChange={handleChange}
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

          // onChange={handleChange}
          />

          <IconButton sx={{ width: 80, height: 80, alignSelf: 'center' }} >
            <AddPhotoAlternate sx={{ width: 64, height: 64 }} />
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

          // onChange={handleChange}
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

          // onChange={handleChange}
          />

          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required>
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Input
              id='user-password'
              type={values.showPassword ? 'text' : 'password'}

              value={values.password}
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
              onChange={handleChange('password')}
              autoComplete="current-password"

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
              type={values.showPassword ? 'text' : 'password'}

              value={values.password}
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
              onChange={handleChange('password')}
              autoComplete="current-password"

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
  )
}

export default SignUpPage;