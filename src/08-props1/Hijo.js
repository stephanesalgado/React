import React from 'react'
import './hijo.scss'

export const Hijo = ({number,cars,user, pulsar}) => {

    // console.log(props);
    // console.log(props.number);
    // console.log(props.cars);
    // console.log(props.user);

    // const {number, cars, user} = props;

    console.log(number, cars, user);

  return (
    <div className='conthijo'>
        <h1>Hijo</h1>
        <hr/>
        <p>{number}</p>
        <p>El array de coches</p>
        <ul>
            {cars.map((elem,index)=>{
                return(
                <li key={index}>{elem}</li>
                )
            })}
        </ul>
        <hr/>
        <h3>Usuario:</h3>
        <p>Nombre Usuario: {user.name}</p>
        <p>Email Usuario: {user.email}</p>
        <h3>Función pulsar</h3>
        <hr/>
        <button onClick={pulsar}>Pulsar</button>
    </div>
  )
}
