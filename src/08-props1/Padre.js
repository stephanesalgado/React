import React from 'react'
import { Hijo } from './Hijo'
import './padre.scss'

export const Padre = () => {

    const number = 100;

    const cars = ["Audi", "Honda", "Seat"];

    const user = {
        name:'Stephane',
        email:'Bollo@gmail.com'
    }

    const pulsar = ()=>{
        console.log("me han pulsado");
    }

  return (
    <div className='contpadre'>
        <h1>Padre</h1>
        <hr/>
        <p>{number}</p>
        <Hijo
         number = {number}
         cars = {cars}
         user = {user}
         pulsar = {pulsar}
         />
    </div>
  )
}