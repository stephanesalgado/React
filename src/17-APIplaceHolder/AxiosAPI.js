import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'

export const AxiosAPI = () => {

    const [todos, setTodos] = useState([]);


    useEffect(() => {
      
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
                // console.log("esto es res", res);
                // console.log("esto es res.data", res.data);
                // console.log("esto es res.data en posición 0", res.data[0]);

                setTodos(res.data)
            })
     
    }, [])
    
  return (
    <>
        <h1>API PlaceHOlder</h1>
        <hr/>
        <TodoList todos={todos} setTodos={setTodos}/>
        
    </>
  )
}
