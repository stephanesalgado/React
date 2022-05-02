import React from 'react'
import DataContext from '../../contexts/DataContext'
import { Comp2 } from './Comp2'

export const Comp1 = () => {


  const userData = {
    name: "Stephane",
    email: "bollo@gmail.com",
    user_id: 1983
}
  return (
    <div>
        <DataContext.Provider value={userData}>

          <Comp2/>

        </DataContext.Provider>  

    
    </div>

  )
}
