import styles from "./page.module.css";
import {getClient} from "./client";
import {AddTodo} from "@/app/form/add-todo";
import fs from "fs";

async function getTodos() {
    const client = await getClient()
    const abc = client.task.findMany({})
    console.log('abc=', abc)
    return client.task.findMany({})
}

const loadData =  () => {
    const rawData = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(rawData);
};


export default async function Home() {

    const todos = await getTodos()
    const data =  loadData();

    console.log(data)
    return (
        <main className={styles.main}>
            <h1 className={'qw'}>Hello, World!  {data.name} </h1>
            <AddTodo/>
            {todos.map((todo) => {
                return <div key={todo.id}> {todo.description} </div>
            })}
        </main>
    );
}
