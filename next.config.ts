import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
