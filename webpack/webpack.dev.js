const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => ({
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 3301,
        hot: true,
        compress: true,
        open: true,
        allowedHosts: ['.ngrok.io'],
    },
    plugins: [new ReactRefreshWebpackPlugin(), ...(env.analyze ? [new BundleAnalyzerPlugin()] : [])],
});
