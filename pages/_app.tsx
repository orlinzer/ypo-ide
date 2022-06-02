import { Box, Grid, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import "normalize.css";
import { SetStateAction, useEffect, useState } from "react";
import darkTheme from "../styles/theme/darkTheme";
import lightTheme from "../styles/theme/lightTheme";
import AppContext from "../utils/AppContext";
import { Theme } from '@mui/material/styles';
import { AuthContextProvider } from "../stores/AuthContext";
// import { Provider } from 'next-auth/client';
// import "./styles.css"

export let toggleTheme: () => void;

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export const App: NextPage<AppProps> = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const router = useRouter();

  // const getLocalTheme = () => {
  //   return (
  //     typeof window !== 'undefined' &&
  //     localStorage.getItem('theme') === 'dark'
  //   ) ?
  //     darkTheme :
  //     lightTheme;
  // };
  // const [theme, setTheme] = useState(getLocalTheme);
  const [theme, setTheme] = useState(lightTheme);
  // const setLocalTheme = (value: SetStateAction<Theme>) => {
  //   setTheme(value);
  //   // console.log('Theme', theme); // DBG
  //   if (theme?.palette?.mode === 'dark') {
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     localStorage.setItem('theme', 'light');
  //   }

  //   // console.log(getLocalTheme); // DBG

  // };
  useEffect(() => {
    // const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    if (theme.palette?.mode === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    // }

    // const localTheme = localStorage.getItem('theme');

    // return () => {
    //   localTheme &&
    //     // setLocalTheme(
    //     (
    //       localTheme === 'dark' ?
    //         darkTheme :
    //         lightTheme
    //     );
    // };
  }, [theme]);
  // Set a global toggleTheme
  // toggleTheme = () => setLocalTheme((oldTheme: Theme) => {
  toggleTheme = () => setTheme((oldTheme: Theme) => {
    if (oldTheme.palette.mode === 'dark') {
      return lightTheme;
    }
    return darkTheme;
  });

  // For Loading
  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`); // DBG
      // NProgressBar.start()
    }
    const handleStop = () => {
      // NProgressBar.done()
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <SessionProvider
      session={session}
    // option={{ site: process.env.SITE }}
    // refetchInterval={0}
    >
      {/* <AuthContextProvider> */}
      <ThemeProvider theme={theme}>
        < Component {...pageProps} />
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </SessionProvider >
  )
}

export default App;