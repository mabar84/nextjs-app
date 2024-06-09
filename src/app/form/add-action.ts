"use server"

import {revalidatePath} from "next/cache";
import fs from "fs";
import {Task} from "@/app/page";

export async function addAction(data: FormData) {

    const loadData = () => {
        const rawData = fs.readFileSync('data.json', 'utf8');
        return JSON.parse(rawData);
    };
    const arr = loadData();

    const description = data.get('description')
    if (!description) {
        return
    }

    const saveToJson = (data: any) => {
        const fs = require('fs');

        const jsonData = JSON.stringify(data);

        fs.writeFileSync('data.json', jsonData, 'utf8', (err: any) => {
            if (err) throw err;
            console.log('Данные успешно записаны в файл!');
        });
    }


    // const client = await getClient()
    // const res = await client.task.create({
    //     data: {
    //         description: description.toString()
    //     }
    // })


    const newTask:Task={
        id: arr.length+1,
        description:description.toString(),
        createdAt: 'nevermind'
    }
    arr.push(newTask)
    saveToJson(arr)

    revalidatePath('/')
}