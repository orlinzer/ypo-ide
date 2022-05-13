import { Box, Grid, ThemeProvider } from "@mui/material";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { createContext, Fragment, FunctionComponent, ReactNode, useContext, useState } from "react";
import * as rdd from 'react-device-detect'
import { Theme } from '@mui/material/styles';
// import '../../styles/theme/Theme';
import darkTheme from "../../styles/theme/darkTheme";
import lightTheme from "../../styles/theme/lightTheme";
import AppContext from "../../utils/AppContext";

import Footer, { BottomBar } from "../BottomBar/BottomBar";
import Header, { TopBar } from "../TopBar/TopBar";
import Main from "../Main/Main";
import {
  AccountCircle as AccountCircleIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  ContactSupport as ContactSupportIcon,
  Edit as EditIcon,
  LockReset as LockResetIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  ManageAccounts as ManageAccountsIcon,
  PeopleAltRounded as PeopleAltRoundedIcon,
  PersonAdd as PersonAddIcon,
  PersonOff as PersonOffIcon
} from "@mui/icons-material";
import MenuBar from "../MenuBar/MenuBar";
import ActivityBar from "../ActivityBar/ActivityBar";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import Panel from "../Panel/Panel";
import StatusBar from "../StatusBar/StatusBar";
import SecondarySideBar from "../SecondarySideBar/SecondarySideBar";
import NotificationBar from "../NotificationBar/NotificationBar";

// export interface LayoutProps extends React.ComponentPropsWithoutRef<Layout> {
export interface LayoutProps {
  children: ReactNode;
}

// export interface LayoutState {
//   top?: boolean;
//   left?: boolean;
//   bottom?: boolean;
//   right?: boolean;
//   width?: number;
//   height?: number;
// }

// Use ThemeContext of MUI
// const ThemeContext = createContext('light');

// export default function Layout<LayoutProps, LayoutState>({ children }: LayoutProps) {
// export default function Layout<LayoutProps, LayoutState>: React.FC({ children }: LayoutProps) {
// export default function Layout<LayoutProps, LayoutState>(props: LayoutProps) {
// export default function Layout(props: LayoutProps) {
// export default function Layout({ children }: LayoutProps) {
export const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
  // Menu Components
  const [primarySideBarOpen, setPrimarySideBarOpen] = useState(false);
  const togglePrimarySideBarOpen = () => setPrimarySideBarOpen((oldOpen) => !oldOpen);
  // const [secondarySideBarOpen, setSecondarySideBarOpen] = useState(false);
  // const [panelOpen, setPanelOpen] = useState(false);
  // const [statusBarOpen, setStatusBarOpen] = useState(false);
  // const [primarySide, setPrimarySide] = useState<'left' | 'right'>('left');
  // const [panelAlignment, setPanelAlignment] = useState<'left' | 'right' | 'center' | 'justify'>('center');
  // const [mode, setMode] = useState<{ fullScreen?: boolean; zenMode?: boolean; centeredLayout?: boolean }>({});



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

  const { data, status } = useSession();

  // const context = useContext(AppContext);

  // const [state, setState] = useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  //   // width: window.innerWidth,
  //   // height: window.innerHeight
  // });

  // const setPartialState = (obj: Partial<typeof state>) =>
  //   setState({ ...state, ...obj });

  // const isMobile = window.innerWidth <= 500;
  // const isTablet = window.innerWidth <= 800;

  // window.addEventListener('resize', () => setPartialState({
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // }));

  // if (isMobile) {}

  // if (isTablet) {}

  // const getInitialProps = async (context: NextPageContext) => {
  //   return {
  //     session: await getSession(context)
  //   };
  // }

  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => setTheme((oldTheme: Theme) => {
    if (oldTheme.palette.mode === 'dark') {
      return lightTheme;
    }
    return darkTheme;
  });

  return (
    // <ThemeContext.Provider theme={theme}></ThemeContext.Provider>
    // <ThemeProvider theme={lightTheme}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>YPO IDE</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        </Head>

        <Box sx={{
          minHeight: "100vh",
          display: "flex",
          // flexDirection: "column",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: ""
        }}>

          {/* <NotificationBar /> */}
          {/* <NavBar /> */}
          {/* <ToolBar /> */}
          {/* <MenuBar /> */}
          {/* <ActivityBar /> */}
          {/* <PrimarySideBar /> */}
          {/* <SecondarySideBar /> */}
          {/* TODO: rename Panel to PanelBar  */}
          {/* <Panel /> */}
          {/* <StatusBar /> */}

          <TopBar
            primarySideBarToggler={togglePrimarySideBarOpen}
            themeToggler={toggleTheme}
          />

          <Main
            primarySideBarOpen={primarySideBarOpen}
            setPrimarySideBarOpen={setPrimarySideBarOpen}

            sections={NavMenuSections}
          >
            {children}
            {/* <p>
              {!data && <>
                Not signed in <br />
                <a href="/api/auth/signin">Sign in</a>
              </>}
              {data && <>
                Signed in as {data.user.email} <br />
                <a href="/api/auth/signout">Sign out</a>
              </>}
            </p> */}
          </Main>

          {/* <BottomBar /> */}
        </Box>
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout;