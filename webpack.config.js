var webpack = require('webpack');

module.exports={
    entry:{
        ES6toES5:'./index.js'
    },
    output:{
        path:'./',
        filename:'build/[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {presets: ['es2015']}
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
};