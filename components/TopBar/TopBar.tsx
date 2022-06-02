import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Link as MUILink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  AddPhotoAlternate,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Close,
  CollectionsBookmark as CollectionsBookmarkIcon,
  ContactSupport as ContactSupportIcon,
  Delete,
  Edit as EditIcon,
  LockReset as LockResetIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  PeopleAltRounded as PeopleAltRoundedIcon,
  PersonAdd as PersonAddIcon,
  PersonAddAlt as PersonAddAltIcon,
  PersonOff as PersonOffIcon,
  Search as SearchIcon,
  Send,
  Visibility,
  VisibilityOff
} from "@mui/icons-material";
import Image from "next/image";
import React,
{
  Dispatch,
  FormEvent,
  Fragment,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from 'next/router';
import { string } from "prop-types";
import NextLink from 'next/link';
import Link, { ListLink } from "../Link/Link";
import LinearBuffer from "../LinearBuffer/LinearBuffer";
import { NextPage } from "next";
import AppBarLabel from "../AppBarLabel/AppBarLabel";
import { getCsrfToken, getProviders, getSession, SessionProvider, signIn, signOut, useSession } from "next-auth/react";
// import Menu from "../Menu/Menu";
import { MenuSection } from "../Menu/Menu";
import AuthContext from "../../stores/AuthContext";
import CredentialsProvider from "next-auth/providers/credentials";

// const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

interface TopBarProps {
  // children?: ReactNode;
  // // themeToggler?: Dispatch<SetStateAction<Theme>>;
  // // themeToggler?: (value: SetStateAction<Theme>) => void;
  themeToggler?: () => void;
  // primarySideBarOpen: boolean;
  // userMenuDrawerOpen: boolean;
  // setPrimarySideBarOpen: Dispatch<SetStateAction<boolean>>;
  primarySideBarToggler?: () => void;
  // setUserMenuDrawerOpen: Dispatch<SetStateAction<boolean>>;

  userSections?: MenuSection[];
  navSections?: MenuSection[];
}

// interface HeaderState {
//   top?: boolean;
//   left?: boolean;
//   bottom?: boolean;
//   right?: boolean;
//   width?: number;
//   height?: number;
//   mode?: string;
// }

// export const Header: NextPage<HeaderProps> = ({
//   children,
//   themeToggler,
//   navMenuDrawerOpen,
//   userMenuDrawerOpen,
//   setNavMenuDrawerOpen,
//   setUserMenuDrawerOpen,
// }: HeaderProps) => {
export const TopBar: NextPage<TopBarProps> = ({
  themeToggler,
  primarySideBarToggler,
  userSections,
  navSections,
}: TopBarProps) => {

  const theme = useTheme();

  // For user data
  // useSession(); //     [Client        ]
  // getSession(); //     [Client, Server]
  // getCsrfToken(); //   [Client, Server]
  // getProviders(); //   [Client, Server]
  // signIn(); //         [Client        ]
  // signOut(); //        [Client        ]
  // SessionProvider; //  [Client        ]
  const { data: session, status } = useSession();
  console.log('session', session); // DBG
  if (status === 'authenticated') { // DBG
  } else if (status === 'loading') { // DBG
  } else if (status === 'unauthenticated') { // DBG
  }

  // User Menu
  const [userMenu, setUserMenu] = React.useState<null | HTMLElement>(null);
  const userMenuOpen = Boolean(userMenu);
  const handleUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenu(event.currentTarget);
  };
  const closeUserMenu = () => {
    setUserMenu(null);
  };

  // Navigation Menu
  const [navMenu, setNavMenu] = React.useState<null | HTMLElement>(null);
  const navMenuOpen = Boolean(navMenu);
  const handleNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNavMenu(event.currentTarget);
  };
  const closeNavMenu = () => {
    setNavMenu(null);
  };

  // ?
  // const context = useContext(AuthContext);
  // console.log('context', context); // DBG

  const router = useRouter();
  // const location = router.asPath;
  const path = router.asPath.split('/').filter((x) => x);

  // Sign In stuff
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);
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


  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };
  // window.addEventListener('resize', handleResize);
  // return () => window.removeEventListener('resize', handleResize);
  // });
  // if (typeof window !== 'undefined') {
  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   // height: innerHeight,
  //   width: window.innerWidth
  //   // width: innerWidth
  // });
  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       height: window.innerHeight,
  //       // height: innerHeight,
  //       width: window.innerWidth
  //       // width: innerWidth
  //     });
  //   }

  //   window.addEventListener('resize', handleResize);
  //   // addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // });
  // }

  return (
    <AppBar
      component='header'
      // position='fixed'

      // on dark theme the color property dont have effect (enableColorOnDark)
      color="primary"
      sx={{
        zIndex: theme.zIndex.appBar,
      }}
    >
      {/* TODO: brake the AppBar to contain components of Toolbars. */}
      {/* <AppBarLabel label="YPO-IDE" /> */}
      <Toolbar
        sx={{
          mixin: theme.mixins.toolbar,
        }}
      >
        {/* Navigation Menu Button */}
        <IconButton
          onClick={handleNavMenu}
        >
          <MenuIcon sx={{
            fontSize: 32
          }} />
        </IconButton>

        {/* Logo and Path in the server */}
        <Breadcrumbs
          aria-label="breadcrumb"
          separator='/'
          maxItems={3}
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexGrow: 1,
            minWidth: 'max-content',
          }}
        >
          {/* Home's Path (Logo and Name) */}
          <MUILink
            noWrap
            variant="h6"
            underline="hover"
            color="inherit"
            href="/"
          >
            <IconButton>
              <Image
                src="/logo.svg"
                width={32}
                height={32}
                alt="Logo"
              />
            </IconButton>
            YPO-IDE
          </MUILink>

          {/* Path */}
          {path.map((value, index) => {
            const last = index === path.length - 1;
            const to = `/${path.slice(0, index + 1).join('/')}`;

            return last ? (
              <Typography
                noWrap
                // variant="subtitle2"
                variant="subtitle1"
                color="text.primary"
                // color="text.secondary"
                key={to}
              >
                {value}
              </Typography>
            ) : (
              <MUILink
                noWrap
                variant="subtitle1"
                underline="hover"
                color="text.primary"
                // color="text.secondary"
                href={to}
                key={to}
              >
                {value}
              </MUILink>
            );
          })}
        </Breadcrumbs>

        {/* Search */}
        {/* {dimensions?.width > 600 && */}
        <Box
          sx={{
            minWidth: 'max-content',
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: 'inherit',
              '& .MuiInputBase-input': {
                // padding: theme.spacing(1, 1, 1, 0),
                padding: '1 1 1 0',
                // vertical padding + font size from searchIcon
                // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                paddingLeft: `calc(1em + 4)`,
                // transition: theme.transitions.create('width'),
                transition: 'width',
                width: '100%',
                // [theme.breakpoints.up('sm')]: {
                //   width: '12ch',
                //   '&:focus': {
                //     width: '20ch',
                //   },
                // },
              },
            }}
          />
        </Box>
        {/* } */}

        {/* Theme Toggle Button */}
        <IconButton
          sx={{ ml: 1 }}
          onClick={themeToggler}
        >
          {
            theme.palette.mode === 'dark' ?
              <Brightness7Icon /> :
              <Brightness4Icon />
          }
        </IconButton>

        {/* User Menu Button */}
        <IconButton
          onClick={handleUserMenu}
        >
          <Avatar
            alt='User Image'
          // src='/public/images/...'
          // sx={{ bgcolor: 'blue' }}
          >
            {
              (session) ?
                session.user.name.split(' ').map(word => word[0]).join('') :
                null
            }
          </Avatar>
        </IconButton>
      </Toolbar>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={userMenu}
        open={userMenuOpen}
        onClose={closeUserMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* {[[
          <MenuItem
            // onClick={closeUserMenu}
            onClick={() => setSignInDialogOpen(true)}
          >
            <LoginIcon />Sign In
          </MenuItem>
        ]]} */}
        {userSections?.map((section) => (
          section.map((item: any) => (
            <MenuItem onClick={closeUserMenu}>
              {
                item.href &&
                <Link href={item.href}>
                  {item.icon}
                  {item.text}
                </Link>
              }
              {
                item.onClick &&
                <Typography onClick={item.onClick}>
                  {item.icon}
                  {item.text}
                </Typography>
              }
            </MenuItem>
          ))
        ))}
      </Menu>

      {/* NavMenu */}
      <Menu
        id="nav-menu"
        anchorEl={navMenu}
        open={navMenuOpen}
        onClose={closeNavMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {navSections?.map((section) => (
          section.map((item) => (
            <MenuItem onClick={closeNavMenu}>
              <Link href={item.href ? item.href : ''}>
                {item.icon}
                {item.text}
              </Link>
            </MenuItem>
          ))
        ))}
      </Menu>

      {/* Sign In Dialog */}
      {/* <Dialog
        open={signInDialogOpen}
        onClose={() => setSignInDialogOpen(false)}
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   flexWrap: 'nowrap',

      //   alignContent: 'center',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   justifyItems: 'center',
      //   gap: 0,
      // }}
      > */}

      {/* Tab Section */}
      {/* <Box
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

          <IconButton
            onClick={() => setSignInDialogOpen(false)}
          >
            <Close />
          </IconButton>
        </Box> */}

      {/* <DialogTitle>Sign In</DialogTitle> */}

      {/* <input name='csrfToken' type='hidden' defaultValue={csrfToken} /> */}

      {/* Sign In Form */}
      {/* <Box
        component={'form'}
        // method={'post'}
        // action=
        // onSubmit={(e: FormEvent) => {
        onSubmit={(e: SyntheticEvent) => {
          e.preventDefault();

          console.log(username);
          console.log(password);

          getProviders().then((value) => {
            // TODO make it work
            signIn(CredentialsProvider.name, { username: username, password: password, redirect: false });
          });

          return false;
        }}

        // display={signTab === 0 ? 'block' : 'none'}
        // visibility={signTab === 0 ? 'visible' : 'hidden'}
        // visibility='hidden'
        // visibility='visible'
        // {signTab === 0 && }
        sx={{
          // display: 'flex',
          display: signTab === 0 ? 'flex' : 'none',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1em',
          p: '1em',
        }}
      > */}
      {/* Username */}
      {/* <TextField
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
      /> */}
      {/* Password */}
      {/* <FormControl
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
      </FormControl> */}

      {/* Submit */}
      {/* <Button
        type="submit"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Send />}
      // onClick={() => signIn(CredentialsProvider.name, { username: username, password: password })}
      >
        Sign In
      </Button> */}

      {/* Reset */}
      {/* <Button
        type="reset"
        // form="signInForm"
        variant="contained"
        color="primary"
        endIcon={<Delete />}
      >
        Reset
      </Button>
    </Box> */}

      {/* Sign Up Form */}
      {/* <Box
    // display={signTab === 1 ? 'flex' : 'none'}
    // visibility={signTab === 1 ? 'visible' : 'hidden'}
    sx={{
      // display: 'flex',
      display: signTab === 1 ? 'flex' : 'none',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1em',
      p: '1em',
    }}
  > */}

      {/* Username */}
      {/* <TextField
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
      /> */}

      {/* About */}
      {/* <TextField
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
      /> */}

      {/* Image */}
      {/* <IconButton
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
      </IconButton> */}

      {/* Email */}
      {/* <TextField
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
      /> */}

      {/* Phone */}
      {/* <TextField
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
      /> */}

      {/* Password */}
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required>
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
        /> */}
      {/* <FormHelperText id="password-helper-text"></FormHelperText> */}
      {/* </FormControl> */}

      {/* Confirmation Password */}
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required>
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
        /> */}
      {/* <FormHelperText id="password-helper-text"></FormHelperText> */}
      {/* </FormControl>

      <Button variant="contained" endIcon={<Send />}>
        Sign Up
      </Button>

      <Button variant="contained" endIcon={<Delete />}>
        Reset
      </Button>
    </Box >
    </Dialog > */}

      {/* TODO */}
      {/* <LinearBuffer /> */}
    </AppBar >
  );
};

export default TopBar;
