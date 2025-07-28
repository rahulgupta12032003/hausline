import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: '../build',
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
