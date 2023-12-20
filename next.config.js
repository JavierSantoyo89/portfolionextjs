/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        pathname: "/**",
      },
      { hostname: "tecdn.b-cdn.net" },

    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
