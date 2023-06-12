const NextFederationPlugin = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          // whatever else
        },
        extraOptions: {
          exposePages: true
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig