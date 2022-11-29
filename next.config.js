/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.jsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
