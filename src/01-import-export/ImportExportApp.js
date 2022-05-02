
import  React  from 'react'

// import { days, PRUEBA, user, suma, saludar } from './export-ejemplos'



import dividir from './export-ejemplos'

export const ImportExportApp = () => {
  return (
    <>
        <h1>ImportExportApp</h1>
        
        <hr/>
        <p>{PRUEBA}</p>
        <p>{days[0]} {days[1]}</p>
        <p>nombre: {user.name} </p>
        <p>email: {user.email} </p>
        <p>{suma(3,3)} </p>
        
        <p>{dividir(10,5)}</p>
        <p>{saludar("santi")}</p>
   
    </>
  )
}




