import React,{useState} from 'react'
import './fomulario.css'




export const Formulario = () => {

  const[color, setColor] = useState(true);


  return (
    <div className={color?"claro":"oscuro"}>
    <h1>Formulario</h1>
    <hr/>
    <imput placeholder='name'/>
    <imput placeholder='email'/>
    <button onClick={()=>setColor(!color)}>Cambiar color</button>
    </div>
  )
}
