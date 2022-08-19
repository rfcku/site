// const ModuleFederationPlugin = require('webpack-plugin-module-federation');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack: (config) => {
  //   return {
  //     output: {
  //       publicPath: 'http://localhost:3001/',
  //     },
  //       plugins: [
  //           new ModuleFederationPlugin({
  //               name: '_federation_website1',
  //               library: 'website1',
  //               filename: 'remoteEntry.js',
  //               libraryTarget: 'global',
  //               remotes: {
  //                   'website2': '_federation_website2'
  //               },
  //               expose: {
  //                   App: './src/App'
  //               },
  //           }),
  //       ]
  //   }
  // }
}

module.exports = nextConfig
