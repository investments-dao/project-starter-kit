import version from './package.json' assert { type: 'json' };
import nextI18nConfig from './next-i18next.config.js';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Habilita la recarga en caliente para paquetes locales sin un paso de compilación */
  transpilePackages: ["@acme/api", "@acme/auth", "@acme/db"],
  /** Ya hacemos linting y typechecking como tareas separadas en CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
  i18n: nextI18nConfig.i18n,
  images: {
    domains: ['lh3.googleusercontent.com','res.cloudinary.com', 'cdn.discordapp.com'],
  },
  publicRuntimeConfig: {
    version,
  },
};

export default config;
