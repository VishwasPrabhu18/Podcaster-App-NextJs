/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud"
      },
      {
        protocol: "https",
        hostname: "merry-robin-209.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com"
      },

      {
        protocol: "https",
        hostname: "dashboard.clerk.com"
      }
    ]
  }
};

export default nextConfig;
