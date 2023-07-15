/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
        hostname: "javiersantoyo.dev",
        hostname: "www.google.com",
        hostname: "https://picsum.photos/seed/1/40/40",
      },
    ],
  },
}

module.exports = nextConfig
