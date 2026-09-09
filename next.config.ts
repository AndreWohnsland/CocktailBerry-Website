import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Standalone output is only for the Docker image. On Vercel it breaks
  // output file tracing in the onBuildComplete step (Next 16.3+).
  output: process.env.VERCEL ? undefined : "standalone",
  serverExternalPackages: ["sharp"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.cocktailberry.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cocktailberry.org",
        port: "",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
