import express, { Router } from 'express';

import { getAll } from '../controllers/users';

const router: Router = express.Router();

router
  .get('/users', getAll)
;



export default router;
