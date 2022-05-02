import React from 'react'
import { Comp3 } from './Comp3'
import './comp1.scss'

export const Comp2 = ({children}) => {

    // console.log(props);

  return (
    <div className='comp2'>
         <h1>Comp2</h1>
         <hr/>
         <div>
             {children}
         </div>
         <Comp3 children ={children}/>
    </div>
  )
}
