import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import cors from "cors";

const prisma = new PrismaClient();

async function main() {
  const username = 'admin';
  const password = 'admin123';
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { username },
    update: { passwordHash },
    create: { username, passwordHash },
  });

  console.log('Admin user created or updated:', user);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect()); 