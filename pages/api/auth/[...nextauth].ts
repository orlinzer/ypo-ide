import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth';
// import Providers from 'next-auth/providers';
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider from "next-auth/providers/email";
import { JWT } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from 'next';
import Credentials from 'next-auth/providers/credentials';
import { userInfo } from 'os';

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export default NextAuth({
//   // https://next-auth.js.org/configuration/providers/oauth
//   theme: {
//     colorScheme: "light",
//   },
//   callbacks: {
//     async jwt({ token, account }) {
//       token.userRole = "admin";
//       return token;

//       // Persist the OAuth access_token to the token right after signin
//       // if (account) {
//       //   token.accessToken = account.access_token
//       // }
//       // return token
//     },
//     async session({ session, token, user }) {
//       // Send properties to the client, like an access_token from a provider.
//       session.accessToken = token.accessToken
//       return session
//     }
//   },
// });

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string,
      name: string,
      email: string,
      image: string,
    } & DefaultSession["user"],
    expires: "YYYY-MM-DDTHH:mm:ss.SSSZ",
    accessToken: string,
  }
};

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
  }
};

/**
 * The shape of the user object returned in the OAuth providers' `profile` callback,
 * or the second parameter of the `session` callback, when using a database.
 */
interface User { }

/**
 * Usually contains information about the provider being used
 * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
 */
interface Account { }

/** The OAuth profile returned from your provider */
interface Profile { }

export const options: NextAuthOptions = {
  // site: process.env.SITE || 'http://localhost:3000',

  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_PRIVATE_KEY,
    //   // {
    //   //   appleId: process.env.APPLE_ID,
    //   //   teamId: process.env.APPLE_TEAM_ID,
    //   //   privateKey: process.env.APPLE_PRIVATE_KEY,
    //   //   keyId: process.env.APPLE_KEY_ID,
    //   // },
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentials, req) {
        // console.log(credentials); // DBG
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    // CredentialProvider({
    //   authorize: (credentials) => {

    //     // TODO: Add database lookup

    //     if (credentials?.username === 'or' &&
    //       credentials?.password === '123') {
    //       return {
    //         id: 2,
    //         name: 'or',
    //         email: 'orlinzer@gmail.com',
    //       };
    //     }

    //     // Login failed
    //     return null;
    //   }
    // }),
  ],
  pages: {
    signIn: '/auth/sign_in',
    signOut: '/auth/sign_out',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new_user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.idToken = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.idToken;
      }

      return session;
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    // encryption: true,
  }
})

// export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
