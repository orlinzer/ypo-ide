import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link as MUILink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  Search as SearchIcon
} from "@mui/icons-material";
import Image from "next/image";
import React,
{
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { string } from "prop-types";
import NextLink from 'next/link';
import Link, { ListLink } from "../Link/Link";
import LinearBuffer from "../LinearBuffer/LinearBuffer";
import { NextPage } from "next";
import AppBarLabel from "../AppBarLabel/AppBarLabel";
import Menu from "../Menu/Menu";
import { signIn, signOut, useSession } from "next-auth/react";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

interface HeaderProps {
  children?: ReactNode;
  // themeToggler?: Dispatch<SetStateAction<Theme>>;
  // themeToggler?: (value: SetStateAction<Theme>) => void;
  themeToggler?: () => void;
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

export const Header: NextPage<HeaderProps> = ({ children, themeToggler }: HeaderProps) => {
  // TODO: Make component for the menus
  const [navMenuDrawerOpen, setNavMenuDrawerOpen] = useState(false);
  // const toggleNavMenuDrawerOpen = setNavMenuDrawerOpen((oldNavMenuDrawerOpen: boolean) => !oldNavMenuDrawerOpen);

  const [userMenuDrawerOpen, setUserMenuDrawerOpen] = useState(false);
  // const toggleUserMenuDrawerOpen = setUserMenuDrawerOpen((oldUserMenuDrawerOpen: boolean) => !oldUserMenuDrawerOpen);

  const NavMenuSections = [
    [
      {
        href: '/ide',
        icon: < EditIcon />,
        text: 'IDE',
      },
    ],
    [
      {
        href: '/users',
        icon: < PeopleAltRoundedIcon />,
        text: 'Users',
      },
      {
        href: '/projects',
        icon: < CollectionsBookmarkIcon />,
        text: 'Projects',
      },
    ],
    [
      {
        href: '/contact_us',
        icon: < ContactSupportIcon />,
        text: 'Contact Us',
      },
    ],
  ];

  const SignedUserMenuSections = [[
    {
      href: '/user',
      icon: < AccountCircleIcon />,
      text: 'Account',
    },
    {
      href: '/user',
      icon: < ManageAccountsIcon />,
      text: 'Manage Account',
    },
    {
      href: '/sign_out',
      icon: < LogoutIcon />,
      text: 'Sign Out',
    },
    {
      href: '/sign_out',
      icon: < PersonOffIcon />,
      text: 'Delete Account',
    },
  ]];

  const UnsignedUserMenuSections = [[
    {
      href: '/sign_in',
      icon: < LoginIcon />,
      text: 'Sign In',
    },
    {
      href: '/sign_up',
      icon: < PersonAddIcon />,
      text: 'Sign Up',
    },
    {
      href: '/password_recovery',
      icon: < LockResetIcon />,
      text: 'Recover Password',
    },
  ]];

  const theme = useTheme();
  const { data: session, status } = useSession();

  return (
    <AppBar
      component='header'
      position='relative'

      // on dark theme the color property dont have effect
      // enableColorOnDark
      color="primary"
    >
      {/* TODO: brake the AppBar to contain components of Toolbars. */}
      {/* <AppBarLabel label="YPO-IDE" /> */}
      <Toolbar sx={{
        gap: '0.5em',
      }}>
        <IconButton
          onClick={() => setNavMenuDrawerOpen(true)}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>

        <Breadcrumbs aria-label="breadcrumb" sx={{ flexGrow: 1 }}>
          <MUILink variant="h6" underline="hover" color="text.secondary" href="/">
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
          <MUILink variant="subtitle1" underline="hover" color="text.secondary" href="/">
            User Name
          </MUILink>
          <Typography variant="subtitle2" color="text.secondary">Project Name</Typography>
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
          onClick={themeToggler}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {
          (session) ?
            <Button
              color='secondary'
              onClick={() => { signOut() }}
            >
              Sign Out
            </Button> :
            <Button
              color='secondary'
              onClick={() => { signIn() }}
            >
              Sign In
            </Button>
        }

        <IconButton>
          <Avatar
            alt='User Image'
            // src='/public/images/...'
            // sx={{ bgcolor: 'blue' }}
            onClick={() => setUserMenuDrawerOpen(true)}
          >
            {
              (session) ?
                session.user.name :
                null
            }
          </Avatar>
        </IconButton>
      </Toolbar>

      {/* NavMenu */}
      <Menu
        open={navMenuDrawerOpen}
        anchor={'left'}
        sections={NavMenuSections}
        onClose={() => setNavMenuDrawerOpen(false)}
        onOpen={() => setNavMenuDrawerOpen(true)}
        component='nav'
      />

      {/* UserMenu */}
      <Menu
        open={userMenuDrawerOpen}
        anchor={'right'}
        sections={(session) ? SignedUserMenuSections : UnsignedUserMenuSections}
        onClose={() => setUserMenuDrawerOpen(false)}
        onOpen={() => setUserMenuDrawerOpen(true)}
        component='menu'
      />

      {/* TODO */}
      <LinearBuffer />
    </AppBar>
  );
};

export default Header;
