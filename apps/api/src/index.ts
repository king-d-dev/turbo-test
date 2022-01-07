import http from 'http';
import express from 'express';

import { toUpperCase } from 'utils';
import { prisma } from 'db';

const app = express();

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();

  return res.json({ data: users.map((user) => ({ ...user, name: toUpperCase(user.name) })) });
});

const PORT = 5050;
const server = http.createServer(app);

async function main() {
  await prisma.$connect();
  console.log('SUCCESSFUL: Database connection');
  server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}

main();
