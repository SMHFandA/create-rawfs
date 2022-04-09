import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const all = await prisma.user.findMany();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
