import React, { useEffect, useState } from 'react'
import { UseEffectLimpieza } from './UseEffectLimpieza'

export const UseEffectEjemplos = () => {

    const [cambio, setCambio] = useState(true)
    const [num, setNum] = useState(0)
    const [color, setColor] = useState(true)
    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log("me ejecuto con el useEffect 1");
    })

    useEffect(() => {
        console.log("me ejecuto con el 2 useEffect y al principio");
        setColor(!color)
    },[])

    useEffect(() => {
      console.log(("me ejecuto con el 3er useeffect y al principio"));
    
    }, [num, cambio])
    
    
  return (
    <div>
        <h1>UseEffectEjemplos</h1>
        <hr/>
        <button onClick={()=>setCambio  (!cambio)}>cambiar State</button>
        <hr/>
        <h2>Contador={num}</h2>
        <button onClick={()=>setNum (num+1)}>+1</button>
        <button onClick={()=>setShow (!show)}>Abrir ej limpieza</button>

        {show && <UseEffectLimpieza/>}
        </div>
  )
}
