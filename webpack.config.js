module.exports ={
    entry: {
        'dist/app.js': ['whatwg-fetch', './src/app.jsx']
    },

    output: {
        path: __dirname+'/',
        publicPath: __dirname+'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval-source-map',

    module: {
        loaders:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2' ,'react']
                }
            },
        ]
    }
};