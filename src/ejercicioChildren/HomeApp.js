import React, { useState } from 'react'
import { Form } from './Form'
import './homeApp.scss'

export const HomeApp = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [user, setUser] = useState("");
    const [correo, setCorreo] = useState("")
    
    const handleChange=(e)=>{
      setUser(e.target.value);
    }

    const handleChange2=(e)=>{
      setCorreo(e.target.value);
    }

  return (
    <div className='home'>
        <h1>Home</h1>
        <h2>Nombre: {user}</h2>
        <h2>Correo: {correo}</h2>
        <hr/>
        <div className='botones'>
        <button onClick={()=>setShow(!show)}>Login</button>
        <button onClick={()=>setShow2(!show2)}>Registrar</button>
        <br/>
        <br/>
        </div>

        {show?
        <Form>
            <h2>Formulario Login</h2>
            <input
            placeholder="Usuario"
            type="text"
            value={user}
            onChange={handleChange}
            />
            <br/>
            <input
            placeholder='Contraseña'
            type="password"
            />
            <br/>
            <button onClick={()=>setShow(!show)}>Cerrar</button>
            <br/>
        </Form>:null}

        {show2?
         <Form>
            <h2>Formulario Registro</h2>
            <input
             placeholder="Usuario"
             type="text"
            />
            <br/>
            <input
            placeholder="Correo"
            type="email"
            value={correo}
            onChange={handleChange2}/>
            <br/>
            <input
            placeholder="Contraseña"
            type="password"/>
            <br/>
            <button onClick={()=>setShow2(!show2)}>Cerrar</button>
            <br/>
         </Form>:null}

        

    </div>
  )
}
