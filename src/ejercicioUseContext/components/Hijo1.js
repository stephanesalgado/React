import React from 'react'
import { DataContextHijo } from '../../contexts/DataContextHijo'
import { Nieto1 } from './Nieto1'
import "../useContextApp.scss";


export const Hijo1 = () => {

    const userData2 ={
        age: 38,
        location: "Vigo",
        password: "12345"
    }
  return (
    <div className='hijos'>
        <DataContextHijo.Provider value={userData2}>
        <h2>Hijo1</h2>
        <hr/>
        <p>Hola yo soy el que tiene los valores edad, localización y password</p>
        <Nieto1/>
        
        </DataContextHijo.Provider>
    </div>
  )
}
