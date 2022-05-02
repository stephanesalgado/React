import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const FormCars = () => {

    const [car, setCar] = useState({
        marca:"",
        modelo:"",
        color:""


    })

    const handleChange = (e)=>{
        setCar({...car,[name]:value})
    }

    const handleSumit = (e)=>{

    }

  return (
    <div>
        <h1>FormCars</h1>
        <hr/>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter marca" 
            autocomplet="off"
            name="marca"//propiedad del input
            value={car.name}
            onChange={handleChange}
            />
            <Form.Label>Modelo</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter modelo" 
            autocomplet="off"
            name="modelo"//propiedad del input
            value={car.name}
            onChange={handleChange}
            />

            <Form.Label>Color</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter email" 
            autocomplet="off"
            name="color"//propiedad del input
            value={car.email}
            onChange={handleChange}
            />               

        </Form.Group>

        
        <Button variant="primary"
                type="submit"
                onClick={handleSumit} >
            Submit
        </Button>
        </Form>

    </div>
  )
}
