/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
