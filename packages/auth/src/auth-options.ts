import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { type DefaultSession, type NextAuthOptions } from 'next-auth';
import DiscordProvider, { type DiscordProfile } from 'next-auth/providers/discord';
import GitHubProvider, { type GithubProfile } from 'next-auth/providers/github';
import GoogleProvider, { type GoogleProfile } from 'next-auth/providers/google';
import TwitterProvider, { type TwitterProfile } from 'next-auth/providers/twitter';
import { prisma } from '@acme/db';
import {
  createAccountHandler,
  createUserHandler,
  getAccountByUserAndProviderHandler,
  getUserByEmailHandler,
  updateAccountHandler,
} from './utils/api';

/**
 * Module augmentation for `next-auth` types
 * Allows us to add custom properties to the `session` object
 * and keep type safety
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
  }
}

/**
 * Options for NextAuth.js used to configure
 * adapters, providers, callbacks, etc.
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     **/
  ],
  callbacks: {
    /**
     * The callback -> signIn() is a function to next-auth
     * that permits you to customize the sign in process.
     */
    async signIn({ account, profile, user: newUser }): Promise<boolean | string> {
      /**
       * The Discord provider flow
       */
      if (account?.provider === 'discord') {
        const { username, image_url, email } = profile as DiscordProfile;
        const { provider, providerAccountId } = account;
        const { name } = newUser;

        // Find the user by email
        const user = await getUserByEmailHandler(email);

        // If the user already exists, update their account, otherwise create a new user
        if (user) {
          const userAccount = await getAccountByUserAndProviderHandler(
            user.id,
            providerAccountId,
            provider,
          );

          /**
           * Si el usuario ya tiene una cuenta con el mismo proveedor y proveedorAccountId,
           * actualice la cuenta. De lo contrario, cree una nueva cuenta para el usuario.
           */
          if (userAccount) await updateAccountHandler(userAccount.id, username, account);
          else await createAccountHandler(user.id, username, account);
        } else await createUserHandler(name, username, email, image_url, account);
      }

      /**
       * NOTA: Recuerde que al devolver verdadero, le está diciendo a next-auth que continúe con el proceso de autenticación.
       * el proceso de autenticación, es decir, creará y actualizará nuevamente todas las tablas involucradas en el proceso de autenticación (Usuario, Cuenta, Sesión, etc.).
       * tablas que intervienen en el proceso de autenticación (Usuario, Cuenta, Sesión, etc.).
       * Aquí solo debemos actualizar los campos que next-auth no actualiza por defecto (como el nombre de usuario).
       */
      return true;
    },

    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.image = user.image;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return session;
    },
  },
};
