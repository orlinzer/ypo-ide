import { Box, Grid, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import "normalize.css";
import { useEffect, useState } from "react";
import darkTheme from "../styles/theme/darkTheme";
import lightTheme from "../styles/theme/lightTheme";
import AppContext from "../utils/AppContext";
import { Theme } from '@mui/material/styles';
// import { Provider } from 'next-auth/client';
// import "./styles.css"

export let toggleTheme: () => void;

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export const App: NextPage<AppProps> = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const router = useRouter();

  const [theme, setTheme] = useState(lightTheme);
  // const toggleTheme = () => setTheme((oldTheme: Theme) => {
  toggleTheme = () => setTheme((oldTheme: Theme) => {
    if (oldTheme.palette.mode === 'dark') {
      return lightTheme;
    }
    return darkTheme;
  });
  // Session
  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem('theme');
  //   localTheme && setTheme(localTheme);
  // }, []);

  // For Loading
  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
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
    // Old
    // < Component {...pageProps} />

    // This is for the user authentication
    <ThemeProvider theme={theme}>
      <SessionProvider
        session={session}
      // option={{ site: process.env.SITE }}
      >
        <AppContext.Provider value={{
          // state: {
          // languages: languageObject[languageSelected],
          // languageSelected: languageSelected,
          // },
          // setLanguageSelected: setLanguageSelected,
          // setLanguageSelected: setLanguageSelected,
        }}
        >
          {/* <SessionProvider session={pageProps.session} refetchInterval={0}> */}
          {/* {Component.auth ? ( */}
          {/* <Auth> */}
          < Component {...pageProps} />
          {/* </Auth> */}
          {/* ) : ( */}
          {/* <Component {...pageProps} /> */}
          {/* )} */}
        </AppContext.Provider>
      </SessionProvider >
    </ThemeProvider>
  )
}

function Auth({ children }: any) {
  const { data: session, status } = useSession({ required: true })
  const isUser = session?.user

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default App;