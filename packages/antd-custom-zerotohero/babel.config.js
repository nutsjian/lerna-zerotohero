module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 2,
      },
    ],
    [
      "@babel/preset-typescript",
      {
        onlyRemoveTypeImports: false,
      },
    ],
    [
      "@babel/preset-react"
    ]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    "@babel/plugin-syntax-dynamic-import"
  ],
};
