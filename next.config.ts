import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/frsamanthas-workshop" : "",
  assetPrefix: isProd ? "/frsamanthas-workshop/" : "",
};

export default nextConfig;
