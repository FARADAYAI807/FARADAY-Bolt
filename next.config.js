/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  experimental: {
    swcLoader: false // Disable SWC loader to use Babel instead
  },
  webpack: (config, { isServer }) => {
    // Ensure proper handling of phosphor-icons
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  transpilePackages: ['@phosphor-icons/react'] // Ensure proper transpilation of dependencies
}

module.exports = nextConfig