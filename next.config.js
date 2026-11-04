/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/work/hydra', destination: '/work/vantage', permanent: true }]
  },
}

module.exports = nextConfig
