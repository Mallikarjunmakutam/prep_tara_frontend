import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/api/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ allow Cloudinary images
      },
    ],
  },

  eslint: {
    // ✅ This makes Vercel ignore ESLint errors during `npm run build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
