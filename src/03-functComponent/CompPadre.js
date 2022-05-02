import React from "react";
import { CompHijo } from "./CompHijo";

import './compPadre.css'

export const CompPadre = () =>{

 const centro = 'SocraTech';

    return(
        <div className="contpadre">
            <h1>primer funct comp</h1>
            <hr/>
             <h2>Centro: {centro}</h2>
      
            {/* <img src='/assets/guitarimg.jpg' /> */}
             <CompHijo /> 
          
        </div>
    )

}