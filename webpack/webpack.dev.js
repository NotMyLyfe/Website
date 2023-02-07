const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3301,
    hot: true,
    compress: true,
    open: true,
    allowedHosts: [".ngrok.io"]
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
