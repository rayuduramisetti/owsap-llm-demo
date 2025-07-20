import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SIMULATE_RESPONSES: process.env.SIMULATE_RESPONSES,
  },
};

export default nextConfig;
