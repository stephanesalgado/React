import React, { useState } from 'react'
import { Nieto } from './Nieto'
import './hijo.scss'

export const Hijo = (props) => {
    const {number,setNumber} = props;
    console.log(props);
    const[color, setColor] = useState(true);
  return (
    <div className={color?"claro":"oscuro"}>
        <h2>Hijo</h2>
        <hr/>
        <Nieto number={number} setNumber={setNumber}
        color={color}
        setColor={setColor}
        />
        
    </div>
  )
}