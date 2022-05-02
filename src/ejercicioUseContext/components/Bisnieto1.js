import React, { useContext } from 'react'
import { DataContextPadre } from '../../contexts/DataContextPadre'
import "../useContextApp.scss"

export const Bisnieto1 = () => {

    const {name, surname, email}= useContext(DataContextPadre)
  return (
    <div className='bisnietos'>
        <h4>Bisnieto1</h4>
        <hr/>
        <p>Nombre: {name}</p>
        <p>Apellido: {surname}</p>
        <p>Email: {email}</p>
    </div>
  )
}
