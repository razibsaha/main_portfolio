/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
};