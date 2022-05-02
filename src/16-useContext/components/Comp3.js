import React, { useContext } from 'react'
import { CompFinal } from './CompFinal'
import DataContext from '../../contexts/DataContext'


export const Comp3 = () => {

  const {name, email} = useContext(DataContext)
  return (
    <div>
        <h4>Comp3</h4>
        <hr/>
      <p>nombre: {name}</p>
      <p>email: {email}</p>
        <CompFinal/>    
    </div>
  )
}
