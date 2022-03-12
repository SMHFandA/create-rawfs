import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {
  SRC_DIR,
  DIST_DIR,
} from './constants';

const config: Configuration = {
  entry: path.join(SRC_DIR, 'index.tsx'),
  output: {
    filename: 'bundle.[contenthash].js',
    path: DIST_DIR,
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      app: path.join(SRC_DIR, 'app'),
      features: path.join(SRC_DIR, 'features'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, 'index.html'),
      filename: 'index.html',
    }),
    new webpack.ProgressPlugin((percentage, message) => {
      // An idea to show the line only if percentage is divisible by 5.
      if (percentage * 100 % 5 === 0) {
        /* eslint-disable no-console */
        console.log(`Webpack: ${(percentage * 100).toFixed()}% ${message}`);
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
