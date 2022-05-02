import React, { useContext } from 'react'
import DataContext from '../../contexts/DataContext'
import { Comp3 } from './Comp3'

export const Comp2 = () => {

  const {name}=useContext(DataContext)
  return (
    <div>
        Comp2
        <hr/>
        <p>nombre:{name}</p>
        <Comp3/>
    </div>
  )
}
