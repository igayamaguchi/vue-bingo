const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
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
        // new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([
            { from: './src/index.html' }
        ])
    ]

};
