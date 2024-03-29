/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "i.redd.it",
      "lh3.googleusercontent.com",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
