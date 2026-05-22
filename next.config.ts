import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
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
