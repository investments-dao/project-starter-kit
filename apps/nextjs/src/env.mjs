import { z } from 'zod';

/**
 * Especifique aquí su esquema de variables de entorno del lado del servidor. De esta manera, puede asegurarse de que la aplicación no esté
 * compilada con variables de entorno no válidas.
 */
const server = z.object({
  DATABASE_URL: z.string().url().min(1),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // Esto hace que las implementaciones de Vercel no fallen si no establece NEXTAUTH_URL
    // Dado que NextAuth.js usa automáticamente VERCEL_URL si está presente.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL no incluye `https` por lo que no se puede validar como URL
    process.env.VERCEL ? z.string() : z.string().url(),
  ),
  // Agrega `.min(1) en ID y SECRET si quieres asegurarte de que no estén vacíos
  API_URL: z.string().url().min(1),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  TWITTER_CLIENT_ID: z.string(),
  TWITTER_CLIENT_SECRET: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DISCORD_SERVER_ID: z.string().min(1),
  DISCORD_BOT_TOKEN: z.string().min(1),
  DISCORD_WEBHOOK_URL: z.string().url().min(1),
  PREFIX: z.string(),
});

/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars. To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
});

/**
 * No puede destruir `process.env` como un objeto normal en los tiempos de ejecución de borde de Next.js (por ejemplo,
 * middlewares) o en el lado del cliente, por lo que debemos destruirlo manualmente.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  API_URL: process.env.API_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
  GITHUB_ID: process.env.GITHUB_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  DISCORD_SERVER_ID: process.env.DISCORD_SERVER_ID,
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
  PREFIX: process.env.PREFIX,
  // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
};

// No toques la parte de abajo.
// --------------------------

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === 'undefined';

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer
      ? merged.safeParse(processEnv) // on server we can validate all env vars
      : client.safeParse(processEnv) // on client we can only validate the ones that are exposed
  );

  if (parsed.success === false) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== 'string') return undefined;
      // Lanzar un error descriptivo si se accede a un env var del lado del servidor en el cliente
      // De lo contrario, solo devolvería `indefinido` y sería molesto depurar
      if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
        throw new Error(
          process.env.NODE_ENV === 'production'
            ? '❌ Se intentó acceder a una variable de entorno del lado del servidor en el cliente'
            : `❌ Se intentó acceder a la variable de entorno del lado del servidor '${prop}' en el cliente`,
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };
