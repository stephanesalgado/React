import React, { useState } from "react";
import { Comp2 } from "./Comp2";

import "./comp1.scss";

export const Comp1 = () => {
    const [name, setName] = useState("Santi");
    const [show, setShow] = useState(true);
    
    return (
    <div className="comp1">
      <h1>Comp1</h1>
      <hr />
      <h2>Nombre: {name}</h2>
      <button onClick={()=>setShow(!show)}>cambiar form</button>
      <button onClick={()=>setShow(!show)}>cambiar form</button>
        
        {show?
        <Comp2 name={name}>
            <h1>Formulario Registro</h1>
            <input
            placeholder="hola"/>
            <input/>
            
        </Comp2>:
           <Comp2>
                <h1>Formulario logueo</h1>
                 <input
                 placeholder="adios"/>
                 <input/>
            </Comp2>}
    
    </div>
    );
    };
































      {/* <Comp2 user={user}>
        
          <h2>Registro de datos de usuario</h2>
          <hr />
          <input placeholder="nombre" />
          <button>Start</button>
        
        <p>hola que tal</p>
      </Comp2>
 */}

