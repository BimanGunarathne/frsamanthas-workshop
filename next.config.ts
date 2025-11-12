import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "/frsamanthas-workshop": "",
  assetPrefix: isProd ? "/public/assets/logo/" : "",
  images:{
    unoptimized: true,
  },
};

export default nextConfig;
