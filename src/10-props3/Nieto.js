import React from 'react'
import './nieto.scss'

export const Nieto = (props) => {

 console.log("Las props de nieto:" , props);
 const {number, setNumber}=props;
 const {color, setColor}= props;
 
  return (
    <div className='contnieto'>
        <h3>Nieto</h3>
        <hr/>
        <button onClick={()=>setNumber(number-1)}>-1</button>
        <button onClick={()=>setNumber(0)}>Reset</button>
        <button onClick={()=>setNumber(number+1)}>+1</button>
        <button onClick={()=>setColor(!color)}>Cambiar color</button>
       
    </div>
  )
}
