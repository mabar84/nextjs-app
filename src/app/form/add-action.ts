"use server"

import {getClient} from "@/app/client";
import {revalidatePath} from "next/cache";

export async function addAction(data:FormData){
    const description = data.get('description')

    if (!description) {
        return
    }

    const client=await getClient()
    await client.task.create({
        data: {
            description: description.toString()
        }
    })
    revalidatePath('/')
}