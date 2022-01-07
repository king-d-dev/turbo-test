import { PrismaClient } from '@prisma/client';
export * from './types';

export const prisma = new PrismaClient();
