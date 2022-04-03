import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link as MUILink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  ContactSupport as ContactSupportIcon,
  LockReset as LockResetIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  PeopleAltRounded as PeopleAltRoundedIcon,
  PersonAdd as PersonAddIcon,
  PersonAddAlt as PersonAddAltIcon,
  PersonOff as PersonOffIcon,
  Search as SearchIcon
} from "@mui/icons-material";
import Image from "next/image";
import React,
{
  useState,
} from "react";
import { string } from "prop-types";
import NextLink from 'next/link';


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

interface HeaderProps {
  // children: JSX.Element;
  // children?: any;
  // children: IntrinsicAttributes;
}

interface HeaderState {
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  width?: number;
  height?: number;
  mode?: string;
}

// export default function Header({ children }: HeaderProps) {
export default function Header() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    mode: string
  });

  const setPartialState = (obj: Partial<typeof state>) =>
    setState({ ...state, ...obj });

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // TODO
  // const colorMode = React.useMemo(
  // () => ({
  // toggleColorMode: () => {
  //   setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  // },
  // }),
  // [],
  // );

  // TODO
  // const theme = React.useMemo(
  // () => createTheme({
  //   palette: {
  //     mode: string,
  //   },
  // }),
  // [mode],
  // );

  const toggleDrawer = (anchor: string, open: boolean) => (event: React.MouseEvent) => {
    if (event.type === 'keydown' && (event.ctrlKey || event.shiftKey)) {
      // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // if (anchor === 'left') {
    //   setPartialState({ left: open });
    // } else if (anchor === 'right') {
    //   setPartialState({ right: open });
    // }


    setState({ ...state, [anchor]: open });
  };

  const leftList = () => (
    <Box
      component='nav'
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
    // onKeyDown={toggleLefDrawer(false)}
    >
      <List>
        {['Users', 'Projects'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <PeopleAltRoundedIcon /> : <CollectionsBookmarkIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button key={'Contact Us'}>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary='Contact Us' />
        </ListItem>
      </List>
    </Box>
  );

  const userMenuList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    // onClick={toggleDrawer('right', false)}
    // onKeyDown={toggleDrawer('right', false)}
    >
      <List>
        <ListItem button key='sign-in'>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary='Sign In' />
        </ListItem>

        <NextLink href='/sign_up' passHref>
          <ListItem button component='a' key='sign-up'>
            <ListItemIcon>
              {/* <Link href="/sign_up"> */}
              <PersonAddIcon />
              {/* </Link> */}
            </ListItemIcon>
            <ListItemText primary='Sign Up' />
          </ListItem>
        </NextLink>

        <ListItem button key='password-recovery'>
          <ListItemIcon>
            <LockResetIcon />
          </ListItemIcon>
          <ListItemText primary='Recover Password' />
        </ListItem>

        <ListItem button key='account'>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Account' />
        </ListItem>

        <ListItem button key='manage'>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary='Manage Account' />
        </ListItem>

        <ListItem button key='sign-out'>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary='Sign Out' />
        </ListItem>

        <ListItem button key='delete'>
          <ListItemIcon>
            <PersonOffIcon />
            {/* <SearchIcon /> */}
          </ListItemIcon>
          <ListItemText primary='Delete Account' />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppBar
          component='header'
          position='relative'
        >
          <Toolbar sx={{
            gap: '0.5em',
          }}>
            <IconButton
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon sx={{ color: '#000', fontSize: 32 }} />
            </IconButton>

            <Breadcrumbs aria-label="breadcrumb" sx={{ flexGrow: 1 }}>
              <MUILink variant="h6" underline="hover" color="inherit" href="/">
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
              <MUILink variant="subtitle1" underline="hover" color="inherit" href="/">
                User Name
              </MUILink>
              <Typography variant="subtitle2" color="text.primary">Project Name</Typography>
            </Breadcrumbs>

            <Box>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search…"
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

            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <IconButton>
              <Avatar
                alt='User Image'
                // src='/public/images/...'
                onClick={toggleDrawer('right', true)}
              ></Avatar>
            </IconButton>
          </Toolbar>

          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {leftList()}
          </Drawer>

          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {userMenuList()}
          </Drawer>

        </AppBar>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
