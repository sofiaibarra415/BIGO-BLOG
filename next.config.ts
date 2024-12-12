import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.somosbigo.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};

export default nextConfig;
