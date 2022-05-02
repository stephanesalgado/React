import React from 'react'
import './comp1.scss'
export const Comp3 = ({children}) => {
  return (
    <div className='comp3'>
        <h1>Comp3</h1>
        <hr/>
        {children}
    </div>
  )
}
