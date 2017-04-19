const path = require('path')
const webpack = require('webpack')

const caminho = (pontoFinal = "") => path.resolve(__dirname, pontoFinal)

const eProducao = process.env.NODE_PRD === 'TRUE' || process.env.NODE_PRD === 'true'

module.exports = {
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
}
