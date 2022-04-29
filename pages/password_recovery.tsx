import { Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import Form from "../components/Form/Form";
import Layout from "../components/Layout/Layout";
import Link from "../components/Link/Link";

export const PasswordRecoveryPage: NextPage = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  const [values, setValues] = useState({
    amount: '',
    password: '',
    confirmPassword: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Layout>
      <Paper sx={{
        padding: '0.5em 1em',

        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Typography variant='h5' >Password Recovery</Typography>
        {/* <Form> */}

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

        <Button variant="text" endIcon={<Send />}>
          Recover Password
        </Button>
        <Button variant="text" endIcon={<Delete />}>
          Reset
        </Button>
        {/* </Form> */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Link href='#'>Sign In</Link>
          <Link href='#'>Sign Up</Link>
        </Box>
      </Paper>
    </Layout>
  );
};

export default PasswordRecoveryPage;
