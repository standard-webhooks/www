/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
  experimental: { esmExternals: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/debugger/:path*',
        destination: '/verify/:path*',
        permanent: true,
      },
      {
        source: '/curl/:path*',
        destination: '/simulate/:path*',
        permanent: true,
      },
      {
        source: '/build/:path*',
        destination: '/simulate/:path*',
        permanent: true,
      },
      {
        source: '/verify/standard',
        destination: '/verify',
        permanent: true,
      },
      {
        source: '/simulate/standard',
        destination: '/simulate',
        permanent: true,
      },
    ];
  }
});