const path = require("path")

const backPath = path.resolve(__dirname, "../backend")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const filename = (ext) => {
    return isDev ? `[name].${ext}` : `[name].[hash].${ext}`
}
const isDev = process.env.NODE_ENV === "development"
const isProd = process.env.NODE_ENV === "production"

module.exports = {
    devServer: {
        port: 8052,
        hot: isDev
    },
    context: path.resolve(__dirname, "src"),
    mode: isDev ? "development" : "production",
    entry: {
        index: ["@babel/polyfill", "./index.jsx"]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@asserts": path.resolve(__dirname, "src/asserts"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@components": path.resolve(__dirname, "src/components"),
            "@actions": path.resolve(__dirname, "src/actions"),
            "@reducers": path.resolve(__dirname, "src/reducers"),
            "@assets": path.resolve(__dirname, "src/assets")
        }
    },
    output: {
        path: isDev ? path.resolve(__dirname, "dist") : path.resolve(backPath, "static"),
        filename: filename("js"),
        publicPath: isDev ? "" : "/static/"

    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimizer: isDev ? [] : [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                            publicPath: isDev ? "" : "/static/"
                        }
                    },
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"]
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            filename: isDev ?
                path.resolve(__dirname, './dist/index.html') :
                path.resolve(backPath, 'templates/index.html'),
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename("css")
        })
    ]
}