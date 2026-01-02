/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vihav.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
