import { AddPhotoAlternate, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";

export interface SignUpFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  about: string;
  setAbout: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

export const SignUpForm: NextPage<SignUpFormProps> = ({
  providers,
  csrfToken,
  username,
  setUsername,
  password,
  setPassword,
  about,
  setAbout,
  email,
  setEmail,
  phone,
  setPhone,
  confirmPassword,
  setConfirmPassword,
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

  // const [about, setAbout] = useState('');
  const handleAboutChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAbout(e.currentTarget.value);
  };

  // const [email, setEmail] = useState('');
  const handleEmailChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.currentTarget.value);
  };

  // const [phone, setPhone] = useState('');
  const handlePhoneChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhone(e.currentTarget.value);
  };

  // const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((oldShowPassword) => !oldShowPassword);
  };

  return (
    // {/* Sign Up Form */ }
    <Box
      // display={signTab === 1 ? 'flex' : 'none'}
      // visibility={signTab === 1 ? 'visible' : 'hidden'}
      sx={{
        // display: 'flex',
        // display: signTab === 1 ? 'flex' : 'none',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1em',
        p: '1em',
      }
      }
    >
      {/* CSRF Token */}
      <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

      {/* Username */}
      < TextField
        id='username'
        name='username'
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

        value={username}
        onChange={handleUsernameChange}
      />

      {/* About */}
      < TextField
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

      {/* Image */}
      < IconButton
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
      </IconButton >

      {/* Email */}
      < TextField
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

      {/* Phone */}
      < TextField
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

      {/* Password */}
      < FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required >
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
      </FormControl >

      {/* Confirmation Password */}
      < FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required >
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
      </FormControl >

      <Button variant="contained" endIcon={<Send />}>
        Sign Up
      </Button>

      <Button variant="contained" endIcon={<Delete />}>
        Reset
      </Button>
    </Box >
  );
};

export default SignUpForm;
