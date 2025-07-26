import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
 images:{
  unoptimized:true,
   remotePatterns: [
    {
        protocol: "https",
        hostname: "**",
      },
    ],
 },   eslint: {
    ignoreDuringBuilds: true, 
  },
};

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig);
