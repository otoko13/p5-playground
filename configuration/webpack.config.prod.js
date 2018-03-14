const WebpackConfig = require('webpack-config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const Config = WebpackConfig.Config;

const extractLess = new ExtractTextPlugin({
    filename: '[name].[hash].css',
    allChunks: true,
});

module.exports = new Config().extend({
    'configuration/webpack.config.common.js': (config) => {
        delete config.debug;
        delete config.devtool;
        delete config.devServer;
        delete config.output.pathinfo;

        // Override filename
        config.output.filename = '[name]-[chunkhash].js';

        return config;
    },
}).merge({

    devtool: 'cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    // eslint-disable-next-line
                                    require('autoprefixer')(),
                                    // eslint-disable-next-line
                                    require('cssnano')(),
                                ],
                            },
                        },
                        {
                            loader: 'less-loader',
                        }],
                    // use style-loader in development
                    fallback: 'style-loader',
                }),
            },
        ],
    },

    plugins: [
        /**
         * Manage order of occurence of bundles
         */
        new webpack.optimize.OccurrenceOrderPlugin(true),
        /**
         * Extract less files to a single file
         */
        extractLess,
    ],
});
