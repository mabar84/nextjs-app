import styles from "./page.module.css";
import {getClient2} from "./client";
import {AddTodo} from "@/app/form/add-todo";
import fs from "fs";

export type  Task= {
    id:number
    createdAt: string
    description: string
}

async function getTodos() {
    const client = await getClient2()
    // const abc = client.task.findMany({})
    console.log('client',typeof client)
    return client
    // return client.task.findMany({})
}

const loadData = () => {
    const rawData = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(rawData);
};


export default async function Home() {

    const todos = await getTodos()
    const data =  loadData();

    console.log( 'page', data)
    return (
        <main className={styles.main}>
            <h1 className={'qw'}>Hello, World!   </h1>
            <AddTodo/>

            {todos.map((todo:any) => {
                return <div key={todo.id}> {todo.description} </div>
            })}
        </main>
    );
}
