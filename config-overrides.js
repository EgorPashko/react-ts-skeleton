const { override, addBabelPreset } = require("customize-cra");

module.exports = override(
  addBabelPreset("@emotion/babel-preset-css-prop"),
  addBabelPreset([
    "@babel/preset-react",
    {
      runtime: "automatic",
      importSource: "@emotion/react",
    },
  ])
);
