import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

import { DIST_DIR } from '../configs/constants';
import usersRouter from './routes/users';
import cookiesRouter  from './routes/cookies';

const app = express();

app.use(express.json());
app.use(cookieParser('secret key'));
app.use(express.static(DIST_DIR));

app.use((req, res, next) => {
  if (!/(\.(?!html)\w+$|__webpack.*|\/api\/*|\/pages\/*)/.test(req.url)) {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
    return ;
  }
  next();
});

// app.use('*', (req, res, next) => {
//   setTimeout(() => next(), 2000);
// })

app.use('/api', usersRouter);
app.use('/pages', cookiesRouter);

app.listen(3000, function () {
  /* eslint-disable no-console */
  console.log('App listening on port 3000!\n');
});
