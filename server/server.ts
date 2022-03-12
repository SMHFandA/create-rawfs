import path from 'path';
import express from 'express';

import { DIST_DIR } from '../configs/constants';
import usersRouter from './routes/users';

const app = express();

app.use(express.json());
app.use(express.static(DIST_DIR));

app.use((req, res, next) => {
  if (!/(\.(?!html)\w+$|__webpack.*|\/api\/*|\/pages\/*)/.test(req.url)) {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
    return ;
  }
  next();
});

// request delay.
// app.use('*', (req, res, next) => {
//   setTimeout(() => next(), 2000);
// });

app.use('/api', usersRouter);

app.listen(3000, function () {
  /* eslint-disable no-console */
  console.log('App listening on port 3000!\n');
});
