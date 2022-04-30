import NextAuth, { DefaultSession } from 'next-auth';
// import Providers from 'next-auth/providers';
import CredentialProvider from "next-auth/providers/credentials";
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

export const options = {
  site: process.env.SITE || 'http://localhost:3000',

  // Configure one or more authentication providers
  providers: [
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
  database: process.env.DATABASE_URL,
};

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Text',
          type: 'text',
          placeholder: 'UserName',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: (credentials) => {

        // TODO: Add database lookup

        if (credentials?.username === 'or' &&
          credentials?.password === '123') {
          return {
            id: 2,
            name: 'or',
            email: 'orlinzer@gmail.com',
          };
        }

        // Login failed
        return null;
      }
    }),
  ],
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
