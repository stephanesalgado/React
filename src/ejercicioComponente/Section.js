import React, {useState} from "react";
import './compSection.css';

export const Section = () => {

    const [number, setNumber] = useState(1);
    const [text, setText] = useState("hola");



return(

    <div className="calculadora">
    <h1> Calculadora</h1>
    <hr/>
    <h2>Contador: {number} </h2>

    <button onClick={()=>setNumber(number*2)}>X</button>
    <button onClick={()=>setNumber(1)}>Reset</button>
    <button onClick={()=>setNumber(number/2)}>/</button>

    <h2>Saludo: {text} </h2>
    <button onClick={()=>setText("Hola")}>Hola</button>
    <button onClick={()=>setText("Sayonara")}>Adiós</button>
    
    </div>




)

}