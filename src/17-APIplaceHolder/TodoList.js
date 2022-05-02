import axios from 'axios'
import React, { useState } from 'react'

export const TodoList = ({todos, setTodos}) => {

    const [tarea, setTarea] = useState({
        title:'',
        
    })

    const handleChange = (e) => {

        const {name,value} = e.target;
        setTarea({...tarea,[name]:value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTarea({title:''});

        axios
            .post('https://jsonplaceholder.typicode.com/todos/',{tarea})
            .then(res =>{
                console.log(res);
            })

        setTodos([...todos, tarea]);
        
    } 

  return (
      <>
        <div>TodoList</div>
        <hr/>

        <form>
            <input
                type='text'
                name='title'
                value={tarea.title}
                onChange={handleChange}
            />
            
            <button className='btn btn-primary' 
            type='submit'
            onClick={handleSubmit}>Add</button>
        </form>

        <ul className="list-group">
            {todos.map((todo,i)=>(
                <li className="list-group-item d-flex justify-content-between a" key={i}>{todo.id}. {todo.title}<input type='checkbox' readOnly checked={todo.completed} /></li>

            ))}
            
        </ul>
      </>
  )
}
