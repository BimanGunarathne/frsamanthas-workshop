import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "https://github.com/BimanGunarathne/frsamanthas-workshop": "",
  assetPrefix: isProd ? "/public/" : "",
  images:{
    unoptimized: true,
  },
};

export default nextConfig;
