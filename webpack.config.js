const path = require('path');

module.exports = {
    entry: './src/js/transition.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: 'production',
};