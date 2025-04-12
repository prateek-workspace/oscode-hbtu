import { useState } from "react";
import { useTodo } from "../Context";
export default function form(){
    const [todo,setTodo]=useState("")
    const {addtodo}=useTodo()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        addtodo(todo)
        setTodo("")
    }


    return(
        <form onSubmit={add}>
            <input type="text" placeholder="Write Todo..." 
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange={(e)=>{setTodo(e.target.value)}}
            /> 

            <input type="submit" value="Add" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"/>
        </form>
    )
}