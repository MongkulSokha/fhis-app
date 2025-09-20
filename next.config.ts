import { webpack } from "next/dist/compiled/webpack/webpack";

module.exports = {
  webpack(config: {
    plugins: any;
    module: { rules: { test: RegExp; use: string[] }[] };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};
