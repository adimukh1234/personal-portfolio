/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Customize responsive breakpoints the optimizer will generate
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    // Allow both local and Cloudinary (adjust/remove if not needed)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      }
    ],
    // Un-comment if you want to disable static image imports blur placeholder
    // disableStaticImages: false,
    // Minimum cache TTL (in seconds) for optimized images
    minimumCacheTTL: 60
  },
  // Optional: React strict mode & SWC minify
  reactStrictMode: true,
  swcMinify: true
}

export default nextConfig