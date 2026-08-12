import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.18.53", "*.local"],
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
