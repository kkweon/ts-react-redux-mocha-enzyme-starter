import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: process.env.PORT || 4000,
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/static/html/index.html",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
