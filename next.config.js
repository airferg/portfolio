/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/work/hydra', destination: '/work/vantage', permanent: true },
      { source: '/work/carmax', destination: '/', permanent: true },
      { source: '/work/cville', destination: '/', permanent: true },
      { source: '/writing/ai-agents-guardrails', destination: '/writing/model-routing', permanent: true },
      { source: '/writing/roadmap-data-models', destination: '/', permanent: true },
      { source: '/writing/activation-retention', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
