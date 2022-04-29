import { NextPage } from "next";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import "normalize.css";
import { useEffect } from "react";
import AppContext from "../utils/AppContext";
// import { Provider } from 'next-auth/client';
// import "./styles.css"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

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

    // < Component {...pageProps} />
    <SessionProvider
      session={pageProps.session}
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