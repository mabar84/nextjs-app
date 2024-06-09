import {PrismaClient} from "@prisma/client";

const fs = require('fs');

// Функция для загрузки данных из JSON файла

export async function getClient() {
    const client = new PrismaClient()
    await client.$connect()
    return client
}


export const getClient2 = async () => {
    const rawData = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(rawData);
}