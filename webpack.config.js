const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const caminho = (pontoFinal = "") => path.resolve(__dirname, pontoFinal)

const eProducao = process.env.NODE_PRD === 'TRUE' || process.env.NODE_PRD === 'true'

module.exports = validate({
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        caminho("src/index.js")
    ],
    output: {
        path: caminho("dist"),
        filename: (eProducao ? "bundle-min.js" : "bundle.js"),
        publicPath: "/test/"
    },
    devtool: (eProducao ? false : "source-map"),
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [caminho("node_modules")],
            include: [caminho("src")],
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            exclude: [caminho("node_modules")],
            include: [caminho("css")],
            loader: "style-loader!css-loader"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.+\d+)?$/,
            exclude: [caminho("node_modules")],
            include: [caminho("fonts")],
            loader: "url-loader?limit=25000"
        }, {
            test: /\.(woff|woff2)$/,
            exclude: [caminho("node_modules")],
            include: [caminho("fonts")],
            loader: "url-loader?prefix=fonts/&limit=25000"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.+\d+)?$/,
            exclude: [caminho("node_modules")],
            include: [caminho("fonts")],
            loader: "url-loader?limit=50000&mimetype=application/octet-stream"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.+\d+)?$/,
            exclude: [caminho("node_modules")],
            include: [caminho("fonts")],
            loader: "url-loader?limit=110000&mimetype=image/svg+xml"
        }, {
            test: /\.png$/,
            exclude: [caminho("node_modules")],
            include: [caminho("img")],
            loader: "url-loader?limit=200000"
        }, {
            test: /\.jpg$/,
            exclude: [caminho("node_modules")],
            include: [caminho("img")],
            loader: "url-loader?limit=100000"
        }, {
            test: /\.gif$/,
            exclude: [caminho("node_modules")],
            include: [caminho("img")],
            loader: "url-loader?limit=100000"
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".css"],
        alias: {
            css: caminho("css"),
            src: caminho("src")
        }
    },
    plugins: eProducao ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : [
        new webpack.HotModuleReplacementPlugin()
    ]
})
