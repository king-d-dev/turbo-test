import { Prisma } from '@prisma/client';

const userDetails = Prisma.validator<Prisma.UserArgs>()({});
export type User = Prisma.UserGetPayload<typeof userDetails>;
