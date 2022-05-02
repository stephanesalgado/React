import React from 'react'
import { DataContextPadre } from '../contexts/DataContextPadre'
import { Hijo1 } from './components/Hijo1'
import { Hijo2 } from './components/Hijo2'
import "./useContextApp.scss";

export const UseContextApp = () => {

    const userData = {
        name: "Stephane",
        surname: "Salgado",
        email: "bollo@gmail.com",
    }
  return (
    <div className='padre'>
        <DataContextPadre.Provider value={userData}>
            <h1>UseContextApp</h1>
            <hr/>
            <p>Hola yo soy el que tiene los valores nombre, apellido y email</p>
            <Hijo1/>
            <p>CAMBIO DE HIJO</p>
            <Hijo2/>
        </DataContextPadre.Provider>
    </div>
  )
}
