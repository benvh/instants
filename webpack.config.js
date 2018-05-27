'use strict';

const path = require('path');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'instants.min.js',
        libraryTarget: 'umd',
        library: 'Instants'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ]
            }
        ]
    }
};
