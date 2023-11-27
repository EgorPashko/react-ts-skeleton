// eslint-disable-next-line import/no-extraneous-dependencies
const babelJest = require("babel-jest").default;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === "true") {
    return false;
  }

  try {
    require.resolve("react/jsx-runtime");

    return true;
  } catch (error) {
    return false;
  }
})();

module.exports = babelJest.createTransformer({
  presets: [
    [
      require.resolve("babel-preset-react-app"),
      {
        runtime: hasJsxRuntime ? "automatic" : "classic",
      },
    ],
  ],
  plugins: [["@babel/plugin-proposal-private-property-in-object", { loose: true }]],
  babelrc: false,
  configFile: false,
});
