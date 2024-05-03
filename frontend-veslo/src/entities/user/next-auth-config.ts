import { compact } from "lodash-es";
import { privateConfig } from "@/shared/config/private";

import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { usersRepository } from "@/entities/user/_repositories/users";

import { randomBytes, pbkdf2Sync } from 'crypto';

export const nextAuthConfig: AuthOptions = {
  providers: compact([
      CredentialsProvider({
        credentials: {
          login: { label: 'login', type: 'text', required: true},
          password: { label: 'password', type: 'password', required: true}
        },
        async authorize(credentials, req) {
          if (!credentials?.login || !credentials?.password) {
            console.log('no credentials')
            return null;
          }

          const currentUser = await usersRepository.getUserByLogin(credentials.login);

          const tokenData = await fetch ('http://localhost:3003/auth/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              login: credentials?.login,
              password: credentials?.password
            }),
          });

          const accessToken = await tokenData.json();

          console.log(currentUser);
          console.log(tokenData);
          console.log(accessToken);
          
          if (currentUser && accessToken) {
            return {...currentUser, accessToken: accessToken };
          }
        }
      })
  ]),

  

  /* callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    }
  }, */
  /* pages: {
    signIn: '/auth-nest/sign-in'
  } */
};
