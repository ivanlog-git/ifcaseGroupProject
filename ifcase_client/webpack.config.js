var path = require('path');
var webpack = require('webpack');

module.exports = [
    {
        mode: 'development',        
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, '../src/htdocs/js/'),
            filename: 'app.js'
        },
        devtool: "source-map",
        target: "web",
        watch: true
    },
    {
        mode: 'production',        
       entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, '../src/htdocs/js/'),
            filename: 'app.min.js'
        },       
        target: "web",
        watch: true
    }
];
