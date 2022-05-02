import React, { useState }  from 'react'



export const AppContador = () => {

    const [number, setNumber] = useState(0);
    const [saludo, setSaludo] = useState("hola mundo")
    
    console.log(number);

    


return (
    <>
    <h1>AppContador</h1>
    <hr/>
    <h2>Contador: {number}</h2>
    
    <h2>saludo:{saludo}</h2>
    

    <button onClick={()=>setNumber(number-1)}>-1</button>
    <button onClick={()=>setNumber(0)}>reset</button>
    <button onClick={()=>setNumber(number+1)}>+1</button>

    <button onClick={()=>setSaludo("adios mundo cruel react")}>cambiar saludo</button>
    </>
  )
}
