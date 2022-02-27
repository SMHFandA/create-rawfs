import path from 'path';
import { merge } from 'webpack-merge';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import DotenvWebpack from 'dotenv-webpack';

import { ENVS_DIR } from './constants';
import baseConfig from './webpack.config.base';

const config = merge<WebpackConfiguration & WebpackDevServerConfiguration>(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    baseConfig.entry as string,
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new DotenvWebpack({
      path: path.join(ENVS_DIR, '.env.dev'),
    }),
  ],
});

export default config;
