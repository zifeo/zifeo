/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["shiki"],
  },
  images: {
    // https://nextjs.org/docs/messages/export-image-api
    unoptimized: true,
  },
};

module.exports = nextConfig;
