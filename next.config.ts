import { webpack } from "next/dist/compiled/webpack/webpack";
/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

// const nextConfig = {
//   i18n: {
//     locales: ["en", "km"],
//     defaultLocale: "en",
//   },
// };

// module.exports = nextConfig;

// module.exports = {
//   turbopack: {
//     webpack(config: {
//       plugins: any;
//       module: { rules: { test: RegExp; use: string[] }[] };
//     }) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ["@svgr/webpack"],
//       });
//       config.plugins.push(
//         new webpack.ProvidePlugin({
//           $: "jquery",
//           jQuery: "jquery",
//           "window.jQuery": "jquery",
//         })
//       );
//       return config;
//     },
//   },
// };
