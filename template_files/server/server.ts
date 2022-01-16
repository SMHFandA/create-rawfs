import express from 'express';
import webpack, { Compiler } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../configs/webpack.config.dev';
import usersRouter from './routes/users';

const app = express();
const compiler: Compiler = webpack(config as unknown);
const hotMiddleware = webpackHotMiddleware(compiler);

app.use(express.json());

app.use((req, res, next) => {
  if (!/(\.(?!html)\w+$|__webpack.*|\/api\/*)/.test(req.url)) {
    req.url = '/';
  }
  next();
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath as string,
  })
);
app.use(hotMiddleware);

app.use('*', (req, res, next) => {
  setTimeout(() => next(), 2000);
})

app.use('/api', usersRouter);

app.listen(3000, function () {
  /* eslint-disable no-console */
  console.log('Example app listening on port 3000!\n');
});
