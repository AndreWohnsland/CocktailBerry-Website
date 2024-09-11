/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost"],
    remotePatterns: [
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
