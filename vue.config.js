// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true,
    host: "localhost"
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/assets/sass/style.scss"]
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all"
      }
    },
    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000
    }
  },
  chainWebpack: config => {
    config.plugin("friendly-errors").tap(args => {
      // the actual transformer defined by vue-cli-3
      const vueCli3Transformer = args[0].additionalTransformers[0];
      args[0].additionalTransformers = [
        // use the actual transformer
        vueCli3Transformer,
        // add an other transformer that 'empty' the desired error
        error => {
          const regexp = /\[mini-css-extract-plugin\]\nConflicting order between:/;
          if (regexp.test(error.message)) return {};
          return error;
        }
      ];
      return args;
    });
  }
};
