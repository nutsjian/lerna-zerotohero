const path = require("path");
// const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.tsx"),
  },
  output: {
    chunkFilename: "[id].js",
    path: path.join(__dirname, "../dist"),
    libraryTarget: "umd",
    library: "antdx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "../src"),
      "@assets": path.join(__dirname, "../src/assets"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
          // {
          //   loader: "ts-loader"
          // }
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }, { loader: "postcss-loader" }],
      },
      {
        test: /\.isvg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              ref: true,
              memo: true,
              svgoConfig: {
                plugins: [{ removeAttrs: { attrs: "fill" } }, { addAttributesToSVGElement: { attributes: [{ fill: "currentColor" }] } }],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]-[local]-[hash:5]",
              },
            },
          },
          { loader: "postcss-loader" },
          { loader: "less-loader" },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [path.join(__dirname, "../src/assets/less/variables.less")],
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: path.join("img/[name].[hash:7].[ext]"),
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: path.join("font/[name].[hash:7].[ext]"),
            },
          },
        ],
      },
    ],
  },
};
