import { Delete, Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";

export interface ManageAccountFormProps {
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

export const ManageAccountForm: NextPage<ManageAccountFormProps> = ({
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
    // {/* Sign In Form */ }
    <Box
      component={'form'}
      // method={'post'}
      // action=
      // onSubmit={(e: FormEvent) => {
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();

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

export default ManageAccountForm;
