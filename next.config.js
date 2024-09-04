/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js configuration
  reactStrictMode: true, // You can add other configurations here

  typescript: {
    // Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
