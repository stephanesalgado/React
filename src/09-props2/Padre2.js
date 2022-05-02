import React, { useState } from 'react'
import { Hijo } from './Hijo'
import './padre.scss'

export const Padre2 = () => {
    const [number, setNumber] = useState(100)
  return (
    <div className='contpadre'>
        <h1>Padre</h1>
        <hr/>
        <h3>Contador: {number}</h3>
        <Hijo 
        number={number} 
        setNumber={setNumber}
        />
    </div>
  )
}
