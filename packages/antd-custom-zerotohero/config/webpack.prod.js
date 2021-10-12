const WebpackMerge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const baseConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

// bundle analyzer
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin


const reactExternal = {
  commonjs: "react",
  commonjs2: "react",
  amd: "react",
  root: "React",
};
const reactDomExternal = {
  commonjs: "react-dom",
  commonjs2: "react-dom",
  amd: "react-dom",
  root: "react-dom",
};
const antdExternal = {
  commonjs: "antd",
  commonjs2: "antd",
  amd: "antd",
  root: "antd",
};

const prodConfig = {
  mode: "production",
  devtool: "eval",
  externals: {
    react: reactExternal,
    "react-dom": reactDomExternal,
    antd: antdExternal
  },
  optimization: {},
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/assets/less", to: "less" }],
      patterns: [{ from: "src/theme", to: "theme" }]
    }),
    new WebpackBar(),
    // 去除其他语言包
    new MomentLocalesPlugin({
      localesToKeep: ["es-us", "zh-cn"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new ParallelUglifyPlugin({
      // 传递给 UglifyJS 的参数
      uglifyJS: {
        output: {
          // 最紧凑的输出
          beautify: false,
          // 删除所有的注释
          comments: false,
        },
        warnings: false,
        compress: {
          // 删除所有的 `console` 语句，可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true,
        },
      },
    }),
    new BundleAnalyzerPlugin()
  ],
};

module.exports = WebpackMerge.merge(baseConfig, prodConfig);
