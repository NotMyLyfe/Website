module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "..", "./src"),
    port: 3301,
    hot: "only",
    compress: true,
    open: true,
  },
};
