import React, { useContext } from 'react'
import DataContext from '../../contexts/DataContext'

export const CompFinal = () => {

   const {name, email, user_id} = useContext(DataContext)
  return (
    <div>
      <h2> Ya estoy en el CompFinal</h2>
      <hr/>
      <p>información del usuario</p>
      <hr/>
      <p>nombre: {name}</p>
      <p>email: {email}</p>
      <p>id: {user_id}</p>
    </div>
  )
}
