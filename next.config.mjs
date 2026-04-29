/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/projects-art-1',
        destination: '/projects-5',
      },
      {
        source: '/projects-art-2',
        destination: '/projects-6',
      },
      {
        source: '/projects-art-3',
        destination: '/projects-7',
      },
      {
        source: '/fish-story',
        destination: '/fish-story/index.html',
      },
      {
        source: '/fish-story/',
        destination: '/fish-story/index.html',
      },
    ];
  },
};

export default nextConfig;
