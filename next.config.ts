import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //["cdn1.goibibo.com", "hblimg.mmtcdn.com", "assets.oyoroomscdn.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.goibibo.com",
      },
      {
        protocol: "https",
        hostname: "hblimg.mmtcdn.com",
      },
      {
        protocol: "https",
        hostname: "assets.oyoroomscdn.com",
      },
    ],
  },
};

export default nextConfig;
