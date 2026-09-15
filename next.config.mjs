/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The PDF route drives a real Chrome over HTTP, so keep it dynamic.
  experimental: {
    serverActions: { bodySizeLimit: "4mb" },
  },
};

export default nextConfig;
