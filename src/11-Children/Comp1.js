import React, { useState } from 'react'
import { Comp2 } from './Comp2'
import './comp1.scss'

export const Comp1 = () => {

    const [user, setUser] = useState("Stéphane")
  return (
    <div className='comp1'>
       <h1>Comp1</h1>
       <hr/>
       <Comp2 user={user}>
         <div>
            <h2>Ejemplo de children</h2>
            <hr/>
            <input
            placeholder='nombre'/>
            <button>Start</button>
          </div>
        </Comp2>
    </div>
  )
}
