import React, { useState } from 'react'
import { Hijo } from './Hijo'
import './padre.scss'

export const Padre3 = () => {
    const [number, setNumber] = useState(100)
    const[color, setColor] = useState(true)
  return (
    <div className='contpadre'>
        <h1>Padre3</h1>
        <hr/>
        <h3>Contador: {number}</h3>
        <Hijo 
        number={number} 
        setNumber={setNumber}
        />
    </div>
  )
}
