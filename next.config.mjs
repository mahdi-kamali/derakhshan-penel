/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [""],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
