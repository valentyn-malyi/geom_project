const path = require("path")

const backPath = path.resolve(__dirname, "../backend")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const filename = (ext, isDev) => {
    return isDev ? `[name].${ext}` : `[name].[hash].${ext}`
}
const isDev = process.env.NODE_ENV === "development"
const isProd = process.env.NODE_ENV === "production"

module.exports = {
    devServer: {
        port: 8033,
        hot: true
    },
    context: path.resolve(__dirname, "src"),
    mode: isDev ? "development" : "production",
    entry: {
        index: "./index.jsx"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"],
    },
    output: {
        path: isDev ? path.resolve(__dirname, "dist") : path.resolve(backPath, "static"),
        filename: filename("js", isDev),
        publicPath: isDev ? "" : "/static/"

    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
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
            }
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
    ]
}