import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The demo has no server-only data or dynamic routes, so Vercel can serve
  // the generated static HTML directly from dist/client.
  output: 'export',
};

export default nextConfig;
