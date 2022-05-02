// 1.- Definir Cpntext (createContext)
// 2.- Proveedor del context
// 3.- Consumidor del context 

import React from 'react'
import DataContext from '../contexts/DataContext'
import { Comp1 } from './components/Comp1'

    // const userData = {
    //     name: "Stephane",
    //     email: "bollo@gmail.com",
    //     user_id: 1983
    // }

export const UseContextApp = () => {
  return (
    <div>
    <h1>UseContextApp</h1>
    <hr/>

    {/* <DataContext.Provider value={userData}>

        <Comp1/>

    </DataContext.Provider> */}

    <Comp1/>
    
    </div>
  )
}
