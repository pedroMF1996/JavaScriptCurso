const path = require('path'); //Common JS

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public','assets','js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node-modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
}