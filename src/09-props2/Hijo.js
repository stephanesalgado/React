import React from 'react'
import { Nieto } from './Nieto'
import './hijo.scss'

export const Hijo = (props) => {
    const {number,setNumber} = props;
    console.log(props);
  return (
    <div className='conthijo'>
        <h2>Hijo</h2>
        <hr/>
        <Nieto number={number} setNumber={setNumber}/>
        
    </div>
  )
}