import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/users', async (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      name: 'user name',
      email: 'user email',
    })
  ;
});

export default router;
