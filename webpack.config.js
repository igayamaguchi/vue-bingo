const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/app.js'
    },
    output: {
        path: __dirname + '/bin/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devtool: 'inline-source-map',
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([
            {from: './src/index.html'}
        ])
    ]

};
