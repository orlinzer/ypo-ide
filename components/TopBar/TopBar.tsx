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
  Menu,
  MenuItem,
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
import { signIn, signOut, useSession } from "next-auth/react";
// import Menu from "../Menu/Menu";
import { MenuSection } from "../Menu/Menu";

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
  // primarySideBarOpen,
  // setPrimarySideBarOpen,
  primarySideBarToggler,
  userSections,
}: TopBarProps) => {
  const theme = useTheme();
  const { data: session, status } = useSession();

  const [userMenu, setUserMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(userMenu);
  const handleUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenu(event.currentTarget);
  };
  const closeUserMenu = () => {
    setUserMenu(null);
  };

  return (
    <AppBar
      component='header'
      // position='fixed'

      // on dark theme the color property dont have effect
      // enableColorOnDark
      color="primary"
      sx={{
        zIndex: theme.zIndex.appBar,
        mixin: theme.mixins.toolbar,
        // mixin
      }}
    >
      {/* TODO: brake the AppBar to contain components of Toolbars. */}
      {/* <AppBarLabel label="YPO-IDE" /> */}
      <Toolbar
        sx={{
          gap: '0.5em',
        }}
      >
        <IconButton
          // onClick={() => setPrimarySideBarOpen(true)}
          onClick={primarySideBarToggler}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>

        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', flexWrap: 'nowrap', flexGrow: 1 }}>
          <MUILink noWrap variant="h6" underline="hover" color="text.secondary" href="/">
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
          <MUILink noWrap variant="subtitle1" underline="hover" color="text.secondary" href="/">
            User Name
          </MUILink>
          <Typography noWrap variant="subtitle2" color="text.secondary">Project Name</Typography>
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

        {/* Theme Toggle Button */}
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
                session.user.name :
                null
            }
          </Avatar>
        </IconButton>
      </Toolbar>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={userMenu}
        open={open}
        onClose={closeUserMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {userSections?.map((section) => (
          section.map((item) => (
            <MenuItem onClick={closeUserMenu}>
              <Link href={item.href ? item.href : ''}>
                {item.icon}
                {item.text}
              </Link>
            </MenuItem>
          ))
        ))}
      </Menu>

      {/* NavMenu */}
      {/* <Menu
        open={navMenuDrawerOpen}
        anchor={'left'}
        sections={NavMenuSections}
        onClose={() => setNavMenuDrawerOpen(false)}
        onOpen={() => setNavMenuDrawerOpen(true)}
        component='nav'
      /> */}

      {/* UserMenu */}
      {/* <Menu
        open={userMenuDrawerOpen}
        anchor={'right'}
        sections={(session) ? SignedUserMenuSections : UnsignedUserMenuSections}
        onClose={() => setUserMenuDrawerOpen(false)}
        onOpen={() => setUserMenuDrawerOpen(true)}
        component='menu'
      /> */}

      {/* TODO */}
      <LinearBuffer />
    </AppBar >
  );
};

export default TopBar;
