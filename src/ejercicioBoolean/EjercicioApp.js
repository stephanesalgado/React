import React, {useState} from 'react'
import { Formulario } from './Formulario';


export const EjercicioApp = () => {

  const[show, setShow] = useState(false);


  return (
    <div>
       EjercicioApp
       
       <button onClick={()=>{setShow(!show)}}>{!show?'Abrir':'Cerrar'}</button>
       {show && <Formulario/>}
       
    </div>
  )
}
