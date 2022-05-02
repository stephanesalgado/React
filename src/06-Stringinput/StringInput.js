import React, { useState } from 'react'

export const StringInput = () => {

    const [name, setName] = useState("Stephane")
    const [lastName, setLastname] = useState("Salgado")

    const handleChange = (e)=>{

        console.log(e.target.value);
        // console.log("hola");
        setName(e.target.value)
        console.log("esto es el estado " + name);
    }

    const handleChange2 = (e)=>

    setLastname(e.target.value)


  return (
    <div>
        <h1>StringInput</h1>
        <hr/>
        <br/>
        <h2>Nombre: {name}</h2>
        <h2>Apellido: {lastName}</h2>

        
            <input 
            type = 'text'
            placeholder='name'
            value={name}
            onChange={handleChange}            
            
            />
          
         <input 
            type = 'text'
            placeholder='lastname'
            value={lastName}
            onChange={handleChange2}            
            
            />
           
    

        </div>
  )
}
