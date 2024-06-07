'use client'
import {addAction} from "@/app/form/add-action";

export function AddTodo() {
    return (
        <form action={addAction}>
            <input name={'description'} type="text"/>
            <input type="submit"/>
        </form>
    );
};

