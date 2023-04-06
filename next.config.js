/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL || "http://localhost:4000",
  },
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxs8cpeae/**",
      },
    ],
  },
};

module.exports = {
  ...withVideos(),

  ...nextConfig,
};
// module.exports = [nextConfig, withVideos];

// const withVideos = require("next-videos");

// module.exports = video = withVideos();
