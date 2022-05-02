import React, { useState } from 'react'
import { useCounter } from '../Hooks/useCounter'

export const CustomHookApp = () => {

    // const [counter, setCounter] = useState(0);

    // const sumar = ()=>{
    //     setCounter (counter +1);
    // }

    // const restar = ()=>{
    //     setCounter (counter -1);
    // }

    // const reset = ()=>{
    //     setCounter (0);
    // }

  const {counter, sumar, restar, reset } = useCounter();

  const counter1 = useCounter();

  const counter2 = useCounter(10);


  return (
    <div>
        <h1>CustomHookApp</h1>
        <hr/>
        <h2>Contador:{counter}</h2>
        <button onClick={restar}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={sumar}>+1</button>

        <hr/>
        <h2>Contador 1:{counter1.counter}</h2>
        <button onClick={counter1.restar}>-1</button>
        <button onClick={counter1.reset}>reset</button>
        <button onClick={counter1.sumar}>+1</button>

        <hr/>
        <h2>Contador 2:{counter2.counter}</h2>
        <button onClick={counter2.restar}>-1</button>
        <button onClick={counter2.reset}>reset</button>
        <button onClick={counter2.sumar}>+1</button>

        
    </div>
  )
}
