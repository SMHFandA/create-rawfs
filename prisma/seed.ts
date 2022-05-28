import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function deleteData(): Promise<any> {
  await prisma.user.deleteMany({});
}

async function createUsers(): Promise<void> {
  Array.from({ length: 5 }).map(async () => {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar(),
        password: faker.datatype.uuid(),
        createdAt: faker.date.past(3),
        updatedAt: faker.date.past(1),
      },
    });
  });
}

async function main(): Promise<void> {
  await deleteData();

  await createUsers();
}

main()
  .catch(() => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
;
