const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔴 REQUIRED for Netlify static hosting
  output: 'export',

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    // 🔴 REQUIRED for static export
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
