/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  // If deploying to username.github.io/repo-name, specify the basePath:
  // basePath: '/repo-name',
};

export default nextConfig;