import { useContext,createContext } from "react";
export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo:"msg",
            completed:false,
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    togglecomplete:(id)=>{},
    deletetodo:(id)=>{} 
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider