import React, { useContext } from 'react'
import { DataContextPadre } from '../../contexts/DataContextPadre'
import { Nieto2 } from './Nieto2'
import "../useContextApp.scss";

export const Hijo2 = () => {

    const {name}= useContext(DataContextPadre)

    
  return (
    <div className='hijos'>
        <h2>Hijo2</h2>
        <hr/>
        <p>Viene del UseContextApp Nombre: {name}</p>
        <Nieto2/>
    </div>
  )
}
