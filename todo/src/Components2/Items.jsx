import { useState } from "react";
import { useTodo } from "../Context";

export default function Items({todo}){
    const {updatetodo,deletetodo,togglecomplete}=useTodo()
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const[todoMsg,setTodoMsg]=useState(todo.todo || '')

    
console.log(todo.todo)
    return(
       <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>

        <input type="checkbox"
         checked={todo.completed}
         className="cursor-pointer"
         onChange={()=>togglecomplete(todo.id)}  />

        <input type="text"  
        readOnly={!isTodoEditable} 
        value={todoMsg}
        className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                  } ${todo.completed ? "line-through" : ""}`}
         onChange={(e)=>setTodoMsg(e.target.value)}/>

        <button 
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={()=>{
            if (todo.completed) return;
            if(isTodoEditable){
                updatetodo(todo.id,{todo:todoMsg,id:Date.now,...todo})
                setIsTodoEditable(false)
            }
            else{
                setIsTodoEditable((prev)=>!prev)
            }
        }} disabled={todo.completed}>
        {isTodoEditable?'📁' : '✏️'}</button>
        <button 
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={()=>deletetodo(todo.id)}>❌</button>
        </div>
    )
    
}