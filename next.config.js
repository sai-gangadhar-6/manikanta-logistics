/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Static export ready (can be enabled for Vercel static deploy)
  // output: 'export',
}

module.exports = nextConfig
