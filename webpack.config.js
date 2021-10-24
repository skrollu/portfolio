const path = require('path');

module.exports = {
    entry: './src/js/transition.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode: 'production'
};