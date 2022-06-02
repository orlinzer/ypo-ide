import { AddPhotoAlternate, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Tab, Tabs, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { FormEvent, SyntheticEvent, useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

export interface AuthFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
}

export const AuthForm: NextPage<AuthFormProps> = ({
  providers,
  csrfToken,
}) => {

  const [signTab, setSignTab] = useState(0);

  const [username, setUsername] = useState('');
  const handleUsernameChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.currentTarget.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.currentTarget.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((oldShowPassword) => !oldShowPassword);
  }

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

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((oldShowPassword) => !oldShowPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0
      }}
    >
      {/* Tab Section */}
      <Box
        sx={{
          width: '100%',

          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',

          alignContent: 'stretch',
          alignItems: 'center',
          justifyContent: 'stretch',

          gap: 0,
        }}
      >
        <Tabs
          value={signTab}
          onChange={(event: SyntheticEvent, newValue: number) => {
            setSignTab(newValue);
          }}
        >
          <Tab label={'Sign In'} />
          <Tab label={'Sign Up'} />
          <Tab label={'Reset Password'} />
        </Tabs>

        {/* <IconButton
              onClick={() => setSignInDialogOpen(false)}
            >
              <Close />
            </IconButton> */}
      </Box >

      {/* <DialogTitle>Sign In</DialogTitle> */}

      {/* <input name='csrfToken' type='hidden' defaultValue={csrfToken} /> */}

      {signTab === 0 &&
        <SignInForm
          providers={providers}
          csrfToken={csrfToken}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      }
      {signTab === 1 &&
        <SignUpForm
          providers={providers}
          csrfToken={csrfToken}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          about={about}
          setAbout={setAbout}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      }

    </Box>
  );
};

export default AuthForm;
