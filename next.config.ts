import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'frsamanthas-workshop';

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}` : '',
};

export default nextConfig;