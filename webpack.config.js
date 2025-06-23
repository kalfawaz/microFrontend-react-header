const { merge } = require("webpack-merge");

// Use dynamic import for ES modules within CommonJS
module.exports = async (webpackConfigEnv, argv) => {
  // Dynamically import the ES module
  const singleSpaReactModule = await import("webpack-config-single-spa-react");
  const singleSpaDefaults = singleSpaReactModule.default;

  const defaultConfig = singleSpaDefaults({
    orgName: "my-app",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    output: {
      publicPath: "/react-header/",
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
