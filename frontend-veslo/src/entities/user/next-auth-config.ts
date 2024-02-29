import { privateConfig } from "@/shared/config/private";
import { compact } from "lodash-es";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from '@auth/prisma-adapter';
import { dbClient } from "@/shared/lib/db";
import { createUserUseCase } from "./_use-cases/create-user";

const prismaAdapter = PrismaAdapter(dbClient);

export const nextAuthConfig: AuthOptions = {
  adapter: {
    ...prismaAdapter,
    createUser: (user) => {
      return createUserUseCase.exec(user);
    },
  } as AuthOptions["adapter"],
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role,
        },
      };
    },
  },
  pages: {
    signIn: "/auth/sign-in",
    newUser: "/auth/new-user",
    verifyRequest: "/auth/verify-request",
  },
  providers: compact([
    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_ID,
        clientSecret: privateConfig.GITHUB_SECRET,
      }),
  ]),
};
