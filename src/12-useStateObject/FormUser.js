import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';


export const FormUser = ({setShow, allUsers, setAllUsers}) => {

    const [user,setUser] = useState({
        //objeto

        nombre:"",
        apellido:"",
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        console.log(e.target);
        const{value,name} = e.target;
        setUser({...user,[name]:value})
        console.log(name + ":" + value );
        console.log(user);
    };
    const handleSumit = (e)=>{
        e.preventDefault();
        setAllUsers([...allUsers, user])
        console.log(allUsers);
        setShow(true);
        
    };
  return (
    <div>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name" 
            autocomplet="off"
            name="nombre"//propiedad del input
            value={user.name}
            onChange={handleChange}
            />
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter apellido" 
            autocomplet="off"
            name="apellido"//propiedad del input
            value={user.apellido}
            onChange={handleChange}
            />

            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter email" 
            autocomplet="off"
            name="email"//propiedad del input
            value={user.email}
            onChange={handleChange}
            />

            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="passwor" 
            placeholder="Enter password" 
            autocomplet="off"
            name="password"//propiedad del input
            value={user.password}
            onChange={handleChange}
            />
            

        </Form.Group>

        
        <Button variant="primary"
                type="submit"
                onClick={handleSumit} >
            Submit
        </Button>
        </Form>

        <br/>
        {/* <Button variant="success">Cerrar</Button> */}
    </div>
  )
}
