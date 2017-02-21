'use strict';

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
