import React, { useState } from 'react'

export const useCounter = (valorInicial=0) => {
    const [counter, setCounter] = useState(valorInicial);

    const sumar = ()=>{
        setCounter (counter +1);
    }

    const restar = ()=>{
        setCounter (counter -1);
    }

    const reset = ()=>{
        setCounter (valorInicial);
    }


  return {
    counter, sumar, restar, reset
  }
}
