import React, {useState} from 'react'
import './colorApp.css'

export const ColorApp = () => {

    const[color, setColor] = useState(true);
    // let prueba = "claro";

    // if(color===true){
    //     prueba="claro"
    // }else{
    //     prueba="oscuro"
    // }




  return (
    <div className={color?"claro":"oscuro"}>
        <h1>ColorApp</h1>
        <hr/>
        <button onClick={()=>setColor(!color)}>Cambiar theme</button>
    </div>

  )
}
