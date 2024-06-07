import styles from "./page.module.css";
import {getClient} from "./client";
import {AddTodo} from "@/app/form/add-todo";

async function getTodos(){
    const client = await getClient()
    const abc=client.task.findMany({})
    console.log('abc=',abc)
    return client.task.findMany({})
}
export default async function Home() {

    console.log(12)
  const todos =await getTodos()

  return (
    <main className={styles.main}>
     <h1>Hello, World!</h1>
        <AddTodo/>
      {todos.map((todo)=>{
        return <div key={todo.id}> {todo.description} </div>
      })}
    </main>
  );
}
