const glob = require('glob');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.resolve(__dirname, 'js'),
  styles: path.resolve(__dirname, 'css'),
  build: path.resolve(__dirname, '.\\', 'dist'),
  mainFile: '/wear.js',
  mainStyle: '/my.css',
};

const commonConfig = merge(
  [{
    entry: {
      app: PATHS.app + PATHS.mainFile,
      styles: path.normalize(PATHS.styles + PATHS.mainStyle),
    },

    output: {
      path: PATHS.build,
      filename: '[name].js',
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('init'), // TODO: Add support for vendor-specific js, e.g. jquery, modernizr, placeholder
    ],
  },
    // TODO: Uncomment line below after fixing my.css
    // parts.lintCSS({ include: path.normalize(PATHS.styles + PATHS.mainStyle) }),
    parts.lintJavaScript(),
    parts.transpileJavaScript(),
    parts.loadFonts({
      options: {
        name: '[name].[ext]',
      },
    }),
  ]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript({ useSourceMap: true }),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true,
    },
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.extractCSS({ include: PATHS.styles, use: ['css-loader', parts.autoprefix()] }),
  parts.purifyCSS({
    paths: glob.sync(path.normalize(PATHS.styles + PATHS.mainStyle)),
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
]);

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadImages(),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
