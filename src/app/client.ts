import {PrismaClient} from "@prisma/client";

export async function getClient() {
    const client = new PrismaClient()
    await client.$connect()
    return client
}