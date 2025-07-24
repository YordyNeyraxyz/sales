/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8090/api/:path*',
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true, // Opcional, solo si necesitas ignorar errores TS
  },
};

module.exports = nextConfig;