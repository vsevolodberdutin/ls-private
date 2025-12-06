const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // React strict mode for better development experience
  reactStrictMode: true,

  // Production source maps (disable for smaller builds)
  productionBrowserSourceMaps: false,

  // Optimize CSS
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/app/components', '@/app/uiElements'],
  },

  // Compress output
  compress: true,

  // Power users only - advanced optimizations
  poweredByHeader: false,
  generateEtags: true,

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

  // Webpack optimizations (for static export builds)
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for react/react-dom
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Commons chunk for shared code
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 20,
            },
            // Separate chunk for large libraries
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name: (module) => {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1]
                return `vendor.${packageName?.replace('@', '')}`
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)