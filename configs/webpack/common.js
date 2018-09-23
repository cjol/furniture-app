// shared config (dev and prod)
const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("Loading loader");
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".gql", ".graphql"],
    alias: {
      "@assets": resolve(__dirname, "../../src/assets/"),
      Components: resolve(__dirname, "../../src/components/"),
      "@style": resolve(__dirname, "../../src/style/index")
    }
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      // {
      //   test: /\.js$/,
      //   use: ["babel-loader", "source-map-loader"],
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "awesome-typescript-loader"]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     { loader: "css-loader", options: { importLoaders: 1 } }
      //   ]
      // },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        test: /\.gql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "graphql-tag/loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  performance: {
    hints: false
  }
};
