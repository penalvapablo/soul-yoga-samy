/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    adjustFontFallbacks: false,
  },
}

module.exports = nextConfig
