/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({ esModule: true });
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
};
