import React, { useState } from 'react'
import { ListCompraApp } from './ListCompra'

export const EjercicioApp = () => {
    const [show, setShow] = useState(false)


  return (
    <div>
        <h1>Bienvenido a tu compra</h1>
        <hr/>
        <button onClick={()=>{setShow(!show)}}>{!show?'Mostrar':'Ocultar'}</button>
        {show?<ListCompraApp/>:null}
        
    </div>
  )
}
