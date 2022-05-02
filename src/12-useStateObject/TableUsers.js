import React from 'react'
import { Table } from 'react-bootstrap'

export const TableUsers = ({allUsers}) => {
  return (
    <div>
       <h3>TableUsers</h3>
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Passwor</th>
    </tr>
  </thead>
  <tbody>
      {allUsers.map((user,index)=>
    <tr key={index}>
      <td>{index}</td>
      <td>{user.nombre}</td>
      <td>{user.apellido}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
    </tr>
    )}
   
   
  </tbody>
</Table>

    
    </div>
  )
}
