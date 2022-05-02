import React from 'react'
import { Comp3 } from './Comp3'
import './comp1.scss'


export const Comp2 = (props) => {

    const {setName } = props;
    console.log("estas son las props", props);
  
    return (
    <div className='comp2'>
          {props.children}
    </div>


        
  )
}


//simular una pagina web con una barra de navegación simulada con dos botones (login y register)
//cuando clickemos en login monte un componente que simule un formulario (por children) de logueo con un boton cerrar que cierre ese formulario
//lo mismo para el boton de registro
 