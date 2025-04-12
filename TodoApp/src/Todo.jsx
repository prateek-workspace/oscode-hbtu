import { useEffect, useState } from 'react'
import {TodoProvider} from './Context'
import Form from './Components2/Form'
 import Items from './Components2/Items'

export default function Todo(){
    const [todos,setTodos]=useState([])
    const addtodo=(todo)=>{
        setTodos((prev)=>[{id:Date.now(),todo:todo,completed:false},...prev])

    } 
    console.log(todos)
    const updatetodo=(id,todo)=>{
        setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo))) 
    } 
    const togglecomplete=(id)=>{
        setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
        
    }
    const deletetodo=(id)=>{
        setTodos((prev)=>prev.filter((todo)=>todo.id!==id)) 
    }
    useEffect(()=>{
      const todos=  JSON.parse(localStorage.getItem("todos"))
      if(todos&&todos.length>0){
        setTodos(todos)
      }
    },[])
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    return(
        <TodoProvider value={{todos,addtodo,togglecomplete,updatetodo,deletetodo}}>
   <div className='bg-[#172842] min-h-screen py-8'>
  <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos..</h1>
        <div className='mb-4'>
        <Form />
        </div>
       <div className='flex flex-wrap gap-y-3'>
       {todos.map((prev)=> 
                (<div key={prev.id} className='w-full'>
                <Items todo={prev}/>
            </div>)
            )
            }
       </div>
  </div>

   </div>
        </TodoProvider>
    )
}