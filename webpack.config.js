module.exports = {
    entry: "./src/main/resources/static/js/app.js",
    output: {
        path: __dirname + "/src/main/resources/static/build/",
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};