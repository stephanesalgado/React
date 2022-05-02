import React, { useContext } from 'react'
import { DataContextHijo } from '../../contexts/DataContextHijo'
import { Bisnieto1 } from './Bisnieto1'
import "../useContextApp.scss";


export const Nieto1 = () => {
    const {age, location, password} = useContext(DataContextHijo)
  return (
    <div className='nietos'>
        <h3>Nieto1</h3>
        <hr/>
        <p>Edad: {age}</p>
        <p>Localizacion: {location}</p>
        <p>Password: {password}</p>
        <Bisnieto1/>
    </div>
  )
}
