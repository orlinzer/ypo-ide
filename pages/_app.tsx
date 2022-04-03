import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import "normalize.css";
// import "./styles.css"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <SessionProvider session={pageProps.session} refetchInterval={0}>
    // {/* {Component.auth ? ( */ }
    // <Auth>
    < Component {...pageProps} />
    // </Auth>
    // {/* ) : ( */ }
    // {/* <Component {...pageProps} /> */ }
    // {/* )} */ }
    // </SessionProvider>
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
