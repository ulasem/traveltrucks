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
        hostname: 'ftp.goit.study', // Додаємо цей хост для кемперів
        port: '',
        pathname: '/img/**', // Шлях до картинок у цьому API
      },
    ],
  },
};

export default nextConfig;
