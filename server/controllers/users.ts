import { Request, Response } from 'express'

import User from '../models/users';

export const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const all = await User.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};
