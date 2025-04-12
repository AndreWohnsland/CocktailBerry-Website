import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
  // add sharp to externals
  webpack: (config) => ({
    ...config,
    externals: [
      ...config.externals,
      {
        sharp: "commonjs sharp",
      },
    ],
  }),
};

module.exports = nextConfig;
