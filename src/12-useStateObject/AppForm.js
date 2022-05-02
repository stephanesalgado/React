import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { FormUser } from './FormUser';
import "./appform.scss";
import { TableUsers } from './TableUsers';
// import { FormCars } from './FormCars';



//el estado pertenece al padre

export const AppForm = () => {

    //nos muestra el form
    const [show,setShow]= useState(true);

    //nos muestra el array de users
    const [allUsers,setAllUsers] = useState([]);


  return (
    <div className='containerapp'>
        <h1>AppForm</h1>
        <hr/>
        {show?  <Button variant="primary"
                onClick={()=>(setShow(false))}>Registro</Button>:
                <FormUser
                setShow={setShow}
                allUsers = {allUsers}
                setAllUsers= {setAllUsers}
                />
              
              }
              <hr/>
        <TableUsers allUsers={allUsers}/>


    </div>
  )
}
