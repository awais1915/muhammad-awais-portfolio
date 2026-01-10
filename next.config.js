const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚡ OUTPUT: Remove 'export' to support API routes
  // output: 'export', // ❌ Remove this line

  // SASS options
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Images config
  images: {
    unoptimized: true, // ⚡ Required for Netlify static hosting to allow external images

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

  // Optional: Enable React Strict Mode (good practice)
  reactStrictMode: true,
};

module.exports = nextConfig;
