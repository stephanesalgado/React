import React, { useContext } from 'react'
import { DataContextHijo } from '../../contexts/DataContextHijo'
import { DataContextPadre } from '../../contexts/DataContextPadre'
import "../useContextApp.scss";

export const Bisnieto2 = () => {

    const {name, surname, email}= useContext(DataContextPadre)

    const {age, location, password} = useContext(DataContextHijo)


  return (
    <div className='bisnietos'>
        <h4>Bisnieto2</h4>
        <hr/>
        <p>Nombre: {name}</p>
        <p>Apellido: {surname}</p>
        <p>Email: {email}</p>
        <p>Edad: No llega porque esta en la rama Hijo1 {age}</p>
        <p>Localizacion: No llega porque esta en la rama Hijo1  {location}</p>
        <p>Password: No llega porque esta en la rama Hijo1  {password}</p>
    </div>
  )
}
