// @ts-check
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', './src/pics/hero.jpg'),
                    to: 'hero.jpg',
                },
            ],
        }),
    ],
};
