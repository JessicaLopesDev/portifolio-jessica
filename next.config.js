/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreDevErrors: false,
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig
