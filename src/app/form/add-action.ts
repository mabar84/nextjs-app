"use server"

import {getClient} from "@/app/client";
import {revalidatePath} from "next/cache";

export async function addAction(data: FormData) {
    const description = data.get('description')

    if (!description) {
        return
    }

    const saveToJson = () => {
        const fs = require('fs');

        const rawData = fs.readFileSync('data.json', 'utf8');
        const data = JSON.parse(rawData);

        console.log('saveToJson1154')
        console.log(data);

        // const jsonData = JSON.stringify(data);
        //
        // fs.writeFileSync('data.json', jsonData, 'utf8', (err: any) => {
        //     if (err) throw err;
        //     console.log('Данные успешно записаны в файл!');
        // });
    }

    saveToJson()

    const client = await getClient()
    await client.task.create({
        data: {
            description: description.toString()
        }
    })
    revalidatePath('/')
}