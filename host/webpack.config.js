const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto", // keeps dynamic loading working
    clean: true,
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "homepage",
      remotes: {
        products: "products@/products/remoteEntry.js",
        cart: "cart@/cart/remoteEntry.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
