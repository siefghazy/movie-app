/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['image.tmdb.org'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          port: '',
          pathname: '/t/p/**',
        },
      ],
    }
  };

export default nextConfig;
