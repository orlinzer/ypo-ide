import { AddPhotoAlternate, Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Tab, Tabs, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, useSession } from "next-auth/react";
import { FormEvent, SyntheticEvent, useState } from "react";
import SignOut from "../../../pages/auth_old/sign_out";
import DeleteUserForm from "./DeleteUserForm/DeleteUserForm";
import ManageAccountForm from "./ManageAccountForm/ManageAccountForm";
import RecoverPasswordForm from "./RecoverPasswordForm/RecoverPasswordForm";
import SignInForm from "./SignInForm/SignInForm";
import SignOutForm from "./SignOutForm/SignOutForm";
import SignUpForm from "./SignUpForm/SignUpForm";

export interface AuthFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  csrfToken: string;
  tab?: 'sign_in' | 'sign_up' | 'recover_password' | 'manage_account' | 'sign_out' | 'delete_account'
}

export const AuthForm: NextPage<AuthFormProps> = ({
  providers,
  csrfToken,
  tab,
}) => {

  const { data: session, status } = useSession();

  const [signTab, setSignTab] = useState<number>(() => {
    if (session) {
      if (tab === 'sign_out') { return 1; }
      if (tab === 'delete_account') { return 2; }
    }
    if (tab === 'sign_up') { return 1; }
    if (tab === 'recover_password') { return 2; }
    return 0;
  });

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
          {session ? [
            <Tab key={0} label={'Manage Account'} />,
            <Tab key={1} label={'Sign Out'} />,
            <Tab key={2} label={'Delete User'} />,
          ] : [
            <Tab key={0} label={'Sign In'} />,
            <Tab key={1} label={'Sign Up'} />,
            <Tab key={2} label={'Recover Password'} />,
          ]}
        </Tabs>
      </Box>

      {session && signTab === 0 &&
        <ManageAccountForm
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

      {session && signTab === 1 &&
        <SignOutForm
          providers={providers}
          csrfToken={csrfToken}
        />
      }

      {session && signTab === 2 &&
        <DeleteUserForm
          providers={providers}
          csrfToken={csrfToken}
          username={username}
          setUsername={setUsername}
        />
      }

      {!session && signTab === 0 &&
        <SignInForm
          providers={providers}
          csrfToken={csrfToken}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      }

      {!session && signTab === 1 &&
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

      {!session && signTab === 2 &&
        <RecoverPasswordForm
          providers={providers}
          csrfToken={csrfToken}
          username={username}
          setUsername={setUsername}
        />
      }

    </Box>
  );
};

export default AuthForm;
