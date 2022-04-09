import { merge } from 'webpack-merge';
import { Configuration as WebpackConfiguration } from 'webpack';

import baseConfig from './webpack.config.base';

const config = merge<WebpackConfiguration>(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    baseConfig.entry as string,
  ],
});

export default config;
