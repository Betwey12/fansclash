import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error //ignore
  if (!global.prisma) {
    // @ts-expect-error //ignore

    global.prisma = new PrismaClient();
  }
  // @ts-expect-error //ignore

  prisma = global.prisma;
}

export default prisma;
