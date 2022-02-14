const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "coders",
    projectName: "app2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8200,
    },
    externals: ["zustand", "zustand/middleware"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
