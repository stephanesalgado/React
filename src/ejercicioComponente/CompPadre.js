import React from "react";
import { CompFoot } from "./CompFoot";
import { CompNav } from "./CompNav";
import { Section } from "./Section";
import './compPadre.css'


export const CompPadre = () =>{

return(

    <div className="padre">
        <h1>I am Your Father</h1>
        <hr/>
        <CompNav/>
        <Section/>
        <CompFoot/>

    </div>


)


}