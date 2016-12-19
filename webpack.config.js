const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'jquery': ['jquery'],
        'app': './src/bingo.js'
    },
    output: {
        path: __dirname + '/bin/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'jquery',
            filename: 'lib/jquery.js',
            minChunks: Infinity
        }),
        new CopyWebpackPlugin([
            { from: './src/index.html' }
        ])
    ]

};
