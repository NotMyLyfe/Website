const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
    const { env, ...rest } = envVars;
    let envConfig = require(`./webpack.${env}.js`);
    if (typeof envConfig === 'function') {
        envConfig = envConfig(rest);
    }
    const config = merge(commonConfig, envConfig);
    return config;
};
