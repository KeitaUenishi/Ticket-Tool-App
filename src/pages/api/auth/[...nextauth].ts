import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import jsonwebtoken from "jsonwebtoken";

const tokenSecret = JSON.parse();

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
      version: "2.0",
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT!,
    adminSecret: process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET!,
  }),
  theme: {
    colorScheme: "auto",
  },
  // Use JWT strategy so we can forward them to Hasura
  session: { strategy: "jwt" },
  // Encode and decode your JWT with the HS256 algorithm
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token!, tokenSecret.key, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, tokenSecret.key, {
        algorithms: ["HS256"],
      });
      return decodedToken as JWT;
    },
  },
  callbacks: {
    // Add the required Hasura claims
    // https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt/#the-spec
    async jwt({ token }) {
      return {
        ...token,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.sub,
        },
      };
    },
    // Add user ID to the session
    session: async ({ session, token }) => {
      const encodedToken = jsonwebtoken.sign(token, tokenSecret.key, {
        algorithm: "HS256",
      });
      console.log("encodedToken", encodedToken);
      if (session?.user) {
        session.user.id = token.sub!;
        session.user.accessToken = encodedToken;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
