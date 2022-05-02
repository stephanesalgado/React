import React, { useContext } from 'react'
import { DataContextHijo } from '../../contexts/DataContextHijo'
import { Bisnieto2 } from './Bisnieto2'
import "../useContextApp.scss";

export const Nieto2 = () => {
    const {age} = useContext(DataContextHijo)
  return (
    <div className='nietos'>
        <h3>Nieto2</h3>
        <hr/>
        <p>Viene del Hijo1: No llega porque esta en la rama Hijo1  {age}</p>
        <Bisnieto2/>
    </div>
  )
}
