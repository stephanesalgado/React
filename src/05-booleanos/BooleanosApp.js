import React, { useState } from 'react';

export const BooleanosApp = () => {

    // const [text, setText] = useState("");
    const [bool, setBool] = useState(true);
    console.log(bool);


  return (
    <>
        <h1>BooleanosApp</h1>
        <hr/>
        {!bool?
            <h2>texto: "Stephane"</h2>:
            <h2>texto: "Bollo"</h2>        
        }
    
    
        <button onClick={()=>setBool(!bool)}>Cambiar estado</button>
    </>
  )
}
