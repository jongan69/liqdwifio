/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.coingecko.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'dd.dexscreener.com',
            pathname: '**',
          },
        ],
      },
};


export default nextConfig;
